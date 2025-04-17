// Массивы

// Создание массивов с использованием ключевого слова new
var catNames = new Array('Larry', 'Fuzzball', 'Mr. Furly')
console.log(catNames)

// Литеральное определение массива
var dogNames = ['Shaggy', 'Tennessee', 'Dr. Spock']
console.log(dogNames)

// Заполнение массивов значениями
var peopleList = []
peopleList[0] = 'Chris Minnick'
peopleList[1] = 'Eva Holland'
peopleList[2] = 'Abraham Lincoln'
console.log(peopleList)

peopleList[99] = 'Tina Turner'
console.log('Длина массива:', peopleList.length)

// Многомерные массивы
var bestAlbumsByGenre = []
bestAlbumsByGenre[0] = [
	'Johnny Cash: Live at Folsom',
	'Patsy Cline: Sentimentally Yours',
	"Hank Williams: I'm Blue Inside",
]
bestAlbumsByGenre[1] = [
	'T-Rex: Slider',
	'Nirvana: Nevermind',
	'Lou Reed: Transformer',
]
bestAlbumsByGenre[2] = [
	'Flipper: Generic',
	'The Dead Milkmen: Big Lizard in My Backyard',
	'Patti Smith: Easter',
]

// Доступ к элементам многомерного массива
console.log('Лучшие альбомы по жанрам:', bestAlbumsByGenre)
console.log('Лучшие рок-альбомы:', bestAlbumsByGenre[1])
console.log('Третий альбом в жанре панк:', bestAlbumsByGenre[2][2])

// Пример работы с массивом, содержащим разные типы данных
var random = ['tree', 795, [0, 1, 2]]
console.log('Элемент массива:', random[2][2])

// Перемещение по элементам массива в цикле
var myArray = ['apple', 'banana', 'cherry']
for (var i = 0; i < myArray.length; i++) {
	console.log('Элемент массива:', myArray[i])
}

// Свойства массивов
var exampleArray = []
exampleArray[2000] = 'Элемент'
console.log('Длина массива:', exampleArray.length)
exampleArray.length = 10 // Уменьшение длины массива
console.log('Новая длина массива:', exampleArray.length)

// Методы для работы с массивами

// concat()
var fruits = ['apple', 'banana']
var vegetables = ['carrot', 'potato']
var combined = fruits.concat(vegetables)
console.log('Объединенный массив:', combined)

// indexOf()
var index = fruits.indexOf('banana')
console.log("Индекс 'banana':", index)

// join()
var joined = fruits.join(', ')
console.log('Массив в строку:', joined)

// push() и pop()
fruits.push('cherry')
console.log('После добавления элемента:', fruits)
fruits.pop()
console.log('После удаления последнего элемента:', fruits)

// shift() и unshift()
fruits.shift()
console.log('После удаления первого элемента:', fruits)
fruits.unshift('grape')
console.log('После добавления элемента в начало:', fruits)

// slice()
var sliced = combined.slice(1, 3)
console.log('Часть массива:', sliced)

// sort()
var sorted = fruits.sort()
console.log('Отсортированный массив:', sorted)

// reverse()
var reversed = fruits.reverse()
console.log('Обратный порядок массива:', reversed)

// map()
var numbers = [1, 2, 3]
var squared = numbers.map(function (num) {
	return num * num
})
console.log('Квадраты чисел:', squared)

// filter()
var filtered = numbers.filter(function (num) {
	return num > 1
})
console.log('Числа больше 1:', filtered)

// reduce()
var sum = numbers.reduce(function (acc, num) {
	return acc + num
}, 0)
console.log('Сумма чисел:', sum)

// every() и some()
var allPositive = numbers.every(function (num) {
	return num > 0
})
console.log('Все числа положительные:', allPositive)

var hasNegative = numbers.some(function (num) {
	return num < 0
})
console.log('Есть ли отрицательные числа:', hasNegative)
