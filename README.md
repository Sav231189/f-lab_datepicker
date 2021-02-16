# date_picker_ckb

Календарь с возможностью выбора даты в 4-х режимах.

![Image alt](https://github.com/Sav231189/f-lab_datepicker/raw/master/src/assets/images/image.png)


##### Installation: 
`npm install f-lab_datepicker`

##
##### imports: 
`import DatePicker from "f-lab_datepicker";`

 `import 'f-lab_datepicker/dist/index.css'`

##

Компонент принимает параметры:
### `mode={'one'}`
- 'one' = можно выбрать одну дату.
- 'two' = можно выбрать только две даты.
- 'range' = можно выбрать промежуток дат от - до.
- 'multiple' = можно выбирать неограниченное число дат.

### `callback={()=>{}}`
- при изменении выбора даты будет запускаться функция переданная в callback, с параметром в виде массива с датами в ms, в зависимости от режима.
