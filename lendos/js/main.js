var open = document.getElementById("open");
var open2 = document.getElementById("open2");
var close = document.getElementById("close");
var menu = document.getElementById("menu-left");
var menu2 = document.getElementById("menu-right");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");

var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var link4 = document.getElementById("link4");
var link5 = document.getElementById("link5");



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
