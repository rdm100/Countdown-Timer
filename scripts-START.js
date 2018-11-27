function timer(seconds){
	const currentTime = Date.now();
	const then = currentTime + seconds*1000;
	console.log(currentTime, then);
}