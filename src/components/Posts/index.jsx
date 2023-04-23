import { PostCard } from "../PostCard";
import style from "./Posts.module.scss";
import P from "prop-types";

export const Posts = ({ posts }) => {
  return (
    <div className={style.posts}>
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
      <div className="no-posts">
        {!posts || posts.length > 0 ? undefined : "No posts... ;("}
      </div>
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
