import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ExpandingCardsScreen from "./screens/ExpandingCardsScreen";
import ProgressBarScreen from "./screens/ProgressBarScreen";
import RotatingNavScreen from "./screens/RotatingNavScreen";
import HiddenSearchScreen from "./screens/HiddenSearchScreen";
import BlurryLoadingScreen from "./screens/BlurryLoadingScreen";
import ScrollContentScreen from "./screens/ScrollContentScreen";
import "./assets/stylesheets/App.scss";

const App = () => {
  return (
      <Router>
        <Route path="/expanding-cards" exact component={ExpandingCardsScreen} />
        <Route path="/progress-bar" exact component={ProgressBarScreen} />
        <Route path="/rotating-nav" exact component={RotatingNavScreen} />
        <Route path="/hidden-search" exact component={HiddenSearchScreen} />
        <Route path="/blurry-loading" exact component={BlurryLoadingScreen} />
        <Route path="/scroll-content" exact component={ScrollContentScreen} />
      </Router>
  );
};

export default App;
