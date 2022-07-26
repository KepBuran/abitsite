import React from 'react';
import {Route, Routes} from "react-router-dom";

import './styles/App.css';
import './assets/fonts/BebasNeuePro/stylesheet.css';

import NavbarComponent from "./components/NavbarComponent";
import MainPage from "./pages/MainPage";
import FooterComponent from "./components/FooterComponent";
import BackgroundImg from './assets/img/mainPage/Background.png';
import ArticlesPage from "./pages/ArticlesPage";
import {Paths} from "./config/Paths";
import EduProgramPage from "./pages/EduProgramPage";
import SuperHeroesPage from "./pages/SuperHeroesPage";
import StudentCouncilPage from "./pages/StudentCouncilPage";


function App() {
    const divStyle = {
        backgroundImage: 'url('+BackgroundImg+')',
        // backgroundSize: '100% 100%',
    };

    return (
        <div className="App" style={divStyle}>
            <NavbarComponent></NavbarComponent>
            <Routes>
                <Route path={Paths.Main} element={<MainPage/>} />
                <Route path={Paths.Articles} element={<ArticlesPage/>} />
                <Route path={Paths.EduPrograms} element={<EduProgramPage/>} />
                <Route path={Paths.SuperHeroes} element={<SuperHeroesPage/>} />
                <Route path={Paths.StudentCouncil} element={<StudentCouncilPage/>} />
            </Routes>
            <FooterComponent></FooterComponent>
        </div>
    );
}

export default App;
