import { createContext } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

  const navigate = useNavigate()

  const login = async (data) => {

    const response = await axios.post("http://localhost:3000/auth/login", data);

    if (response.data) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("isLogado", true)
      alert("Login executado com sucesso!")
      navigate("/")
    }
  };

  function logout () {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLogado")
    alert("Deslogado com sucesso!")
  }

  function logado () {
    const isLogado = localStorage.getItem("isLogado")

    if(isLogado){
      return true
    } else {
      return false
    }
  }

  return (
    <AuthContext.Provider value={{login, logout, logado}}>
      {children}
    </AuthContext.Provider>
  )
}