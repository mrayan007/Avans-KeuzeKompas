// CSS
import './App.css';
import "xp.css/dist/XP.css";

// For Fetching & Queries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// Components
import Layout from "./layout";
import Window from "./components/window";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Window />
      </Layout>
    </QueryClientProvider>
  );
}
