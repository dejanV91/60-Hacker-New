import React from "react";
import { useGlobalContext } from "./context";

const Buttons = ({ page, nbPages }) => {
  const { handlePage, isLoading } = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("desc")}>
        prev
      </button>
      <p>
        {page} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("incr")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
