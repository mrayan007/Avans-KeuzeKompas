// React
import { useEffect } from "react";

// Components
import Window from "../components/window";

// Routing
import { Link } from "react-router";

export const Login = ({ title }: { title: (text: string) => void }) => {
  useEffect(() => {
    title('Log In');
  });

  return (
    <div className="p-3">
      <div className="field-row">
        <label>Email</label>
        <input id="text21" type="text" />
      </div>
      <div className="field-row">
        <label>Password</label>
        <input id="text21" type="text" />
      </div>
      <div className="mt-3">
        <button className="mr-2">OK</button>
        <Link to='/'>
          <button>Continue as Guest</button>
        </Link>
      </div>
    </div>
  );
}

export default function Auth() {
  return (
    <div className="h-screen w-screen relative bg-blue-900">
      <Window page={Login} data={null} onClose={() => 0} openWindow={() => 0} />
    </div>
  );
}
