// Hooks
import { useEffect, useState } from "react";
import { useRecommendations } from "../hooks/useRecommendations";

// Types
import type { Page } from "../types/page";

// Pages
import Cmd from "./cmd";

export default function Recommend({ title, openWindow }: { title: (text: string) => void, openWindow: (page: Page, data?: any) => void }) {
  useEffect(() => {
    title('Keuze Module Recommender');
  });

  const recommendations = useRecommendations();
  const textareaPlaceholder: string = 'Vertel ons over je interesses.';
  const [interesses, setInteresses] = useState('');

  useEffect(() => {
    if (recommendations.data) openWindow(Cmd, recommendations.data);
  }, [recommendations.data]);

  return (
    <div className="flex flex-col items-center gap-3">
      <textarea value={interesses} onChange={e => setInteresses(e.target.value)} placeholder={textareaPlaceholder} className="resize min-h-30 min-w-sm"></textarea>
      <button onClick={() => recommendations.mutate(interesses)} className="bordered">Get Recommendations</button>
    </div>
  );
}
