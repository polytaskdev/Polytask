var start = document.getElementById('start-btn');
var finished = document.getElementById('finished-btn');
var hour = document.getElementById("hour-cdt");
var minute = document.getElementById("minute-cdt");
var sec = document.getElementById("sec-cdt");
var startTimer = null;

function timer() {
    hour.value = Number(hour.value)
    minute.value = Number(minute.value)
    sec.value = Number(sec.value)
    if (hour.value == 0 && minute.value == 0 && sec.value == 0) {
    } else if (sec.value != 0) {
        sec.value--;
    } else if (minute.value != 0 && sec.value == 0) {
        sec.value = 59;
        minute.value--;
    } else if (hour.value != 0 && minute.value == 0) {
        minute.value = 60;
        hour.value--;
    }
    return;
}

start.addEventListener('click', function () {
    function startInterval() {
        startTimer = setInterval(function () {
            timer();
        }, 1000);
    }
    startInterval();
})

function stopInterval() {
    clearInterval(startTimer);
}

finished.addEventListener('click', function () {
    hour.value = "";
    minute.value = "";
    sec.value = "";
    stopInterval();
})
