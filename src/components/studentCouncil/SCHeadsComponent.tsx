import React, {ReactElement, useState} from 'react';
import '../../styles/pages/StudentCouncil/SCHeads.css'
import dataHeads from "../../data/dataHeads";
import { motion } from 'framer-motion';



const ScHeadsComponent = () => {
    const [index, setIndex] = useState(2);
    const amountOfHeads = 5;

    const headElement = (order: number, index: number) : ReactElement => {
        let directionClass: string = "";
        let sizeClass: string = "";
        let clickEvent: () => void = () => {return};

        switch (order) {
            case 0:
                directionClass = "head-sc-left";
                sizeClass = "-small";
                clickEvent = () => changeIndex(-2);
                break;
            case 1:
                sizeClass = "-medium";
                clickEvent = () => changeIndex(-1);
                break;
            case 2:
                sizeClass = "-big";
                break;
            case 3:
                sizeClass = "-medium";
                clickEvent = () => changeIndex(1);
                break;
            case 4:
                directionClass = "head-sc-right";
                clickEvent = () => changeIndex(2);
                sizeClass = "-small";
                break;
            default:
                sizeClass = "-small";
        }

        return (<motion.div animate={{opacity: imgOpacity}} transition={{ease: "easeIn",duration: 0.5}} className={`head-sc-container head-sc-container${sizeClass} ${directionClass}`} >
            <div className={`head-sc-img head-sc-img${sizeClass}`} style={{backgroundImage: `url(${dataHeads[index].imgUrl})`}} key={index} onClick={clickEvent}> </div>
        </motion.div>)
    }

    const initHeads = (index: number): ReactElement[] => {
        let result: ReactElement[] = [];
        let headsHalf = Math.floor(amountOfHeads/2);
        let order = 0;
        for (let i = index-headsHalf; i<=index+headsHalf; i++) {
            console.log(i);
            let headsIndex = i;
            headsIndex = headsIndex<0 ? dataHeads.length+headsIndex : headsIndex;
            headsIndex = headsIndex>dataHeads.length-1 ? headsIndex-dataHeads.length : headsIndex;

            result.push(headElement(order, headsIndex));
            order++;
        }

        return result;
    }


    const changeIndex = (step: number ) => {
        let newIndex = index+step;
        newIndex = newIndex>dataHeads.length-1 ? newIndex-dataHeads.length : newIndex;
        newIndex = newIndex<0 ? newIndex+dataHeads.length : newIndex;
        setTextOpacity(0);
        setImgOpacity(0.3);
        setTimeout(() => {
            setImgOpacity(1);
            setTextOpacity(1);
            setIndex(newIndex);
            }, 200);

    }


    const getHeadName = (): string => {
        return dataHeads[index].name;
    }

    const getHeadTitle = (): string => {
        return dataHeads[index].headTitle;
    }

    const [imgOpacity, setImgOpacity] = useState(1);
    const [transtion, setTransition] = useState({ease: "easeIn", duration: 0});
    const [textOpacity, setTextOpacity] = useState(1);


    return (
        <section className="heads-sc right-animation">
            <h2>Голови СР</h2>
            <div className="heads-sc-pictures">
                {initHeads(index)}
            </div>
            <motion.p animate={{opacity: textOpacity}} transition={{ease: "easeIn", duration: 0.1}} className="head-name">{getHeadName()}</motion.p>
            <motion.p animate={{opacity: textOpacity}}  className="head-title">{getHeadTitle()}</motion.p>

        </section>
    );
};

export default ScHeadsComponent;