import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import ListRouteHandler from '../../../src/client/containers/ListRouteHandler';
import * as mockService from '../../../src/client/services/data';
import {
  getInitialState,
  sortedByName,
  sortedBySurname,
  sortedByCodeNumberAsc,
  sortedByRFC,
  sortedByStatus
} from '../utils/dataMocks';

jest.mock('../../../src/client/services/data');

describe('ListRouteHandler tests', () => {
  const initialState = getInitialState();

  beforeEach(() => {
    jest.clearAllMocks();
    mockService.getEmployees.mockImplementation(async () => {
      return initialState.data;
    });
  });

  afterEach(cleanup);

  test('Renders', () => {
    const { container } = render(
      <ListRouteHandler initialState={initialState} />
    );
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Sorts column', async () => {
    mockService.getEmployees.mockImplementation(async () => {
      return sortedByName;
    });

    const { getByText, queryByText } = render(
      <ListRouteHandler initialState={initialState} />
    );
    expect(queryByText('ELOINA')).not.toBeNull();

    const nameHeader = getByText('Name');
    fireEvent.click(nameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('ELOINA')).toBeNull();
    expect(queryByText('ABDI')).not.toBeNull();
  });

  test('Sort column service call fails', async () => {
    mockService.getEmployees.mockImplementation(async () => {
      return Promise.reject(new Error('boom'));
    });

    const { getByText, queryByText } = render(
      <ListRouteHandler initialState={initialState} />
    );
    expect(queryByText('ELOINA')).not.toBeNull();

    const nameHeader = getByText('Name');
    fireEvent.click(nameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('ELOINA')).not.toBeNull();
    expect(queryByText('ABDI')).toBeNull();
  });

  test('Sorts by surname', async () => {
    mockService.getEmployees.mockImplementation(async () => {
      return sortedBySurname;
    });

    const { getByText, queryByText } = render(
      <ListRouteHandler initialState={initialState} />
    );
    expect(queryByText('SALINAS VAZQUEZ')).not.toBeNull();

    const nameHeader = getByText('Surname');
    fireEvent.click(nameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('SALINAS VAZQUEZ')).toBeNull();
    expect(queryByText('ABAD MARTINEZ')).not.toBeNull();
  });

  test('Sorts by codeNumber', async () => {
    mockService.getEmployees.mockImplementation(async () => {
      return sortedByCodeNumberAsc;
    });

    const { getByText, queryByText } = render(
      <ListRouteHandler initialState={initialState} />
    );
    expect(queryByText('10001')).not.toBeNull();

    const nameHeader = getByText('Code Number');
    fireEvent.click(nameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('10001')).toBeNull();
    expect(queryByText('42850')).not.toBeNull();
  });

  test('Sorts by RFC', async () => {
    mockService.getEmployees.mockImplementation(async () => {
      return sortedByRFC;
    });

    const { getByText, queryByText } = render(
      <ListRouteHandler initialState={initialState} />
    );
    expect(queryByText('LUIS RAMON')).not.toBeNull();

    const nameHeader = getByText('RFC');
    fireEvent.click(nameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('LUIS RAMON')).toBeNull();
    expect(queryByText('ALEJANDRA')).not.toBeNull();
  });

  test('Sorts by Status', async () => {
    mockService.getEmployees.mockImplementation(async () => {
      return sortedByStatus;
    });

    const { getByText, queryByText } = render(
      <ListRouteHandler initialState={initialState} />
    );
    expect(queryByText('Candidate')).not.toBeNull();

    const nameHeader = getByText('Status');
    fireEvent.click(nameHeader);

    // Wait for AJAX call to be complete
    await waitFor(() => {});

    expect(queryByText('Candidate')).toBeNull();
    expect(queryByText('On leave')).not.toBeNull();
  });

  test('Static load data', async () => {
    const result = await ListRouteHandler.loadData();
    expect(result).toEqual({
      data: initialState.data
    });
  });

  test('Renders empty data by default', () => {
    const { container, queryByText } = render(<ListRouteHandler />);
    expect(container.firstChild).not.toBeNull();
    expect(queryByText('ELOINA')).toBeNull();
  });
});
