/**************** for loop with template literal ***********/




/**************** setTimeout ***********/

// the setTimeout method calls a function after a specified amount of milliseconds:
var delayedFunction = function(){
	appendToX("root_3_settimeout", 'this appeared after a 2 seconds');
};

setTimeout(delayedFunction, 2000);

// a little counter-intuitive, but if you want to pass a parameter 
// through your function in a setTimeout you just list the parameters after the seconds:

var outputString = function(location, string){
	appendToX(location, string);
};

setTimeout(outputString, 3000, "root_3_settimeout", "<br>this string was passed as a parameter through a setTimeout");


/**************** setInterval ****************/

// setInterval is like setTimeout except it repeats until you clear it:
// the following example will run every 1 second:
var myInterval = setInterval(outputString, 1000, "root_4_setinterval", `<div class="square"></div>`);


// to clear an interval you need to be able to call it: (so in this case, we are stopping the interval after 10 seconds):
setTimeout( function(){
	clearInterval(myInterval)
}, 10000);


/**************** setInterval and Looping ****************/

var j = 0; // to keep track of how many times you want to loop, you have to simulate a for loop:

var myAppendingFunction = function(){

	var rotation = Math.round((j/10) * 360);
	document.getElementById("root_5_setinterval").insertAdjacentHTML("beforeend", ` 
		<div class="square" style="transform:rotate(${rotation}deg);"></div>
		<br>`);

	if(j >= 10){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	j++;
}


var myAnimating = setInterval(myAppendingFunction, 500);

var timer = 100;

var myLoopFunction = function(i){

	var rotation = Math.round((i/10) * 360);	
	var positionLeft = Math.floor(Math.random()*document.body.clientWidth);
	var positionRight = Math.floor(Math.random()*document.body.clientHeight);

	document.getElementById("root_6_settimeout").insertAdjacentHTML("beforeend", `
		<div class="square" style="transform:rotate(${rotation}deg); position:relative; left:${positionLeft}px; top:${positionRight}px;"></div>
	 `);
}

for (var i = 0; i < 10; i++) {
	setTimeout(myLoopFunction, i*100, i)
}



