// Components
import Draggable from "react-draggable";

// Hooks
import { useEffect, useRef, useState } from "react";

// Types
import type { Page } from "../types/page";

const TitleBar = ({ title, closeWindow }: { title: string, closeWindow: () => void }) => {
  return (
    <div className="title-bar handle active:cursor-grabbing">
      <div className="title-bar-text">{title}</div>
      <div className="title-bar-controls">
        <button aria-label="Close" onClick={closeWindow}></button>
      </div>
    </div>
  );
}

export default function Window({ page, onClose, openWindow }: { page: Page, onClose: () => void, openWindow: (page: Page) => void }) {
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

  const closeWindow = () => {
    setInitSize('w-fit scale-0')
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const Page = page;

  return (
    <Draggable nodeRef={nodeRef} handle=".handle">
      <div ref={nodeRef} className={`window ${initSize} ${initPos} ${minSize} ${extraOpts}`}>
        <TitleBar title={title} closeWindow={closeWindow} />
        <div className="window-body">
          <Page title={setTitle} openWindow={openWindow} />
        </div>
      </div>
    </Draggable>
  );
}
