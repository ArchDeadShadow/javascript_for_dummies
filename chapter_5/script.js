var numberSeven = Number(prompt("Введите число 7"));
var birthMonth = Number(prompt("Введите месяц вашего рождения"));
var calculation = numberSeven * birthMonth;

calculation = calculation - 1;
calculation = calculation * 13;

var birthDay = Number(prompt("Введите число вашего дня рождения"));

calculation = calculation + birthDay;
calculation = calculation + 3;
calculation = calculation * 11;
calculation = calculation - birthMonth;
calculation = calculation - birthDay;
calculation = calculation / 10;
calculation = calculation + 11;
calculation = calculation / 100;

document.write("Вы родились " + calculation);