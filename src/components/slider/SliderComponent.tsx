import React, {FC, useState} from 'react';
import '../../styles/Slider.css';
import SliderButtonComponent from './SliderButtonComponent';
import {v4 as uuidv4} from "uuid";

interface SliderProps {
    dataSlider: {
        id: string,
        url: string
    }[]
}


const SliderComponent: FC<SliderProps> = ({dataSlider}) => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = (index: number) => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={obj.url}
                        />
                    </div>
                )
            })}
            <SliderButtonComponent moveSlide={nextSlide} direction={"next"} />
            <SliderButtonComponent moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: dataSlider.length}).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default SliderComponent;