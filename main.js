// special countdown
let dayItem = document.querySelector("#days");
let hourItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date("30 July 2023");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let day = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hour = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    dayItem.innerHTML = day;
    hourItem.innerHTML = hour;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}
countDown()
setInterval(countDown, 1000);

// Scrool Back To Top
function scrollTopBack() {
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 250) {
            scrollTopButton.classList.add('scrollActive');
        } else {
            scrollTopButton.classList.remove('scrollActive');
        }
    }
}
scrollTopBack();