import React from 'react';
import s from './ModalWindow.module.sass'

function ModalWindow({closeModal}) {
    return (
        <>
            <div className={s.container}
                 onClick={closeModal}>
            </div>
            <div className={s.modal}
                 onClick={event => event.stopPropagation()}>

            </div>
        </>
    );
}

export default ModalWindow;