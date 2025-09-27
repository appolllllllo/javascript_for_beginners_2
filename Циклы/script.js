// Введение в циклы в JavaScript

/* В данном уроке мы начнем изучение циклов. Циклы используются для того, чтобы некоторый участок кода выполнился несколько раз подряд.

Зачем это нужно - представьте, что вам нужно возвести в квадрат 100 элементов массива. Если обращаться к каждому элементу отдельно по его ключу - это займет 100 строчек кода, и для того, чтобы написать этот код, нужно будет потратить довольно много времени.

Но это не нужно - у нас есть возможность сделать так, чтобы JavaScript за нас выполнил некоторую операцию нужное количество раз. Например, возвел все элементы массива в квадрат. Это и делается с помощью циклов.

Циклы могут повторять некоторый код заданное количество раз. Каждый такой проход цикла называется итерацией цикла.

В циклах часто используются специальные переменные, которые каждую итерацию увеличивают свое значение на единицу. Такие переменные называются счетчиками циклов. Счетчики используются для того, чтобы подсчитывать, сколько раз выполнился цикл. Для счетчиков принято использовать буквы i, j и k.

В следующих уроках мы приступим к изучению циклов в JavaScript. */

// Перебор массива циклом for-of в JavaScript

/* Цикл for-of позволяет последовательно перебирать элементы массивов. Он имеет следующий синтаксис:

for (let переменнаяДляЭлемента of массив) {
	//В переменнуюДляЭлемента по очереди будут попадать элементы перебираемого массива. 
} */

/* let arr = ['a', 'b', 'c', 'd', 'e']

for (let elem of arr) {
    console.log(elem);
} */

// Перебор объекта циклом for-in в JavaScript

/* Для перебора объектов предназначен цикл for-in. Он имеет следующий синтаксис:

for (let переменнаяДляКлюча in объект) {
	
}

В переменнуюДляКлюча по очереди будут попадать ключи перебираемого объекта. */

/* let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    console.log(key);
} */

/* let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    console.log(obj[key]);
} */

// Цикл while в JavaScript

/* Цикл while будет выполняться до тех пор, пока истинно выражение, переданное ему параметром. Он позволяет выполнять произвольное количество итераций. Вот его синтаксис:

while ( пока выражение истинно ) {
	выполняем этот код циклически;
	в начале каждого цикла проверяем 
		выражение в круглых скобках 
}

Цикл закончится, когда выражение перестанет быть истинным. Если оно было ложным изначально - то он не выполнится ни разу. */

/* let num = 1;

while (num <= 100) {
    console.log(num);
    num++;
} */

/* let num = 11;

while (num <= 33) {
    console.log(num);
    num++;
} */

/* let num = 7;

while (num <= 1000) {
    console.log(num);
    num = num * 3;
} */

// Цикл for JavaScript

/* Цикл for позволяет повторить некоторый код заданное количество раз. Вот его синтаксис:

for ( начальные команды; условие окончания; 
	команды после прохода ) { 
	тело цикла
}

Начальные команды - это то, что выполнится перед стартом цикла. Они выполнятся только один раз. Обычно там размещают начальные значения счетчиков, например: i = 0.

Условие окончания цикла - это условие, при котором цикл будет крутится, пока оно истинное, например: i <= 10.

Команды после прохода цикла - это команды, которые будут выполнятся каждый раз при окончании прохода цикла. Обычно там увеличивают счетчики, например: i++. */

/* for (let num = 1; num <= 100; num++) {
    console.log(num)
} */

/* for (num = 11; num <= 33; num++) {
    console.log(num);
} */

/* for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log(num)
    }
} */

/* for (let num = 0; num <= 99; num++) {
    if (num % 2 > 0) {
        console.log(num);
    }
} */

/* for (let num = 100; num >= 1; num--) {
    console.log(num);
} */

// Цикл for для массивов в JavaScript

