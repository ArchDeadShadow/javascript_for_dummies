// Запрашиваем у пользователя число 7
var numberSeven = Number(prompt('Введите число 7'))

// Запрашиваем месяц рождения
var birthMonth = Number(prompt('Введите месяц вашего рождения'))

// Выполняем расчёты
var calculation = numberSeven * birthMonth
calculation = calculation - 1
calculation = calculation * 13

// Запрашиваем день рождения
var birthDay = Number(prompt('Введите число вашего дня рождения'))

// Продолжаем расчёты
calculation = calculation + birthDay
calculation = calculation + 3
calculation = calculation * 11
calculation = calculation - birthMonth
calculation = calculation - birthDay
calculation = calculation / 10
calculation = calculation + 11
calculation = calculation / 100

// Выводим результат
document.write('Вы родились ' + calculation)
