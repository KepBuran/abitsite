import React from 'react';
import '../styles/Navbar.css'
import SC_logo from "../assets/icons/SC_black_logo.png"

const NavbarComponent = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#"><img className="icon-header" src={SC_logo} alt="IASALogo"/></a>
                </li>
                <li className="header-text header-active"> <a href="#">Головна</a> </li>
                <li className="header-text"> <a href="#">Статті</a> </li>
                <li className="header-text"> <a href="#">Освітні програми</a> </li>
                <li className="header-text"> <a href="#">Супергерої</a> </li>
                <li className="header-text"> <a href="#">Про СР</a> </li>
            </ul>

        </nav>
    );
};

export default NavbarComponent;