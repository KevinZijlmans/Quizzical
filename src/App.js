import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Questions from './components/questions';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api.8base.com/ck37ef1pe000201jv5njf6hsf'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Questions/>
    </div>
    </ApolloProvider>
  );
}

export default App;
