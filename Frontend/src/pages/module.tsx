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
    <div className="p-2 max-w-md">
      <span className="font-extrabold">
        {module.data.name} in {module.data.location} voor {module.data.studycredit} studiepunten
      </span>
      <p>
        <span className="font-bold mr-1">Niveau</span>
        {module.data.level}
        <span className="font-bold mx-1">Beschikbare Plekken</span>
        {module.data.available_spots}
        <span className="font-bold mx-1">Start Datum</span>
        {module.data.start_date}
      </p>
      <p>{module.data.description}</p>
    </div>
  );
}
