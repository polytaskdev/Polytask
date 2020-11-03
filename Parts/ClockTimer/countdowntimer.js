var start = document.getElementById("start-btn");
var finished = document.getElementById("finished-btn");
var hour = document.getElementById("hour-cdt");
var minute = document.getElementById("minute-cdt");
var sec = document.getElementById("sec-cdt");
var startTimer = null;
var endTime;

function timer() {
    let currentTime = Date.now();
    currentTime = Math.floor(currentTime / 1000);
    let timeLeft = endTime - currentTime;
    if (timeLeft <= 0) {
        var alarm_sound = new Audio();
        alarm_sound.src = "wakeup.m4a";
        alarm_sound.play();
        hour.value = "";
        minute.value = "";
        sec.value = "";
        stopInterval();


    } else {
        hour.value = Math.floor(timeLeft / 3600);
        minute.value = Math.floor((timeLeft % 3600) / 60);
        sec.value = timeLeft % 60;
    }
}

start.addEventListener("click", function () {
    function startInterval() {
        hour.value = hour.value || 0;
        minute.value = minute.value || 0;
        sec.value = sec.value || 0;

        endTime = Date.now();
        endTime = Math.floor(endTime / 1000);
        endTime += parseInt(hour.value) * 3600;
        endTime += parseInt(minute.value) * 60;
        endTime += parseInt(sec.value);
        startTimer = setInterval(function () {
            timer();
        }, 1000);
    }
    startInterval();
});

function stopInterval() {
    clearInterval(startTimer);
}

finished.addEventListener("click", function () {
    hour.value = "";
    minute.value = "";
    sec.value = "";
    stopInterval();
});
