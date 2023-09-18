 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  changeColor();
  
  intervalId = setInterval(changeColor, 1000);
}

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}

stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalId);
}

    
        

   
    



