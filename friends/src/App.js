import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Login from './components/Login'
import FriendList from './components/FriendList'
import LandingPage from './components/LandingPage';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Friends Collector</h1>
      </header>
      <nav>
        <Link to='/'>Home </Link>
        <Link to='/friends'>My Friends </Link>
        <Link to='/login'>Login </Link>
      </nav>
      <Switch>
        <PrivateRoute path='/friends' component={FriendList}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
