import style from './TextFieldSearch.module.scss';

export const TextFieldSearch = ({inputProps, onChange, value}) => {

  return (
    <div className={style.container}>
      <input className={style.input} placeholder="burcar..." type="search" value={value} {...inputProps} onChange={onChange}/>
    </div>
  )
}
