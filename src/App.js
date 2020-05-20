import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// components
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
