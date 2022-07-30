import React from 'react';
import SpecialitiesComponent from "../components/main/SpecialitiesComponent";
import MainPictureComponent from "../components/main/MainPictureComponent";
import BackgroundImg from "../assets/img/studentCouncilPage/Background.png";
import { motion } from 'framer-motion';

const MainPage = () => {
    return (
        <motion.main className="main-page"
            style={{backgroundImage: `url(${BackgroundImg})`}}>

        <MainPictureComponent></MainPictureComponent>
            <SpecialitiesComponent></SpecialitiesComponent>
        </motion.main>
    );
};

export default MainPage;