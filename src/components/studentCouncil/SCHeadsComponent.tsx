import React from 'react';
import head1Img from "../../assets/img/studentCouncilPage/head1.jpg";
import head2Img from "../../assets/img/studentCouncilPage/head2.jpg";
import head3Img from "../../assets/img/studentCouncilPage/head3.jpg";
import head4Img from "../../assets/img/studentCouncilPage/head4.jpg";
import head5Img from "../../assets/img/studentCouncilPage/head5.jpg";

const ScHeadsComponent = () => {
    return (
        <section className="heads-sc right-animation">
            <h2>Голови СР</h2>
            <div className="heads-sc-pictures">
                <div className="head-sc-container head-sc-container-small head-sc-left"><div className="dummy-ratio"></div>  <div className="head-sc-img-small" style={{backgroundImage: `url(${head1Img})`}}> </div> <div className="head-sc-text-small"></div> </div>
                <div className="head-sc-container head-sc-container-medium"><div className="dummy-ratio"></div><div className="head-sc-img-medium" style={{backgroundImage: `url(${head2Img})`}}> </div> <div className="head-sc-text-medium"></div> </div>
                <div className="head-sc-container head-sc-container-big"><div className="dummy-ratio"></div><div className="head-sc-img-big" style={{backgroundImage: `url(${head3Img})`}}> </div> <div className="head-sc-text-big"></div> </div>
                <div className="head-sc-container head-sc-container-medium"><div className="dummy-ratio"></div><div className="head-sc-img-medium" style={{backgroundImage: `url(${head4Img})`}}> </div> <div className="head-sc-text-medium"></div> </div>
                <div className="head-sc-container head-sc-container-small head-sc-right"><div className="dummy-ratio"></div><div className="head-sc-img-small" style={{backgroundImage: `url(${head5Img})`}}> </div> <div className="head-sc-text-small"></div></div>
            </div>
        </section>
    );
};

export default ScHeadsComponent;