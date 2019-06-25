var elem = document.getElementById("block");
var elem2 = document.getElementById("block2");
var elem3 = document.getElementById("block3");
var elem4 = document.getElementById("block4");
var elem5 = document.getElementById("block5");
var elem6 = document.getElementById("block6");
var input = document.getElementById("input");
var rotate = document.getElementById("spin");
var winner = document.getElementById("winner");
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var j = 0;
function anim () {
	elem.style.left= a + "px";
	a++;
	a++;
	a++;
	a++;
	if(a > 250){
		a--;
		a--;
		a--;
	}
	if (a > 600) {
		a = -50;
	}
	////////////////// b
	elem2.style.left= b + "px";
	b++;
	if (b > 200) {
		b++;
	}
	if (b > 350) {
		b++;
		b--;
		b--;
	}
	if (b > 600) {
		b++;
		b++;
	}
	///////////////// c
	elem3.style.left= c + "px";
	c++;
	if (c > 400) {
		c++;
	}
	/////// b c
	if (c > 500 || b > 600) {
		winner.innerHTML = "";
	}
	if (c > 1000 || b > 1000) {
		winner.innerHTML = "Победитель :)";
		c = -50;
		b = -50;
	}
	elem4.style.left= d + "px";
	d++;
	if (d > 0) {
		elem4.style.background="blue";
	}
	if (d > 100) {
		elem4.style.background="red";
	}
	if (d > 200) {
		elem4.style.background="green";
	}
	if (d > 300) {
		elem4.style.background="black";
	}
	if (d > 400) {
		elem4.style.background="purple";
	}
	if (d > 500) {
		elem4.style.background="orange";
	}
	if (d > 600) {
		elem4.style.background="yellow";
	}
	if (d > 700) {
		elem4.style.background="white";
	}
	if (d > 800) {
		elem4.style.background="grey";
	}
	if (d > 1000) {
		d = -50;
		elem4.style.background="blue";
	}
	elem5.style.left = e + "px"
	e++;
	if (e > 50) {
		elem5.style.width="10px";
	}
	if (e > 150) {
		elem5.style.width="150px";
	}
	if (e > 250) {
		elem5.style.width="50px";
	}
	if (e > 350) {
		elem5.style.width="100px";
	}
	if (e > 400) {
		elem5.style.width="5px";
	}
	if (e > 500) {
		elem5.style.width="15px";
	}
	if (e > 650) {
		elem5.style.width="70px";
	}
	if (e > 750) {
		elem5.style.width="1px";
	}
	if (e > 850) {
		elem5.style.width="50px";
	}
	if (e > 1000) {
		e = -150;
	}
	elem6.style.right= j + "px";
	j++;
	if (j > 1000) {
		j = -50;
	}
} 

var timer = setInterval(anim,4);


 