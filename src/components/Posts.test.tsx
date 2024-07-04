import { render, screen } from '@testing-library/react';
import { Posts } from './Posts';
import { useQuery as useQueryMock } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
    ...jest.requireActual("@tanstack/react-query"),
    useQueryClient: () => ({
        prefetchQuery: jest.fn()
    }),
    useQuery: jest.fn(),
    useMutation: jest.fn(),
}));

describe('When posts are loading from server', () => {
    test('should display loading ui', () => {       
        (useQueryMock as jest.Mock).mockReturnValueOnce({
            data: undefined,
            isLoading: true,
            error: undefined,
            isError: false
        });
        render(<Posts />);

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });
});

describe('When posts failed to load from server', () => {
    test('should display error ui', () => {
        (useQueryMock as jest.Mock).mockReturnValueOnce({
            data: undefined,
            isLoading: false,
            error: new Error('error'),
            isError: true
        });
        render(<Posts />);

        expect(screen.getByText(/Error/i)).toBeInTheDocument();
    });
});

describe('When posts are loaded', () => {
    test('should display post title', () => {
        const dataMock = [
            {userId: 1, id: 1, title: 'title-1', body: 'body-1'},
            {userId: 2, id: 2, title: 'title-2', body: 'body-2'},
        ];
        (useQueryMock as jest.Mock).mockReturnValueOnce({
            data: dataMock,
            isLoading: false,
            error: undefined,
            isError: false
        });
        render(<Posts />);

        dataMock.forEach((_, index) => {
            const listitem = screen.getAllByRole('listitem')[index];
            expect(listitem).toHaveTextContent(dataMock[index].title);
        });
    });
});

// describe('When user is in the first page', () => {
//     test('should disable Previous page button', () => {

//     });
// });

// describe('When user clicks title of post', () => {
//     test('should display selected post', () => {

//     });
// });

// describe('When user clicks Next page button', () => {
//     test('should move to next page', () => {

//     });
// });

// describe('When user clicks Previous page button', () => {
//     test('should move to previous page', () => {

//     });
// });

// describe('When user is in the last page', () => {
//     test('should disable Next page button', () => {

//     });
// });