import React from "react";

export default function Navbar() {
  return (
    <nav className="navbarContainer">
      <ul className="navbarList">
        <a href="/game" className="navbarLink">
          <li className="navbarListItem">Game</li>
        </a>
        <a href="/information" className="navbarLink">
          <li className="navbarListItem">Information</li>
        </a>

        <a href="/highscore" className="navbarLink">
          <li className="navbarListItem">Highscore</li>
        </a>
      </ul>
    </nav>
  );
}