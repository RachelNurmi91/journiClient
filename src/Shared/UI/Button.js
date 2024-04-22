import { useRef } from "react";
import { Link } from "react-router-dom";

function Button({ destination = null, label, onClick = null }) {
  const btnRef = useRef(null);

  return (
    <>
      <button
        ref={btnRef}
        className="btn-style mt-3"
        type="button"
        onClick={onClick}
        class="w-100"
      >
        <Link to={destination} className="btn-link">
          {label}
        </Link>
      </button>
    </>
  );
}

export default Button;
