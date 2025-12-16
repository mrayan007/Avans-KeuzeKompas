// Fetching
import { useQuery } from "@tanstack/react-query";

// API Url's
import { backend } from "../axios";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["api"],
    queryFn: async () => {
      const res = await backend.get('/');
      return res.data;
    }
  });

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      {data}
    </>
  );
}
