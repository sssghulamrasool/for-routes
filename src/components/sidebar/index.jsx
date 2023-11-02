import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [list, setList] = useState([
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about",
      text: "About",
    },
    {
      path: "/contact",
      text: "Contact",
    },
    {
      path: "/portolio",
      text: "Portfolio",
    },
    {
      path: "/service",
      text: "Service",
    },
  ]);
  return (
    <aside>
      <ul>
        {list.map((e, i) => {
          return (
            <li>
              <li>
                <Link to={e.path}>{e.text}</Link>
              </li>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
