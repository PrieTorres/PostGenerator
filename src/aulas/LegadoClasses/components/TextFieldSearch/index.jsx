import style from './TextFieldSearch.module.scss';

export const TextFieldSearch = ({inputProps, onChange}) => {

  return (
    <div className={style.container}>
      <input className={style.input} placeholder="burcar..." type="search" {...inputProps} onChange={onChange}/>
    </div>
  )
}