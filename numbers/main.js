let out = document.getElementById("out");
let input = document.getElementById("in");
let max = document.getElementById("max");
input.oninput = function () {
	out.innerHTML = input.value.length;
	if (input.value.length >= 100) {
		max.style.opacity="1";
		max.style.background="red";
	}
	if (input.value.length < 100) {
		max.style.opacity="0";
	}
}