/* Массивы также можно перебирать циклом for. Давайте посмотрим, как это делается. Пусть у нас дан вот такой массив:

let arr = [1, 2, 3, 4, 5];

Выведем элементы этого массива в цикле:

for (let i = 0; i <= arr.length - 1; i++) { 
	console.log(arr[i]);
}

Можно не отнимать от длины массива единицу, а использовать строгое сравнение:

for (let i = 0; i < arr.length; i++) { 
	console.log(arr[i]);
}

Перебор массива циклом for дает больший контроль за происходящим. К примеру, можно вывести элементы не с нулевого, а с первого:

for (let i = 1; i < arr.length; i++) { 
	console.log(arr[i]);
}

Можно вывести элементы в обратном порядке:

for (let i = arr.length - 1; i >= 
	0; i--) { 
	console.log(arr[i]);
} */

/* let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i]);
} */

/* let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
} */

/* let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i <= arr.length - 1; i++) { 
	console.log(arr[i]);
} */

// Условия в циклах в JavaScript

/* В циклах можно применять условия. Посмотрим на примере. Пусть у нас есть следующий массив:

let arr = [1, 2, 3, 4, 5];

Выведем в консоль все элементы этого массива:

for (let elem of arr) {
	console.log(elem);
}

А теперь наложим условие и будем выводить только элементы, которые являются четными числами:

for (let elem of arr) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
} */

/* let arr = [2, 5, 9, 15, 1, 4];

for (let elem of arr) {
    if ( elem > 3 && elem < 10) {
        console.log(elem);
    }
} */

/* let obj = {a: 1, b: 2, c: 3, d: 4, e: 5}; 

for (let key in obj) {
    if (obj[key] % 2 !== 0)
        console.log(obj[key]);
} */

// Накопление чисел в циклах JavaScript

/* Давайте с помощью цикла найдем сумму целых чисел от 1 до 100. Для решения такой задачи в цикле перебираются числа и их сумма последовательно записывается в какую-то переменную:

let res = 0;

for (let i = 1; i <= 100; i++) {
	res = res + i;
}

console.log(res);

Можно упростить решение через оператор +=:

let res = 0;

for (let i = 1; i <= 100; i++) {
	res += i;
}

console.log(res); */

/* let res = 0;

for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
    res = res + i; // res += i;
    }
}

console.log(res); */

/* let res = 0;

for (let i = 1; i <= 99; i += 2) {
    res += i;
}

console.log(res); */

/* let res = 1;

for (let i = 1; i <= 20; i++) {
    res = res * i;
}

console.log(res); */

// Накопление элементов массивов в циклах JavaScript

/* let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    res += elem;
}

console.log(res); */

/* let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    if (elem % 2 === 0) {
        res += elem;
    }
}

console.log(res); */

/* let arr = [2, 5, 9, 3, 1, 4];

let res = 0;

for (let elem of arr) {
    res = res + elem * elem;
}

console.log(res); */

/* let arr = [2, 5, 9, 3, 1, 4];

let res = 1;

for (let elem of arr) {
    res = res * elem
}

console.log(res); */

// Формирование строк через циклы в JavaScript

/* С помощью циклов можно формировать строки. Давайте для примера сделаем строку, заполненную десятью буквами 'x':

let str = '';

for (let i = 0; i < 10; i++) {
	str += 'x';
}

console.log(str); // выведет 'xxxxxxxxxx'

А теперь сделаем строку '12345'. Для этого будем прибавлять к нашей переменной счетчик цикла:

let str = '';

for (let i = 1; i <= 5; i++) {
	str += i;
}

console.log(str); // выведет '12345' */

/* let str = "";

for (let i = 0; i <= 4; i++) {
    str += "-";
}

console.log(str); */

/* let str = "";

for (let i = 1; i <= 9; i++) {
    str += i;
}

console.log(str); */

/* let str = "";

for (let i = 9; i >= 1; i--) {
    str += i;
}

console.log(str); */

/* let str = "-";

for (let i = 1; i <= 9; i++) {
    str += i + "-";
}

console.log(str); */

// Цифры числа при переборе циклом JavaScript

/* Пусть при переборе чисел мы хотим получать от этих чисел какую-нибудь цифру. К примеру, мы хотим сделать так, чтобы число выводилось в консоль, если его первая цифра равна 1 или 2.

Сначала необходимо преобразовать число в строку и уже тогда получать определенный символ полученной строки, вот так:

for (let i = 1; i <= 100; i++) {
	let str = String(i); // преобразуем 
		число в строку 
	
	if (str[0] === '1' || str[0] 
		=== '2') { 
		console.log(i);
	}
} */

