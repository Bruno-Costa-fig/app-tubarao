import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const navigate = useNavigate();

  const login = async (data) => {

    const response = await axios.post("http://localhost:3000/auth/login", data);

    if (response.data) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("isLogado", true)
      alert("Logado com sucesso");
      navigate("/");
    }
  };

  const logout = () => {
    alert("Deslogado com sucesso");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLogado");
  }

  const isLogado = () => {
    var islogado = localStorage.getItem("isLogado");

    if (islogado) {
      return true
    } else {
      return false
    }
  }

  return (
    <AuthContext.Provider value={{login, logout, isLogado}}>
      {children}
    </AuthContext.Provider>
  )

}
