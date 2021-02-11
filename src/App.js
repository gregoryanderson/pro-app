import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExpandingCardsScreen from "./screens/ExpandingCardsScreen";
import ProgressBarScreen from "./screens/ProgressBarScreen";
import RotatingNavScreen from "./screens/RotatingNavScreen";
import HiddenSearchScreen from "./screens/HiddenSearchScreen";
import './assets/stylesheets/App.scss';

const App = () => {
  return (
    <Router>
      <Route path="/expanding-cards" exact component={ExpandingCardsScreen} />
      <Route path="/progress-bar" exact component={ProgressBarScreen} />
      <Route path="/rotating-nav" exact component={RotatingNavScreen} />
      <Route path="/hidden-search" exact component={HiddenSearchScreen} />

    </Router>
  );
};

export default App;
