var startTime;
var newTime;
var difference;
var interval;
var savedTime;
var paused = false;
var running = false;



function startWatch() {
    if (!running) {
        startTime = new Date().getTime();
        interval = setInterval(function () {
            newTime = new Date().getTime();
            if (savedTime) {
                difference = newTime - startTime + savedTime;
            } else {
                difference = newTime - startTime;
            }
            var mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var secs = Math.floor((difference % (1000 * 60)) / 1000);
            var ms = Number(String(Math.floor((difference % (1000 * 60)) / 10)).slice(-2))
            mins = (mins < 10) ? "0" + mins : mins;
            secs = (secs < 10) ? "0" + secs : secs;
            ms = (ms < 10) ? (ms < 10) ? "0" + ms : "0" + ms : ms;
            document.getElementById("show-time").innerHTML = mins + ':' + secs + ':' + ms;
        }, 1);
        paused = false;
        running = true;
        document.getElementById("start-pause-swc").style.paddingRight = "0px";
        document.getElementById("start-pause-swc").innerHTML = "Pause";
    } else {
        pauseWatch();
    }
}

function pauseWatch() {
    clearInterval(interval);
    running = false;
    paused = true;
    savedTime = difference;
    document.getElementById("start-pause-swc").style.width = "40vmin";
    document.getElementById("start-pause-swc").innerHTML = "Resume";
}

function resetWatch() {
    clearInterval(interval);
    savedTime = 0;
    difference = 0;
    paused = false;
    running = false;
    document.getElementById("show-time").innerHTML = "00:00:00"
    document.getElementById("start-pause-swc").style.paddingRight = "0px";
    document.getElementById("start-pause-swc").innerHTML = "Start"
}


