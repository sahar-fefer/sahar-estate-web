import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Cookies from 'js-cookie';

import Header from './components/header/header';
import Home from './components/home/home';
import GalleryAndFilter from './components/galleryAndSearch/galleryAndFilter';
import singleApartment from './components/singleApartment/singleApartment';
import PageNotFound from './components/notFound/pageNotFound';
import { getCitiesWithApartments } from './api/cities';

function App() {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetchCities();
    checkUser()
  }, [])

  const checkUser = () => {
    const cookie = Cookies.get('auth');
    if (cookie) {
      const userDitails = JSON.parse(cookie);
      setUserId(userDitails.id);
      setUserName(userDitails.first_name);
    }
  }

  const fetchCities = async () => {
    const cities = await getCitiesWithApartments();
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  return (
    <Router>
      <Header userName={userName}/>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={GalleryAndFilter} />
          <Route path="/apartment/:id" component={singleApartment} />
          <Route path='/404' component={PageNotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
