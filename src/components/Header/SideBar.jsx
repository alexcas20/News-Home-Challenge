import closedBurgerMenu from "../../assets/images/icon-menu-close.svg";
export const SideBar = ({links, showSlider}) => {
  return (
    <nav className="bg-Off-white text-Verydarkblue absolute top-0 right-0 h-full w-[50%]  shadow-Verydarkblue shadow-2xl flex items-center ">
      <img
        className="w-7 cursor-pointer absolute top-8 right-5"
        src={closedBurgerMenu}
        alt="menu"
        onClick={showSlider}
      />
      <ul className="p-6 h-[65%] cursor-pointer">
        {links.map((l, i) => (
          <li key={i} className="hover:text-Softorange text-xl mb-6 ">
            {l}
          </li>
        ))}
      </ul>
    </nav>
  );
};
