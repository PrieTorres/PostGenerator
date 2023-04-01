import { Component } from "react";
import style from "./Home.module.scss";
import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextFieldSearch } from "../../components/TextFieldSearch";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 8,
    postQuantity: 0,
    searchActive: false,
    searchValue: "",
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts(page, postsPerPage);

    let updatedPostList = [...this.state.posts];
    updatedPostList.unshift(...postsAndPhotos.posts);

    this.setState({
      postQuantity: postsAndPhotos.postQuantity,
      posts: updatedPostList,
    });
  };

  loadMorePosts = () => {
    const { page } = this.state;

    let nextPage = page + 1;

    this.setState({ page: nextPage }, () => {
      this.loadPosts();
      this.scrollToTop();
    });
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  handleSearch = (e) => {
    const { posts } = this.state;
    const { value } = e.target;
    let responseSearch = [];

    //(post.body && post.body.search(new RegExp(`[${value}]`, "g")) !== -1) ||
    //(post.title && post.title.search(new RegExp(`[${value}]`, "g")) !== -1)

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

    this.setState({
      searchValue: value,
      correspondedPosts: responseSearch,
      searchActive: true,
    });
  };

  render() {
    const { posts, page, postsPerPage, searchActive } = this.state;
    const noData = page * postsPerPage >= this.state.postQuantity;

    return (
      <div className={style.container}>
        <TextFieldSearch
          value={this.state.searchValue}
          onChange={this.handleSearch}
        />
        <Posts posts={searchActive ? this.state.correspondedPosts : posts} />
        <Button
          disabled={noData}
          label={"carregar mais posts..."}
          onClick={this.loadMorePosts}
          extraStyles={{ marginTop: "10px" }}
        />
      </div>
    );
  }
}

export default Home;
