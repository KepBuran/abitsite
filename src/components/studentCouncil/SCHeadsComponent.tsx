import React, {MouseEventHandler, ReactElement, useState} from 'react';
import dataHeads from "../../data/dataHeads";


const ScHeadsComponent = () => {
    const [index, setIndex] = useState(2);

    const amountOfHeads = 5;

    const centerIndex = (e: MouseEventHandler<HTMLDivElement>) => {
        // setIndex((e.target as HTMLDivElement).data("key"));

    }


    const headElement = (order: number, index: number) : ReactElement => {
        let directionClass: string = "";
        let sizeClass: string = "";

        switch (order) {
            case 0:
                directionClass = "head-sc-left";
                sizeClass = "-small";
                break;
            case 1:
                sizeClass = "-medium";
                break;
            case 2:
                sizeClass = "-big";
                break;
            case 3:
                sizeClass = "-medium";
                break;
            case 4:
                directionClass = "head-sc-right";
                sizeClass = "-small";
        }

        return (<div data-index={index} className={`head-sc-container head-sc-container${sizeClass} ${directionClass}`} >
            <div  className={`head-sc-img${sizeClass}`} style={{backgroundImage: `url(${dataHeads[index].imgUrl})`}}> </div>
        </div>)
    }


    const initHeads = (index: number): ReactElement[] => {
        let result: ReactElement[] = [];
        let headsHalf = Math.floor(amountOfHeads/2);

        for (let i = index-headsHalf; i<=index+headsHalf; i++) {
            console.log(i+" head")
            let headsIndex = i;
            headsIndex = headsIndex<0 ? dataHeads.length+headsIndex : headsIndex;
            headsIndex = headsIndex>dataHeads.length ? headsIndex-dataHeads.length : headsIndex;

            result.push(headElement(i, headsIndex));
        }
        return result;
    }


    return (
        <section className="heads-sc right-animation">
            <h2>Голови СР</h2>
            <div className="heads-sc-pictures">
                {initHeads(index)}
            </div>
        </section>
    );
};

export default ScHeadsComponent;