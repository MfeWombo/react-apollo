
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
// You’re importing the required dependencies from the installed npm packages
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Here you create the HttpLink that will connect your ApolloClient instance with the GraphQL API; your GraphQL server will be running on http://localhost:4000.

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

// Now you instantiate ApolloClient by passing in the httpLink and a new instance of an InMemoryCache.
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// Finally you render the root component of your React app. The App is wrapped with the higher-order component ApolloProvider that gets passed the client as a prop.

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
registerServiceWorker()