//name
let name = prompt("Lütfen isminizi yazınız", "");

let info = document.querySelector("#name");
info.innerHTML = name;

setInterval(showTime,100);
function showTime(){
    //clock
    let today = new Date();
    let time = today.toLocaleTimeString();

    //day
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let currentDay= today.getDay();
    let day = days[currentDay];

    let currentTime = document.querySelector("#myClock");
    currentTime.innerHTML = `${time} ${day}`;
}


