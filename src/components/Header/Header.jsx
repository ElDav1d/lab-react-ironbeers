import { NavLink } from "react-router-dom";
import { HouseDoorFill } from "react-bootstrap-icons";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <HouseDoorFill color="white" size={32} />
      </NavLink>
    </header>
  );
}

export default Header;
