// get time functions and replace inserts
const dt = new Date();


const timePlace = document.querySelector('.timePlace');
const seconds = document.querySelector('.seconds');

const time = ':hour:::min:';
const sec = ':sec:.:mil:';


//display time

setInterval(updateTime, 1);

function updateTime() {
    const dt = new Date(); 
let currentTime = time;
let currentSec = sec;
currentTime = currentTime.replaceAll(':hour:',dt.getHours());
currentTime = currentTime.replaceAll(':min:',dt.getMinutes());
currentSec = currentSec.replaceAll(':sec:',dt.getSeconds());
currentSec = currentSec.replaceAll(':mil:',dt.getMilliseconds());

timePlace.textContent = currentTime;
seconds.textContent = currentSec;
};

//set an alarm

const alarmB = document.querySelector('.alarmB');
const setHour = document.querySelector('.setHour');
const setMin = document.querySelector('.setMin');

let alarmHour = [];
let alarmMin = [];

function setAlarm() {
const set = alarmHour.push(setHour.value);
const set2 = alarmMin.push(setMin.value);

};

alarmB.addEventListener('click', setAlarm);

const wokeUp = document.querySelector('.wokeUp');

const arise = 'WAKE UP';

function wakeUp() {
    wokeUp.textContent = arise;
}


// check if set alarm time is equal to current time

setInterval(timeCheck, 1);

function timeCheck() {
   if (
       dt.getHours() === alarmHour[3] &&
       dt.getMinutes() === alarmMin[3]
   ) {
        wakeUp();
   }
}


