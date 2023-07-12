import { useContext, useEffect } from "react";
import { PostCard } from "../PostCard";
import style from "./Posts.module.scss";
import P from "prop-types";
import { PostsContext } from "../../contexts/PostsProvider/context";
import { loadPosts } from "../../contexts/PostsProvider/actions";

export const Posts = ({ _posts }) => {
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;
  const { posts } = postsState;

  useEffect(() => {
    loadPosts(postsDispatch, 8, 10);
  }, [postsDispatch])

  console.log(postsContext);

  return (
    <div className={style.posts}>
      {postsState.posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
      <div className="no-posts">
        {!posts || posts.length > 0 && !postsState.fail ? undefined : `No posts... ;(`}
      </div>
      {postsState.fail ?
        <div className="error-message">Não foi possível carregar os posts ;(</div>
        : undefined
      }
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  // posts: P.array,
  posts: P.arrayOf(
    P.shape({
      title: P.string,
      body: P.string,
      id: P.number,
      photo: P.shape({
        title: P.string,
        src: P.shape({
          portrait: P.string,
        }),
      }),
    })
  ),
};