/* for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(str[0]);
} */

/* for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let first = Number(str[0]);
    let second = Number(str[1]);
    console.log(first + second);
} */

/* for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (str[0] === '1') {
        console.log(str);
    }
} */

/* for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let first = Number(str[0]);
    let second = Number(str[1]);
    if (first + second === 5) {
        console.log(str);
    }
} */

// Инструкция break в JavaScript

/* Инструкция break позволяет досрочно завершать цикл. Давайте посмотрим, когда такое может пригодиться. Пусть у нас есть цикл, выводящий в консоль элементы массива:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	console.log(elem);
}

Пусть перед нами стоит задача определить, есть ли в массиве число 3. Если есть - выведем в консоль слово 'есть' (а если нет - ничего не будем делать).

Решим нашу задачу:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem === 3) {
		console.log('есть');
	}
}

Задача решена, однако, есть проблема: после того, как число 3 уже найдено, массив все равно продолжает бессмысленно перебираться дальше, тратя ценные ресурсы процессора и замедляя работу нашего скрипта.

Оптимальнее было бы сразу после нахождения числа завершить работу нашего цикла. Это можно сделать с помощью специально инструкции break, позволяющей досрочно завершить работу цикла.

Итак, давай завершим цикл, как только нам встретится число 3:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('есть');
		break; // выйдем из цикла
	}
}
    
Инструкция break может завершать любые циклы: обычный for, while и так далее. */

/* let arr = ['0', '1', '2', '3', '4', '5'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === '0') {
        break;
    }
} */

/* let arr = ['-1', '0', '1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]); 

    if (num < 0) {
        break;
    }

    sum += num;
}

console.log(sum); */

/* let arr = ['1', '2', '3', '4', '5'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '3') {
        console.log(i);
        break;
    }
} */

/* let sum = 0;
let i = 1;

while (sum <= 100) {
    sum += i;
    i++;
}

console.log(i - 1); */

// Инструкция continue в JavaScript

/* Существует также инструкция continue, запускающая новую итерацию цикла. Данная инструкция иногда может быть полезна для упрощения кода, хотя практически всегда задачу можно решить и без нее. Давайте посмотрим на практическом примере.

Пусть у нас дан массив с числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль. Вот решение описанной задачи:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

for (let elem of arr) {
	let result;
	
	if (elem % 2 === 0) {
		result = elem * elem;
		console.log(result);
		
	} else if (elem % 3 === 0) {
		result = elem * elem * elem;
		console.log(result);
		
	}
}

Как вы видите, строчка console.log(result) повторяется два раза. Давайте вынесем ее за if, вот так:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

for (let elem of arr) {
	let result;
	
	if (elem % 2 === 0) {
		result = elem * elem;
	} else if (elem % 3 === 0) {
		result = elem * elem * elem;
	}
	
	console.log(result); // вынесли вывод за условие
}

Теперь наш скрипт, однако, работает немного не так: получится, что и для обычных элементов, не обработанных через наш if будет выполнятся вывод переменной result в консоль, что по условию нашей задачи нам не нужно.

Поправим проблему, добавив к нашему if еще условие else, которое будет срабатывать для элементов, не делящихся на 2 и 3, и вызовем там инструкцию continue, которая сразу же будет перебрасывать нас на новую итерацию цикла:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

for (let elem of arr) {
	let result;
	
	if (elem % 2 == 0) {
		result = elem * elem;
	} else if (elem % 3 == 0) {
		result = elem * elem * elem;
	} else {
		continue; // перейдем на новую итерацию цикла 
	}
	
	console.log(result); // выполнится, если делится на 2 или 3 
} */

// Вложенные циклы в JavaScript

/* Циклы, работу с которыми вы уже знаете, можно вкладывать друг в друга. К примеру, давайте решим следующую задачу: выведем на экран строку:

111222333444555666777888999

Тут одним циклом не обойтись - нужно запустить два вложенных друг в друга цикла: первый цикл будет перебирать числа, а второй цикл будет повторять эти числа три раза. Давайте реализуем:

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i);
    }
}

Обратите внимание: первый цикл имеет счетчик i, второй j, а если будет еще и третий цикл - то у него счетчиком будет переменная k. Это стандартные общепринятые названия, следует пользоваться именно ими. */

