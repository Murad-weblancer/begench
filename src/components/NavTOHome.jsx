import React from "react";
import { Link } from "react-router-dom";

export const NavTOHome = () => {
  return (
    <div>
      <li className="text-white hover:text-accent cursor-pointer">
        {" "}
        <Link to="homework">Final homework</Link>{" "}
        <Link to="last">Final 3 homework</Link>{" "}
      </li>
    </div>
  );
};
