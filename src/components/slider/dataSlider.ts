import { v4 as uuidv4 } from 'uuid';
import SliderImg1 from '../../assets/img/mainPage/Slider/Slider1.jpg';
import SliderImg2 from '../../assets/img/mainPage/Slider/Slider2.jpg';
import SliderImg3 from '../../assets/img/mainPage/Slider/Slider3.jpg';



const dataSlider = [
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        url: SliderImg1
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        url: SliderImg2
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        url: SliderImg3
    },
];

export default dataSlider;