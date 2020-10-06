import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Login from './components/Login'
import Friends from './components/Friends'

import './App.css';
import LandingPage from './components/LandingPage';
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
        
        <Route path='/friends' component={Friends}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={LandingPage} />
        <Route path='/*' render={() => <p>Page not found!</p> }/>
        
      </Switch>
    </div>
  );
}

export default App;
