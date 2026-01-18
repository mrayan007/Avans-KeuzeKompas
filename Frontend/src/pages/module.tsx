// Interfaces
import type { PageProps } from "../interfaces/page.props";

// Hooks
import { useEffect } from "react";
import { useModules } from "../hooks/useModules";

export default function Module({ title, data }: PageProps) {
  useEffect(() => {
    title('Module Details');
  }, []);

  const module = useModules(data);
  if (module.isPending) return 'loading...';
  if (module.isError) return 'error';

  return (
    <div className="p-2">
      {module.data.name}
    </div>
  );
}
