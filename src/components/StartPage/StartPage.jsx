import React, {useState} from 'react';
import s from './StartPage.module.sass'
import Button from "../UI/Button";
import ModalWindow from "../UI/ModalWindow";
import DealContainer from "../DealContainer";
import AddDeal from "../AddDeal";

function StartPage({deals}) {

    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(() => false)

    return (
        <div className={s.start}>
            <p>Добро пожаловать в менеджер задач!</p>
            <Button onClick={() => setModal(() => true)}>
                Запустить
            </Button>
            {
                modal &&
                <ModalWindow closeModal={closeModal}>
                    <AddDeal/>

                    <DealContainer deals={deals}/>
                </ModalWindow>
            }

        </div>
    );
}

export default StartPage;