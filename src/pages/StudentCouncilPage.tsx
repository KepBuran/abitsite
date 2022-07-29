import React from 'react';
import '../styles/StudentCouncil.css';
import aboutSCImg from '../assets/img/studentCouncilPage/aboutSC.jpg';

import head1Img from '../assets/img/studentCouncilPage/head1.jpg';
import head2Img from '../assets/img/studentCouncilPage/head2.jpg';
import head3Img from '../assets/img/studentCouncilPage/head3.jpg';
import head4Img from '../assets/img/studentCouncilPage/head4.jpg';
import head5Img from '../assets/img/studentCouncilPage/head5.jpg';
import BackgroundImg from "../assets/img/studentCouncilPage/Background.png"


const StudentCouncilPage = () => {
    const aboutSC: string = "           инице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов \n" +
        "\n" +
        "           инице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ips";



    return (
        <main className="sc-page" style={{backgroundImage: `url(${BackgroundImg})`}}>
            <h1>СТУДРАДА ІПСА</h1>
            <div className="about-sc">
                <div className="about-sc-text" >{aboutSC}</div>
                <div className="about-sc-image" style={{backgroundImage: `url(${aboutSCImg})`}}> </div>
            </div>

            <div className="heads-sc">
                <h2>Голови СР</h2>
                <div className="heads-sc-pictures">
                    <div className="head-sc-container head-sc-container-small head-sc-left"><div className="dummy-ratio"></div>  <div className="head-sc-img-small" style={{backgroundImage: `url(${head1Img})`}}> </div> <div className="head-sc-text-small"></div> </div>
                    <div className="head-sc-container head-sc-container-medium"><div className="dummy-ratio"></div><div className="head-sc-img-medium" style={{backgroundImage: `url(${head2Img})`}}> </div> <div className="head-sc-text-medium"></div> </div>
                    <div className="head-sc-container head-sc-container-big"><div className="dummy-ratio"></div><div className="head-sc-img-big" style={{backgroundImage: `url(${head3Img})`}}> </div> <div className="head-sc-text-big"></div> </div>
                    <div className="head-sc-container head-sc-container-medium"><div className="dummy-ratio"></div><div className="head-sc-img-medium" style={{backgroundImage: `url(${head4Img})`}}> </div> <div className="head-sc-text-medium"></div> </div>
                    <div className="head-sc-container head-sc-container-small head-sc-right"><div className="dummy-ratio"></div><div className="head-sc-img-small" style={{backgroundImage: `url(${head5Img})`}}> </div> <div className="head-sc-text-small"></div></div>
                </div>
            </div>

            <div className="our-work">
                <h2>Наша робота</h2>
                <div className="gallery"></div>
            </div>
        </main>
    );
};

export default StudentCouncilPage;