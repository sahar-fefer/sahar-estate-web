import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// components
import Header from './components/header/header';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
