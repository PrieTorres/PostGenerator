import { PostCard } from "../PostCard";
import style from "./Posts.module.scss"

export const Posts = ({ posts }) => {

  return (
    <div className={style.posts}>
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  );
};
