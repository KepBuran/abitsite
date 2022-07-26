import React from 'react';
import SHI122_IMG from '../../assets/img/mainPage/122SHI.png';
import SP122_IMG from '../../assets/img/mainPage/122SP.png';
import MMSA124_IMG from '../../assets/img/mainPage/124MMSA.png';
import BackgroundImg from '../../assets/img/mainPage/Background.png';
import FlipCardComponent from "./FlipCardComponent";

import '../../styles/main/Specialities.css';


const SpecialitiesComponent = () => {
    const descriptionSHI: string = "бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла";
    const urlSHI: string = "#";
    const descriptionSP: string = "бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла";
    const urlSP: string = "#";
    const descriptionMMSA: string = "бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла";
    const urlMMSA: string = "#";

    const divStyle = {
        backgroundImage: 'url('+BackgroundImg+')',
        backgroundSize: '100% 100%',
    };

    return (
        <div className="specialties" style={divStyle}>
            <FlipCardComponent image={SHI122_IMG} name={"122 ШІ"} description={descriptionSHI} url={urlSHI}></FlipCardComponent>
            <FlipCardComponent image={SP122_IMG} name={"122 СП"} description={descriptionSP} url={urlSP}></FlipCardComponent>
            <FlipCardComponent image={MMSA124_IMG} name={"124 ММСА"} description={descriptionMMSA} url={urlMMSA}></FlipCardComponent>
        </div>
    );
};

export default SpecialitiesComponent;