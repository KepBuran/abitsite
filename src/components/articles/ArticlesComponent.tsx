import React, {ReactElement} from 'react';
import dataArticles from "../../data/dataArticles";
import {useMediaQuery} from "react-responsive";


const ArticlesComponent = () => {
    const isTwoArticleBlock = useMediaQuery({ query: '(min-width: 1550px)' });
    const articles = dataArticles;


    const articleBackground = (index: number, arr: any[]): ReactElement | null => {
        if (isTwoArticleBlock)
            if (index%2)
                return null;
            else
                index =  Math.floor(index/2);

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

    const articleClass = (index: number) => {
        let className: string = "article";
        if (isTwoArticleBlock) {
            className += index % 4 < 2 ? " article-block-right": " article-block-left"};
        return index % 2 ? className+" article-left": className+" article-right";
    }

    const articleElement = (article: {title: string, imgUrl: string, url: string}, index: number): ReactElement => {
        return (
            <div key={index} className={articleClass(index)}>
                <div className="article-image" style={{backgroundImage:`url(${article.imgUrl})`}}> </div>
                <div className="article-text-wrapper">
                    <a href={article.url} target="_blank" className="article-text">ЧИТАТИ</a>
                </div>
            </div>)
    }


    const initArticles = (): ReactElement[] => {
         return articles.map((article, index, arr) => {
             if (isTwoArticleBlock && index%2) {
                 return (<></>);
             }

             let articleEl: ReactElement[] = [articleElement(article, index)];
             if (isTwoArticleBlock && arr.length > index+1) articleEl.push(articleElement(arr[index+1], index+1))

            return (
                <div className={"article-wrapper" + (index === 0 ? " article-start": "")} >
                    {articleBackground(index, arr)}
                    {articleEl}
                </div>
            )
        })

    }


    return (
        <section>
            <div className="articles">
            {initArticles()}
            </div>
        </section>
    );
};

export default ArticlesComponent;