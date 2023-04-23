// arquivos jsx sâo classes ou funçôes que retornam componentes jsx
// css modules --> npm i babel-plugin-react-css-modules
import { useState } from "react";
import style from "./PostCard.module.scss";
import P from "prop-types";

export const PostCard = ({ post }) => {
  const [imageNotLoaded, setImageNotLoaded] = useState(false);

  return (
    <div className={style.post} data-testid="loaded-post">
      <img
        className={`${style["post-image"]} ${
          imageNotLoaded ? style["error-image"] : ""
        }`}
        src={post.photo?.src?.portrait}
        alt={post.photo?.title}
        onError={() => {
          setImageNotLoaded(true);
        }}
      />
      {imageNotLoaded ? (
        <div
          className={`${style["post-image"]} ${style["image-error-div"]}`}
          data-testid="div-error-image"
        >
          ;(
        </div>
      ) : (
        ""
      )}
      <h2 className={style["post-title"]}>{post.title}</h2>
      <p className={style["post-text"]}>{post.body}</p>
    </div>
  );
};

PostCard.propTypes = {
  post: P.shape({
    title: P.string,
    body: P.string,
    id: P.number,
    photo: P.shape({
      title: P.string,
      src: P.shape({
        portrait: P.string,
      }),
    }),
  }).isRequired,
};
