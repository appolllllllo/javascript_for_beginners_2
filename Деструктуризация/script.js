// Деструктуризация массивов в JavaScript

/* В данном уроке мы разберем операцию деструктуризации массивов. Данная операция предназначена для массовой записи элементов массива в переменные в одну строчку кода.

Синтаксис этой операции следующий:

let [переменная1, переменная2, переменная3] = массив; 

Как вы видите, слева от знака = в квадратных скобках перечисляются имена переменных. Эти переменные массово объявляются через let, который располагается перед открывающей скобкой.

В результате операции в первую переменную запишется первый элемент массива (то есть с ключом ноль), во вторую переменную - второй, в третью переменную - третий.

Давайте посмотрим на практическом примере. Пусть у нас есть массив, хранящий год, месяц и день:

let arr = [2025, 12, 31];

Давайте запишем год, месяц и день в соответствующие переменные, используя деструктуризацию:

let arr = [2025, 12, 31];
let [year, month, day] = arr;

Посмотрим на содержимое наших переменных:

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

Для сравнения посмотрите, насколько неудобным и длинным получится код без деструктуризации:

let arr = [2025, 12, 31];

let year  = arr[0];
let month = arr[1];
let day   = arr[2];

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31 */

/* let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 

let [name, surname, department, position, salary] = arr;

console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary); */

// Деструктуризация массива из функции в JavaScript

/* Массив для деструктуризации не обязательно должен хранится в переменной. Он также может быть результатом работы функции. Посмотрим на примере. Пусть дана вот такая функция:

function func() {
    return [2025, 12, 31];
}

Деструктуризируем возвращаемое этой функцией значение:

let [year, month, day] = func(); */

/* function func() {
    return ['John', 'Smit', 'development', 'programmer', 2000];
}

let [name, surname, department, position, salary] = func();

console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary); */

// Пропуск элементов массива при деструктуризации в JavaScript

/* Можно начать записывать в переменные не сначала массива, а пропустить некоторые значения. Давайте, к примеру, пропустим год, а месяц и день запишем в переменные. Для этого при указании переменных перед первой переменной поставим запятую, вот так: [, month, day]:

let arr = [2025, 12, 31];
let [, month, day] = arr;

onsole.log(month); // выведет 12
console.log(day);   // выведет 31

Можно пропустить не одно значение, а несколько:

let arr = [2025, 12, 31];
let [,, day] = arr;

console.log(day);   // выведет 31 */

/* let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let [,, department, position] = arr;

console.log(department);
console.log(position); */

// Лишние значения при деструктуризации массива в JavaScript

/* Если в массиве меньше элементов, чем переменных, то в "лишние" переменные запишется undefined:

let arr = [2025, 12];
let [year, month, day] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет undefined 

Если в массиве больше элементов, чем переменных - лишние элементы никуда не запишутся и ничего страшного не произойдет. Для примера добавим в наш массив еще часы, минуты и секунды - от этого ничего не поменяется:

let arr = [2025, 12, 31, 23, 59, 59]; 
let [year, month, day] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31 */

// Остаток массива при деструктуризации в JavaScript

/* Если в массиве больше элементов, чем переменных, при необходимости лишние элементы можно записать в массив с помощью оператора rest:

let arr = [2025, 12, 31, 23, 59, 59]; 
let [year, month, day, ...time] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

console.log(time);  // выведет [23, 59, 59] */

/* let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 

let [name, surname, ...info] = arr;

console.log(name);
console.log(surname);
console.log(info); */

// Значения по умолчанию при деструктуризации массива в JavaScript

/* Для переменных можно указывать значения по умолчанию. В этом случае, если переменной не хватит элемента массива - возьмется значение по умолчанию. В следующем примере переменной day по умолчанию указано значение 1:

let arr = [2025, 12];
let [year, month, day = 1] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 1

А вот если для переменной day будет значение в массиве - значение по умолчанию будет проигнорировано:

let arr = [2025, 12, 31];
let [year, month, day = 1] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31 */

/* let arr = ['John', 'Smit', 'development', 'programmer'];

let [name, surname, department, position = "trainee"] = arr;

console.log(name);
console.log(surname);
console.log(department);
console.log(position); */

// Функции по умолчанию при деструктуризации массива в JavaScript

/* В качестве значения по умолчанию можно также указывать функцию. Пусть, к примеру, у нас есть функция, возвращающая текущий день месяца:

function func() {
	return (new Date).getDate();
}

Давайте укажем эту функцию в качестве значения переменной day:

let [year, month, day = func()] = arr; */

/* let arr = [];

function func() {
	return (new Date).getDate();
}

let [year = new Date().getFullYear(), month = new Date().getMonth() + 1, day = func()] = arr;

console.log(day);
console.log(month);
console.log(year); */

// Объявление переменных при деструктуризации массива в JavaScript

/* Не обязательно объявлять переменные при деструктуризации. Они могут быть объявлены заранее и тогда при присваивании не нужно будет писать команду let:

let arr = [2025, 12, 31];
let year;
let month;
let day;

[year, month, day] = arr;

Есть, однако, нюансы. Посмотрите на следующий код:

let arr = [2025, 12, 31];
let year;

let [year, month, day] = arr;
Как вы видите, переменная year была объявлена заранее, но переменные month и day - нет. Поэтому автор кода решил написать let перед деструктуризирующим присваиванием.

Это, однако, приведет к ошибке, так как нельзя одну и туже переменную объявлять два раза через let (получится, что year объявлена два раза). */

