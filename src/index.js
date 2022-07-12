import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

import {
  chain,
  defaultChains,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

// apollo config
const apolloClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/iainnash/zora-editions-mainnet',
  cache: new InMemoryCache(),
});

// wagmi config
export const { chains, provider } = configureChains(
  defaultChains,
  [
    alchemyProvider({
      alchemyId: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
    }),
    publicProvider(),
  ]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
});

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <WagmiConfig client={wagmiClient}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </WagmiConfig>
);
