import React, {useState} from 'react';
import s from "./HeadDatePicker.module.scss";


export const HeadDatePicker = ({date, setDate}) => {

    const monthArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Юиль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    const yearsArr = [];
    for (let i = 0; i < 77; i++) yearsArr.push(new Date().getFullYear() - i);

    const [select, setSelect] = useState(false);

    const selectedYear = (e) => {
        console.log(e.target.innerHTML)
        if (select) {
            let newDate = new Date(date);
            newDate.setFullYear(e.target.innerHTML);
            setDate(newDate);
        }
        setSelect(!select);
    };

    const changeMonth = (e) => {
        let newDate = new Date(date);
        let activeMonth = date.getMonth();
        if (e.target.getAttribute('type') === 'left') {
            activeMonth = activeMonth === 0 ? 11 : activeMonth - 1;
            if (activeMonth === 11) newDate.setFullYear(date.getFullYear() - 1);
        } else {
            activeMonth = activeMonth === 11 ? 0 : activeMonth + 1;
            if (activeMonth === 0) newDate.setFullYear(date.getFullYear() + 1);
        }
        newDate.setMonth(activeMonth);
        setDate(newDate);
    };

    return (
        <div className={s.HeadDatePicker}>
            <div className={s.Month}>
                <svg type='left' onClick={changeMonth} width="50" height='30' viewBox="0 0 6.82666 6.82666"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="fil0"
                          d="M5.76 3.62667c0.117819,0 0.213335,-0.0955157 0.213335,-0.213335 0,-0.117819 -0.0955157,-0.213335 -0.213335,-0.213335l-4.69334 0c-0.117819,0 -0.213335,0.0955157 -0.213335,0.213335 0,0.117819 0.0955157,0.213335 0.213335,0.213335l4.69334 0z"
                          id="_506615984"/>
                    <path className="fil0"
                          d="M2.4487 5.09704c0.0833031,0.0833031 0.218366,0.0833031 0.301669,0 0.0833031,-0.0833031 0.0833031,-0.218366 0,-0.301669l-1.38204 -1.38204 1.38204 -1.38204c0.0833031,-0.0833031 0.0833031,-0.218366 0,-0.301669 -0.0833031,-0.0833031 -0.218366,-0.0833031 -0.301669,0l-1.53163 1.53163 -0.00125984 0.00122835c-0.083311,0.083311 -0.083311,0.21839 0,0.301701l1.5748e-005 -1.5748e-005 1.53287 1.53288z"
                          id="_506616128"/>
                </svg>
                <span> {monthArr[date.getMonth()]} </span>
                <svg type='right' onClick={changeMonth} width="50" height='30' viewBox="0 0 6.82666 6.82666"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="fil0"
                          d="M1.06666 3.2c-0.117819,0 -0.213335,0.0955157 -0.213335,0.213335 0,0.117819 0.0955157,0.213335 0.213335,0.213335l4.69334 0c0.117819,0 0.213335,-0.0955157 0.213335,-0.213335 0,-0.117819 -0.0955157,-0.213335 -0.213335,-0.213335l-4.69334 0z"/>
                    <path className="fil0"
                          d="M4.37796 1.72962c-0.0833031,-0.0833031 -0.218366,-0.0833031 -0.301669,0 -0.0833031,0.0833031 -0.0833031,0.218366 0,0.301669l1.38204 1.38204 -1.38204 1.38204c-0.0833031,0.0833031 -0.0833031,0.218366 0,0.301669 0.0833031,0.0833031 0.218366,0.0833031 0.301669,0l1.53163 -1.53163 0.00125984 -0.00122835c0.083311,-0.083311 0.083311,-0.21839 0,-0.301701l-1.5748e-005 1.5748e-005 -1.53287 -1.53288z"/>
                </svg>
            </div>
            <div className={s.Year} onClick={()=>setSelect(!select)}>
                <span className={s.select}>{date.getFullYear()}</span>
                <svg className={select ? s.active : ''}  type='right' width="24" height='24' viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg" >
                    <path d="M16,21a1,1,0,0,1-.71-.29l-8-8a1,1,0,1,1,1.42-1.42L16,18.59l7.29-7.3a1,1,0,0,1,1.42,1.42l-8,8A1,1,0,0,1,16,21Z"/>
                </svg>
                <div className={s.selectContainer} style={{display: `${select ? '' : 'none'}`}}>
                    {yearsArr.map(el => <span key={el} onClick={selectedYear} className={s.selectItem}>{el}</span>)}
                </div>
            </div>
        </div>
    )
};
