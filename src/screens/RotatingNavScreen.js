import React, { useState } from "react";

const RotatingNavScreen = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (action) => {
    console.log(action);
    if (action === "close") {
      setOpen(true);
    } else if (action === "open") {
      setOpen(false);
    }
  };

  console.log({ open });

  return (
    <div className="rotating-nav-body">
      <div
        className={
          open ? "rotating-nav-container show-nav" : "rotating-nav-container"
        }
      >
        <div className="circle-container">
          <div className="circle">
            <button id="close" onClick={(e) => handleClick("open")}>
              <i className="fas fa-times"></i>
            </button>
            <button id="open" onClick={(e) => handleClick("close")}>
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
        <div className="content">
          <h1>Yahtzee Moomtaz</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
          <h3>What A Cutie!</h3>
          <img
            src="https://images.unsplash.com/photo-1571562110290-08784605c218?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHB1cHB5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="puppers"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At in
            tellus integer feugiat scelerisque varius morbi. A scelerisque purus
            semper eget. Egestas sed tempus urna et pharetra pharetra massa
            massa ultricies. Sit amet porttitor eget dolor morbi.
          </p>
        </div>
        <nav>
          <ul>
            <li>
              <i className="fas fa-home">
                <span>Home</span>
              </i>
            </li>
            <li>
              <i className="fas fa-user-alt">
                <span>About</span>
              </i>
            </li>
            <li>
              <i className="fas fa-envelope">
                <span>Contact</span>
              </i>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default RotatingNavScreen;
