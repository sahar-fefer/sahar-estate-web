import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header/header';
import Home from './components/home/home';
import GalleryAndFilter from './components/galleryAndSearch/galleryAndFilter';
import singleApartment from './components/singleApartment/singleApartment';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/gallery">
            <GalleryAndFilter />
          </Route>
          <Route path="/apartment/:id" component={singleApartment} />
          <Route path="/">
            <Home
              type={'home'}
              title={"Discover your perfect home"}
              description={"With the most complete source of homes for sale & rent real estate"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
