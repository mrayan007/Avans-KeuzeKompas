import { logIn } from "../api/services/login.service";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: any) => {
  // const [user, setUser] = useState(null);
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const res = await logIn(email, password);
      setToken(res.data.token);
      navigate('/');
    } catch {
      console.log('error');
    }
  }

  return (
    <AuthContext.Provider value={{ token, login }}>
      {children}
    </AuthContext.Provider>
  )
}
