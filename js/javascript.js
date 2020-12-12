"use strict"
// Проверка формы 
function validateForm() {
	let x = document.forms["myForm"]["frame"].value;
	if (x == "") {
		alert("Форму надо заполнить и указать имя и фамилию");
		return false;
	}
}
// Проверка длинны номера телефона
function validateTel () {
	let x, text;
	
	// сюда приходят значения от пользователей
	x = document.getElementById("tel").value;

	// провека djlbvsq lfyys[]
	if (isNaN(x) && x === 11 ) {
		text = "Номер должен быть из 11 цифр и без букв";
	}
	document.getElementById("demo").innerHTML = text;
}