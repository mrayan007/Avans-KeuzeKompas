// Components
import Draggable from "react-draggable";

// Hooks
import { useEffect, useRef, useState } from "react";

// Types
import type { Page } from "../types/page";

// Pages
import Home from "../pages/home";
import { Login } from "../pages/auth";

const TitleBar = ({ title, closeWindow, page }: { title: string, closeWindow: () => void, page: Page }) => {
  return (
    <div className="title-bar handle active:cursor-grabbing">
      <div className="title-bar-text">{title}</div>
      <div className="title-bar-controls">
        {page != Home && page != Login &&
          <button aria-label="Close" onClick={closeWindow}></button>
        }
      </div>
    </div>
  );
}

export default function Window({ page, data, onClose, openWindow }: { page: Page, data: any, onClose: () => void, openWindow: (page: Page, data?: any) => void }) {
  const nodeRef = useRef(null);
  const [title, setTitle] = useState('');

  // Window Styles
  const [initSize, setInitSize] = useState('scale-0');
  const initPos: string = 'absolute inset-0 m-auto';
  const minSize: string = 'min-h-fit min-w-sm';
  const extraOpts: string = 'transition-[scale]';

  useEffect(() => {
    setInitSize('w-fit');
  }, []);

  const Page = page;

  return (
    <Draggable nodeRef={nodeRef} handle=".handle">
      <div ref={nodeRef} className={`window ${initSize} ${initPos} ${minSize} ${extraOpts}`}>
        <TitleBar title={title} closeWindow={onClose} page={page} />
        <div className="window-body max-h-150 overflow-auto">
          <Page title={setTitle} openWindow={openWindow} data={data} />
        </div>
      </div>
    </Draggable>
  );
}
