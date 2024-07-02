import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock('./components/Posts', () => ({
  Posts: () => <div data-testid="posts-component">Posts</div>
}))

describe('App', () => {
  test("should display page title", () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument();
  });

  test("should render Posts component", () => {
    render(<App />);
    expect(screen.getByTestId('posts-component')).toBeInTheDocument();
  });
});
