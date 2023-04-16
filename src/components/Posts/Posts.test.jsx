import { render, screen } from "@testing-library/react"
import { Posts } from "."
import { mockArrayPosts } from "../../mocks"
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';


const posts = mockArrayPosts;
describe("<Posts />", () => {
  it("should render 8 posts when it's passed an array with 8 posts", () => {
    render(<Posts posts={posts} />);
    const renderedPosts = screen.getAllByTestId("loaded-post");

    expect(renderedPosts.length).toBe(8);
  });
  it("should return text 'No posts... ;(' when get no data", () => {
    const {container} = render(<Posts posts={[]} />);
    const sadFaceTest = container.getElementsByClassName("no-posts").item(0);

    expect(sadFaceTest).toBeInTheDocument();
  });
});
