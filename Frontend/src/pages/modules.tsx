// Hooks
import { useEffect } from "react";
import { useModules } from "../hooks/useModules";

// Interfaces
import type { PageProps } from "../interfaces/page.props";

// Pages
import Module from "./module";

const ModuleRow = ({ module, openWindow }: { module: any, openWindow: any }) => {
  return (
    <tr>
      <td>{module.name}</td>
      <td className='max-w-sm truncate'>{module.shortdescription}</td>
      <td>{module.studycredit}</td>
      <td>{module.location}</td>
      <td>{module.level}</td>
      <td>
        <button onClick={() => openWindow(Module, module.id)}>Details</button>
      </td>
    </tr>
  );
}

const ModuleTable = ({ modules, openWindow }: { modules: any, openWindow: any }) => {
  return (
    <table>
      <thead>
        <tr className='text-left sticky top-0 bg-[#ece9d8]'>
          <th>Naam</th>
          <th>Korte Beschrijving</th>
          <th>Studiepunten</th>
          <th>Locatie</th>
          <th>Niveau</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {modules.map((module: any) => <ModuleRow key={module.id} module={module} openWindow={openWindow} />)}
      </tbody>
    </table>
  );
}

export default function Modules({ title, openWindow }: PageProps) {
  useEffect(() => {
    title('Keuze Modules');
  }, []);

  const modules = useModules();

  return (
    <div className='p-2'>
      {modules.isPending && 'loading..'}
      {modules.isError && 'error'}
      {modules.isSuccess && <ModuleTable modules={modules.data} openWindow={openWindow} />}
    </div>
  );
}
