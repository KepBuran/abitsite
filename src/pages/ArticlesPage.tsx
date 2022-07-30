import React from 'react';
import dataArticles from "../data/dataArticles";

import articleStartImg from "../assets/img/articlesPage/background/articleStart.png";
import articleRightImg from "../assets/img/articlesPage/background/articleRight.png";
import articleLeftImg from "../assets/img/articlesPage/background/articleLeft.png";
import articleRightEndImg from "../assets/img/articlesPage/background/articleEndRight.png";
import articleLeftEndImg from "../assets/img/articlesPage/background/articleEndLeft.png";

import '../styles/Articles.css';
import BackgroundImg from "../assets/img/articlesPage/Background.png";
import ArticlesComponent from "../components/articles/ArticlesComponent";
import { motion } from 'framer-motion';

const ArticlesPage = () => {



    return (
        <main className="articles-page" style={{backgroundImage: `url(${BackgroundImg})`}}>
            <ArticlesComponent></ArticlesComponent>
        </main>
    );
};

export default ArticlesPage;



// <motion.main className="articles-page" style={{backgroundImage: `url(${BackgroundImg})`}}
//       initial={{opacity: 0, x: -1000}}
//       animate={{opacity: 1, x: 0}}
//       exit={{opacity: 0, x: 1000, transition: {duration: 2}}}
//       transition={{
//           duration: 1,
//           // ease: [0, 0.71, 0.2, 1.01]
//       }}
// >