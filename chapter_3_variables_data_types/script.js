// Понятие переменной
var firstNumber = 3
var secondNumber = 7
var total = Number(firstNumber) + Number(secondNumber)
alert(total)

// Ввод чисел пользователем
var firstNumber = prompt('Введите первое число')
var secondNumber = prompt('Введите второе число')
var total = Number(firstNumber) + Number(secondNumber)
alert(total)

// Глобальные и локальные области видимости
var movie = 'Крестный отец'

function showGoodMovie() {
	alert(movie + ' - хороший фильм!')
}

function showBadMovie() {
	movie = 'Знакомьтесь, Джо Блэк'
	alert(movie + ' - плохой фильм!')
}

showGoodMovie()
showBadMovie()
showGoodMovie()

// Создание констант с помощью ключевого слова const
const heightOfTheEmpireStateBuilding = 1454
const speedOfLight = 299792458
const numberOfProblems = 99
const meanNumberOfBooksReadIn = 12

// Числовой тип данных
var numberOfDucks = 4
var populationOfSpain = 47200000
var howManyTacos = 8

console.log(Number('42')) // Преобразование строки в число
console.log(Number('eggs')) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0

console.log(parseInt(100.33)) // Извлечение целой части числа
console.log(parseFloat(100.33)) // Преобразование строки в число с плавающей точкой
console.log(parseFloat('10'))

// Строковой тип данных
var myString = 'Привет, я строка.'

// Примеры работы со строками
var exampleString = 'JavaScript - это здорово!'
console.log(exampleString.charAt(3)) // Возвращает символ по индексу
console.log(exampleString.concat(' Нам нравится JavaScript!')) // Объединение строк
console.log(exampleString.indexOf('здорово')) // Поиск подстроки
console.log(exampleString.split('з')) // Разделение строки
console.log(exampleString.substr(2, 5)) // Извлечение подстроки
console.log(exampleString.substring(2, 5)) // Извлечение подстроки между индексами
console.log(exampleString.toLowerCase()) // Преобразование в нижний регистр
console.log(exampleString.toUpperCase()) // Преобразование в верхний регистр

// Булевый тип данных
var isItGreater = Boolean(3 > 20)
console.log(isItGreater) // false

var areTheySame = Boolean('тигр' === 'Тигр')
console.log(areTheySame) // false

var b = true
if (b) {
	console.log('Это true')
} else {
	console.log('Это false')
}

// Тип данных NaN
console.log(Number('abc')) // NaN

// Тип данных undefined
var myVar
console.log(myVar) // undefined
