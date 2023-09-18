import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let id = null;

const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;

const input = document.getElementById('datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
  },
};

const flatpicker = flatpickr(input, options);

const timer = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  updateTime();
  id = setInterval(updateTime, 1000);
  btnStart.disabled = true;
}

function updateTime() {
  const currentDate = Date.now();
  const selectedDate = flatpicker.selectedDates[0].getTime();
  let differences = selectedDate - currentDate;

  if (differences > 0) {
    const timerTime = convertMs(differences);

    timer.days.textContent = addLeadingZero(timerTime.days);
    timer.hours.textContent = addLeadingZero(timerTime.hours);
    timer.minutes.textContent = addLeadingZero(timerTime.minutes);
    timer.seconds.textContent = addLeadingZero(timerTime.seconds);
  } else {
    clearInterval(id);
  }
}

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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}