/* for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
} */

/* let result = "";

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        result += (i * 10 + j) + " ";
    }
}

document.write(result); */

// Область видимости в циклах JavaScript

/* Давайте посмотрим, какой областью видимости обладают переменные при работе с циклами. Объявим какую-нибудь переменную внутри цикла:

for (let i = 1; i <= 9; i++) {
	let num = 3;
	console.log(num); // выведет 3
}

Если же попытаться вывести эту переменную снаружи цикла, то мы получим ошибку:

for (let i = 1; i <= 9; i++) {
	let num = 3;
}

console.log(num); // выдаст ошибку

При необходимости можно объявить переменную снаружи цикла - тогда она будет доступна как внутри цикла, так и снаружи:

let num; // объявим переменную снаружи цикла 

for (let i = 1; i <= 9; i++) {
	num = 3; // установим ей значение
}

console.log(num); // выведет 3 */

// Вложенные циклы и область видимости в JavaScript

/* Если у нас есть цикл в цикле, то переменные, объявленные во внешнем цикле, будут доступны во внутреннем. В следующем примере переменная num доступна во внутреннем цикле:

for (let i = 0; i <= 9; i++) {
	let num = 3;
	
	for (let j = 0; j <= 9; j++) {
		console.log(num); // выведет 3
	}
}

А вот снаружи внешнего цикла переменная num недоступна:

for (let i = 0; i <= 9; i++) {
	let num = 3;
	
	for (let j = 0; j <= 9; j++) {
		
	}
}

console.log(num); // выдаст ошибку

Переменные, объявленные во внутреннем цикле, недоступны снаружи:

for (let i = 0; i <= 9; i++) {
	for (let j = 0; j <= 9; j++) {
		let num = 3;
	}
	
	console.log(num); // выдаст ошибку
}

console.log(num); // выдаст ошибку */

// Заполнение массива в JavaScript

// В цикле можно заполнять массивы данными. Для этого следует использовать метод push:

/* let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

console.log(arr); */

/* let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push("x");
}

console.log(arr); */

/* let numbers = [1, -3, 5, 0, -8, 12, -1, 7];
let positiveNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
         positiveNumbers.push(numbers[i]); 
    }
}

console.log(positiveNumbers); */

// Изменение массива в цикле JavaScript

/* Элементы массивов можно изменять в циклах. Для этого нужно перебирать массивы обычным циклом for.

Давайте для примера умножим элементы массива на 2:

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) { 
	arr[i] = arr[i] * 2;
}

console.log(arr); // выведет [2, 4, 6, 8, 10] 

А теперь увеличим каждый элемент массива на единицу:

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) { 
	arr[i]++;
}

console.log(arr); // выведет [2, 3, 4, 5, 6]

А теперь увеличим каждый элемент массива на 5:

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) { 
	arr[i] += 5;
}

console.log(arr); // выведет [6, 7, 8, 9, 10] */

/* let arr = [1, 2, 3, 4, 5, 6, 7];

for (i= 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
}

console.log(arr); */

/* let arr = [1, 2, 3, 4, 5, 6, 7];

for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i] - 1;
}

console.log(arr); */

/* let arr = [1, 2, 3, 4, 5, 6, 7];

for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 10;
}

console.log(arr); */

// Заполнение объектов через цикл в JavaScript

/* Объекты также можно заполнять данными в циклах. Давайте посмотрим на примере. Пусть у нас есть два массива:

let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];

Давайте с их помощью сделаем объект, взяв ключи для этого объекта из первого массива, а значения - из второго. Для этого запустим цикл и в цикле будем формировать наш объект:

let obj = {};

for (let i = 0; i <= 4; i++) {
    let key = keys[i];
    let value = values[i];

    obj[key] = value;
}

console.log(obj);

Не обязательно вводить переменные для ключа и значения, можно просто поступить вот так:

let obj = {};

for (let i = 0; i <= 4; i++) {
obj[keys[i]] = values[i];
}

console.log(obj); */

