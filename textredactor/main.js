var input = document.getElementById("input");
var outColor = document.getElementById("out-color"); 
var outFont = document.getElementById("out-font");
var color = document.getElementById("color");
var colorSelect = document.getElementById("color-select");

defolt();

color.oninput = function () {
	input.style.color = color.value;
	outColor.innerHTML = color.value;
	colorSelect.style.backgroundColor = color.value;
}
function defolt () {
	outColor.innerHTML = color.value;
	colorSelect.style.backgroundColor = color.value;
	outFont.innerHTML = "Times New Roman";
}
function f1 () {
	input.style.fontWeight="bold";
}
function f2 () {
	input.style.fontWeight="lighter";
}
console.log(color.value);

function f7 () {
	input.style.fontFamily="Arial"
	outFont.innerHTML = "Arial"
}
function f8 () {
	input.style.fontFamily="Comfortaa"
	outFont.innerHTML = "Comfortaa"
}
function f9 () {
	input.style.fontFamily="Gagalin"
	outFont.innerHTML = "Gagalin"
}
function f10 () {
	input.style.fontFamily="Segoe print"
	outFont.innerHTML = "Sagoe print"
}