function setRotation(timePointer, currentTime) {
    timePointer.style.setProperty("--rotation", currentTime * 360)
}

var hourPoiner = document.querySelector('[hour-pointer]')
var minutePoiner = document.querySelector('[minute-pointer]')
var secondPoiner = document.querySelector('[second-pointer]')

function startClock() {
    setInterval(function () {
        const currentDate = new Date();
        const currentSec = currentDate.getSeconds() / 60;
        const currentMin = (currentSec + currentDate.getMinutes()) / 60;
        const currentHour = (currentDate.getHours() + currentMin) / 12;
        setRotation(hourPoiner, currentHour);
        setRotation(minutePoiner, currentMin);
        setRotation(secondPoiner, currentSec);

    }, 1000)
}

startClock()