/* let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];

let obj = {};

for (let i = 0; i <= 6; i++) {
    let key = arr1[i];
    let value = arr2[i];

    obj[key] = value;
}

console.log(obj); */

/* let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5}; 

let obj2 = {};

for (let key in obj1) {
    let value = obj1[key];

    if (value % 2 === 0) {
        obj2[key] = value;
    }
}

console.log(obj2); */

/* let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};

let obj2 = {};

for (let key1 in obj1) {
    let key2 = obj1[key1];
    let value = key1;
    obj2[key2] = value;
}

console.log(obj2); */

// Изменение объектов через цикл в JavaScript

/* Объекты также можно менять в цикле. Пусть, к примеру, у нас есть вот такой объект:

let obj = {a: 1, b: 2, c: 3};

Давайте переберем его циклом for-in и увеличим каждый из его элементов в 2 раза:

for (let key in obj) {
	obj[key] = obj[key] * 2;
}

Проверим результат:

console.log(obj); */

/* let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    obj[key] = obj[key] ** 2;
}

console.log(obj); */

/* let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    obj[key] = obj[key] + 1;
}

console.log(obj); */

// Работа с флагами в JavaScript

/* Сейчас мы с вами научимся работать с флагами. Флаг - это специальная переменная, которая может принимать только два значения: true и false. С помощью флагов можно решать задачи, проверяющие отсутствие чего-либо: к примеру, можно проверить, что в массиве нет элемента с определенным значением.

Давайте решим следующую задачу: дан массив с числами, нужно проверить, есть ли в нем элемент со значением 3 или нет. Если есть - выведем '+++', если нет - выведем '---'.

Для начала давайте попробуем вывести '+++'. Для этого переберем все элементы нашего массива и ифом будем спрашивать - равен ли текущий элемент значению 3. Если равен - выведем '+++':

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    if(elem == 3) {
        console.log("+++");
    }
}

Но наше решение не очень хорошо: ведь если в массиве будет не одно значение 3, а несколько, то '+++' выведется несколько раз. Давайте исправим наш массив (сделаем два элемента со значением 3) и убедимся в этом:

let arr = [1, 2, 3, 4, 3, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('+++'); // выведет несколько раз 
	}
}

Поправим проблему: завершим цикл с помощью break, если элемент уже найден:

айден:

let arr = [1, 2, 3, 4, 3, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('+++');
		break;  // завершим цикл
	}
}

Давайте теперь попробуем сделать так, чтобы, если в массиве вообще нет элементов со значением 3, выводилось '---'. Распространенным заблуждением будет добавить else к нашему ифу - в этом случае '---' будет выводиться на все элементы, не являющиеся 3:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('+++'); // выведет на элементе 3 
	} else {
		console.log('---'); // выведет на элементах 1, 2, 4, 5 
	}
}

Итак, идея добавить else - плохая идея, не рабочая. Для решения задач подобного типа (такие задачи встречаются достаточно часто) и используют так называемые флаги.

Как уже упоминалось выше, флаг - это такая переменная, которая может принимать два значения: true или false.

Итак, давайте сделаем переменную flag с таким значением: если она равна true, то в массиве есть элемент 3, а если false, то такого элемента нет.

Изначально поставим переменную flag в значение false - то есть будем считать, что элемента 3 в массиве нет:

let arr = [1, 2, 3, 4, 5];
let flag = false; // считаем, что элемента 3 нету в массиве 

Затем запустим цикл с ифом так, как мы делали это раньше. Если цикл обнаружит, что в массиве есть элемент 3 - то поставим переменную flag в значение true и выйдем из цикла с помощью break:

let arr = [1, 2, 3, 4, 5];
let flag = false; // считаем, что элемента 
	3 нет в массиве 

for (let elem of arr) {
	if (elem == 3) {
		flag = true; // элемент есть - переопределим переменную flag 
		break; // выйдем из цикла
	}
}

Ответ на вопрос, если в массиве 3 или нет, мы можем дать только после цикла. И этот ответ у нас уже есть: после цикла переменная flag могла остаться false или могла сменить свое значение на true, если цикл обнаружил в массиве 3:

let arr = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr) {
	if (elem == 3) {
		flag = true;
		break;
	}
}

// тут переменная flag равна или true, или false 

Теперь после цикла мы можем сделать иф, который посмотрит на переменную flag и выведет на экран '+++' или '---':

let arr = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr) {
	if (elem == 3) {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let arr = ['a', 'b', 'c', 'd', 'e'];

let flag = false;

for (let elem of arr) {
    if (elem === "c") {
        flag = true;
        break;
    }
}

if (flag === true) {
    console.log("+++");
} else {
    console.log("---");
} */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (let num of arr) {
    let flag = true;

    if (num <= 1) {
        flag = false;
    } else {
        
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                flag = false;
                break;        
            }
        }
    }

    console.log(num + ": " + (flag ? "+++" : "---"));
} */

