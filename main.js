
const currentMonth = 4,
      dateFuture = new Date(currentMonth +' 27, 2022 13:00:00').getTime(),
      dateMonth = new Date().getMonth() +1,
      year = document.querySelector('.year'),
      day = document.querySelector('.day'),
      hour = document.querySelector('.hour'),
      minute = document.querySelector('.minute'),
      second = document.querySelector('.second');

let countTime = function(){
    const date = new Date(),
        dayDate = new Date(dateFuture);
        let numberOfDay = new Date(
            2021,
            date.getMonth() +1,
            0
        ).getDate();
        let yearResult = dayDate.getFullYear() - date.getFullYear(),
        allDays = numberOfDay - date.getDate(),
        countAllDays = null,
        countAllDaysY = null,
        countAllDaysC = null,
        dayResult = dayDate.getDate() - date.getDate(),
        hourResult = date.getHours(),
        hourChange = 24 - hourResult + dayDate.getHours(),
        hourCheck = dayDate.getHours() - date.getHours(),
        minuteResult = date.getMinutes() +1,
        minuteChange = 60 - minuteResult + dayDate.getMinutes(),
        minuteCheck = dayDate.getMinutes() - minuteResult,
        secondsResult = date.getSeconds();
    
    function countOfAllDays(){
        if(currentMonth - (date.getMonth() +1) == 1){
            for(let i = (date.getMonth() +2); i <= currentMonth; i++){
                allDays += dayDate.getDate();
                day.textContent = allDays;
            }
        }else if((currentMonth - (date.getMonth() +1)) > 1){
            for(let i = (date.getMonth() +2); i < currentMonth; i++){
                let DayNextMonth = new Date(
                    2021,
                    i,
                    0
                ).getDate();
                countAllDays += DayNextMonth;
            }
            allDays += countAllDays + dayDate.getDate();
        }
        return allDays;
    }
    let countDaysResult = countOfAllDays();

    function countAllYears (){
        let y = dateMonth;
        do{
            y++;
            
            let monthY = new Date(
                date.getFullYear(),
                y,
                0
            ).getDate();
            countAllDaysY += monthY;
        }while(y < 12);
        
        if(currentMonth > 1){
            let c = 1;
            do{ 
                let monthC = new Date(
                    dayDate.getFullYear(),
                    c,
                    0
                ).getDate();
                countAllDaysC += monthC;
                c++;
            }while(c < currentMonth);
            allDays += countAllDaysY + countAllDaysC + dayDate.getDate();
        }else{
            allDays += countAllDaysY + dayDate.getDate();
        }
        
        return allDays;
    }
    let countYearResult = countAllYears();

    function countAllMinutes (){
        if(dayDate.getMinutes() > date.getMinutes()){
            minute.textContent = (minuteCheck < 10) ? '0' + minuteCheck : minuteCheck;
    
            if(dayDate.getHours() > date.getHours()){
                hour.textContent = (hourCheck < 10) ? '0' + hourCheck : hourCheck;
            }else if(dayDate.getHours() == date.getHours()){
                hour.textContent = '00';
            }else{
                hour.textContent = (hourChange < 10) ? '0' + hourChange : hourChange;
            }
        }else{
            minute.textContent = (minuteChange < 10) ? '0' + minuteChange : minuteChange;
            if(dayDate.getHours() > date.getHours()){
                hour.textContent = ((hourCheck -1) < 10) ? '0' + (hourCheck -1) : hourCheck -1;
            }else if(dayDate.getHours() == date.getHours()){
                hour.textContent = (hourChange -1 < 10) ? '0' + (hourChange -1) : hourChange -1;
            }else{
                hour.textContent = (hourChange -1 < 10) ? '0' + (hourChange -1) : hourChange -1;
            }
        }
    }
    
    function qq (){
        if(dayDate.getHours() > date.getHours()){
            day.textContent = (dayResult < 10) ? '0' + dayResult : dayResult;
        }else if(dayDate.getHours() == date.getHours()){
            if(dayDate.getMinutes() > date.getMinutes()){
                day.textContent = (dayResult < 10) ? '0' + dayResult : dayResult;
            }else{
                day.textContent = ((dayResult -1) < 10) ? '0' + (dayResult -1) : dayResult -1;
            }
        }else{
            day.textContent = ((dayResult -1) < 10) ? '0' + (dayResult -1) : dayResult -1;
        }
    }
    
    if(yearResult == 0){
        year.textContent = '00';

        if(currentMonth == (date.getMonth() +1)){
            if(dayResult > 1){
                qq();
            }else if(dayResult == 1){
                if(dayDate.getHours() > date.getHours()){
                    day.textContent = '0' + 1; 
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        day.textContent = '0' + 1;
                    }else{
                        day.textContent = '00';
                    }
                }else{
                 day.textContent = '00';
                }
            }else if(dayResult <= 0){
                day.textContent = '00';
            }
        }else if(currentMonth > (date.getMonth() +1)){
            if(dayDate.getHours() > date.getHours()){
                day.textContent = countDaysResult;
            }else if(dayDate.getHours() == date.getHours()){
                if(dayDate.getMinutes() > date.getMinutes()){
                    day.textContent = countDaysResult;
                }else{
                    day.textContent = countDaysResult -1;
                }
            }else{
                day.textContent = countDaysResult -1;
            }
        }
        
        countAllMinutes();
    }else if(yearResult == 1){
        if(dayDate.getMonth() > date.getMonth()){
            year.textContent = yearResult;
            if(dayDate.getDate() > date.getDate()){
               
                if(dayDate.getHours() > date.getHours()){
                    day.textContent = countDaysResult;
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        day.textContent = countDaysResult;
                        countAllMinutes();
                    }else{
                        day.textContent = countDaysResult -1;
                        countAllMinutes();
                    }
                }else{
                    day.textContent = countDaysResult -1;
                    countAllMinutes();
                }
            }else if(dayDate.getDate() == date.getDate()){
                if(dayDate.getHours() > date.getHours()){
                    day.textContent = countDaysResult;
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        day.textContent = countDaysResult;
                        countAllMinutes();
                    }else{
                        day.textContent = countDaysResult -1;
                        countAllMinutes();
                    }
                }else{   
                    day.textContent = countDaysResult -1;
                    countAllMinutes();
                }
            }else{
                if(dayDate.getHours() > date.getHours()){
                    day.textContent = countDaysResult;
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        day.textContent = countDaysResult;
                        countAllMinutes();
                    }else{
                        day.textContent = countDaysResult -1;
                        countAllMinutes();
                    }
                }else{
                    day.textContent = countDaysResult -1;
                    countAllMinutes();
                }
            }
        }else if(dayDate.getMonth() == date.getMonth()){
            if(dayDate.getDate() > date.getDate()){
                year.textContent = yearResult;
                if(dayDate.getHours() > date.getHours()){
                    qq();
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        qq();
                        countAllMinutes();
                    }else{
                        day.textContent = '00';
                        countAllMinutes();
                    }
                }else{
                    day.textContent = '00';
                    countAllMinutes();
                }
            }else if(dayDate.getDate() == date.getDate()){
                if(dayDate.getHours() > date.getHours()){
                    year.textContent = yearResult;
                    day.textContent = '00';
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        year.textContent = yearResult;
                        day.textContent = '00';
                        countAllMinutes();
                    }else{
                        year.textContent = '00';
                        day.textContent = countYearResult -1;
                        countAllMinutes();
                    }
                }else{
                    year.textContent = '00';
                    day.textContent = countYearResult -1;
                    countAllMinutes();
                }
            }else{
                year.textContent = '00';
                if(dayDate.getHours() > date.getHours()){
                    day.textContent = countYearResult;
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        day.textContent = countYearResult;
                        countAllMinutes();
                    }else{
                        day.textContent = countYearResult -1;
                        countAllMinutes();
                    }
                }else{
                    day.textContent = countYearResult -1;
                    countAllMinutes();
                }
            }
        }else{
            year.textContent = '00';

            if(dayDate.getHours() > date.getHours()){
                day.textContent = countYearResult;
                countAllMinutes();
            }else if(dayDate.getHours() == date.getHours()){
                if(dayDate.getMinutes() > date.getMinutes()){
                    day.textContent = countYearResult;
                    countAllMinutes();
                }else{
                    day.textContent = countYearResult -1;
                    countAllMinutes();
                }
            }else{
                day.textContent = countYearResult -1;
                countAllMinutes();
            }
        }
    }else if(yearResult > 1){
        if(dayDate.getMonth() > date.getMonth()){
            year.textContent = yearResult;
            if(dayDate.getDate() > date.getDate()){
               
                if(dayDate.getHours() > date.getHours()){
                    day.textContent = countDaysResult;
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        day.textContent = countDaysResult;
                        countAllMinutes();
                    }else{
                        day.textContent = countDaysResult -1;
                        countAllMinutes();
                    }
                }else{
                    day.textContent = countDaysResult -1;
                    countAllMinutes();
                }
            }else if(dayDate.getDate() == date.getDate()){
                if(dayDate.getHours() > date.getHours()){
                    day.textContent = countDaysResult;
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        day.textContent = countDaysResult;
                        countAllMinutes();
                    }else{
                        day.textContent = countDaysResult -1;
                        countAllMinutes();
                    }
                }else{   
                    day.textContent = countDaysResult -1;
                    countAllMinutes();
                }
            }else{
                if(dayDate.getHours() > date.getHours()){
                    day.textContent = countDaysResult;
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        day.textContent = countDaysResult;
                        countAllMinutes();
                    }else{
                        day.textContent = countDaysResult -1;
                        countAllMinutes();
                    }
                }else{
                    day.textContent = countDaysResult -1;
                    countAllMinutes();
                }
            }
        }else if(dayDate.getMonth() == date.getMonth()){
            if(dayDate.getDate() > date.getDate()){
                year.textContent = yearResult;
                if(dayDate.getHours() > date.getHours()){
                    qq();
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        qq();
                        countAllMinutes();
                    }else{
                        day.textContent = '00';
                        countAllMinutes();
                    }
                }else{
                    day.textContent = '00';
                    countAllMinutes();
                }
            }else if(dayDate.getDate() == date.getDate()){
                if(dayDate.getHours() > date.getHours()){
                    year.textContent = yearResult;
                    day.textContent = '00';
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        year.textContent = yearResult;
                        day.textContent = '00';
                        countAllMinutes();
                    }else{
                        year.textContent = yearResult -1;
                        day.textContent = countYearResult -1;
                        countAllMinutes();
                    }
                }else{
                    year.textContent = yearResult -1;
                    day.textContent = countYearResult -1;
                    countAllMinutes();
                }
            }else{
                year.textContent = '00';
                if(dayDate.getHours() > date.getHours()){
                    day.textContent = countYearResult;
                    countAllMinutes();
                }else if(dayDate.getHours() == date.getHours()){
                    if(dayDate.getMinutes() > date.getMinutes()){
                        day.textContent = countYearResult;
                        countAllMinutes();
                    }else{
                        day.textContent = countYearResult -1;
                        countAllMinutes();
                    }
                }else{
                    day.textContent = countYearResult -1;
                    countAllMinutes();
                }
            }
        }else{
            year.textContent = yearResult -1;

            if(dayDate.getHours() > date.getHours()){
                day.textContent = countYearResult;
                countAllMinutes();
            }else if(dayDate.getHours() == date.getHours()){
                if(dayDate.getMinutes() > date.getMinutes()){
                    day.textContent = countYearResult;
                    countAllMinutes();
                }else{
                    day.textContent = countYearResult -1;
                    countAllMinutes();
                }
            }else{
                day.textContent = countYearResult -1;
                countAllMinutes();
            }
        }
    }

    if(60 - secondsResult === 60){
        second.textContent = '00';
    }else{
        second.textContent = ((60 - secondsResult) < 10) ? '0' + (60 - secondsResult) : 60 - secondsResult;
    }

    if(dateFuture <= date.getTime()){
        clearInterval(counter);
        day.textContent = '00';
        hour.textContent = '00';
        minute.textContent = '00';
        second.textContent = '00';
    }
}
countTime();
let counter = setInterval(countTime, 200);
