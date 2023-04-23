import style from "./TextFieldSearch.module.scss";
import P from "prop-types";

export const TextFieldSearch = ({ inputProps, onChange, value }) => {
  return (
    <div className={style.container}>
      <input
        className={style.input}
        placeholder="burcar..."
        type="search"
        value={value}
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
};

TextFieldSearch.propTypes = {
  inputProps: P.object,
  onChange: P.func.isRequired,
  value: P.string,
};
