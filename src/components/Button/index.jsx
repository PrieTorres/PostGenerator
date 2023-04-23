import style from "./Button.module.scss";
import P from "prop-types";

export const Button = ({
  label,
  onClick,
  extraStyles = {},
  disabled = false,
}) => {
  return (
    <div
      className={style["button-container"]}
      onClick={onClick}
      style={{ ...extraStyles }}
    >
      <button disabled={disabled} className={style.button}>
        {label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  disabled: false,
  extraStyles: {},
};

Button.propTypes = {
  label: P.string.isRequired,
  onClick: P.func.isRequired,
  extraStyles: P.object,
  disabled: P.bool,
};
