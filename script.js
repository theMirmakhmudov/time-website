let timerIsRunning = false;
let intervalID;
let person_hour;
let person_minute;
let person_second;
function formatTime(hour, minute, second) {
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    return hour + ':' + minute + ':' + second;
}

function formatTime2(hour, minute, second, millisecond) {
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    millisecond = millisecond < 100 ? '0' + millisecond : millisecond;
    millisecond = millisecond < 10 ? '0' + millisecond : millisecond;

    return hour + ':' + minute + ':' + second + ':' + millisecond;
}



function showTimer() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let formattedTime = formatTime(hours, minutes, seconds);
    document.getElementById("demo").innerHTML = formattedTime;
    intervalID = setInterval(showTime, 1000);
}
function showTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let formattedTime = formatTime(hours, minutes, seconds);
    document.getElementById("demo").innerHTML = formattedTime;

}

function showMilliseconds() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let millisecond = now.getMilliseconds();
    let formattedTime = formatTime2(hours, minutes, seconds, millisecond);
    document.getElementById("demo").innerHTML = formattedTime;

}

function allert() {
    let person = prompt("oraliq vaqtni kiriting(daqiqa)", "60");
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    person_hour = Math.floor(person / 60) + hours;
    if (person % 60 + minutes != 60) {
        person_minute = person % 60 + minutes;
    }
    else{
        person_minute=person_minute - 60;
        person_hour= person_hour + 1;
    }
    person_second = seconds;
    let formattedTime = formatTime(person_hour, person_minute, person_second);
    if (person !== null && person !== NaN) {

        document.getElementById("demo2").innerHTML =
            "Oraliq vaqt " + Math.floor(person/60) + " soat " + person%60 + " minut<br>" + "Tugash vaqti :" + formattedTime;
    }
    else if (person == null){
        alert("Error value try again");
    }
}

    

function time_up() {
    if (person_hour == hours && person_minute == minutes && person_second == seconds) {
        document.getElementById("demo2").style.display = "none";
        document.getElementById("demo3").style.display = "inline-block";
    }
}
function error_value() {
  alert("Hello! I am an alert box!");
}

document.addEventListener('DOMContentLoaded', function () {
    let toggleButton = document.getElementById('btn3');

    toggleButton.addEventListener('click', function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    })
});

document.addEventListener('DOMContentLoaded', function () {
    let toggleButton = document.getElementById('btn3');

    toggleButton.addEventListener('dblclick', function () {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    })
});


function toggleTimer() {
    timerIsRunning = !timerIsRunning;
    if (timerIsRunning) {
        clearInterval(intervalID);
        showMilliseconds();
        intervalID = setInterval(showMilliseconds, 10);

    } else {
        clearInterval(intervalID);
        showTime();
        intervalID = setInterval(showTime, 1000);

    }
}


showTimer()
time_up()
