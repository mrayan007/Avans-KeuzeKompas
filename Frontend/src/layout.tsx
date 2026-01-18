// Hooks
import { useState } from "react";

// Data
// import { apps } from "./data/apps";

// Models
// import { App } from "./models/app";

// Types
import type { Page } from "./types/page";
import type { WindowInstance } from "./types/window";

// Components
import Window from "./components/window";

// Pages
import Home from "./pages/home";

export default function Layout() {
  const [windows, setWindows] = useState<WindowInstance[]>([
    { id: Date.now(), page: Home }
  ]);

  const openWindow = (page: Page, data?: any): void => {
    setWindows(prev => [...prev, { id: Date.now(), page: page, data: data }]);
  }

  const closeWindow = (id: number) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  return (
    <div className="h-screen w-screen relative">
      {windows.map(window => <Window page={window.page} key={window.id} data={window.data} onClose={() => closeWindow(window.id)} openWindow={openWindow} />)}
    </div>
  );
}
