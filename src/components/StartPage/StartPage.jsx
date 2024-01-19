import React, {useState} from 'react';
import s from './StartPage.module.sass'
import Button from "../UI/Button";
import ModalWindow from "../UI/ModalWindow";

function StartPage() {

    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(() => false)
    return (
        <div className={s.start}>
            <p>Добро пожаловать в менеджер задач!</p>
            <Button onClick={() => setModal(() => true)}>
                Запустить!
            </Button>
            {
                modal &&
                <ModalWindow closeModal={closeModal}>

                </ModalWindow>
            }

        </div>
    );
}

export default StartPage;