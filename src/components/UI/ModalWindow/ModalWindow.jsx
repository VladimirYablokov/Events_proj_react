import React from 'react';
import s from './ModalWindow.module.sass'

let style = {border: 0}

function ModalWindow({children, closeModal}) {
    console.log(children)
    // if (children ===)
    return (
        <>
            <div className={s.container}
                 onClick={closeModal}>
            </div>
            <div className={s.modal}
                 onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </>
    );
}

export default ModalWindow;