import React from 'react';
import {MyContext} from "../../context";
import {useContext} from "react";
import Deal from "../Deal";
import s from './DealContainer.module.sass'

function DealContainer() {
    const {deals} = useContext(MyContext)
    return (
        <div className={s.container}>
            {deals.map(deal => <Deal key={deal.id}{...deal}/>)}
        </div>
    );
}

export default DealContainer;