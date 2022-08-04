import React, {Component, useEffect} from 'react';
import {BrowserRouter, NavLink, Route, Routes, useLocation} from "react-router-dom";

import './styles/App.css';
import './styles/Animations.css';
import './assets/fonts/BebasNeuePro/stylesheet.css';

import NavbarComponent from "./components/NavbarComponent";
import MainPage from "./pages/MainPage";
import FooterComponent from "./components/FooterComponent";
import BackgroundImg from './assets/img/mainPage/Background.svg';
import ArticlesPage from "./pages/ArticlesPage";
import {Paths} from "./config/Paths";
import EduProgramPage from "./pages/EduProgramPage";
import SuperHeroesPage from "./pages/SuperHeroesPage";
import StudentCouncilPage from "./pages/StudentCouncilPage";
import {AnimatePresence} from "framer-motion";


function App() {
    const divStyle = {
        backgroundImage: 'url('+BackgroundImg+')',
    };

    useEffect(() => {
        setTimeout(() => {
            document.getElementsByClassName("loader-wrapper")[0].classList.add('loader-hide');
            setTimeout(() => {document.getElementsByClassName("loader-wrapper")[0].classList.add('loader-none')}, 500)
        }, 1000);
    })


    const location = useLocation();

    return (
        <div className="App" style={divStyle}>
            <NavbarComponent></NavbarComponent>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path={Paths.Main} element={<MainPage/>} />
                    <Route path={Paths.Articles} element={<ArticlesPage/>} />
                    <Route path={Paths.EduPrograms} element={<EduProgramPage/>} />
                    <Route path={Paths.SuperHeroes} element={<SuperHeroesPage/>} />
                    <Route path={Paths.StudentCouncil} element={<StudentCouncilPage/>} />
                </Routes>
            </AnimatePresence>
            <FooterComponent></FooterComponent>
        </div>
    );
}

export default App;


