import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SearchResultsList from "./SearchResults/SearchResultsList";
import HotelPage from "./HotelPage/HotelPage";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app-wrapper">
        <Router>
          <Switch>
            <Route exact path="/search">
              <SearchResultsList />
            </Route>
            <Route exact path="/hotel/:id">
              <HotelPage />
            </Route>
            <Redirect exact from="/" to="/search" />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
