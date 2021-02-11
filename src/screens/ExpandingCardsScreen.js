import React, { useState } from "react";

const ExpandingCardsScreen = () => {
  const [activePanel, setActivePanel] = useState(1);

  return (
    <div className="expanding-cards-body">
      <div className="expanding-cards-container">
        <div
          className={activePanel === 1 ? "active panel" : "panel"}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1612777043682-914098ba0472?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
          }}
          onClick={() => setActivePanel(1)}
        >
          <h3>Explore the World</h3>
        </div>
        <div
          className={activePanel === 2 ? "active panel" : "panel"}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1612676756023-0219168b193f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
          }}
          onClick={() => setActivePanel(2)}
        >
          <h3>Explore the World</h3>
        </div>
        <div
          className={activePanel === 3 ? "active panel" : "panel"}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1612390388573-45904a65dd0f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
          }}
          onClick={() => setActivePanel(3)}
        >
          <h3>Explore the World</h3>
        </div>
        <div
          className={activePanel === 4 ? "active panel" : "panel"}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1612533923019-b532b3131212?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
          }}
          onClick={() => setActivePanel(4)}
        >
          <h3>Explore the World</h3>
        </div>
        <div
          className={activePanel === 5 ? "active panel" : "panel"}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
          }}
          onClick={() => setActivePanel(5)}
        >
          <h3>Explore the World</h3>
        </div>
      </div>
    </div>
  );
};

export default ExpandingCardsScreen;
