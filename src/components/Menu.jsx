import { Link } from "react-router-dom";
import { MenuNav } from "./styles.jsx";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";


function Menu() {

  const {logout, isLogado} = useContext(AuthContext);

  return (
    <MenuNav>
      <Link to="/">Dashboard</Link>

      {isLogado() && <Link to="/cadastro">Cadastro Usuário</Link>}
      
      <Link to="/login">Login</Link>

      <Link to="/" onClick={() => logout()}>logout</Link>
    </MenuNav>
  );
}

export default Menu;
