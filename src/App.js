import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// components
import Header from './components/header/header';
import Home from './components/home/home';
import GalleryAndFilter from './components/galleryAndSearch/galleryAndFilter';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
        <Route path="/buy">
            {/* {apartments.length > 0 && cities.length > 0 && */}
            <Home
              type={'buy'}
              title={"Discover your perfect home"}
              description={"With the most complete source of homes for sale & real estate near you"} />
            {/* } */}
          </Route>
          <Route path="/rent">
            <Home
              type={'rent'}
              title={"Discover your perfect rental"}
              description={"Search nearby apartments, condos, and homes for rent"} />
          </Route>
          <Route path="/sell">
            <div>it will be sell page</div>
            {/* <Sell /> */}
          </Route>
          <Route path="/gallery">
            <GalleryAndFilter/>
          </Route>
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
