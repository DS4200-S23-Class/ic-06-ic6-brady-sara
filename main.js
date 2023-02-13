
function changeColor() {
	console.log("clicked");
	let line = document.getElementById("bottomLine");

	line.classList.toggle("red");
}

// get the button Id
let pointButton =  document.getElementById("button1");
// listen for a click
pointButton.addEventListener("click", changeColor);


// Create list of points
let points = document.getElementById("circle1");

points.addEventListener("mouseover", mouseOver);
points.addEventListener("mouseout", mouseOut);

function mouseOver() {
	let circ = document.getElementById("circle1");
	circ.classList.toggle("orange");
}

function mouseOut() {
	let circ = document.getElementById('circle1');
	circ.classList.toggle("orange");
}