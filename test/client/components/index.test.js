import React from 'react';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import { renderWithRedux } from '../utils/renderWrappers';
import App from '../../../client/components/index';
import * as mockService from '../../../client/services/data';
import { 
    sortedByName,
    sortedBySurname,
    sortedByCodeNumberAsc,
    sortedByRFC,
    sortedByStatus
} from '../utils/dataMocks';

jest.mock('../../../client/services/data');

describe('App tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(cleanup);

    test('Renders', () => {
        const { container } = renderWithRedux(<App />);
        expect(container.firstChild).not.toBeNull();
        expect(container.firstChild).toMatchSnapshot();
    });

    test('Sorts column', async () => {
        mockService.getEmployees.mockImplementationOnce(async () => {
            return sortedByName
        });

        const { getByText, queryByText } = renderWithRedux(<App />);
        expect(queryByText('ELOINA')).not.toBeNull();

        const nameHeader = getByText('Name');
        fireEvent.click(nameHeader);

        // Wait for AJAX call to be complete
        await waitFor(() => {});

        expect(queryByText('ELOINA')).toBeNull();
        expect(queryByText('ABDI')).not.toBeNull();
    });
    
    test('Sort column service call fails', async () => {
        mockService.getEmployees.mockImplementationOnce(async () => {
            return Promise.reject(new Error('boom'));
        });

        const { getByText, queryByText } = renderWithRedux(<App />);
        expect(queryByText('ELOINA')).not.toBeNull();

        const nameHeader = getByText('Name');
        fireEvent.click(nameHeader);

        // Wait for AJAX call to be complete
        await waitFor(() => {});

        expect(queryByText('ELOINA')).not.toBeNull();
        expect(queryByText('ABDI')).toBeNull();     
    });

    test('Sorts by surname', async () => {
        mockService.getEmployees.mockImplementationOnce(async () => {
            return sortedBySurname
        });

        const { getByText, queryByText } = renderWithRedux(<App />);
        expect(queryByText('SALINAS-VAZQUEZ')).not.toBeNull();

        const nameHeader = getByText('Surname');
        fireEvent.click(nameHeader);

        // Wait for AJAX call to be complete
        await waitFor(() => {});

        expect(queryByText('SALINAS-VAZQUEZ')).toBeNull();
        expect(queryByText('ABAD-MARTINEZ')).not.toBeNull();
    });

    test('Sorts by codeNumber', async () => {
        mockService.getEmployees.mockImplementationOnce(async () => {
            return sortedByCodeNumberAsc
        });

        const { getByText, queryByText } = renderWithRedux(<App />);
        expect(queryByText('10001')).not.toBeNull();

        const nameHeader = getByText('Code Number');
        fireEvent.click(nameHeader);

        // Wait for AJAX call to be complete
        await waitFor(() => {});

        expect(queryByText('10001')).toBeNull();
        expect(queryByText('42850')).not.toBeNull();       
    });
    
    test('Sorts by RFC', async () => {
        mockService.getEmployees.mockImplementationOnce(async () => {
            return sortedByRFC
        });

        const { getByText, queryByText } = renderWithRedux(<App />);
        expect(queryByText('LUIS RAMON')).not.toBeNull();

        const nameHeader = getByText('RFC');
        fireEvent.click(nameHeader);

        // Wait for AJAX call to be complete
        await waitFor(() => {});

        expect(queryByText('LUIS RAMON')).toBeNull();
        expect(queryByText('ALEJANDRA')).not.toBeNull();
    }); 
    
    test('Sorts by Status', async () => {
        mockService.getEmployees.mockImplementationOnce(async () => {
            return sortedByStatus
        });

        const { getByText, queryByText } = renderWithRedux(<App />);
        expect(queryByText('Candidate')).not.toBeNull();

        const nameHeader = getByText('Status');
        fireEvent.click(nameHeader);

        // Wait for AJAX call to be complete
        await waitFor(() => {});

        expect(queryByText('Candidate')).toBeNull();
        expect(queryByText('On leave')).not.toBeNull();
    });     
});