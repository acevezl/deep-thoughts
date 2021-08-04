import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// Integrate Apollo into the fron end of the application
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Establish a new link to the GraphQL server at its /graphql endpoint 
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Instantiate the Apollo Client instance and create the connection to the API endpoint
// Also instantiate a new cache object
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Everything between the <ApolloProvier> will have access to the server's API data
function App() {
  return (
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header/>
        <div className='container'>
          <Home/>
        </div>
        <Footer/>
      </div>
    </ApolloProvider>
  );
}

export default App;
