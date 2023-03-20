// arquivos jsx sâo classes ou funçôes que retornam componentes jsx
// css modules --> npm i babel-plugin-react-css-modules
import style from './PostCard.module.scss'

const PostCard = (props) => {
  const { post, index } = { ...props };

  return (
    <div key={index} className={style.post}>
      <img
        className={style["post-image"]}
        src={post.photo?.src?.portrait}
        alt={post.photo?.title}
      />
      <h1 className={style["post-title"]}>{post.title}</h1>
      <p className={style["post-text"]}>{post.body}</p>
    </div>
  );
};
