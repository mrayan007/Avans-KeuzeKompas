// Hooks
import { useEffect } from "react";

export default function Cmd({ title, data }: { title: (text: string) => void, data: any }) {
  useEffect(() => {
    title('Command Prompt');
  }, []);

  return (
    <pre>
      Microsoft&#10094;R&#10095; Windows DOS
      &#10094;C&#10095; Copyright Microsoft Corp 1990-2001.
      <br></br>
      C:&#92;WINDOWS&#92;SYSTEM32{'>'} recommend
      <br></br>
      <div>
        De drie meest passende keuze modules zijn:
        <br></br>
        {data.map((module: any) => <p key={module.index}>{module.module_title}</p>)}
      </div>
    </pre>
  );
}
