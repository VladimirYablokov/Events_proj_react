import React from 'react';
import {useContext} from "react";
import {MyContext} from "../../context";
import s from './DealContainer.module.sass';
import Deal from "../Deal";

function DealContainer() {
    const {deals} = useContext(MyContext);

    return (
        <div className={s.container}>
            {deals.map(deal => <Deal key={deal.id}{...deal}/>)}
        </div>
    );
}

export default DealContainer;