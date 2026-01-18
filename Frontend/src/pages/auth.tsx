// React
import { useEffect, useState } from "react";

// Components
import Window from "../components/window";

// Routing
import { Link } from "react-router";

export const Login = ({ title }: { title: (text: string) => void }) => {
  useEffect(() => {
    title('Log In');
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="p-3">
      <div className="field-row">
        <label>Email</label>
        <input id="text21" type="text" onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="field-row">
        <label>Password</label>
        <input id="text21" type="text" onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="mt-3">
        <button className="mr-2">OK</button>
        <Link to='/'>
          <button>Continue as Guest</button>
        </Link>
        <button className="ml-2">Register</button>
      </div>
    </div>
  );
}

export default function Auth() {
  const page = Login;

  return (
    <div className="h-screen w-screen relative bg-blue-950">
      <Window page={page} data={null} onClose={() => 0} openWindow={() => 0} />
    </div>
  );
}
