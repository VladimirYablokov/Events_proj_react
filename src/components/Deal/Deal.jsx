import React, {useContext} from 'react';
import s from './Deal.module.sass'
import CloseButton from "../UI/CloseButton";
import {MyContext} from "../../context";

function Deal({id, startDate, finishDate, description}) {
    const {closeDeal} = useContext(MyContext)
    return (
        <div className={s.deal}>
            <h3><span>Начало:</span> {startDate}</h3>
            <h3><span>Конец:</span> {finishDate}</h3>
            <p><span>Описание:</span> {description}</p>
            <CloseButton handler={() => closeDeal(id)}>❌</CloseButton>
        </div>
    );
}

export default Deal;