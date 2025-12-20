// Hooks
import { useEffect, useState } from "react";
import { useRecommendations } from "../hooks/useRecommendations";

export default function Recommend({ title }: { title: (text: string) => void }) {
  useEffect(() => {
    title('Keuze Module Recommender');
  });

  const recommendations = useRecommendations();
  const textareaPlaceholder: string = 'Vertel ons over je interesses.';
  const [interesses, setInteresses] = useState('');

  return (
    <>
      <textarea value={interesses} onChange={e => setInteresses(e.target.value)} placeholder={textareaPlaceholder} className="resize bordered h-30 w-sm"></textarea>
      <button onClick={() => recommendations.mutate(interesses)} className="bordered">Get Recommendations</button>
      <div>
        {recommendations.data && JSON.stringify(recommendations.data)}
      </div>
    </>
  );
}
