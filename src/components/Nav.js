import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

import Aos from "aos";
import "aos/dist/aos.css";

import "../layout/Nav.css";

const navs = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "About",
  },
  {
    id: 3,
    path: "/projects",
    name: "Projects",
  },
  {
    id: 4,
    path: "/github",
    name: "Github",
  },

  {
    id: 5,
    path: "/contact",
    name: "Contact",
  },
];

const Nav = () => {
  Aos.init();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="btn">
        <div className="menu-btn">
          <button onClick={() => setIsOpen(!isOpen)}>
            <BiMenuAltRight />
          </button>
        </div>
      </div>

      <header className={`${isOpen ? "header open" : "header"}`}>
        <nav>
          <ul>
            {navs.map((navItem) => (
              <li onClick={() => setIsOpen(false)}>
                <NavLink exact to={navItem.path} key={navItem.id}>
                  {navItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
