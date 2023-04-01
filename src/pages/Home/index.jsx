import { useEffect, useState } from "react";
import style from "./Home.module.scss";
import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextFieldSearch } from "../../components/TextFieldSearch";

export const Home = ({}) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [postQuantity, setPostQuantity] = useState(0);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [correspondedPosts, setCorrespondedPosts] = useState([]);
  const noData = page * postsPerPage >= postQuantity;

  useEffect(() => {
    handleLoadPosts();
  }, []);

  useEffect(() => {
    handleLoadPosts();
    scrollToTop();
  }, [page])

  const handleLoadPosts = async () => {
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
    <div className={style.container}>
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