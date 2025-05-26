import React from "react";

export const Menu = ({ menu }) => {
  return (
    <header className="l-header">
      <nav className="nav">
        <span className="nav__logo">Menu</span>
        <ul className="nav__menu">
          {menu.map(({ label, section, className }) => (
            <li key={section} className="nav__item">
              <a className="nav__link" href={`#${section}`}>
                <i className={`bx ${className}`}></i> {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
