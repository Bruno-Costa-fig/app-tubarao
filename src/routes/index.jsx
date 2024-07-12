import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

// páginas
import Login from "../pages/Login";
import App from "../App";
import CadastroUsuario from "../pages/CadastroUsuario";
import {AuthContextProvider} from "../context/AuthContext"

const RotaPrivada = () => {
  const isLogado = localStorage.getItem("isLogado")

  return isLogado ? <Outlet /> : <Navigate to="/login" replace />
}

export const Rotas = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route element={<RotaPrivada />}>
            <Route path="/cadastro" element={<CadastroUsuario />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}