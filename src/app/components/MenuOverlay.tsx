import React from "react";
import NavLinks from "./NavbarLinks";

interface NavLink {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: NavLink[];
}


const MenuOverlay:React.FC<MenuOverlayProps>  = ({ links }) => {
  return (
    <ul className="flex flex-col items-center justify-center py-4 z-40 bg-[#121212] bg-opacity-80 absolute top-0 right-0 left-0 h-[200px]">
      {links.map((link, index:number) => (
        <li key={index}>
          <NavLinks href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;