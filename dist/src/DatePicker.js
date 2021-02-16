import React, {useState, useEffect} from 'react';
import s from './DatePicker.module.scss';
import {HeadDatePicker} from "./HeadDatePicker";
import {MainDatePicker} from "./MainDatePicker";

export function DatePicker({mode = 'one', height = 300, width = 300, callback = undefined} = {}) {

    const [date, setDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
    const [listActiveDate, setListActiveDate] = useState(mode !== 'two' ? [date] : [date, date]);
    const [listRangeDate, setListRangeDate] = useState([date]);

    useEffect(() => {
        let newData = [];
        if (callback) {
            if (mode !== 'range') {
                for (let item of listActiveDate) {
                    newData.push(item.getTime())
                }
            }
            if (mode === 'range') {
                for (let item of listRangeDate) {
                    newData.push(item.getTime())
                }
            }
        }
        returnData(newData);
    }, [date]);

    const returnData = (data) => {
        if (callback) callback(data);
    };

    const setRangeActiveDate = (startDate, endDate) => {
        let newArr = [new Date(startDate)];
        while (newArr[newArr.length - 1] < endDate) {
            newArr.push(new Date(newArr[newArr.length - 1].getTime() + 86400000))
        }
        setListActiveDate(newArr);
    };

    const setActiveDate = (el) => {
        let newListActiveDate = new Array(...listActiveDate);
        let positionItem = new Date(el.date.toDateString()).getTime();

        switch (mode) {
            case 'one': {
                setDate(el.date);
                setListActiveDate([el.date]);
                break
            }
            case 'two': {
                let minActiveItem = new Date(listActiveDate[0].toDateString()).getTime();
                let maxActiveItem = new Date(listActiveDate[1].toDateString()).getTime();
                if (positionItem < minActiveItem) {
                    setDate(el.date);
                    setListActiveDate([el.date, new Date(maxActiveItem)]);
                } else if (positionItem > maxActiveItem) {
                    setDate(el.date);
                    setListActiveDate([new Date(minActiveItem), el.date]);
                } else if (positionItem > minActiveItem && positionItem < maxActiveItem) {
                    (positionItem - minActiveItem < maxActiveItem - positionItem)
                        ? setListActiveDate([el.date, new Date(maxActiveItem)])
                        : setListActiveDate([new Date(minActiveItem), el.date]);
                    setDate(el.date);
                } else if (positionItem === minActiveItem || positionItem === maxActiveItem) {
                    setListActiveDate([new Date(positionItem), new Date(positionItem)]);
                    setDate(el.date);
                }
                break
            }
            case 'range': {
                let minActiveItem = new Date(listRangeDate[0].toDateString()).getTime();
                let maxActiveItem = new Date(listRangeDate[0].toDateString()).getTime();
                for (let i = 0; i < listRangeDate.length; i++) {
                    (listRangeDate[i].getTime() < minActiveItem)
                        ? minActiveItem = new Date(listRangeDate[i].toDateString()).getTime()
                        : maxActiveItem = new Date(listRangeDate[i].toDateString()).getTime();
                }
                if (positionItem < minActiveItem) {
                    setRangeActiveDate(new Date(positionItem), new Date(maxActiveItem));
                    setDate(el.date);
                    setListRangeDate([el.date, new Date(maxActiveItem)]);
                } else if (positionItem > maxActiveItem) {
                    setRangeActiveDate(new Date(minActiveItem), new Date(positionItem));
                    setDate(el.date);
                    setListRangeDate([new Date(minActiveItem), el.date]);
                } else if (positionItem > minActiveItem && positionItem < maxActiveItem) {
                    if (positionItem - minActiveItem < maxActiveItem - positionItem) {
                        setRangeActiveDate(new Date(positionItem), new Date(maxActiveItem));
                        setListRangeDate([el.date, new Date(maxActiveItem)])
                    } else {
                        setRangeActiveDate(new Date(minActiveItem), new Date(positionItem));
                        setListRangeDate([new Date(minActiveItem), el.date]);
                    }
                    setDate(el.date);
                } else if (positionItem === minActiveItem || positionItem === maxActiveItem) {
                    setRangeActiveDate(new Date(positionItem), new Date(positionItem));
                    setListRangeDate([new Date(positionItem)]);
                    setDate(el.date);
                }
                break
            }
            case
            'multiple'
            : {
                if (!el.active && !newListActiveDate.includes(el.date, 0)) {
                    newListActiveDate.push(el.date)
                } else {
                    let i = newListActiveDate.findIndex(e => e.toDateString() === el.date.toDateString());
                    newListActiveDate.splice(i, 1);
                }
                el.active = !el.active;
                setListActiveDate(newListActiveDate);
                setDate(el.date);
                break
            }
        }

    };

    return (
        <div className={s.DatePicker}>
            <HeadDatePicker date={date} setDate={setDate}/>
            <MainDatePicker setActiveDate={setActiveDate} date={date}
                            setDate={setDate} listActiveDate={listActiveDate} setListActiveDate={setListActiveDate}/>
        </div>
    );
}

export default DatePicker;
