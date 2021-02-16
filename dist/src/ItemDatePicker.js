import React from 'react';
import s from "./ItemDatePicker.module.scss";

export const ItemDatePicker = ({el,setActiveDate}) => {

    const changeActiveItem = (e) => {
        setActiveDate(el);
    };
    return (
        <div onClick={changeActiveItem}
             className={s.ItemDatePicker +' '+
             (el.type !== 'now' ? s.noActive :false) + ' ' +
             (el.active ? s.active :false)}
        >
            {el.date.getDate()}
        </div>
    )
};