import style from "./Button.module.scss";

export const Button = ({label, onClick, extraStyles={}, disabled=false}) => {

  return (
    <div className={style['button-container']} onClick={onClick} style={{...extraStyles}}>
      <button disabled={disabled} className={style.button}>{label}</button>
    </div>
  )
}