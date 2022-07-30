import React from 'react';

import MainPicture from "../../assets/img/mainPage/Main1_blured.jpg";
import '../../styles/pages/mainPage/MainPicture.css';


const MainPictureComponent = () => {
    const divStyle = {
        backgroundImage: 'url('+MainPicture+')',
        // backgroundSize: '100% 100%',
    };


    return (
        <div className="main-picture" style={divStyle}>
            <div className="vertical-center">
                <p className="medium-font">Що таке</p>
                <p className="big-font">НН ІПСА?</p>
            </div>
        </div>
    );
};

export default MainPictureComponent;