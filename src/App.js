import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Notification, Sidebar } from "./components";
import {
  Error,
  Home,
  HallOfFamePage,
  About,
  Players,
  Temp3,
  Temp4,
  Temp5,
  RegisterT5,
  Match,
  FeaturedGames,
  FeaturedGamesPoster,
  Group,
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
        <Route exact path="/hall-of-fame">
          <HallOfFamePage />
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
        <Route exact path="/inscripcion-t5">
          <RegisterT5 />
        </Route>
        <Route exact path="/temporada-5">
          <Temp5 />
        </Route>
        <Route path="/season/:seasonId/group/:groupId">
          <Group />
        </Route>
        <Route exact path="/match/:matchId">
          <Match />
        </Route>
        <Route exact path="/featured-games">
          <FeaturedGames />
        </Route>
        <Route exact path="/admin/featured-games">
          <FeaturedGamesPoster />
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
