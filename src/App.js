import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExpandingCardsScreen from "./screens/ExpandingCardsScreen";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Route path="/expanding-cards" exact component={ExpandingCardsScreen} />
    </Router>
  );
};

export default App;
