import { useEffect, useState } from "react";
import style from "./Home.module.scss";
import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextFieldSearch } from "../../components/TextFieldSearch";
import P from "prop-types";


export const Home = ({ testPosts = [] }) => {
  // posts as parameter just for tests
  const [posts, setPosts] = useState([...testPosts]);
  const [page, setPage] = useState(1);
  const [postQuantity, setPostQuantity] = useState(0);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [correspondedPosts, setCorrespondedPosts] = useState([]);
  const postsPerPage = 8;
  const noData = page * postsPerPage >= postQuantity;

  useEffect(() => {
    if (testPosts.length <= 0) {
      handleLoadPosts();
    }
  }, []);

  useEffect(() => {
    if (testPosts.length <= 0) {
      handleLoadPosts();
    }
    scrollToTop();
  }, [page]);

  const handleLoadPosts = async () => {
    if (testPosts.length > 0) {
      return;
    }
    const postsAndPhotos = await loadPosts(page, postsPerPage);

    let updatedPostList = [...postsAndPhotos.posts, ...posts];

    if (postsAndPhotos.postQuantity > postQuantity) {
      setPostQuantity(postsAndPhotos.postQuantity);
    }
    setPosts(updatedPostList);
  };

  const loadMorePosts = () => {
    let nextPage = page + 1;

    setPage(nextPage);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    let responseSearch = [];

    posts.forEach((post, i) => {
      if (
        (post.body && post.body.includes(value)) ||
        (post.title && post.title.includes(value))
      ) {
        posts[i].inSearch = true;
      } else {
        posts[i].inSearch = false;
      }
    });

    responseSearch = posts.filter((post) => post.inSearch);

    setSearchValue(value);
    setCorrespondedPosts(responseSearch);
    setSearchActive(true);
  };

  return (
    <div className={style.container} data-testid="home-page">
      <TextFieldSearch value={searchValue} onChange={handleSearch} />
      <Posts posts={searchActive ? correspondedPosts : posts} />
      <Button
        disabled={noData}
        label={"carregar mais posts..."}
        onClick={loadMorePosts}
        extraStyles={{ marginTop: "10px" }}
      />
    </div>
  );
};

export default Home;

Home.defaultProps = {
  testPosts: []
}

Home.propTypes = {
  testPosts: P.array
}
