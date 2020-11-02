setInterval(function () {
    function checkTime(time) {
        if (time < 10) {
            return "0" + time
        } else {
            return time
        }
    }

    var today = new Date();
    var hour = checkTime(today.getHours());
    var mins = checkTime(today.getMinutes());
    var seconds = checkTime(today.getSeconds());

    showTime = `${hour}:${mins}:${seconds}`
    document.getElementById("show-current-time").innerHTML = showTime;
}, 1000)
