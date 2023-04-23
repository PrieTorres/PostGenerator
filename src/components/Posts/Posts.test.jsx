import { render, screen } from "@testing-library/react"
import { Posts } from "."
import { mockArrayPosts } from "../../mocks"
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';


const posts = mockArrayPosts;
describe("<Posts />", () => {
  it("should render 8 posts when it's passed an array with 8 posts", () => {
    render(<Posts posts={posts} />);
    const renderedPostsByTitle = screen.getAllByRole("heading", {name: /Lorem Ipsum sit amet/i});
    const renderedPostsByImg = screen.getAllByRole("img", {name: /doggo/i});
    const renderedPostsByBody = screen.getAllByText(/Se res de kels evamos mas durn kopa qiue soia postroer di lammet/i);

    expect(renderedPostsByTitle.length).toBe(8);
    expect(renderedPostsByImg).toHaveLength(8);
    expect(renderedPostsByBody).toHaveLength(8);
  });
  it("should return text 'No posts... ;(' when get no data", () => {
    // const {container} = 
    render(<Posts posts={[]} />);
    // const sadFaceTest = container.getElementsByClassName("no-posts").item(0);
    const sadFaceTest = screen.getByText("No posts... ;(");

    expect(sadFaceTest).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const {container} = render(<Posts posts={mockArrayPosts}/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
