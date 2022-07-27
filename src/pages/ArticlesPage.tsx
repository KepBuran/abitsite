import React from 'react';
import dataArticles from "../data/dataArticles";

import articleStartImg from "../assets/img/articlesPage/background/articleStart.png";
import articleRightImg from "../assets/img/articlesPage/background/articleRight.png";
import articleLeftImg from "../assets/img/articlesPage/background/articleLeft.png";
import articleRightEndImg from "../assets/img/articlesPage/background/articleEndRight.png";
import articleLeftEndImg from "../assets/img/articlesPage/background/articleEndLeft.png";

import '../styles/Articles.css';
import BackgroundImg from "../assets/img/articlesPage/Background.png";


const ArticlesPage = () => {
    const articleBackground = (index: number, arr: any[]) => {
        let className: string = "";
        let direction: string = index % 2 ? "left" : "right";
        let startComponents = null;
        if (index === 0) {
            className+="-start"
            startComponents = (<>
                <div className="point"></div>
                <div className="line top-line"></div>
            </>);
        };

        // if (index === arr.length-1)

        return (
            <>
                {startComponents}
                <div className={"line oblique-"+direction+"-top-line"+className}></div>
                <div className={"point point-"+direction+className}></div>
                <div className={"line oblique-"+direction+"-down-line"+className}></div>
                <div className={"line bottom-line"+className+"-"+direction}></div>
            </>
        );
    }

    const articleClass = (index: number, arr: any[]) => {
        let className: string = "article";
        if (index === 0) return className+" article-first";
        return index % 2 ? className+" article-left": className+" article-right";
    }


    return (
        <main className="articles-page" style={{backgroundImage: `url(${BackgroundImg})`}}>
            <h1>СТАТТІ</h1>
            <div className="articles">
                {dataArticles.map((article, index, arr) => {
                    let articleClassName: string = articleClass(index, arr);
                    return (
                        <div className={"article-wrapper" + (index === 0 ? " article-start": "")} >
                            {articleBackground(index, arr)}
                            <div key={index} className={articleClassName}>
                                <div className="article-image" style={{backgroundImage:`url(${article.imgUrl})`}}> </div>
                                <div className="article-text-wrapper">
                                    <a href={article.url} target="_blank" className="article-text">ЧИТАТИ</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    );
};

export default ArticlesPage;