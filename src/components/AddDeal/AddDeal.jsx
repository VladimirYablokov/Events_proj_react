import React, {useContext} from 'react';
import s from './AddDeal.module.sass'
import Field from "../UI/Field";
import Button from "../UI/Button";
import {MyContext} from "../../context";
import ClearButton from "../UI/ClearButton";

function AddDeal() {
    const {addDeal, clearDeals} = useContext(MyContext)

    const convertDate = (inputDate) => {
        let date = new Date(inputDate)
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = month < 10 ? '0' + month : month
        day = day < 10 ? '0' + day : day
        return `${day}.${month}.${year}`
    }

    const getFinishDate = (inputDate) => {
        let startDate = new Date(inputDate);
        startDate.setDate(startDate.getDate() + 7);
        return convertDate(startDate.toISOString().split('T')[0])
    }

    const submit = (event) => {
        const {date, description} = event.target
        event.preventDefault()
        if (date.value && description.value) {
            addDeal({
                id: Date.now(),
                startDate: convertDate(date.value),
                finishDate: getFinishDate(date.value),
                description: description.value
            })
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
                   type={'textarea'}
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