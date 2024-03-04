import React, {useContext} from 'react';
import {MyContext} from "../../context";
import s from './Deal.module.sass';
import CloseButton from "../UI/CloseButton";

function Deal({id, startDate, finishDate, description}) {
    const {closeDeal, convertDate} = useContext(MyContext);
    console.log(`${convertDate(new Date())} : : : ${convertDate(new Date(finishDate))}`)

    let boxShadowColor;
    if (new Date() > new Date(finishDate)) {
        boxShadowColor = '0 0 10px red'
    }  else {
        boxShadowColor = '0 0 10px green'
    }

    if (convertDate(new Date()) === convertDate(new Date(finishDate))) {
        boxShadowColor = '0 0 10px gold'
    }
    const style = {boxShadow: boxShadowColor};

    return (
        <div className={s.deal} style={style}>
            <h3>
                <span>Начало:</span> {convertDate(startDate)}
            </h3>
            <h3>
                <span>Конец:</span> {convertDate(finishDate)}
            </h3>
            <p>
                <span>Описание:</span> {description}
            </p>
            <CloseButton handler={() => closeDeal(id)}>
                ❌
            </CloseButton>
        </div>
    );
}

export default Deal;