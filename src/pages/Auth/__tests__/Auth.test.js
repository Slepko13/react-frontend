import { render } from '@testing-library/react';

import Auth from '../Auth';

describe('Given Auth component', () => {
    const props = {
        children: 'Test children',
    };
    it('test with children', () => {
        const { debug, getByTestId } = render(<Auth {...props} />);
        const content = getByTestId('auth-component');
        expect(content).toHaveTextContent('Test children');
    });
});
