import React, { useState, useRef } from "react";

const HiddenSearchScreen = () => {
  const [active, setActive] = useState(false);


  const useFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };

    return [htmlElRef, setFocus];
  };

  const handleClick = () => {
    setActive(!active);
    setInputFocus(!inputRef);

  };

  const [inputRef, setInputFocus] = useFocus();

  return (
    <div className="search-container-body">
      <div className={active ? "search-container active" : "search-container"}>
        <input
          className="input"
          type="text"
          placeholder="Search..."
          ref={inputRef}
        />
        <button className="btn">
          <i className="fas fa-search" onClick={() => handleClick()}></i>
        </button>
      </div>
    </div>
  );
};

export default HiddenSearchScreen;