// Советы по написанию кода циклов в JavaScript
 
/* По мере изучения языка сложность ваших программ растет. Пришло время поговорить о том, как правильно писать код так, чтобы он делал то, что вы задумывали. Я дам вам хорошую методику.

Пусть перед вами стоит задача достаточной сложности, для реализации которой нужно написать некоторое количество строк кода.

Неправильным подходом будет пытаться написать весь код решения целиком, а потом начать его проверять. В этом случае высока вероятность, что у вас ничего не заработает, а ошибку придется искать в большом количестве кода.

Правильным подходом является разбиение задачи на маленькие элементарные шаги, которые вы будете реализовывать и сразу проверять их правильность. В этом случае, даже если вы где-то ошибетесь, вы сразу заметите проблему и исправите ее.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

Пусть перед вами стоит задача взять из этого массива те элементы, которые делятся на 3 и найти их сумму.

for (let elem of arr) {
    console.log(elem);
}

Давайте теперь отделим те элементы, которые делятся на 3. Выведем их в консоль и убедимся, что мы получаем правильные элементы:

for (let elem of arr) {
	if (elem % 3 === 0) {
		console.log(elem); // выведет 
			3, 6, 9 
	}
}

Теперь следующим шагом мы можем найти сумму искомых элементов:

let sum = 0;

for (let elem of arr) {
	if (elem % 3 === 0) {
		sum += elem;
	}
}

console.log(sum); */

/* let arr = [10, 20, 30, 40, 21, 32, 51]; 

for (let elem of arr) {
    console.log(elem);
} */

/* let num = 21;

let firstDigit = String(num)[0];

console.log(firstDigit); */

/* let num = 21;

let firstDigit = Number(String(num)[0]);

console.log(firstDigit) */

/* let arr = [10, 20, 30, 40, 21, 32, 51];

for (let elem of arr) {
    let firstDigit = Number(String(elem)[0]);
    console.log(`Число: ${elem}, первая цифра: ${firstDigit}`);
} */

/* let arr = [10, 20, 30, 40, 21, 32, 51]
    
    for (let elem of arr) {
    let firstDigit = Number(String(elem)[0]);
    if (firstDigit === 1 || firstDigit === 2) {
        console.log(`Подходит: ${elem}`);
    }
} */

/* let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let elem of arr) {
    let firstDigit = Number(String(elem)[0]);
    if (firstDigit === 1 || firstDigit === 2) {
        sum += elem;
    }
}

console.log(`Сумма: ${sum}`); */

/* let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let elem of arr) {
    let firstDigit = Number(String(elem)[0]);
    if (firstDigit === 1 || firstDigit === 2) {
        sum += elem;
    }
}

console.log(sum); */

// Советы по отладке кода на примере циклов в JavaScript

