import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Notification, Sidebar } from "./components";
import {
  Error,
  Home,
  About,
  Players,
  Temp3,
  Temp4,
  FeaturedGames,
} from "./pages/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Notification />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/temporada-3">
          <Temp3 />
        </Route>
        <Route exact path="/players">
          <Players />
        </Route>
        <Route exact path="/temporada-4">
          <Temp4 />
        </Route>
        <Route exact path="/featured-games">
          <FeaturedGames />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
