let countdown;

function timer(seconds){
	const currentTime = Date.now();
	const then = currentTime + seconds*1000;
	console.log({currentTime, then});

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if(secondsLeft < 0){
			clearInterval(countdown);
			return;
		}
		console.log(secondsLeft);
	}, 1000);
}