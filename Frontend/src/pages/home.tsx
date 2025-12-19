// Hooks
import { useState } from "react";
import { useRecommendations } from "../hooks/useRecommendations";

export default function Home() {
  const [interests, setInterests] = useState('');
  const recommendations = useRecommendations();

  return (
    <div className="flex flex-col">
      <textarea className="border w-sm h-25" value={interests} onChange={e => setInterests(e.target.value)}></textarea>
      <button onClick={() => recommendations.mutate(interests)}>Recommend</button>
    </div>
  );
}
