import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import AuthContext from './Pages/Auth/Firebase/AuthContext';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <RouterProvider router={Router}></RouterProvider>
      </AuthContext>
    </QueryClientProvider>

  </StrictMode>,
)
