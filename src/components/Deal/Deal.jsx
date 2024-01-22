import React from 'react';
import s from './Deal.module.sass'

function Deal({startDate,finishDate, description}) {
    return (
        <div className={s.deal}>
            <h3><span>Начало:</span> {startDate}</h3>
            <h3><span>Конец:</span> {finishDate}</h3>
            <p><span>Описание:</span> {description}</p>
        </div>
    );
}

export default Deal;