import React from 'react';
import MainSliderComponent from './MainSliderComponent';
import SpecialitiesComponent from "./SpecialitiesComponent";
import MainPictureComponent from "./MainPictureComponent";

const MainPageComponent = () => {
    return (
        <main>
            <MainPictureComponent></MainPictureComponent>
            <SpecialitiesComponent></SpecialitiesComponent>
        </main>
    );
};

export default MainPageComponent;