import logo from "../../assets/images/logo.svg";
import { NavBar } from "./NavBar";

export const Header = () => {

  return (
    <header className=" flex place-content-between items-center mb-8 h-[screen]">
      <img src={logo} alt="Logo" />
      <NavBar/>
    </header>
  );
};
