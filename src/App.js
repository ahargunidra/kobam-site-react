import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/content/Home";
import Tutorial from "./components/content/tutorial/Tutorial";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/tutorial">
        <Tutorial />
      </Route>
    </Router>
  );
}

export default App;
