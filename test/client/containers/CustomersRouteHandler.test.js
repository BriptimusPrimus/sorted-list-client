import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import CustomersRouteHandler from '../../../src/client/containers/CustomersRouteHandler';
import * as mockService from '../../../src/client/services/data';
import {
  getInitialState,
  sortedBySurname,
  sortedByIsActive,
  sortByCreateDate,
  sortedByEmailDesc
} from '../utils/customerDataMocks';

jest.mock('../../../src/client/services/data');

describe('CustomersRouteHandler tests', () => {
  const initialState = getInitialState();

  beforeEach(() => {
    jest.clearAllMocks();
    mockService.getCustomers.mockImplementation(async () => {
      return initialState.data;
    });
  });

  afterEach(cleanup);

  test('Renders', () => {
    const { container } = render(
      <CustomersRouteHandler initialState={initialState} />
    );
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Sorts by surname', async () => {
    mockService.getCustomers.mockImplementation(async () => {
      return sortedBySurname;
    });

    const { getByText, queryByText } = render(
      <CustomersRouteHandler initialState={initialState} />
    );
    expect(queryByText('SELBY')).not.toBeNull();

    const surnameHeader = getByText('Last Name');
    fireEvent.click(surnameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('SELBY')).toBeNull();
    expect(queryByText('ABNEY')).not.toBeNull();
  });

  test('Sort column service call fails', async () => {
    mockService.getCustomers.mockImplementation(async () => {
      return Promise.reject(new Error('boom'));
    });

    const { getByText, queryByText } = render(
      <CustomersRouteHandler initialState={initialState} />
    );
    expect(queryByText('SELBY')).not.toBeNull();

    const surnameHeader = getByText('Last Name');
    fireEvent.click(surnameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('SELBY')).not.toBeNull();
    expect(queryByText('ABNEY')).toBeNull();
  });

  test('Sorts by isActive', async () => {
    mockService.getCustomers.mockImplementation(async () => {
      return sortedByIsActive;
    });

    const { getByText, queryByText } = render(
      <CustomersRouteHandler initialState={initialState} />
    );
    expect(queryByText('AARON')).not.toBeNull();

    const surnameHeader = getByText('Active');
    fireEvent.click(surnameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('AARON')).toBeNull();
    expect(queryByText('SANDRA')).not.toBeNull();
  });

  test('Sorts by createDate', async () => {
    mockService.getCustomers.mockImplementation(async () => {
      return sortByCreateDate;
    });

    const { getByText, queryByText } = render(
      <CustomersRouteHandler initialState={initialState} />
    );
    expect(queryByText('AARON')).not.toBeNull();

    const surnameHeader = getByText('Joined on');
    fireEvent.click(surnameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('AARON')).toBeNull();
    expect(queryByText('MARY')).not.toBeNull();
  });

  test('Sorts by email', async () => {
    mockService.getCustomers.mockImplementation(async () => {
      return sortedByEmailDesc;
    });

    const { getByText, queryByText } = render(
      <CustomersRouteHandler initialState={initialState} />
    );
    expect(queryByText('AARON')).not.toBeNull();

    const surnameHeader = getByText('Email');
    fireEvent.click(surnameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('AARON')).toBeNull();
    expect(queryByText('ZACHARY')).not.toBeNull();
  });

  test('Sorts by firstName', async () => {
    const { getByText, queryByText } = render(
      <CustomersRouteHandler initialState={initialState} />
    );
    expect(queryByText('AARON')).not.toBeNull();

    const surnameHeader = getByText('First Name');
    fireEvent.click(surnameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    // Result is same as initial state
    expect(queryByText('AARON')).not.toBeNull();
  });

  test('Static load data', async () => {
    const result = await CustomersRouteHandler.loadData();
    expect(result).toEqual({
      data: initialState.data
    });
  });

  test('Renders empty data by default', () => {
    const { container, queryByText } = render(<CustomersRouteHandler />);
    expect(container.firstChild).not.toBeNull();
    expect(queryByText('AARON')).toBeNull();
  });
});
