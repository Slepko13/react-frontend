import { render } from '@testing-library/react';

import { Button } from '../Button';

describe('Button component', () => {
    it('custom', () => {
        const { getByRole } = render(<Button />);
        const btn = getByRole('button');
        expect(btn).toBeInTheDocument();
    });
});
