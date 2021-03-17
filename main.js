function updateTime() {
    var d = new Date();
    var n = d.getHours();
    var n1 = d.getMinutes();
    var day = new Array(7);
    day[0] = "Sun";
    day[1] = "Mon";
    day[2] = "Tue";
    day[3] = "Wed";
    day[4] = "Thu";
    day[5] = "Fri";
    day[6] = "Sat";
    var n2 = day[d.getDay()];
    var n3 = d.getDate();
    var n4 = d.getMonth();
    var all = n + ":" + n1 + " " + n2 + "" + n3 + "/" + n4;
    time.innerHTML = "Time:-" + all;
}
setInterval(updateTime, 1000);
function opengithub() {
    window.location.href = "https://github.com/riturajgupta21"
}
function openinsta() {
    window.location.href = "https://www.instagram.com/_rituraj10_/"
}

function openli() {
    window.location.href = "https://www.linkedin.com/in/rituraj-gupta-222334192"
}

function opentelegram() {
    window.location.href = "https://t.me/RiturajGupta"
}

function opentelegram() {
    window.location.href = "https://t.me/RiturajGupta"
}

function openfacebook() {
    window.location.href = "https://www.facebook.com/rituraj.gupta.148116"
}

function opentwitter() {
    window.location.href = "https://twitter.com/guptarituraj01?s=09"
}
function openwhatsapp() {
    window.location.href = "https://wa.me/917061831074"
}
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registered Failed");
        console.log(error);
    });
}