import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CustomerDetailsRouteHandler from '../../../src/client/containers/CustomerDetailsRouteHandler';
import * as mockService from '../../../src/client/services/data';
import { customerDetails } from '../utils/customerDataMocks';

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({
      customerId: 42
    }),
    Link: ({ children }) => {
      return children;
    }
  };
});
jest.mock('../../../src/client/services/data');

const getInitialState = () => ({
  customerId: 42,
  data: {
    customerDetails
  }
});

describe('CustomerDetailsRouteHandler tests', () => {
  const initialState = getInitialState();

  beforeEach(() => {
    jest.clearAllMocks();
    mockService.getCustomerDetails.mockImplementation(async () => {
      return initialState.data;
    });
  });

  afterEach(cleanup);

  test('Renders', () => {
    const { container } = render(
      <CustomerDetailsRouteHandler initialState={initialState} />
    );
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Customer not found', () => {
    const localState = {
      customerId: 999,
      data: {
        notFound: true
      }
    };
    const { queryByText } = render(
      <CustomerDetailsRouteHandler initialState={localState} />
    );
    expect(queryByText('Data not found')).not.toBeNull();
  });

  test('Static load data', async () => {
    const result = await CustomerDetailsRouteHandler.loadData();
    expect(result).toEqual({
      data: initialState.data
    });
  });
});
