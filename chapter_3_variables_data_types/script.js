/*
// Понятие переменной
var firstNumber = 3;
var secondNumber = 7;
var total = Number(firstNumber) + Number(secondNumber);
alert(total);
*/

/*
var firstNumber = prompt("Введите первое число");
var secondNumber = prompt("Введите второе число");
var total = Number(firstNumber) + Number(secondNumber);
alert(total);
*/

/*
// Глобальные и локальные области видимости
var movie = "Крестный отец";

function showGoodMovie () {
    alert(movie + " - хороший фильм!");
}

function showBadMovie () {
    movie = "Знакомтесь, Джо Блэк";
    alert(movie + " - плохой фильм!");
}

showGoodMovie();
showBadMovie();

showGoodMovie();
*/

/*
// Создание констант с помощью ключевого слова const
const heightOfTheEmpireStateBuilding = 1454;
const speedOfLight = 299792458;
const numberOfProblems = 99;
const meanNumberOfBooksReadIn = 12;
*/

/*
// Числовой тип данных
var numberOfDucks = 4;
var populationOfSpain = 47200000;
var howManyTacos = 8;

// Функция Number()
console.log(Number("42"));
console.log(Number("eggs"));
console.log(Number(true));
console.log(Number(false));

// Функция parseInt()
console.log(parseInt(100.33));

// Функция parseFloat()
console.log(parseFloat(100.33));
console.log(parseFloat("10"));
*/

/*
// Строковой тип данных
var myString = "Привет, я строка.";

// Функции для работы со строками
// charAt(). Возвращает символ, находящийся в указаной позиции в строке.
// Отсчет позиицииначинается с 0.
var watzThisString = "JavaScript - это здорово!";
console.log(watzThisString.charAt(3));

// concat(). Присоединяет к строке одну или несколько строк и возвращает
// обьединенную строку.
var watzThisString1 = "JavaScript - это здорово!";
console.log(watzThisString1.concat(" Нам нравится JavaScript!"));

// indexOf(). Выполняет поиск первого вхождения символа или подстроки в
// данной строке и возвращает номер соответствующей позиции.
var watzThisString2 = "JavaScript - это здорово!";
console.log(watzThisString2.indexOf("здорово"));

// split(). Разбивает строку на массив подстрок.
var watzThisString3 = "JavaScript - это здорово!";
console.log(watzThisString3.split("з"));

// substr(). Извлекает часть строки, начиная с укзанной позиции, и возвращает
// указанное количество символов.
var watzThisString4 = "JavaScript - это здорово!";
console.log(watzThisString4.substr(2, 5));

//substring(). Извлекает символы строки, заключенные между указанными
// позициями (символ, соответствующий концу диапазона, в результат не
// включается).
var watzThisString5 = "JavaScript - это здорово!";
console.log(watzThisString5.substring(2, 5));

// toLowerCase(). Переводит все символы строки в нижний регистр.
var watzThisString6 = "JavaScript - это здорово!";
console.log(watzThisString6.toLowerCase());

// toUpperCase(). Переводит все символы в верхний регистр.
var watzThisString7 = "JavaScript - это здорово!";
console.log(watzThisString7.toUpperCase());
*/

/*
// Булевый тип данных
var isItGreater = Boolean(3 > 20);
console.log(isItGreater);

var areTheySame = Boolean("тигр" === "Тигр");
console.log(areTheySame);

var b = true;
if (b == true) {
    console.log("Это true");
} else {
    console.log("Это false");
}
*/

// Тип данных NaN - это сокращение от Not a Number (не число).

// Тип данных undefined - создание пустой переменной по умолчанию "undefined"
