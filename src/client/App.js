import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SearchResultsList from './SearchResults/SearchResultsList';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/search">
          <SearchResultsList />
        </Route>
        <Redirect exact from="/" to="/search" />
      </Switch>
    </Router>
  );
}

export default App;
