let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
	clearInterval(countdown);
	const currentTime = Date.now();
	const then = currentTime + seconds*1000;
	console.log({currentTime, then});
	displayTimeLeft(seconds);
	displayEndTime(then);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if(secondsLeft < 0){
			clearInterval(countdown);
			return;
		}
		console.log(secondsLeft);
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds){
	console.log(seconds);
	const minutes = Math.floor(seconds/60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds}`;
	timerDisplay.textContent = display;
	console.log({minutes, remainderSeconds});
	document.title = display;
}

function displayEndTime(timestamp){
	const end = new Date(timestamp);
	const hour = end.getHours();
	const minutes = end.getMinutes();
	endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' + minutes : minutes}`;
}

function startTimer(){
	console.log(this.dataset.time);
	const seconds = parseInt(this.dataset.time);
	console.log(seconds);
	timer(seconds);
}

buttons.forEach(button => {
	button.addEventListener("click", startTimer);
});

document.customForm.addEventListener("submit", function(e){
	e.preventDefault();
	const minutes = this.minutes.value;
	console.log(minutes);
	this.reset();
	const seconds = minutes*60;
	timer(seconds);
});

