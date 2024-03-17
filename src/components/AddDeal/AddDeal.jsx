import React, {useContext} from 'react';
import {MyContext} from "../../context";
import s from './AddDeal.module.sass';
import Field from "../UI/Field";
import Button from "../UI/Button";
import ClearButton from "../UI/ClearButton";

function AddDeal() {
    const {addDeal, clearDeals, getFinishDate} = useContext(MyContext);

    const submit = (event) => {
        const {date, description} = event.target;
        event.preventDefault();
        if (date.value && description.value) {
            addDeal({
                id: Date.now(),
                startDate: date.value,
                finishDate: getFinishDate(date.value),
                description: description.value
            });
        }
    }

    return (
        <form className={s.addForm}
              onSubmit={submit}>
            <Field label={'Число:'}
                   name={'date'}
                   type={'date'}/>
            <Field label={'Описание:'}
                   name={'description'}
                   type={'search'}
                   overflow={'scroll'}/>
            <Button>
                Добавить
            </Button>
            <ClearButton type={'button'}
                         onClick={() => clearDeals()}>
                Очистить
            </ClearButton>
        </form>
    );
}

export default AddDeal;