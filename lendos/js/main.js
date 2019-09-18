var open = document.getElementById("open");
var open2 = document.getElementById("open2");
var close = document.getElementById("close");
var menu = document.getElementById("menu-left");
var menu2 = document.getElementById("menu-right");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var a = 0;

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
