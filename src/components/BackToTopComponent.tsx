import React, {useEffect, useState} from 'react';
import '../styles/components/BackToTop.css'
import buttonIcon from '../assets/icons/BackToTopButton.svg'

const BackToTopComponent = () => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setIsShown(true);
                return
            }
            setIsShown(false);
        })
    });

    const scrollUp = () => {
        window.scrollTo( {
            top: 0,
            behavior: "smooth"
        })

    }

    return (
        <div className={"back-to-top-button"}>
            {isShown && (
                <button onClick={scrollUp} style={{backgroundImage: `url(${buttonIcon})`}}></button>
            )}
        </div>
    );
};

export default BackToTopComponent;