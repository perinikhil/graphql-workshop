import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/search">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              {/* <p>
                Edit <code>src/App.js</code> and save to reload.
              </p> */}
              {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> */}
            </header>
          </div>
        </Route>
        <Redirect exact from="/" to="/search" />
      </Switch>
    </Router>
  );
}

export default App;
