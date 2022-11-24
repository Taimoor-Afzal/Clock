// ------------------------------ AnalogClock Clock ------------------------------

let hourArrow = document.querySelector(".hour-arrow")
let minuteArrow = document.querySelector(".minute-arrow")
let secondArrow = document.querySelector(".second-arrow")

function analogClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let hourDeg = (h / 12) * 360;
    let minuteDeg = (m / 60) * 360;
    let secondDeg = (s / 60) * 360;

    hourArrow.style.transform = `rotate(${hourDeg}deg)`;
    minuteArrow.style.transform = `rotate(${minuteDeg}deg)`;
    secondArrow.style.transform = `rotate(${secondDeg}deg)`;

}

setInterval(analogClock, 1000);

// ------------------------------ Digital Clock ------------------------------

let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AMPM = "AM";


    if (h >= 12) {
        AMPM = "PM";
    }
    if (h > 12) {
        h -= 12;
    }


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = AMPM;
};

setInterval(clock, 1000)
