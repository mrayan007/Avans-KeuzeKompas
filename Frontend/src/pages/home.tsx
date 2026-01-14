// Hooks
import { useEffect } from "react";

// Pages
import Recommend from "./recommend";

// Types
import type { Page } from "../types/page";

export default function Home({ title, openWindow }: { title: (text: string) => void, openWindow: (page: Page) => void }) {
  useEffect(() => {
    title('Home');
  });

  return (
    <>
      <p>Welcome!</p>
      <button onClick={() => openWindow(Recommend)}>Recommend Module</button>
    </>
  );
}
