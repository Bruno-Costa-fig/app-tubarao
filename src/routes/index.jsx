import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";

// páginas
import Login from "../pages/Login";
import App from "../App";
import CadastroUsuario from "../pages/CadastroUsuario";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}