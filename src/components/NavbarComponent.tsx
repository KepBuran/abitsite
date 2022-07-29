import React, {useEffect, useState} from 'react';
import '../styles/Navbar.css'
import SC_logo from "../assets/icons/SC_black_logo.png";
import { useLocation } from 'react-router-dom';

import {Paths} from "../config/Paths";

const NavbarComponent = () => {
    const isActive = (currentPath: string, path: string) => {
        return currentPath === path? ' header-active' : '';
    }

    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        let navbar = document.getElementById("navbar");
        // console.log("TEST");

        if (!navbar) return;
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                console.log("TEST1");
                navbar.style.top = "-110px";
            } else {
                navbar.style.top = "0";
            }

            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);



    return (
        <nav id="navbar">
            <ul>
                <li>
                    <a href="#"><img className="icon-header" src={SC_logo} alt="IASALogo"/></a>
                </li>
                <li className={"header-text" + isActive(useLocation().pathname, Paths.Main)}> <a href={Paths.Main}>Головна</a> </li>
                <li className={"header-text" + isActive(useLocation().pathname, Paths.Articles)}> <a href={Paths.Articles}>Статті</a> </li>
                <li className={"header-text" + isActive(useLocation().pathname, Paths.EduPrograms)}> <a href={Paths.EduPrograms}>Освітні програми</a> </li>
                <li className={"header-text" + isActive(useLocation().pathname, Paths.SuperHeroes)}> <a href={Paths.SuperHeroes}>Супергерої</a> </li>
                <li className={"header-text" + isActive(useLocation().pathname, Paths.StudentCouncil)}> <a href={Paths.StudentCouncil}>Студрада</a> </li>
            </ul>

        </nav>
    );
};

export default NavbarComponent;