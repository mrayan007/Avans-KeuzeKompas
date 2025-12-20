// Components
import { Routes, Route } from "react-router";
import Draggable from "react-draggable";

// Hooks
import { useRef, useState } from "react";

// Pages
import Recommend from "../pages/recommend";

const TitleBar = ({ title }: { title: string }) => {
  return (
    <div className="handle active:cursor-grabbing bg-linear-to-r from-blue-950 to-blue-300 px-1">
      <span className="text-white">{title}</span>
    </div>
  );
}

export default function Window() {
  const nodeRef = useRef(null);
  const [title, setTitle] = useState('');

  // Window Styles
  const bgColor: string = 'bg-neutral-200';
  const minSize: string = 'min-h-fit min-w-fit';
  const initSize: string = 'h-75 w-100';
  const initPos: string = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
  const border: string = 'border-4 border-white';
  const outline: string = 'outline-3 outline-[#818181]';
  const extraOpts: string = 'resize overflow-auto';

  return (
    <Draggable nodeRef={nodeRef} handle=".handle">
      <div ref={nodeRef} id="window" className={`${bgColor} ${minSize} ${initSize} ${initPos} ${border} ${outline} ${extraOpts}`}>
        <TitleBar title={title} />
        <div className="p-3 flex flex-col justify-center items-center gap-3">
          <Routes>
            <Route path="/recommend" element={<Recommend title={setTitle} />} />
          </Routes>
        </div>
      </div>
    </Draggable>
  );
}
