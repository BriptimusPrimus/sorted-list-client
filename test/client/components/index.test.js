import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRedux } from '../utils/renderWrappers';
import App from '../../../client/components/index';

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
});