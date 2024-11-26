import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./InputText.module.css";
import TextField from "@mui/material/TextField";

export const InputText = ({ label, inputName, type = "text" }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className={styles.inputTextContainer}>
        <TextField
          id="outlined-basic"
          label={label}
          name={inputName}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type={type}
          variant="outlined"
          size="small"
        />
      </div>
    </>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string,
};
