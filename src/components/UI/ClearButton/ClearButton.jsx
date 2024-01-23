import React from 'react';
import s from './ClearButton.module.sass'

function ClearButton({children,...props}) {
    return (
        <button className={s.clear}{...props}>{children}</button>
    );
}

export default ClearButton;