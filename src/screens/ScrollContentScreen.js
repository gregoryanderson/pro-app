import React, { useState, useEffect, useRef } from "react";

const ScrollContentScreen = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    const triggerBottom = (window.innerHeight / 5) * 4;
    console.log(boxes);
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }, [scrollPosition]);

  return (
    <div className="scroll-content-body">
      <h1>Scroll to see more!</h1>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
    </div>
  );
};

export default ScrollContentScreen;
