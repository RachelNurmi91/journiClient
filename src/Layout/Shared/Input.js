import { useRef } from "react";

function Input({ name, onChange, placeholder, label }) {
  const inputRef = useRef(null);

  return (
    <div className="form-floating mb-3 d-block">
      <input
        ref={inputRef}
        className="form-control"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <label for={name}>{label}</label>
    </div>
  );
}

export default Input;
