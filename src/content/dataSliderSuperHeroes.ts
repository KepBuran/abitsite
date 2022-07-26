import { v4 as uuidv4 } from 'uuid';
import SliderImg1 from '../assets/img/superHeroesPage/Slider/Slider1.jpg';
import SliderImg2 from '../assets/img/superHeroesPage/Slider/Slider2.jpg';
import SliderImg3 from '../assets/img/superHeroesPage/Slider/Slider3.jpg';



const dataSliderSuperHeroes = [
    {
        id: uuidv4(),
        url: SliderImg1
    },
    {
        id: uuidv4(),
        url: SliderImg2
    },
    {
        id: uuidv4(),
        url: SliderImg3
    },
];

export default dataSliderSuperHeroes;