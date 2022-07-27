import React from 'react';
import SpecialitiesComponent from "../components/main/SpecialitiesComponent";
import MainPictureComponent from "../components/main/MainPictureComponent";

const MainPage = () => {
    return (
        <main className="main-page">
            <MainPictureComponent></MainPictureComponent>
            <SpecialitiesComponent></SpecialitiesComponent>
        </main>
    );
};

export default MainPage;