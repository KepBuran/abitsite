import React, {FC} from 'react';
import SHI122_IMG from "../../assets/img/mainPage/122SHI.png";

interface FlipCardProps {
    image: string;
    name: string;
    description: string;
    url: string;
}

const FlipCardComponent: FC<FlipCardProps> = ({image, name, description, url}) => {
    return (
        <div className="speciality">
            <h2 className="speciality-name">{name}</h2>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={image} alt={name}></img>
                    </div>
                    <div className="flip-card-back">
                        <article>
                            <h3 className="header">Короткий опис</h3>
                            <p className="description">{description}</p>
                        </article>
                        <div className="speciality-link-container">
                            <a className="speciality-link" href={url}>Освітня програма</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCardComponent;