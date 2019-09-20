var open = document.getElementById("open");
var open2 = document.getElementById("open2");
var close = document.getElementById("close");
var menu = document.getElementById("menu-left");
var menu2 = document.getElementById("menu-right");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");

var ssilka1 = document.getElementById("ssilka1");
var ssilka2 = document.getElementById("ssilka2");
var ssilka3 = document.getElementById("ssilka3");
var ssilka4 = document.getElementById("ssilka4");
var ssilka5 = document.getElementById("ssilka5");
var ssilka6 = document.getElementById("ssilka6");

var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var link4 = document.getElementById("link4");
var link5 = document.getElementById("link5");

var out = document.getElementById("out");
var next = document.getElementById("next");
var text = "<img id='out' class='test' src='img/Nike.jpg'>";


link1.onmouseover = function(){
	menu.style.backgroundImage = 'url(img/addi-menu.png)'

}
link2.onmouseover = function(){
	menu.style.backgroundImage = 'url(img/Nike.jpg)'
}
link3.onmouseover = function(){
	menu.style.backgroundImage = 'url(img/reebok.jpg)'
}
link4.onmouseover = function(){
	menu.style.backgroundImage = 'url(img/puma.jpg)'
}
link5.onmouseover = function(){
	menu.style.backgroundImage = 'url(img/new.jpg)'
}

open.onclick = function(){
	menu.style.display = "block";
}
open2.onclick = function(){
	menu2.style.display = "block";
	open2.style.display = "none";
	line1.style.display = "block";
	a = a + 1;
}
line1.onclick = function(){
	menu2.style.display = "none";
	open2.style.display = "block";
	line1.style.display = "none";
}
close.onclick = function(){
	menu.style.display = "none";
} 
ssilka1.onclick = function(){
	menu2.style.display = "none";
	open2.style.display = "block";
	line1.style.display = "none";
}
ssilka2.onclick = function(){
	menu2.style.display = "none";
	open2.style.display = "block";
	line1.style.display = "none";
} 
ssilka3.onclick = function(){
	menu2.style.display = "none";
	open2.style.display = "block";
	line1.style.display = "none";
} 
ssilka4.onclick = function(){
	menu2.style.display = "none";
	open2.style.display = "block";
	line1.style.display = "none";
}
ssilka5.onclick = function(){
	menu2.style.display = "none";
	open2.style.display = "block";
	line1.style.display = "none";
}
ssilka6.onclick = function(){
	menu2.style.display = "none";
	open2.style.display = "block";
	line1.style.display = "none";
}

// слайдер1

var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
var slide4 = document.getElementById("slide4");
var slide5 = document.getElementById("slide5");
var slide6 = document.getElementById("slide6");
var polosa = document.getElementById('polosa');
var left = 0;

slide1.style.color="#69BAC4";

function f1(){
	left = 0;
	polosa.style.left = left +'px';
	slide1.style.color="#69BAC4";
	slide2.style.color="#fff";
	slide3.style.color="#fff";
	slide4.style.color="#fff";
	slide5.style.color="#fff";
	slide6.style.color="#fff";
}
function f2(){
	left = -808;
	polosa.style.left = left +'px';
	slide2.style.color="#69BAC4";
	slide1.style.color="#fff";
	slide3.style.color="#fff";
	slide4.style.color="#fff";
	slide5.style.color="#fff";
	slide6.style.color="#fff";
}
function f3(){
	left = -1616;
	polosa.style.left = left +'px';
	slide3.style.color="#69BAC4";
	slide1.style.color="#fff";
	slide2.style.color="#fff";
	slide4.style.color="#fff";
	slide5.style.color="#fff";
	slide6.style.color="#fff";
}
function f4(){
	left = -2424;
	polosa.style.left = left +'px';
	slide4.style.color="#69BAC4";
	slide2.style.color="#fff";
	slide3.style.color="#fff";
	slide1.style.color="#fff";
	slide5.style.color="#fff";
	slide6.style.color="#fff";
}
function f5(){
	left = -3232;
	polosa.style.left = left +'px';
	slide5.style.color="#69BAC4";
	slide2.style.color="#fff";
	slide3.style.color="#fff";
	slide4.style.color="#fff";
	slide1.style.color="#fff";
	slide6.style.color="#fff";
}
function f6(){
	left = -4040;
	polosa.style.left = left +'px';
	slide6.style.color="#69BAC4";
	slide2.style.color="#fff";
	slide3.style.color="#fff";
	slide4.style.color="#fff";
	slide5.style.color="#fff";
	slide1.style.color="#fff";
}
function auto(){

	left = left - 808;
	polosa.style.left = left +'px';
	// if (left < -4040) {
	// 	left = 808;
	// }
	if (left == 0) {
		slide1.style.color="#69BAC4";
		slide2.style.color="#fff";
		slide3.style.color="#fff";
		slide4.style.color="#fff";
		slide5.style.color="#fff";
		slide6.style.color="#fff";
	}
	if (left == -808) {
		slide2.style.color="#69BAC4";
		slide1.style.color="#fff";
		slide3.style.color="#fff";
		slide4.style.color="#fff";
		slide5.style.color="#fff";
		slide6.style.color="#fff";
	}
	if (left == -1616) {
		slide3.style.color="#69BAC4";
		slide1.style.color="#fff";
		slide2.style.color="#fff";
		slide4.style.color="#fff";
		slide5.style.color="#fff";
		slide6.style.color="#fff";
	}
	if (left == -2424) {
		slide4.style.color="#69BAC4";
		slide2.style.color="#fff";
		slide3.style.color="#fff";
		slide1.style.color="#fff";
		slide5.style.color="#fff";
		slide6.style.color="#fff";
	}
	if (left == -3232) {
		slide5.style.color="#69BAC4";
		slide2.style.color="#fff";
		slide3.style.color="#fff";
		slide4.style.color="#fff";
		slide1.style.color="#fff";
		slide6.style.color="#fff";
	}
	if(left == -4040){
		// left = 0;
		polosa.style.left = left +'px';
		slide6.style.color="#69BAC4";
		slide2.style.color="#fff";
		slide3.style.color="#fff";
		slide4.style.color="#fff";
		slide5.style.color="#fff";
		slide1.style.color="#fff";
		left = 808;
	}
	
}
setInterval(auto,5000)
// document.getElementById('slide1').onclick = sliderLeft1;
// var left = 0;

// function sliderLeft1(){
// 	var polosa = document.getElementById('polosa');
// 	left = left - 808;
// 	if (left < -2424) {
// 		left = 0;
// 	}
// 	polosa.style.left = left +'px';
// }


// document.getElementById('slider-left').onclick = sliderLeft;
// var left = 0;

// function sliderLeft(){
// 	var polosa = document.getElementById('polosa');
// 	left = left - 808;
// 	if (left < -2424) {
// 		left = 0;
// 	}
// 	polosa.style.left = left +'px';
// }
// слайдер2
