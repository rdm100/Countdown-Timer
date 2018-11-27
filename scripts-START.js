let countdown;
const timerDisplay = document.querySelector(".display__time-left");;

function timer(seconds){
	const currentTime = Date.now();
	const then = currentTime + seconds*1000;
	console.log({currentTime, then});
	displayTimeLeft(seconds);

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