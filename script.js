//name
let name = prompt("Please enter your name", "");

let info = document.querySelector("#name");
info.innerHTML = name;

setInterval(showTime,100);
function showTime(){
    //clock
    let today = new Date();
    let time = today.toLocaleTimeString();

    //day
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay= today.getDay();
    let day = days[currentDay];

    let currentTime = document.querySelector("#myClock");
    currentTime.innerHTML = `${time} ${day}`;
}






