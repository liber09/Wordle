import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();
  return (
    <nav className="navbarContainer">
      <ul className="navbarList">
        <NavLink to="/" className={({isActive, isPending}) => 
          isPending? "navbarLinkPending" : isActive ? "navbarLinkActive" : "navbarLink"}
          replace={true}>
          Game
        </NavLink>
        <NavLink to="/information" className={({isActive, isPending}) => 
          isPending? "navbarLinkPending" : isActive ? "navbarLinkActive" : "navbarLink"}
          replace={true}>
          Information
        </NavLink>
        <NavLink to="/settings" className={({isActive, isPending}) => 
          isPending? "navbarLinkPending" : isActive ? "navbarLinkActive" : "navbarLink"}
          replace={true}>
          Settings
        </NavLink>
        <NavLink to="/highscore" className={({isActive, isPending}) => 
          isPending? "navbarLinkPending" : isActive ? "navbarLinkActive" : "navbarLink"}
          replace={true}>
          HighScore
        </NavLink>
        

       
        

      </ul>
    </nav>
  );
}