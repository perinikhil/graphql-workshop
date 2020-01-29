import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SearchResultsList from './SearchResults/SearchResultsList';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/search">
            <SearchResultsList />
          </Route>
          <Redirect exact from="/" to="/search" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
