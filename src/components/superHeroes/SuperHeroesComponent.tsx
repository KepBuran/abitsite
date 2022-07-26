import React from 'react';
import dataSuperHeroes from "../../content/dataSuperHeroes";

const SuperHeroesComponent = () => {
    return (
        <section className="super-heroes-section">
            <h2>Супергерої</h2>
            <div className="super-heroes">
                {dataSuperHeroes.map((hero, index) => {
                    return (
                        <div key={index} className="super-hero">
                            <a href={hero.contact} className="super-hero-link">
                                <div className="super-hero-image" style={{backgroundImage: `url(${hero.imgUrl})` }}></div>
                                <div className="super-hero-name"><p className="super-hero-name"> {hero.name} </p></div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default SuperHeroesComponent;