import React, { useState } from "react";

const ProgressBarScreen = () => {
  const [step, setStep] = useState(1);
  const [width, setWidth] = useState("0%");

  const handleClick = (word, step) => {
    if (word === "prev") {
      setStep(step - 1);
    }
    if (word === "next") {
      setStep(step + 1);
    }

    if (step === 1 && word === "next") {
      setWidth("33%");
    }
    if (step === 2 && word === "next") {
      setWidth("66%");
    }
    if (step === 3 && word === "next") {
      setWidth("99%");
    }
    if (step === 2 && word === "prev") {
      setWidth("0%");
    }
    if (step === 3 && word === "prev") {
      setWidth("33%");
    }
    if (step === 4 && word === "prev") {
      setWidth("66%");
    }
  };

  return (
    <div className="progress-bar-body">
      <div className="overall-container">
        <div className="progress-bar-container">
          <div className="progress" style={{ width: width }}></div>
          <div className={step >= 1 ? "circle active" : "circle"}>1</div>
          <div className={step >= 2 ? "circle active" : "circle"}>2</div>
          <div className={step >= 3 ? "circle active" : "circle"}>3</div>
          <div className={step >= 4 ? "circle active" : "circle"}>4</div>
        </div>
        <button
          className="prev"
          disabled={step === 1}
          onClick={() => handleClick("prev", step)}
        >
          Previous
        </button>
        <button
          className="prev"
          disabled={step === 4}
          onClick={() => handleClick("next", step)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressBarScreen;
