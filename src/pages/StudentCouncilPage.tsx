import React from 'react';
import '../styles/StudentCouncil.css';
import aboutSCImg from '../assets/img/studentCouncilPage/aboutSC.jpg';

import head1Img from '../assets/img/studentCouncilPage/head1.jpg';
import head2Img from '../assets/img/studentCouncilPage/head2.jpg';
import head3Img from '../assets/img/studentCouncilPage/head3.jpg';
import head4Img from '../assets/img/studentCouncilPage/head4.jpg';
import head5Img from '../assets/img/studentCouncilPage/head5.jpg';
import BackgroundImg from "../assets/img/studentCouncilPage/Background.png"
import SCHeadsComponent from "../components/studentCouncil/SCHeadsComponent";
import { motion } from 'framer-motion';


const StudentCouncilPage = () => {
    const aboutSC: string = "           инице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов \n" +
        "\n" +
        "           инице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ips";

    return (
        <main className="sc-page"
            style={{backgroundImage: `url(${BackgroundImg})`}} >

            <h1>СТУДРАДА ІПСА</h1>
            <section className="about-sc">
                <div className="about-sc-text" >{aboutSC}</div>
                <div className="about-sc-image" style={{backgroundImage: `url(${aboutSCImg})`}}> </div>
            </section>

            <SCHeadsComponent></SCHeadsComponent>

            <section className="our-work">
                <h2>Наша робота</h2>
                <div className="gallery"></div>
            </section>
        </main>
    );
};

export default StudentCouncilPage;