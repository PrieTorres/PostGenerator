import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import { PostCard } from ".";
import { loadPosts } from "../../utils/load-posts";
import { mockArrayPosts } from "../../mocks";

const mock = mockArrayPosts[0];

describe("<PostCard />", () => {
  describe("render PostCard element", () => {
    test("post received from backend", async () => {
      const posts = (await loadPosts(1, 1)).posts;
      const postObj = { ...posts[0] };

      render(<PostCard post={postObj} />);
      const post = screen.getByTestId("loaded-post");
      const img = post.querySelector("img");

      expect(post).toBeInTheDocument();
      expect(img).toHaveAttribute("src", postObj.photo.src.portrait);
    });
    // test("debug PostCard", () => {
    //   const {debug} = render(<PostCard post={mock} />);

    //   debug(); // vai retornar um snapshot do componente, é util para ver se em alguma alteração o componete não acabou sendo mudado não intencionalmente
    // });
    test("image didn't error", () => {
      render(<PostCard post={mock} />);
      const post = screen.getByTestId("loaded-post");
      const img = post.querySelector("img");
      const classNamesImg = img.classList;

      expect(classNamesImg.contains("error-image")).toBe(false);
    });
    test("should render another image when image error ", () => {
      render(<PostCard post={mock} />);
      const post = screen.getByTestId("loaded-post");
      const img = post.querySelector("img");

      fireEvent.error(img);
      const classNamesImg = img.classList;
      const errorImageTratative = screen.getByTestId("div-error-image");

      expect(classNamesImg.contains("error-image")).toBe(true);
      expect(errorImageTratative).toBeInTheDocument();
    })
  });
});
