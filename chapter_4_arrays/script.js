// Массивы
// Создание массивов, использование ключевого слова new
var catNames = new Array("Larry", "Fuzzball", "Mr. Furly");
console.log(catNames);

// Литеральное определение массива
var dogName = ["Shaggy", "Tennesee", "Dr. Spock"];
console.log(dogName);

// Заполнение массивов значениями
var peopleList = [];
peopleList[0] = "Chris Minnick";
peopleList[1] = "Eva Holland";
peopleList[2] = "Abraham Lincoln";
console.log(peopleList);

peopleList[99] = "Tina Turner";
console.log(peopleList.length);

// Многомерные массивы
/*
var listOfList
[0][0];
console.log(listOfList);
*/

/*
var bestAlbumsByGenre = [];
bestAlbumsByGenre[0] = "Country";
bestAlbumsByGenre[0][0] = "Johnny Cash: Live at Folsom";
bestAlbumsByGenre[0][1] = "Patsy Cline: Sentimentally Yours";
bestAlbumsByGenre[0][2] = "Hank Williams: I`m Blue Inside";
bestAlbumsByGenre[1] = "Rock";
bestAlbumsByGenre[1][0] = "T-Rex: Slider";
bestAlbumsByGenre[1][1] = "Nirvana: Nevermind";
bestAlbumsByGenre[1][2] = "Lou Reed: Transformer";
bestAlbumsByGenre[2] = "Punk";
bestAlbumsByGenre[2][0] = "Flipper: Generic";
bestAlbumsByGenre[2][1] = "The Dead Milkmen: Big Lizard in my Backyard";
bestAlbumsByGenre[2][2] = "Petti Smith: Easter";

// Доступ к элементам массива
console.log(bestAlbumsByGenre);

console.log(bestAlbumsByGenre[2]);

// Доступ к многомерному массиву
var random = ["tree", 795, [0, 1, 2]];

console.log(random[2][2]);
*/

// Перемещение по элементам массива в цикле.
// Свойства массивов
/* Свойство - Возвращаемое значение

prototype - Позволяет добавлять свойства и методы в обьекта Array.

constructor - Ссылка на функцию, создавшую прототип обьекта Array.

length - Возвращает или устанавливает количество элементов в массиве.
*/

var myArray = [2000];

console.log(myArray.length);

console.log(myArray.length = 10);

// Методы для работы с массивами
/* Метод - Возвращаемое значение.

concat() - Новый массив, содержащий текущий массив и дополненный другими
 массивами и элементами.

every() - Возвращает значение true, если каждый елемент массива
 удовлетворяет условию, предоставляемому текстовй функцией.

filter() - Новый массив, который содержит все элементы текущего массива,
 удовлетворяющие условию, предоставляемому заданной текстовой функцией.

forEach() - Выполняет заданную функцию для каждого элемента массива.

indexOf() - Индекс превого вхождения заданного значения в массиве. Если
 значение не обнаружено, то возвращается -1.

join() - Обьединяет все элементы массива в одну строку.

lastIndexOf() - Индекс последнего вхождения заданного значения в массиве.
 Если значение не обнаружено, возвращается -1.

map() - Новый массив, полученный путем преобразования каждого элемента
 текущего масива с помощью заданной функции.

pop() - Удаляет последний элемент из массива.

push() - Добавляет новые элементы в конец массива.

reduce() - Сводит два значения массива в одно, применяя к обоим заданную
 функцию (слева направо).

reduceRight() - Сводит два значения массива в одно, применяя к обоим
 заданную функцию (справа налево).

reverse() - Обращает порядок следования элементов в массиве.

shift() - Удаляет первый элемент из массива и возвращает его, изменяя длину
 массива.

slice() - Выбирает часть массива и возвращает его в виде нового массива.

some() - Возвращает значение true, если один или несколько элементов массива
 удовлетворяет условию, предоставляемому текстовой функией.

sort() - Возвращает отсортированный массив (по умолчанию  сортировка
 выполняется в алфавитном порядке и в порядке возрастания).

splice() - Возвращает новый массив, состоящий из элементов, которые были
 добавлены или удалены из данного массива.

toString() - Преобразует массив в строку.

unShift() - Возвращает новый массив другой длины, к которому добавлены один
 или нескольоко элементов.
*/