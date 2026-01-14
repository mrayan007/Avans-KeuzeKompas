// CSS
import './App.css';
import "xp.css/dist/XP.css";

// For Fetching & Queries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// Components
import Layout from "./layout";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}
