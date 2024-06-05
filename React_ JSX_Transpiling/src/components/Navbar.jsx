import  { useState } from 'react';
 
import "./Navbar.css"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item">
          <a href="#home">
              Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about">
              Sobre
          </a>
        </li>
        <li className="nav-item dropdown" onClick={toggleDropdown}>
          <a href="#services" className="dropdown-toggle">
              Serviços  
          </a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="#service1">Roupas</a>
              </li>
              <li className="dropdown-item">
                <a href="#service2">Tenis</a>
              </li>
              <li className="dropdown-item">
                <a href="#service3">Bermudas</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