// Деструктуризация объектов в JavaScript

/* Можно также делать и деструктуризацию объектов. Пусть, к примеру, у нас есть следующий объект:

let obj = {
    year: 2025,
    month: 12,
    day: 31.
};

Давайте выполним его деструктуризацию:

let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year, month, day} = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

При деструктуризации объектов имена переменных должны совпадать с ключами объекта, порядок переменных и элементов в объекте не имеет значения */

/* let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let {color, width, height} = options;

console.log(color);
console.log(width);
console.log(height); */

// Имена переменных при деструктуризации объектов в JavaScript

/* Можно сделать так, чтобы имена переменных не совпадали с именами ключей объекта:

let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year: y, month: m, day: d} 
	= obj; 

console.log(y); // выведет 2025
console.log(m); // выведет 12
console.log(d); // выведет 31 */

/* let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let {color: c, width: w, height: h} = options;

console.log(c);
console.log(w);
console.log(h); */

// Значения по умолчанию при деструктуризации объектов в JavaScript

/* При деструктуризации объектов можно также указывать значения по умолчанию. При этом, в отличии от деструктуризации массивов, необязательной может быть любая переменная - не обязательно с конца массива. Давайте, например, укажем значение по умолчанию для переменной year:

let obj = {
	month: 12,
	day: 31,
};

let {year = 2025, month, day} = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31 */

/* let options = {
	width:  400,
	height: 500,
};

let {color = "black", width, height} = options;

console.log(color);
console.log(width);
console.log(height); */

// Переменные и значения по умолчанию в JavaScript

/* Можно также менять названия переменных на свои при этом задавая значения по умолчанию:

let obj = {
	month: 12,
	day: 31,
};

let {year:y = 2025, month, day} = obj; 

console.log(y);     // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31 */

/* let options = {
	width:  400,
	height: 500,
};

let {color: c = "black", width: w, height: h} = options;

console.log(c);
console.log(w);
console.log(h); */

// Объявление переменных при деструктуризации объектов в JavaScript

/* Не обязательно объявлять переменные при деструктуризации. Они могут быть объявлены заранее:

let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let year, month, day; // объявим переменные заранее 

Тут, однако, в отличии от массивов, есть нюансы. Без команды let перед фигурными скобками эти фигурные скобки не будут восприняты JavaScript как команда на деструктуризацию (а будут восприняты как блок кода):

{year, month, day} = obj; // не будет работать 

Для решения проблемы команду на деструктуризацию объекта нужно брать в круглые скобки:

({year, month, day} = obj); */

// Деструктуризация параметров функций в JavaScript

/* Деструктуризация имеет еще одну очень важную область применения - передача параметров функций. Суть в следующем: если функция принимает в качестве параметра массив, мы можем задать прямо в объявлении функции то, как деструктуризировать этот массив.

Давайте посмотрим на примере. Пусть у нас есть функция, параметром принимающая массив с годом, месяцем и днем:

func([2025, 12, 31]);

Давайте прямо в параметре функции укажем, на какие переменные следует разбивать этот массив:

function func([year, month, day]) {
	console.log(year);  // выведет 2025 
	console.log(month); // выведет 12
	console.log(day);   // выведет 31
}

Приведенную выше конструкцию следует рассматривать как один параметр функции. Можно при желании добавить еще параметры:

func('str1', [2025, 12, 31], 'str2');

function func(param1, [year, month, day], param2) { 
	console.log(param1); // выведет 'str1' 

	console.log(year);   // выведет 2025 
	console.log(month);  // выведет 12
	console.log(day);    // выведет 31
	
	console.log(param2); // выведет 'str2' 
}

А в следующем примере первым и вторым параметром функции передаются массивы и мы деструктуризируем оба из них:

func([2025, 12, 31], [2026, 11, 30]); 

function func([year1, month1, day1], 
	[year2, month2, day2]) { 
	console.log(year1);  // выведет 2025 
	console.log(month1); // выведет 12
	console.log(day1);   // выведет 31
	
	console.log(year2);  // выведет 
		2026 
	console.log(month2); // выведет 11
	console.log(day2);   // выведет 30
} */

/* function func([name, surname, department, position, salary]) {
    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
    console.log(salary);
}

func( ['John', 'Smit', 'development', 'programmer', 2000] ); */

/* function func([name, surname, info]) {
    console.log(name);
    console.log(surname);
    console.log(info);
}

func( ['John', 'Smit', 'development', 'programmer', 2000] ); */

/* function func([name, surname, department, position = "junior"]) {
    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
}

func( ['John', 'Smit', 'development'] ); */

/* function func(department, [name, surname], [year, month, day]) { 
    console.log(department);
    console.log(name);
    console.log(surname);
    console.log(year);
    console.log(month);
    console.log(day);
}

func( 'development', ['John', 'Smit'], [2018, 12, 31] ); */

// Деструктуризация oбъектов параметров функций в JavaScript

/* Аналогичным образом можно деструктуризировать параметры-объекты:

function func({year, month, day}) {
	console.log(year);  // выведет 2025 
	console.log(month); // выведет 12
	console.log(day);   // выведет 31
}

func({year: 2025, month: 12, day: 31,}); */

/* function func({color, width, height}) {
    console.log(color);
    console.log(width);
    console.log(height);
}

func( {color: 'red', width: 400, height: 500} ); */

/* function func({width, height, color = "black"}) {
    console.log(width);
    console.log(height);
    console.log(color);
}

func( {color: 'red', width: 400, 
	height: 500} ); */