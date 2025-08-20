import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { QueryClientProvider, QueryClient, keepPreviousData } from "@tanstack/react-query";

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: null, // Set as required, e.g., `keepPreviousData` if you want to reuse the data.
      // staleTime: 5 * 60 * 1000, // Uncomment and set if needed
      cacheTime: 10 * 60 * 1000, // Cache for 10 minutes
      refetchOnWindowFocus: false, // Disable refetching on window focus
      refetchInterval: false, // Disable periodic refetching
      retry: 1, // Retry failed queries only once
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrap the App in QueryClientProvider */}
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
