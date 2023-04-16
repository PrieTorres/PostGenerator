import { PostCard } from "../PostCard";
import style from "./Posts.module.scss"

export const Posts = ({ posts }) => {

  return (
    <div className={style.posts}>
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
      <div className="no-posts">
        {!posts || posts.length > 0 ? undefined :
          "No posts... ;("
        }
      </div>
    </div>
  );
};
