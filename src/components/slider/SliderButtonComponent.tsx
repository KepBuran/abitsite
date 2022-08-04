import React, {FC} from "react";
import '../../styles/components/Slider.css';
import leftArrow from "../../assets/icons/slider/left-arrow2.svg";
import rightArrow from "../../assets/icons/slider/right-arrow2.svg";
import SliderComponent from "./SliderComponent";

interface ButtonProps {
    direction: string;
    moveSlide: () => void;

}

const SliderButtonComponent: FC<ButtonProps> = ({direction, moveSlide}) => {
    console.log(direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    );
}

export default SliderButtonComponent;