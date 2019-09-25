var modal = document.getElementById('window');
var btn = document.getElementById("btn");
var close = document.getElementsByClassName("close")[0];


btn.onclick = function (){
	modal.style.display = "block";
}
close.onclick = function(){
	modal.style.display = "none";
}