// Hooks
import { useEffect } from "react";

// Pages
import Recommend from "./recommend";
import Modules from "./modules";

// Types
import type { Page } from "../types/page";

// Routing
import { Link } from "react-router";

export default function Home({ title, openWindow }: { title: (text: string) => void, openWindow: (page: Page) => void }) {
  useEffect(() => {
    title('Home');
  }, []);

  return (
    <div className="p-1 flex flex-col gap-2">
      <p>Welkom student!</p>
      <button onClick={() => openWindow(Modules)}>Verken alle Modules</button>
      <button onClick={() => openWindow(Recommend)}>Modules Aanbevelen</button>
      <Link to='/auth'><button>Log In</button></Link>
    </div>
  );
}
