// const timerTime = document.getElementById('timer');
// let timerTimeValue = parseInt(timerTime.textContent, 10);

// let timerId = setInterval(() => {
//     timerTimeValue--;
//     timerTime.textContent = `${timerTimeValue}`;

//     if (timerTimeValue === 0) {
//         alert('Вы победили в конкурсе');
//         clearInterval(timerId);
//     }
// }, 1000)

const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const donloadFile = document.getElementById('download-file');

let hourValue = parseInt(hour.textContent, 10);
let minuteValue = parseInt(minute.textContent, 10);
let secondValue = parseInt(second.textContent, 10);

let allInSeconds = hourValue * 3600 + minuteValue*60 + secondValue;

let timerId = setInterval(() => {
	hourValue = Math.floor((allInSeconds / 60 / 60) % 60); // Получаем часы
	minuteValue = Math.floor((allInSeconds / 60) % 60); // Получаем минуты
    secondValue = allInSeconds % 60; // Получаем секунды
	if (allInSeconds <= 0) {
		clearInterval(timerId);
		alert('Вы победили в конкурсе');
		donloadFile.click();
	} else {

		hour.textContent = hourValue.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});
        minute.textContent = minuteValue.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});
        second.textContent = secondValue.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});
	}
	--allInSeconds; 
}, 1000);

