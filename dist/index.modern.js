import React, { useState, useEffect } from 'react';

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var s = {"DatePicker":"_92VyF","info":"_RnhwK"};

var s$1 = {"HeadDatePicker":"_3TWKW","Month":"_371Oj","Year":"_3jTqF","select":"_2HU-a","active":"_25-Ac","selectContainer":"_2z8a6","selectItem":"_utQEW"};

var HeadDatePicker = function HeadDatePicker(_ref) {
  var date = _ref.date,
      setDate = _ref.setDate;
  var monthArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Юиль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  var yearsArr = [];

  for (var i = 0; i < 77; i++) {
    yearsArr.push(new Date().getFullYear() - i);
  }

  var _useState = useState(false),
      select = _useState[0],
      setSelect = _useState[1];

  var selectedYear = function selectedYear(e) {
    console.log(e.target.innerHTML);

    if (select) {
      var newDate = new Date(date);
      newDate.setFullYear(e.target.innerHTML);
      setDate(newDate);
    }

    setSelect(!select);
  };

  var changeMonth = function changeMonth(e) {
    var newDate = new Date(date);
    var activeMonth = date.getMonth();

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

  return /*#__PURE__*/React.createElement("div", {
    className: s$1.HeadDatePicker
  }, /*#__PURE__*/React.createElement("div", {
    className: s$1.Month
  }, /*#__PURE__*/React.createElement("svg", {
    type: "left",
    onClick: changeMonth,
    width: "50",
    height: "30",
    viewBox: "0 0 6.82666 6.82666",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    className: "fil0",
    d: "M5.76 3.62667c0.117819,0 0.213335,-0.0955157 0.213335,-0.213335 0,-0.117819 -0.0955157,-0.213335 -0.213335,-0.213335l-4.69334 0c-0.117819,0 -0.213335,0.0955157 -0.213335,0.213335 0,0.117819 0.0955157,0.213335 0.213335,0.213335l4.69334 0z",
    id: "_506615984"
  }), /*#__PURE__*/React.createElement("path", {
    className: "fil0",
    d: "M2.4487 5.09704c0.0833031,0.0833031 0.218366,0.0833031 0.301669,0 0.0833031,-0.0833031 0.0833031,-0.218366 0,-0.301669l-1.38204 -1.38204 1.38204 -1.38204c0.0833031,-0.0833031 0.0833031,-0.218366 0,-0.301669 -0.0833031,-0.0833031 -0.218366,-0.0833031 -0.301669,0l-1.53163 1.53163 -0.00125984 0.00122835c-0.083311,0.083311 -0.083311,0.21839 0,0.301701l1.5748e-005 -1.5748e-005 1.53287 1.53288z",
    id: "_506616128"
  })), /*#__PURE__*/React.createElement("span", null, " ", monthArr[date.getMonth()], " "), /*#__PURE__*/React.createElement("svg", {
    type: "right",
    onClick: changeMonth,
    width: "50",
    height: "30",
    viewBox: "0 0 6.82666 6.82666",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    className: "fil0",
    d: "M1.06666 3.2c-0.117819,0 -0.213335,0.0955157 -0.213335,0.213335 0,0.117819 0.0955157,0.213335 0.213335,0.213335l4.69334 0c0.117819,0 0.213335,-0.0955157 0.213335,-0.213335 0,-0.117819 -0.0955157,-0.213335 -0.213335,-0.213335l-4.69334 0z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "fil0",
    d: "M4.37796 1.72962c-0.0833031,-0.0833031 -0.218366,-0.0833031 -0.301669,0 -0.0833031,0.0833031 -0.0833031,0.218366 0,0.301669l1.38204 1.38204 -1.38204 1.38204c-0.0833031,0.0833031 -0.0833031,0.218366 0,0.301669 0.0833031,0.0833031 0.218366,0.0833031 0.301669,0l1.53163 -1.53163 0.00125984 -0.00122835c0.083311,-0.083311 0.083311,-0.21839 0,-0.301701l-1.5748e-005 1.5748e-005 -1.53287 -1.53288z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: s$1.Year,
    onClick: function onClick() {
      return setSelect(!select);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: s$1.select
  }, date.getFullYear()), /*#__PURE__*/React.createElement("svg", {
    className: select ? s$1.active : '',
    type: "right",
    width: "24",
    height: "24",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16,21a1,1,0,0,1-.71-.29l-8-8a1,1,0,1,1,1.42-1.42L16,18.59l7.29-7.3a1,1,0,0,1,1.42,1.42l-8,8A1,1,0,0,1,16,21Z"
  })), /*#__PURE__*/React.createElement("div", {
    className: s$1.selectContainer,
    style: {
      display: "" + (select ? '' : 'none')
    }
  }, yearsArr.map(function (el) {
    return /*#__PURE__*/React.createElement("span", {
      key: el,
      onClick: selectedYear,
      className: s$1.selectItem
    }, el);
  }))));
};

