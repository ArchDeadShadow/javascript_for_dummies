// 1. Суммирование элементов массива без функции
var myNumber = [2, 4, 2, 7];
var total = 0;

// Лучше использовать for...of или for (let i = 0; i < arr.length; i++)
for (var i = 0; i < myNumber.length; i++) {
  total += myNumber[i];
}
document.write(total + "<br>");

// 2. Преимущества использования функций. Функция для сложения чисел, образующих массив
/**
 * Сложение элементов массива
 * @param {Array.<number>} numbersToAdd
 * @return {number} sum
 */
function addNumbers(numbersToAdd) {
  var sum = 0;
  for (var i = 0; i < numbersToAdd.length; i++) {
    sum += numbersToAdd[i];
  }
  return sum;
}

// 3. Примеры использования функции addNumbers
var myNumber = [2, 4, 2, 7];
var myNumbers2 = [3333, 222, 111];
var myNumbers3 = [777, 555, 777, 555]; // Исправлено имя переменной

var sum1 = addNumbers(myNumber);
var sum2 = addNumbers(myNumbers2);
var sum3 = addNumbers(myNumbers3);

document.write(sum1 + "<br>");
document.write(sum2 + "<br>");
document.write(sum3 + "<br>");

// 4. Возврат значения функцией
function getHello() {
  return "Привет!";
}

var helloText = getHello();
console.log(helloText);

// 5. Возврат результата вычисления выражения
function getCircumference() {
  var radius = 12;
  return 2 * Math.PI * radius;
}

console.log(getCircumference());
