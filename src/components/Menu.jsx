import { Link, NavLink } from "react-router-dom";
import { MenuNav } from "./styles.jsx";
import {AuthContext} from "../context/AuthContext.jsx"
import { useContext } from "react";

function Menu() {

  const {logout, logado} = useContext(AuthContext);

  return (
    <MenuNav>
      <NavLink to="/">Dashboard</NavLink>
      {/* {logado() && <NavLink to="/cadastro">Cadastro Usuário</NavLink>} */}
      <NavLink to="/cadastro">Cadastro Usuário</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/login" onClick={() => logout()}>Logout</NavLink>
    </MenuNav>
  );
}

export default Menu;
