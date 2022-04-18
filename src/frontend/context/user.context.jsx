import { useContext, createContext } from "react";
import { useState } from "react";
const User = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export function useUser() {
  return useContext(User);
}
