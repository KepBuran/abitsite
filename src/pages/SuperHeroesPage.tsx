import React from 'react';
import SliderComponent from "../components/slider/SliderComponent";
import '../styles/SuperHeroes.css'
import dataSliderSuperHeroes from "../data/dataSliderSuperHeroes";
import SuperHeroesComponent from "../components/superHeroes/SuperHeroesComponent";
import BackgroundImg from "../assets/img/superHeroesPage/Background.png"

const SuperHeroesPage = () => {

    const aboutTeam: string = "инице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов \n" +
        "\n" +
        "инице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ips";


    return (
        <main className="heroes-page" style={{backgroundImage: `url(${BackgroundImg})`}}>
            <h1>СУПЕРГЕРОЇ</h1>
            <SliderComponent dataSlider={dataSliderSuperHeroes}></SliderComponent>

            <section className="about-team-section">
                <h2>Про команду</h2>
                <p className="about-team-text">{aboutTeam}</p>
            </section>

            <SuperHeroesComponent></SuperHeroesComponent>

            <section className="join-heroes">
                <p className="join-heroes-text">Хочеш стати супергероєм?</p>
                <a href={"https://t.me/sen4ello"} className="join-heroes-link">ТИЦЬ</a>
            </section>
        </main>
    );
};

export default SuperHeroesPage;