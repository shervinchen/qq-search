import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';

import App from './App';

test('Renders without crashing', () => {
  const client = new QueryClient();
  render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  );
});
