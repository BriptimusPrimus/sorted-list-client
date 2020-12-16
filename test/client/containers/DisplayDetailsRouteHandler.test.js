import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DisplayDetailsRouteHandler from '../../../src/client/containers/DisplayDetailsRouteHandler';
import * as mockService from '../../../src/client/services/data';
import { customerDetails } from '../utils/customerDataMocks';

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({}),
    useLocation: () => ({
      search: () => '?id=42'
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

describe('DisplayDetailsRouteHandler tests', () => {
  const initialState = getInitialState();

  beforeEach(() => {
    jest.clearAllMocks();
    mockService.getDisplayDetails.mockImplementation(async () => {
      return initialState.data;
    });
  });

  afterEach(cleanup);

  test('Renders', () => {
    const { container } = render(
      <DisplayDetailsRouteHandler initialState={initialState} />
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
      <DisplayDetailsRouteHandler initialState={localState} />
    );
    expect(queryByText('Data not found')).not.toBeNull();
  });

  test('Static load data', async () => {
    const result = await DisplayDetailsRouteHandler.loadData();
    expect(result).toEqual({
      data: initialState.data
    });
  });
});
