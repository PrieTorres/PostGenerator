import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Home from ".";
import userEvent from "@testing-library/user-event";
import { mockArrayPosts } from "../../mocks";


describe('<Home />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  })
  afterAll(() => {
    jest.clearAllMocks();
  })

  window.scrollTo = jest.fn();
  test("render home page", async () => {
    const { container } = await render(<Home />);
    const page = screen.getByTestId("home-page");

    await waitFor(() => {
      expect(page).toBeInTheDocument();
      expect(container.firstChild).toMatchSnapshot(); // vai criar a pasta snapshot ;))
    })
  });

  test("handle search", async () => {
    const { container } = render(<Home testPosts={[...mockArrayPosts]} />);
    const input = container.querySelector("input");
    const posts = await screen.findAllByTestId("loaded-post");

    userEvent.type(input, "quit");

    const matchedPosts = await screen.findAllByTestId("loaded-post");
    const filteredPosts = posts.filter(post => post.innerHTML?.includes("quit"));

    expect(input).toHaveValue('quit');
    expect(matchedPosts.length).toBe(filteredPosts.length);
  });


})
