// CSS
import './App.css';
import "xp.css/dist/XP.css";

// For Fetching & Queries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// Components
import Layout from "./layout";

// Routing
import { Route, Routes } from 'react-router';

// Pages
import Auth from './pages/auth';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </QueryClientProvider>
  );
}
