import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Portfoliopage from './pages/Portfoliopage';
import Resumepage from './pages/Resumepage';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/contact">
          <Contactpage />
        </Route>
        <Route exact path="/portfolio">
          <Portfoliopage />
        </Route>
        <Route exact path="/resume">
          <Resumepage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
