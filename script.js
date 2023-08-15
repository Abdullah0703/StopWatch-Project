
var hr = 0, min = 0, sec = 0, count = 0;
var timer = false;

function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    hr = 0;
    sec = 0;
    count = 0;
    min = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {
        count += 1;

        if (count == 100) {
            sec += 1;
            count = 0;
        }

        if (sec == 60) {
            min += 1;
            sec = 0;
        }

        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
        }
        // This is done to add the extra zero(s) in the watch.
        var hrstr = hr, minstr = min, secstr = sec, countstr = count;

        if (hr < 10) {
            hrstr = "0" + hrstr;
        }
        if (sec < 10) {
            secstr = "0" + secstr;
        }
        if (min < 10) {
            minstr = "0" + minstr;
        }
        if (count < 10) {
            countstr = "0" + countstr;
        }

        document.getElementById("hr").innerHTML = hrstr;
        document.getElementById("min").innerHTML = minstr;
        document.getElementById("sec").innerHTML = secstr;
        document.getElementById("count").innerHTML = countstr;

        // Recalls itself after 10ms
        setTimeout(stopwatch, 10);
    }
}