var s$2 = {"MainDatePicker":"_3gKjO","mainTitle":"_2NjAB","mainBox":"_1dTlw"};

var s$3 = {"ItemDatePicker":"_jGLvw","active":"_V13qs","noActive":"_pVL4j"};

var ItemDatePicker = function ItemDatePicker(_ref) {
  var el = _ref.el,
      setActiveDate = _ref.setActiveDate;

  var changeActiveItem = function changeActiveItem(e) {
    setActiveDate(el);
  };

  return /*#__PURE__*/React.createElement("div", {
    onClick: changeActiveItem,
    className: s$3.ItemDatePicker + ' ' + (el.type !== 'now' ? s$3.noActive : false) + ' ' + (el.active ? s$3.active : false)
  }, el.date.getDate());
};

var MainDatePicker = function MainDatePicker(_ref) {
  var date = _ref.date,
      setActiveDate = _ref.setActiveDate,
      listActiveDate = _ref.listActiveDate;

  var _useState = useState([]),
      listDateItem = _useState[0],
      setListDateItem = _useState[1];

  useEffect(function () {
    createListDateItem();
  }, [date]);

  var checkActiveItem = function checkActiveItem(newDate) {
    var bool = false;

    for (var i = 0; i < listActiveDate.length; i++) {
      if (listActiveDate[i].toLocaleDateString() === newDate.toLocaleDateString()) {
        bool = true;
      }
    }

    return bool;
  };

  var createListDateItem = function createListDateItem() {
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    var oldMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    var nameWeekFirstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    var arr = [];

    for (var i = 0; i < nameWeekFirstDay - 1; i++) {
      var newDate = new Date(date.getFullYear(), date.getMonth() - 1, oldMonthLastDay - i);
      arr.unshift({
        date: newDate,
        type: 'old',
        active: checkActiveItem(newDate)
      });
    }

    for (var _i = 1; _i <= lastDay; _i++) {
      var _newDate = new Date(date.getFullYear(), date.getMonth(), _i);

      arr.push({
        date: _newDate,
        type: 'now',
        active: checkActiveItem(_newDate)
      });
    }

    var count = 36 - arr.length;

    for (var _i2 = 1; _i2 < count; _i2++) {
      var _newDate2 = new Date(date.getFullYear(), date.getMonth() + 1, _i2);

      arr.push({
        date: _newDate2,
        type: 'future',
        active: checkActiveItem(_newDate2)
      });
    }

    if (arr.length > 35) {
      var _count = 43 - arr.length;

      for (var _i3 = 1; _i3 < _count; _i3++) {
        var _newDate3 = new Date(date.getFullYear(), date.getMonth() + 1, _i3);

        arr.push({
          date: _newDate3,
          type: 'future',
          active: checkActiveItem(_newDate3)
        });
      }
    }

    setListDateItem(arr);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: s$2.MainDatePicker
  }, /*#__PURE__*/React.createElement("div", {
    className: s$2.mainTitle
  }, /*#__PURE__*/React.createElement("span", null, "\u041F\u041D"), /*#__PURE__*/React.createElement("span", null, "\u0412\u0422"), /*#__PURE__*/React.createElement("span", null, "\u0421\u0420"), /*#__PURE__*/React.createElement("span", null, "\u0427\u0422"), /*#__PURE__*/React.createElement("span", null, "\u041F\u0422"), /*#__PURE__*/React.createElement("span", null, "\u0421\u0411"), /*#__PURE__*/React.createElement("span", null, "\u0412\u0421")), /*#__PURE__*/React.createElement("div", {
    className: s$2.mainBox
  }, listDateItem.map(function (el) {
    return /*#__PURE__*/React.createElement(ItemDatePicker, {
      key: el.date,
      el: el,
      setActiveDate: setActiveDate
    });
  })));
};

