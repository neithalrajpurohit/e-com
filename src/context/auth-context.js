import { createContext, useContext, useState } from "react";
export const authContext = createContext();

function AuthProvider({ children }) {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <authContext.Provider
      value={{
        login,
        setLogin,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;
