import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./InputText.module.css";

export const InputText = ({ label, placeholder, inputName, type = "text" }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className={styles.inputTextContainer}>
        <label htmlFor={inputName}>{label}</label>
        <input
          type={type}
          name={inputName}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

InputText.propsTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string,
};