function DatePicker(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'one' : _ref$mode,
      _ref$callback = _ref.callback,
      callback = _ref$callback === void 0 ? undefined : _ref$callback;

  var _useState = useState(new Date(new Date().setHours(0, 0, 0, 0))),
      date = _useState[0],
      setDate = _useState[1];

  var _useState2 = useState(mode !== 'two' ? [date] : [date, date]),
      listActiveDate = _useState2[0],
      setListActiveDate = _useState2[1];

  var _useState3 = useState([date]),
      listRangeDate = _useState3[0],
      setListRangeDate = _useState3[1];

  useEffect(function () {
    var newData = [];

    if (callback) {
      if (mode !== 'range') {
        for (var _iterator = _createForOfIteratorHelperLoose(listActiveDate), _step; !(_step = _iterator()).done;) {
          var item = _step.value;
          newData.push(item.getTime());
        }
      }

      if (mode === 'range') {
        for (var _iterator2 = _createForOfIteratorHelperLoose(listRangeDate), _step2; !(_step2 = _iterator2()).done;) {
          var _item = _step2.value;
          newData.push(_item.getTime());
        }
      }
    }

    returnData(newData);
  }, [date]);

  var returnData = function returnData(data) {
    if (callback) callback(data);
  };

  var setRangeActiveDate = function setRangeActiveDate(startDate, endDate) {
    var newArr = [new Date(startDate)];

    while (newArr[newArr.length - 1] < endDate) {
      newArr.push(new Date(newArr[newArr.length - 1].getTime() + 86400000));
    }

    setListActiveDate(newArr);
  };

  var setActiveDate = function setActiveDate(el) {
    var newListActiveDate = _construct(Array, listActiveDate);

    var positionItem = new Date(el.date.toDateString()).getTime();

    switch (mode) {
      case 'one':
        {
          setDate(el.date);
          setListActiveDate([el.date]);
          break;
        }

      case 'two':
        {
          var minActiveItem = new Date(listActiveDate[0].toDateString()).getTime();
          var maxActiveItem = new Date(listActiveDate[1].toDateString()).getTime();

          if (positionItem < minActiveItem) {
            setDate(el.date);
            setListActiveDate([el.date, new Date(maxActiveItem)]);
          } else if (positionItem > maxActiveItem) {
            setDate(el.date);
            setListActiveDate([new Date(minActiveItem), el.date]);
          } else if (positionItem > minActiveItem && positionItem < maxActiveItem) {
            positionItem - minActiveItem < maxActiveItem - positionItem ? setListActiveDate([el.date, new Date(maxActiveItem)]) : setListActiveDate([new Date(minActiveItem), el.date]);
            setDate(el.date);
          } else if (positionItem === minActiveItem || positionItem === maxActiveItem) {
            setListActiveDate([new Date(positionItem), new Date(positionItem)]);
            setDate(el.date);
          }

          break;
        }

      case 'range':
        {
          var _minActiveItem = new Date(listRangeDate[0].toDateString()).getTime();

          var _maxActiveItem = new Date(listRangeDate[0].toDateString()).getTime();

          for (var i = 0; i < listRangeDate.length; i++) {
            listRangeDate[i].getTime() < _minActiveItem ? _minActiveItem = new Date(listRangeDate[i].toDateString()).getTime() : _maxActiveItem = new Date(listRangeDate[i].toDateString()).getTime();
          }

          if (positionItem < _minActiveItem) {
            setRangeActiveDate(new Date(positionItem), new Date(_maxActiveItem));
            setDate(el.date);
            setListRangeDate([el.date, new Date(_maxActiveItem)]);
          } else if (positionItem > _maxActiveItem) {
            setRangeActiveDate(new Date(_minActiveItem), new Date(positionItem));
            setDate(el.date);
            setListRangeDate([new Date(_minActiveItem), el.date]);
          } else if (positionItem > _minActiveItem && positionItem < _maxActiveItem) {
            if (positionItem - _minActiveItem < _maxActiveItem - positionItem) {
              setRangeActiveDate(new Date(positionItem), new Date(_maxActiveItem));
              setListRangeDate([el.date, new Date(_maxActiveItem)]);
            } else {
              setRangeActiveDate(new Date(_minActiveItem), new Date(positionItem));
              setListRangeDate([new Date(_minActiveItem), el.date]);
            }

            setDate(el.date);
          } else if (positionItem === _minActiveItem || positionItem === _maxActiveItem) {
            setRangeActiveDate(new Date(positionItem), new Date(positionItem));
            setListRangeDate([new Date(positionItem)]);
            setDate(el.date);
          }

          break;
        }

      case 'multiple':
        {
          if (!el.active && !newListActiveDate.includes(el.date, 0)) {
            newListActiveDate.push(el.date);
          } else {
            var _i = newListActiveDate.findIndex(function (e) {
              return e.toDateString() === el.date.toDateString();
            });

            newListActiveDate.splice(_i, 1);
          }

          el.active = !el.active;
          setListActiveDate(newListActiveDate);
          setDate(el.date);
          break;
        }
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: s.DatePicker
  }, /*#__PURE__*/React.createElement(HeadDatePicker, {
    date: date,
    setDate: setDate
  }), /*#__PURE__*/React.createElement(MainDatePicker, {
    setActiveDate: setActiveDate,
    date: date,
    setDate: setDate,
    listActiveDate: listActiveDate,
    setListActiveDate: setListActiveDate
  }));
}

export default DatePicker;
//# sourceMappingURL=index.modern.js.map
