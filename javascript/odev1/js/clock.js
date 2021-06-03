let firstName=prompt("Lütfen adınızı girin:")

if (firstName.length == 0) {
    firstName = "Gizemli kişi :) ";
}

let myName=document.querySelector("#myName");
myName.innerHTML=`${firstName}`



let myVar = setInterval(showTime);
function showTime()
{
    let d=new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let day = showDay(d.getDay());

    if (hour < 10) 
    {
        hour = '0' + hour;
    } 
    else if (minute < 10)
    {
        minute = '0' + minute;
    } 
    else if (second < 10)
    {
        second = '0' + second;
    }

    let getTime = document.querySelector("#myClock");
    getTime.innerHTML=`${hour}:${minute}:${second} - ${day}`
}
function showDay(day) {
    switch (day) {
        case 1:
            return "Pazartesi";
        case 2:
            return "Salı";
        case 3:
            return "Çarşamba";
        case 4:
            return "Perşembe";
        case 5:
            return "Cuma";
        case 6:
            return "Cumartesi";
        case 7:
            return "Pazar";

    }
}