/* Сейчас я научу вас методике поиска ошибок в коде. Представим себе, что вы по какому-то недоразумению не следовали советам из предыдущего урока и получили не работающий код. Давайте посмотрим, как найти ошибки и заставить его работать.

Многие начинающие пользуются неправильной методикой поиска. Они берут и смотрят на код, в надежде, что заметят ошибку. И так пару часов. Это так не работает.

Правильной методикой является вывод переменных в консоль и определения, то ли там лежит, что нужно, или нет. При этом начинать нужно от предполагаемого места проблемы и двигаться вверх по коду. Давайте посмотрим на практике.

Пусть для примера перед вами стояла задача перебрать массив с двухзначными числами и найти числа, у которых первая цифра на один больше второй. Пусть для простоты в массиве хранятся числа в виде строк.

Пусть вы решили задачу и получили следующий код:

let arr = ['21', '32', '34', '43','45', '54', '55']; 
let sum = 0;

for (let elem of arr) {
	if (elem[0] === elem[1] + 1) {
		sum += elem;
	}
}

console.log(sum); // выдает 0

Код, однако, выдает 0. В этом случае первым делом нужно проверить, счто в переменной попадает до выполнения кода в иф. Выведим в нем что-нибудь в консоль:

let arr = ['21', '32', '34', '43', 
	'45', '54', '55']; 
let sum = 0;

for (let elem of arr) {
	if (elem[0] === elem[1] + 1) {
		console.log('!'); // ничего 
			не выводит 
		sum += elem;
	}
}

console.log(sum);

Так как в консоли ничего не появилось, это значит, что выполнения кода просто не заходит в условие. Посмотрим своими глазами, что же мы сравниваем:

let arr = ['21', '32', '34', '43', 
	'45', '54', '55']; 
let sum = 0;

for (let elem of arr) {
	console.log(elem[0], elem[1] + 
		1); // '2' и '11', '3' и '21' ... 
	
	if (elem[0] === elem[1] + 1) {
		sum += elem;
	}
}

console.log(sum);

В результате сразу становится видным, что второе слагаемое двухзначное. Легко понять, что это из-за того, что единица прибавляется как строка. Исправим проблему:

let arr = ['21', '32', '34', '43', 
	'45', '54', '55']; 
let sum = 0;

for (let elem of arr) {
	if (+elem[0] === +elem[1] + 1) { // 
		исправляем 
		sum += elem;
	}
}

console.log(sum); // '021324354'

После исправления мы уже видим, что в переменной sum что-то появилось, хотя и некорректное. Видно, однако, что там лежит то, что нам нужно, но оно сложилось в виде строк, а не чисел. Исправим проблему:

let arr = ['21', '32', '34', '43', 
	'45', '54', '55']; 
let sum = 0;

for (let elem of arr) {
	if (+elem[0] === +elem[1] + 1) {
		sum += +elem; // исправляем
	}
}

console.log(sum); // все работает */

/* let obj = {a: 10, b: 20, c: 30, d: 40, e: 50}; 
let sum = 0;

for (let key in obj) {
    let value = obj[key];
    let firstDigit = String(value)[0];

    if (firstDigit === '1' || firstDigit === '2') {
        sum += value;
    }
}

console.log(sum); */

// Поиск ошибок в коде с циклами JavaScript

//1

/* for (let i = 0; i <= 10; i++) {
	console.log(i);
} */

//2

/* for (let i = 10; i >= 0; i--) {
	console.log(i);
} */

//3

/* for (let i = 10; i >= 0; i--) {
	console.log(i);
} */

//4

/* let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
} */

//5

/* let res = 0;

for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res); */

//6

/* let res = 1;

for (let i = 1; i <= 10; i++) {
	res *= i;
}

console.log(res); */

//7

/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += Number(elem);
}

console.log(sum); // должно вывести 15 */

//8

/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15 */

//9

/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15 */

//10

/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) { 
	sum += +arr[i];
}

console.log(sum); */

//11

/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length - 1; i++) { 
	sum += +arr[i];
}

console.log(sum); */

//12

/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) { 
	sum += +arr[i];
}

console.log(sum); */

//13

/* let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] ** 2;
}

console.log(arr); */

//14

/* let arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */

//15

/* let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum += obj[key];
}

console.log(sum); */

//16

/* let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum = +obj.key;
}

console.log(sum); */

//17

/* let arr = [1, 2, 3, 4, 5];
let res = '---';

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
        break;
	}
}

console.log(res); */

//18

/* let arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */

//19

/* let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		res = true;
		break;
	}
}

console.log(res); */

//20

/* let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
} */

//21

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
let res = [];

for (let elem of arr1) {
	if (elem % 2 !== 0) {
		res.push(elem);
	}
}

console.log(res); */

//Отработка циклов JavaScript

//1

/* for (let i = 1; i <= 100; i++) {
	console.log(i);
} */

//2

/* for (let i = 100; i > 0; i--) {
	console.log(i);
} */

