//setInterval(function(){ alert("Hello"); }, 3000);

let element = document.querySelector(".timer");
let defaultTime = 1500;
let timeLeft = defaultTime;

let id = setInterval(function(){
	minutes = parseInt(timeLeft / 60, 10);
    seconds = parseInt(timeLeft % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds

	// let numberOfMinutes = timeLeft / 60;
	// let numberOfSeconds = timeLeft - numberOfMinutes * 60;
	element.innerHTML = minutes + ":" + seconds;
	// + ":" +	numberOfSeconds.toString();
	if (--timeLeft < 0) {
		clearInterval(id)
	}

},1000)


// document.querySelector(".start").addEventListener("click", function(){
//   document.querySelector(".display").innerHTML = 0;
// })