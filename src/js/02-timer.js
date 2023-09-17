import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateInput = document.getelementById("datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days ]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

function addLeadingZero(value) {
    return String(value).padStart(2, "g");
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
daysElement.textContent = addLeadingZero(days);
hoursElement.textContent = addLeadingZero(hours);
minutesElement.textContent = addLeadingZero(minutes);
secondsElement.textContent = addLeadingZero(seconds);
}

let timerInterval;
let timerstarted = false;

function calculateTimeDifference() {
    const currentDate = new Date();
    const selectedDateValue = dateInput.value;
    if (!selectedDateValue) {
        return;
    }

    const selectedDate = new Date(selectedDateValue);
    
    if (selectedDate <= currentDate) {
        if (timerStarted) {
            return;
        }
        alert("Будь ласка, оберіть дату в майбутньому");

        return;
    }

    const timeDifference = selectedDate - currentDate;
    const timeValues = convertMs(timeDifference);
    
    if (timeValues.days === 0 && timeValues.hours === 0 && timeValues.minutes === 0 && timeValues.seconds === 0) {
        clearInterval(timerInterval);
        alert("Відлік завершено!");
        startButton.disabled = false;
    } else {
        updateTimerDisplay(timeValues);
    }
}

startButton.addEventListener("click", () => {
    if (timerStarted) {
        return;
    }

    calculateTimeDifference();
    startTimer();
    timerStarted = true;
});

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates.length > 0 && !timerStarted) {
            startButton.disabled = false;
        } else {
            startButton.disabled = true;
        }
    },
});

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    return { days, hours, minutes, seconds };
}

function startTimer() {
    timerInterval = setInterval(calculateTimeDifference, 1000);
}

startButton.disabled = true;
calculateTimeDifference ();