//3

/* for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
} */

//4

/* let arr = [];

for (let i = 0; i <= 9; i++) {
	arr.push("x")
}

console.log(arr); */

//5

/* let arr = [];

for (let i = 1; i <= 10; i++) {
	arr.push(i);
}

console.log(arr); */

//6

/* let arr = [15, 3, -2, 7, 0, 9, 12, 1, 8, -5, 10];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && arr[i] < 10) {
		console.log(arr[i]);
	}
} */

//7

/* let arr = [1, 3, 7, 5, 9, 2];
let found = false;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] === 5) {
		found = true;
		break;
	}
}

if (found) {
	console.log("В массиве есть число 5");
} else {
	console.log("Число 5 не найдено");
} */

//8

/* let arr = [1, 3, 7, 5, 9, 2];
let sum = 0;

for (let num of arr) {
	sum += num;
}

console.log(sum); */

//9

/* let arr = [1, 3, 7, 5, 9, 2];
let sum = 0;

for (let num of arr) {
	sum = sum + num ** 2;
}

console.log(sum); */

//10

/* let arr = [1, 3, 7, 5, 9, 2];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}

let average = sum / arr.length;

console.log(average); */

//11

/* let num = 7;

if (num > 0) {
	let factorial = 1;

	for (let i = 1; i <= num; i++) {
		factorial = factorial * i;
	}

	console.log(factorial);
} */

//12

/* let arr = [];

for (let i = 10; i >= 1; i--) {
	arr.push(i);
}

console.log(arr); */

//13

/* let arr = [3, -5, 7, 0, -2, 8, 1];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
		sum += arr[i];
	}
}

console.log(sum); */

//14

/* let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
	let str = String(arr[i]);
	let first = str[0];

	if (first === "1" || first === "2" || first === "5") {
		console.log(arr[i]);
	}
} */

//15

/* let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
} */

//16

/* let arr = [0, 1, 3, 3, 7, 5, 9, 7];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
        console.log(arr[i]);
    }
} */

//17

/* let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	document.write(arr[i] + "<br>")
} */

//18

/* let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
	 document.write('<p>' + arr[i] + '</p>');
} */

//19

/* let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < days.length; i++) {
	if (i === 5 || i === 6) {
		document.write('<b>' + days[i] + '</b><br>');
	} else {
		document.write(days[i] + '<br>');
	}
} */

//20

/* let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let day = 3;

for (let i = 0; i < days.length; i++) {
	if (i + 1 === day) {
		document.write('<i>' + days[i] + '</i><br>');
	} else {
		document.write(days[i] + '<br>');
	}
} */

//21

/* let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
	obj[key] = obj[key] * 1.1;
}

console.log(obj); */

//22

/* let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
	if (obj[key] <= 400) {
		obj[key] = obj[key] * 1.1;
	}
}

console.log(obj); */

//23

/* let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let obj = {};

for (let i = 0; i < arr1.length; i++) {
	obj[arr1[i]] = arr2[i];
}

console.log(obj); */

//24

/* let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

let sumKeys = 0;
let sumValues = 0;

for (let key in obj) {
	sumKeys += Number(key);
	sumValues += obj[key];
}

let result = sumKeys / sumValues;
console.log("Сумма ключей:", sumKeys);
console.log("Сумма значений:", sumValues);
console.log("Результат деления:", result); */

//25

/* let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let keys = [];
let values = [];

for (let key in obj) {
	keys.push(key);
	values.push(obj[key]);
}

console.log(keys);
console.log(values); */

//26

/* let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};

let result = [];

for (let key in obj) {
	let str = String(obj[key]);
	let firstDigit = str[0];

	if (firstDigit === "1" || firstDigit === "2") {
		result.push(obj[key]);
	}
}

console.log(result); */

//27

/* let arr = ['a', 'b', 'c', 'd', 'e'];

let obj = {};

for (let i = 0; i < arr.length; i++) {
	obj[i + 1] = arr[i];
}

console.log(obj); */

//28

/* let arr = ['a', 'b', 'c', 'd', 'e'];

let obj = {};

for (let i = 0; i < arr.length; i++) {
	obj[arr[i]] = i + 1;
}

console.log(obj); */