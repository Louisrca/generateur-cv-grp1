import { useState } from "react";

export const InputTextArea = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></textarea>
    </>
  );
};
