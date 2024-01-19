import React from 'react';
import s from './AddDeal.module.sass'
import Field from "../UI/Field";
import Button from "../UI/Button";

function AddDeal() {
    return (
        <form className={s.addForm}>
            <Field label={'Число начала'} name={'date'} type={'date'}/>
            <Field label={'описание дела'} name={'description'} type={'textarea'}/>
            <Button>Добавить</Button>
        </form>
    );
}

export default AddDeal;