import React from 'react';
import '../styles/Footer.css'

import abitChannelIcon from '../assets/icons/footer/abit-channel.png';
import abitChatIcon from '../assets/icons/footer/abit-chat.png';
import sovaIcon from '../assets/icons/footer/iasa-sova.jpg';
import abitInstIcon from '../assets/icons/footer/abit-inst.jpg';

const FooterComponent = () => {
    return (
        <footer>
            <div className="footer-icons-container">
                <a href={'https://t.me/abitiasa'} target="_blank" className="footer-icon-container"> <span className="footer-icon abit-channel" style={{backgroundImage: `url(${abitChannelIcon})`}}></span> </a>
                <a href={'https://t.me/abitiasa_chat'} target="_blank" className="footer-icon-container"> <span className="footer-icon abit-chat" style={{backgroundImage: `url(${abitChatIcon})`}}></span> </a>
                <a href={'https://t.me/analyticsIASA'} target="_blank" className="footer-icon-container"> <span className="footer-icon sova" style={{backgroundImage: `url(${sovaIcon})`}}></span> </a>
                <a href={'https://www.instagram.com/iasa_abit/'} target="_blank" className="footer-icon-container"> <span className="footer-icon abit-inst" style={{backgroundImage: `url(${abitInstIcon})`}}></span> </a>
            </div>
            <p className="footer-license">(c) IASA Student Council</p>
        </footer>
    );
};

export default FooterComponent;