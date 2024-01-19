import React from 'react';
import s from './DealContainer.module.sass'
import Deal from "../Deal";

function DealContainer({deals}) {

    // const {deals} = useContext(MyContext)
    return (
        <div className={s.container}>
            {deals.map(deal => <Deal key={deal.id}{...deal}/>)}
        </div>
    );
}

export default DealContainer;