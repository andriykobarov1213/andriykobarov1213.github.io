// Нужны кое-какие доработки: пробел каждые 4 цифры, когда вставляешь номер карты а 
// не пишешь вручную то не определяется карта как "Visa" иди "MsCard"

// !!!!! Если будете добавлять больше банков создайте массив с ними
// и потом уже доставайте их из массива и проверяйте и тд.
// БИН номера банков для их определения https://bistroinfo.ru/cards/all/

			
document.getElementById("card-number").oninput = function (){
	var cardNum = this.value; // Содержимое input

	var bankName = document.getElementById("bank"); 
	var cardBg = document.getElementById("card-bg");
	var typeCard = document.getElementById("type-card");
	if (cardNum.split('', 1) == 4) {
		// alert("Работает");
		typeCard.outerHTML = '<img src="img/visa.png" id="type-card" alt="visa">';
 		typeCard.style.display="block";
	}
	if (cardNum.split('', 1) == 5) {
		// alert("Работает");
		typeCard.outerHTML = '<img src="img/mscard.png" id="type-card" alt="mscard">';
 		typeCard.style.display="block";
	}
	if(cardNum.trim().length == 6){
		if (cardNum == 516749) { // Определяет название банка Ощадбанк
			bankName.outerHTML = '<img src="img/oshad.png" id="bank" alt="oshad">';
			cardBg.style.background="#04503C";
		}
		if (cardNum == 414943) { // Определяет название банка Приват
			bankName.outerHTML = '<img src="img/privat.png" id="bank" alt="privat">';
			cardBg.style.background="#89CA77";
		}
		if(cardNum == /[A-Z][a-z])/g){
			alert("буква");
		}
	}
// 	if(cardNum.trim().length == 1){
// 	if(cardNum == 4){ // Этот блок кода определяет Visa
// 		typeCard.outerHTML = '<img src="img/visa.png" id="type-card" alt="visa">';
// 		typeCard.style.display="block";
// 	}
// 	if(cardNum == 5){ // Этот блок кода определяет MScard
// 		typeCard.outerHTML = '<img src="img/mscard.png" id="type-card" alt="mscard">';
// 		typeCard.style.display="block";
// 	}
// }
	if(cardNum == ""){// Когда пустая строка - тип, фон и название банка убирается.
		typeCard.style.display="none";
		cardBg.style.background="#A6A6A6";
		bankName.style.display="none";
	}
}

// alert( cardNum.split('', 1) ) 