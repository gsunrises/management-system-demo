import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Login from './routes/Login/index';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ReLogin from './pages/ReLogin/index'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <ReLogin path='/'  />
      </Switch>
    </Router>

  );
}

export default App;
