import { render } from '@testing-library/react';

import Avatar from '../Avatar';

describe('Avatar component', () => {
    it('test Avatar', () => {
        const { getByTestId } = render(<Avatar />);
        const avatar = getByTestId('avatar');
        expect(avatar).toBeInTheDocument();
    });
});
