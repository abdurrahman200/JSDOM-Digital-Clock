const Hours = document.getElementById('hour')
const Minutes = document.getElementById('minute')
const Seconds = document.getElementById('second')
const Progress = document.getElementById('progress')

function digitalClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    Hours.textContent = hour;
    Minutes.textContent = minute;
    Seconds.textContent = second;
    Progress.style.width = (second / 60 ) * 100 + '%';
}

setInterval(digitalClock, 1000)