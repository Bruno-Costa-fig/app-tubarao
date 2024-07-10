import { Link } from "react-router-dom";
import { MenuNav } from "./styles.jsx";

function Menu() {
  return (
    <MenuNav>
      <Link to="/">Dashboard</Link>

      <Link to="/cadastro">Cadastro Usuário</Link>

      <Link to="/login">Login</Link>
    </MenuNav>
  );
}

export default Menu;
