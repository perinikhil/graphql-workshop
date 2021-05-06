import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import SearchPage from "./SearchPage/SearchPage";
import HotelPage from "./HotelPage/HotelPage";
import "./App.css";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'https://graphql-workshop-gql-api.vercel.app/api',
    })
  ]),
})


const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="app-wrapper">
        <Router>
          <Switch>
            <Route exact path="/search">
              <SearchPage />
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
