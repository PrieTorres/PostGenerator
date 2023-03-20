// arquivos jsx sâo classes ou funçôes que retornam componentes jsx
// css modules --> npm i babel-plugin-react-css-modules
import style from './PostCard.module.scss'

export const PostCard = ({ post }) => {

  return (
    <div className={style.post}>
      <img
        className={style["post-image"]}
        src={post.photo?.src?.portrait}
        alt={post.photo?.title}
      />
      <h2 className={style["post-title"]}>{post.title}</h2>
      <p className={style["post-text"]}>{post.body}</p>
    </div>
  );
};
