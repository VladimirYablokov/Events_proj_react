import React from 'react';
import s from './Deal.module.sass'

function Deal({id, date, description}) {
    return (
        <div className={s.deal}>
            <h2>{date}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Deal;