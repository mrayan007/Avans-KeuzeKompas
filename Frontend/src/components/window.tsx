// Components
import { Routes, Route } from "react-router";
import Draggable from "react-draggable";

// Hooks
import { useRef, useState } from "react";

// Pages
import Home from "../pages/home";
import Recommend from "../pages/recommend";

const TitleBar = ({ title }: { title: string }) => {
  return (
    <div className="title-bar handle active:cursor-grabbing">
      <div className="title-bar-text">{title}</div>
      <div className="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
  );
}

export default function Window() {
  const nodeRef = useRef(null);
  const [title, setTitle] = useState('');

  // Window Styles
  const initSize: string = 'w-fit';
  const initPos: string = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
  const minSize: string = 'min-h-fit min-w-sm';
  const extraOpts: string = 'resize overflow-auto';

  return (
    <Draggable nodeRef={nodeRef} handle=".handle">
      <div ref={nodeRef} className={`window ${initSize} ${initPos} ${minSize} ${extraOpts}`}>
        <TitleBar title={title} />
        <div className="window-body">
          <Routes>
            <Route path="/" element={<Home title={setTitle} />} />
            <Route path="/recommend" element={<Recommend title={setTitle} />} />
          </Routes>
        </div>
      </div>
    </Draggable>
  );
}
