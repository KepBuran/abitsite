import React from 'react';
import SpecialitiesComponent from "../components/main/SpecialitiesComponent";
import MainPictureComponent from "../components/main/MainPictureComponent";
import BackgroundImg from "../assets/img/mainPage/Background.svg";
import { motion } from 'framer-motion';

const MainPage = () => {
    const style = {backgroundImage: `url(${BackgroundImg})`};

    return (
        <motion.main className="main-page"
            style={{}}>

        <MainPictureComponent></MainPictureComponent>
            <SpecialitiesComponent></SpecialitiesComponent>
        </motion.main>
    );
};

export default MainPage;