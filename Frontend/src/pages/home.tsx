// Hooks
import { useEffect } from "react";

export default function Home({ title }: { title: (text: string) => void }) {
  useEffect(() => {
    title('Home');
  });

  return (
    <p>Welcome!</p>
  );
}
