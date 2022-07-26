import React from 'react';
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import '../../styles/main/MainSlider.css';


import slideImg1 from '../../assets/img/mainPage/Slider/Slider1.jpg';
import slideImg2 from '../../assets/img/mainPage/Slider/Slider2.jpg';
import slideImg3 from '../../assets/img/mainPage/Slider/Slider3.jpg';


const slideImages = [
    {
        url: slideImg1,
        caption: 'Slide 1'
    },
    {
        url: slideImg2,
        caption: 'Slide 2'
    },
    {
        url: slideImg3,
        caption: 'Slide 3'
    },
];



const MainSliderComponent = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide-effect" key={index}>
                        <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default MainSliderComponent;