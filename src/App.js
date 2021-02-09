import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExpandingCardsScreen from "./screens/ExpandingCardsScreen";
import ProgressBarScreen from "./screens/ProgressBarScreen";
import RotatingNavScreen from "./screens/RotatingNavScreen";
import './assets/stylesheets/App.scss';

const App = () => {
  return (
    <Router>
      <Route path="/expanding-cards" exact component={ExpandingCardsScreen} />
      <Route path="/progress-bar" exact component={ProgressBarScreen} />
      <Route path="/rotating-nav" exact component={RotatingNavScreen} />

    </Router>
  );
};

export default App;
