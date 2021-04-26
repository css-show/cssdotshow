import '@/styles/globals.scss';
import { useApollo } from '@/lib/apollo';
import { ApolloProvider } from '@apollo/client';

const App = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState);
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
