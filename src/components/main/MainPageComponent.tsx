import React from 'react';
import SliderComponent from '../slider/SliderComponent';
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