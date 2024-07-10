import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// páginas
import Login from "../pages/Login";
import App from "../App";
import CadastroUsuario from "../pages/CadastroUsuario";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        </Routes>
    </BrowserRouter>
  )
}