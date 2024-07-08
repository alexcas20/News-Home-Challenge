import burgerMenu from "../../assets/images/icon-menu.svg";
import { useState } from "react";
import { SideBar } from "./SideBar";

const links = ["Home", "New", "Popular", "Trending", "Categories"];

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const showSlider = () => {
    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <SideBar links={links} showSlider={showSlider}/>
      ) : (
        <nav>
          <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[15px] sm:items-center cursor-pointer">
            {links.map((l, i) => (
              <li key={i} className="hover:text-Softorange">
                {l}
              </li>
            ))}
          </ul>
          <img
            className="w-10 h-4 cursor-pointer sm:hidden "
            src={burgerMenu}
            alt="menu"
            onClick={showSlider}
          />
        </nav>
      )}
    </>
  );
};
