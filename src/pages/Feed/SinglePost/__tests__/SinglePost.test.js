import { render } from '@testing-library/react';

import SinglePost from '../SinglePost';

jest.mock('../../../../components/Image/Image', () => {
    return jest.fn(({ imageUrl }) => <img src={imageUrl} alt="Mocked Image" />);
});
const mockPostData = {
    content: 'Test content',
    title: 'Test title',
    creator: {
        name: 'Test creator',
    },
    imageUrl: 'test/url',
    createdAt: new Date().toISOString(),
};
global.fetch = jest
    .fn()
    .mockResolvedValueOnce({
        json: () => Promise.resolve({ post: mockPostData }),
        status: 200,
    })
    .mockResolvedValueOnce({
        json: () => Promise.resolve({ post: mockPostData }),
        status: 401,
    });

describe('Given SinglePost component', () => {
    const props = {
        match: {
            params: {
                postId: 'testId',
            },
        },
        token: 'mockToken',
    };
    it('test with status 200', async () => {
        const { findByTestId } = render(<SinglePost {...props} />);
        const content = await findByTestId('single-post-content');
        expect(content).toHaveTextContent(mockPostData.content);
    });

    it('test with status 401', async () => {
        const { findByTestId } = render(<SinglePost {...props} />);
        const content = await findByTestId('single-post-content');
        expect(content).not.toHaveTextContent(mockPostData.content);
    });
});
