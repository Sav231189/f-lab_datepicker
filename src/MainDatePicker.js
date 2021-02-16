import React, {useState, useEffect} from 'react';
import s from "./MainDatePicker.module.scss";
import {ItemDatePicker} from "./ItemDatePicker";

export const MainDatePicker = ({date, setActiveDate, listActiveDate, setListActiveDate}) => {

    const [listDateItem, setListDateItem] = useState([]);
    useEffect(() => {createListDateItem()}, [date]);

    const checkActiveItem = (newDate) => {
        let bool = false;
        for (let i = 0; i < listActiveDate.length; i++) {
            if (listActiveDate[i].toLocaleDateString() === newDate.toLocaleDateString()) {
                bool = true;
            }
        }
        return bool;
    };

    const createListDateItem = () => {
        // последний день месяца (28-31)
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        // последний день прошедшего месяца (28-31)
        const oldMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        // день недели первого дня месяца
        const nameWeekFirstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        let arr = [];
        for (let i = 0; i < nameWeekFirstDay - 1; i++) {
            let newDate = new Date(date.getFullYear(), date.getMonth() - 1, oldMonthLastDay - i);
            arr.unshift({
                date: newDate,
                type: 'old',
                active: checkActiveItem(newDate)
            });
        }
        for (let i = 1; i <= lastDay; i++) {
            let newDate = new Date(date.getFullYear(), date.getMonth(), i);
            arr.push({
                date: newDate,
                type: 'now',
                active: checkActiveItem(newDate)
            });
        }
        let count = 36 - arr.length;
        for (let i = 1; i < count; i++) {
            let newDate = new Date(date.getFullYear(), date.getMonth() + 1, i);
            arr.push({
                date: newDate,
                type: 'future',
                active: checkActiveItem(newDate)
            });
        }
        if (arr.length > 35) {
            let count = 43 - arr.length;
            for (let i = 1; i < count; i++) {
                let newDate = new Date(date.getFullYear(), date.getMonth() + 1, i);
                arr.push({
                    date: newDate,
                    type: 'future',
                    active: checkActiveItem(newDate)
                });
            }
        }
        setListDateItem(arr);
    };

    return (
        <div className={s.MainDatePicker}>
            <div className={s.mainTitle}>
                <span>ПН</span><span>ВТ</span><span>СР</span><span>ЧТ</span>
                <span>ПТ</span><span>СБ</span><span>ВС</span>
            </div>
            <div className={s.mainBox}>
                {listDateItem.map(el => <ItemDatePicker key={el.date}
                                                        el={el}
                                                        setActiveDate={setActiveDate}
                />)}
            </div>
        </div>
    )
};