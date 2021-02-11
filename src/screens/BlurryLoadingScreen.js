import React, { useState, useEffect } from "react";

const BlurryLoadingScreen = () => {
  let [load, setLoad] = useState(0);
  let [blur, setBlur] = useState(0);


  function useInterval(callback, delay) {
    const intervalId = React.useRef(null);
    const savedCallback = React.useRef(callback);
    React.useEffect(() => {
      savedCallback.current = callback;
    });
    React.useEffect(() => {
      const tick = () => savedCallback.current();
      if (typeof delay === "number") {
        intervalId.current = window.setInterval(tick, delay);
        return () => window.clearInterval(intervalId.current);
      }
    }, [delay]);
    return intervalId.current;
  }

  useInterval(() => {
    setLoad(load++); 
  }, 30);

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  return (
    <div className="blurry-loading-body">
      <section className="bg" style={{ opacity: scale(load, 0, 100, 0, 1) }}></section>
      <div className="text" style={{ opacity: scale(load, 0, 100, 1, 0) }}>
        {load < 99 ? load : 100}%
      </div>
    </div>
  );
};

export default BlurryLoadingScreen;
