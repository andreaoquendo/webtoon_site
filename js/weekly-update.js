function transformDayWeek(day){
    return day==0 ? 6 : day-1;
}

function reverseTransformDayWeek(day){
    return day==6 ? 0 : day+1;
}

function changeDay(newday){
    _daysList[_actualClicked].classList.remove("open");
    _daysList[_actualClicked].classList.add("closed");
    _daysList[newday].classList.remove("closed");
    _daysList[newday].classList.add("open");
    _actualClicked=newday;
}

function init(){
    _actualClicked = transformDayWeek(_todayDayWeek);
    _daysList[_actualClicked].classList.remove("closed");
    _daysList[_actualClicked].classList.add("open");
    _dayArray.forEach(function(num, index){
        _daysList[index].addEventListener("click", function(){
            changeDay(index);
        })
    });
}

init();