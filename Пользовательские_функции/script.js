// Основы работы с пользовательскими функциями в JavaScript

/* Сейчас мы научимся создавать свои функции, которые затем можно будет использовать подобно стандартным функциям и методам JavaScript. Давайте рассмотрим синтаксис для создания своей функции.

Функция создается с помощью команды function. Далее через пробел следует имя функции, круглые скобки, а затем фигурные скобки, в которых пишется какой-то код:

function func() {
	// какой-то код
}

Давайте посмотрим на каком-нибудь примере. Сделаем функцию с именем func, которая при своем вызове будет выводить восклицательный знак:

function func() {
	console.log('!');
}

Давайте теперь вызовем нашу функцию. Для этого необходимо написать ее имя и круглые скобки:

function func() {
	console.log('!');
}

// Вызываем нашу функцию:
func(); // выведет '!'

Можно вызвать нашу функцию несколько раз - в этом случае каждый вызов функции будет выдавать новое сообщение:

function func() {
	console.log('!');
}

func(); // выведет '!'
func(); // выведет '!'
func(); // выведет '!'

Функции могут быть вызваны до места своего определения:

func(); // выведет '!'

function func() {
	console.log('!');
} */

/* function name() {
    console.log("Тата");
}

name(); */

/* function sum() {
    let total = 0;
    for (let i = 1; i <= 100; i++) {
        total += i;
    }
    console.log(total);
}

sum(); */

// Параметры функций в JavaScript

/* Функции могут принимать параметрами данные. Для примера давайте сделаем функцию, которая параметром будет принимать число:

function func(num) {
	
}

Давайте сделаем так, чтобы функция возводила переданное число в квадрат:

function func(num) {
	console.log(num ** 2);
}

Проверим работу функции, вызвав ее с различными числами:

func(2); // выведет 4
func(3); // выведет 9 */

/* function func(num) {
    console.log(num ** 3);
}

func(2); */

/* function func(num) {
    if (num > 0) {
        console.log("+++");
    } else if (num < 0) {
        console.log("---");
    } else if (num === 0) {
        console.log("Это нейтральное число.");
    }
}

func(7); */

// Несколько параметров функций в JavaScript

/* Функция может принимать не один параметр, а несколько. В этом случае их нужно перечислить через запятую. Давайте для примера сделаем функцию, параметром принимающую два числа и выводящую в консоль их сумму:

function func(num1, num2) {
	console.log(num1 + num2);
}

Проверим работу нашей функции:

func(1, 2); // выведет 3 */

/* function func(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

func(1, 2, 3); */

// Параметры-переменные функций в JavaScript

/* В параметры функции можно передавать переменные. Давайте посмотрим на примере. Пусть у нас есть следующая функция:

function func(num) {
	console.log(num ** 2);
}

Пусть у нас есть переменная:

let param = 2;

Вызовем нашу функцию, передав ей параметром число из переменной:

let param = 2;
func(param); */

/* function func(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

let param1 = 1;
let param2 = 2;
let param3 = 3;

func(param1, param2, param3); */

// Необязательные параметры в JavaScript

/* Параметры функций можно делать не обязательными. Для этого параметрам нужно задать значения по умолчанию. Пусть для примера у нас есть следующая функция:

function func(num) {
	console.log(num ** 2);
}

Давайте сделаем так, чтобы этот параметр по умолчанию имел значение 0:

function func(num = 0) {
	console.log(num ** 2);
}

Проверим работу нашей функции с параметром:

func(2); // выведет 4

Проверим работу нашей функции без параметра:

func(); // выведет 0 */

/* function func(num = 5) {
	console.log(num * num);
}

func(2); //4
func(3); //9
func(); //25 */

/* function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
 
func(2, 3); //5
func(3); //3
func(); //0 */

// Инструкция return в JavaScript

/* Пусть у нас есть функция, которая выводит в консоль квадрат переданного числа:

function func(num) {
	console.log(num ** 2);
}

Пусть мы хотим не выводить значение в консоль, а записать в какую-нибудь переменную, вот так:

let res = func(3); // в переменной res теперь 9 

Для этого в JavaScript существует специальная инструкция return, которая позволяет указать значение, которое возвращает функция. Под словом "возвращает" понимают то значение, которое запишется в переменную, если ей присвоить вызванную функцию.

Итак, давайте перепишем нашу функцию так, чтобы она не выводила результат в консоль, а возвращала его в переменную:

function func(num) {
	return num ** 2;
}

Вызовем теперь нашу функцию, записав ее ответ в переменную:

let res = func(3); // в переменную запишется 9 

После того, как данные записаны в переменную, их можно, например, вывести в консоль:

let res = func(3);
console.log(res); // выведет 9

А можно сначала как-то изменить эти данные, а затем вывести их в консоль:

let res = func(3);
res = res + 1;
console.log(res); // выведет 10

Можно сразу выполнять какие-то действия с результатом работы функции перед записью в переменную:

let res = func(3) + 1;
console.log(res); // выведет 10

А можно не записывать результат в переменную, а сразу вывести его в консоль:

console.log(func(3)); // выведет 9

Можно вызвать функцию в одном выражении с различными параметрами:

let res = func(2) + func(3);
console.log(res); // выведет 13 */

/* function func(num) {
    return(num ** 3);
}

let res = func(3);

console.log(res); */

/* function func(num) {
    return(Math.sqrt(num));
}

let res = func(3) + func(4);

console.log(res); */

// Последовательный вызов функций в JavaScript

/* Можно результат работы одной функции передать параметром в другую. В следующем примере мы сначала найдем квадрат числа 2, а затем квадрат результата:

function func(num) {
	return num ** 2;
}

let res = func(func(2));
console.log(res); // выведет 16

Функции, конечно же, не обязательно должны быть одинаковыми. Пусть, например, у нас есть функция, возвращающая квадрат числа, и функция, возвращающая куб числа:

function square(num) {
	return num ** 2;
}

function cube(num) {
	return num ** 3;
}

Давайте с помощью этих функций возведем число 2 в квадрат, а затем результат этой операции возведем в куб:

let res = cube(square(2));
console.log(res);

Пусть теперь у нас есть функция, возвращающая квадрат числа, и функция, находящая сумму двух чисел:

function square(num) {
	return num ** 2;
}

function sum(num1, num2) {
	return num1 + num2;
}

Найдем с помощью этих функций сумму квадрата числа 2 и квадрата числа 3:

let res = sum(square(2), square(3));
console.log(res); */

/* function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

let res = round(sqrt(2));

console.log(res); */

/* function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

let res = sum(sqrt(2), sqrt(3), sqrt(4));

console.log(res); */

/* function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num) {
	return num.toFixed(3);
}

let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));

console.log(res); */

// Toнкое место return в JavaScript

/* После того, как выполнится инструкция return - функция закончит свою работу и никакой код дальше не выполнится. Смотрите пример:

function func(num) {
	return num ** 2;
	
	console.log('!'); // этот код никогда не выполнится 
}

let res = func(3);

Это не значит, что в функции должен быть один return. Но выполнится только один из них. В следующем примере в зависимости от значения параметра выполнится либо первый, либо второй return:

function func(num) {
	if (num >= 0) {
		return '+++';
	} else {
		return '---';
	}
}

console.log(func( 3)); // выведет 
	'+++' 
console.log(func(-3)); // выведет 
	'---' */

/* function func(num) {
	return num; // первый return - функция завершится здесь
	
	let res = num ** 2; //второй return не выполнится, потому что выполнится первый return
	return res; //аналогично
}

console.log( func(3) ); //выведет 3 */

/* function func(num) {
	if (num <= 0) {
		return Math.abs(num); //возвращает модуль (положительное значение)
	} else {
		return num ** 2; //возвращает квадрат числа
	}
}

console.log( func(10) ); //выведет 100
console.log( func(-5) ); //выведет 5 */

/* function func(num) {
	if (num <= 0) {
		return Math.abs(num); //выполнится, если условие true - функция завершится здесь
	}
	
	return num ** 2; //выполнится, если условие false
}

console.log( func(10) ); //выведет 100
console.log( func(-5) ); //выведет 5 */

// Цикл и return в JavaScript

/* Пусть у нас есть функция, возвращающая сумму чисел от 1 до 5:

function func() {
	let sum = 0;
	
	for (let i = 1; i <= 5; i++) {
		sum += i;
	}
	
	return sum;
}

let res = func();
console.log(res); // выведет 15

Пусть теперь мы расположим return внутри цикла, вот так:

function func() {
	let sum = 0;
	
	for (let i = 1; i <= 5; i++) {
		sum += i;
		return sum;
	}
}

let res = func();
console.log(res);

В этом случае цикл прокрутится лишь одну итерацию и произойдет автоматический выход из функции (ну и заодно из цикла). А за одну итерацию цикла в переменной sum окажется лишь число 1, а не вся нужная сумма. */

/* function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
	}

    return sum;
}

console.log( func(5) );

Автор хотел написать функцию, которая возвращает сумму всех целых чисел от 1 до num (включительно). То есть при func(5) должно получиться: 1 + 2 + 3 + 4 + 5 = 15.

Это классическая задача на суммирование в цикле.

Нужно вынести return за пределы цикла, чтобы он выполнился после того, как цикл завершит все итерации. */

// Применение return в циклах в JavaScript

/* To, что return расположен внутри цикла, не всегда может быть ошибкой. В следующем примере сделана функция, которая определяет, сколько первых элементов массива нужно сложить, чтобы сумма стала больше или равна 10:

function func(arr) {
	let sum = 0;
	
	for (let i = 0; i < arr.length; i++) { 
		sum += arr[i];
		
		// Если сумма больше или равна 10:
		if (sum >= 10) {
			return i + 1; // выходим из цикла и из функции 
		}
	}
}

let res = func([1, 2, 3, 4, 5]);
console.log(res);

А в следующем примере сделана функция, которая вычисляет, сколько целых чисел, начиная с 1, нужно сложить, чтобы результат был больше 100:

function func() {
	let sum = 0;
	let i = 1;
	
	while (true) { // бесконечный цикл
		sum += i;
		
		if (sum >= 100) {
			return i; // цикл крутится пока не выйдет тут 
		}
		
		i++;
	}
}

console.log( func() ); */

/* function func(num) {
    let count = 0;

    while (num >= 10) {
        num = num / 2;
        count++;
    }

    return count;
}

console.log(func(100)); */

// Прием работы с return в JavaScript

/* Существуют некоторые приемы работы с return, упрощающие код. Рассмотрим, к примеру, следующий код:

function func(num) {
	let res;
	
	if (num >= 0) {
		res = Math.sqrt(num);
	} else {
		res = 0;
	}
	
	return res;
}

console.log(func(3));

Как вы видите, в данном коде в зависимости от условия в переменную res будет попадать либо одно, либо другое значение. А последней строкой функции содержимое переменной res возвращается через return.

Давайте перепишем этот код в более сокращенной форме, избавившись от ненужной здесь переменной res:

function func(num) {
	if (num >= 0) {
		return Math.sqrt(num);
	} else {
		return 0;
	}
}

console.log(func(3)); */

/* function func(num1, num2) {
	
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}

console.log(func(3, 4)); */

// Флаги в функциях JavaScript

/* В функциях можно использовать флаги в неявном виде с помощью инструкции return. Давайте посмотрим, как это делается. Пусть у нас есть следующая функция, проверяющая, что все элементы массива положительные числа:

function isPositive(arr) {
	let flag = true;
	
	for (let elem of arr) {
		if (elem < 0) {
			flag = false;
		}
	}
	
	return flag;
}

Давайте перепишем код функции с помощью неявного использования флагов:

function isPositive(arr) {
	for (let elem of arr) {
		if (elem < 0) {
			return false;
		}
	}
	
	return true;
}

Как это работает: если в массиве найдется нужный элемент - мы выйдем из функции (и из цикла тоже) с помощью return. Но если в массиве не найдется нужный элемент - выхода из функции не произойдет и выполнение дойдет до команды return true. И получится, что функция вернет true в знак того, что в массиве все элементы положительные. */

/* function func(arr) {
    for (let elem of arr) {
        if (elem % 2 !== 0) {
            return false;
        }
    }

    return true;
} */

/* function func(num) {
    let arr = String(num);
    for(let elem of arr) {
        if (Number(elem) % 2 === 0) {
            return false;
        }
    }
    
    return true;
} */

/* function func(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }
    }

    return false;
} */

// Логические операторы без if в функциях JavaScript

/* Пусть у нас есть функция с ифом. Вот она:

function func(a, b) {
	if (a > b) {
		return true;
	} else {
		return false;
	}
}

Как вы уже знаете из предыдущих уроков, конструкции if, возвращающие булевы значения, можно переписывать в сокращенной форме. Давайте сделаем это:

function func(a, b) {
	return a > b;
} */

/* function func(a, b) {
	return a == b;
} */

/* function func(a, b) {
	return a != b;
} */

/* function func(a, b) {
	return a + b >= 10;
} */

/* function func(num) {
	return num >= 0;
} */

// Советы по созданию функций в JavaScript

/* 1. Имена функций должны быть глаголами.

2. Имя каждой функции должно точно отражать то, что функция делает.

3. Функция должна делать только то, что явно подразумевается её названием, и не делать другого.

4. Каждая функция должна выполнять только одно действие.

5. Используйте внутри функций вспомогательные функции.

6. Код функций лучше не делать длиннее 10-15 строк.

7. Длинные функции лучше разбивать на ряд вспомогательных.

8. Используйте общепринятые префиксы в именах функций: show, get, set, calc, create, change, check.

9. Выносите дублирующийся код в функции. */

//Имя функции не отражает то, что она делает: функция возвращает среднее арифметическое, а не сумму. Функция делает не одно действие, а два. 

/* function calcAverage(arr) {

	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum / arr.length;
} */

//Используется несуществующая переменная arr. Имя функци ничего не говорит о ее назначении. Длинные функции лучше разбивать на ряд вспомогательных.

/* function func(arr1, arr2) {
	let res1 = 0;
	
	for (let elem of arr1) {
		res1 += elem;
	}
	
	let res2 = 0;
	
	for (let elem of arr2) {
		res2 += elem;
	}
	
	return res1 / res2;
} */

//Имя функции не отражает то, что она делает: функция называется getSum, но не считает сумму. Длинные функции лучше разбивать на ряд вспомогательных.

/* function getSum(arr) {
    let res = 0;
    for (let elem of arr) {
        res += elem;
    }
    return res;
} */

/* function getProduct(arr) {
    let res = 1;
    for (let elem of arr) {
        res *= elem;
    }
    return res;
} */

// Поиск ошибок в коде с функциями JavaScript

//1

/* function func1() {
	return 3;
}
function func2() {
	return 4;
}

console.log( func1() + func2() ); */

//2

/* function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}

	return res;
}

console.log(sum([1, 2, 3, 4, 5])); */

//3

/* let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}

	return res;
}

console.log(func(arr)); */

//4

/* function func1() {
	return 3;
}

function func2() {
	return 5;
}

console.log( func1() + func2() ); */

//5

/* function sum(arr) {
	let total = 0;
	
	for (let elem of arr) {
		total += elem;
	}
	
	return total;
}
	let res = sum([1, 2, 3, 4, 5]);
	console.log(res); */

//6

/* function sum(arr) {
	let total = 0;
	
	for (let elem of arr) {
		total += elem;
	}

	return total;
}

let res = sum([1, 2, 3, 4, 5]);
console.log(res); */

//7

/* function add(num) {
	if (num > 9) {
		return num;
	} else if (num >= 1 && num < 9) {
		num = "0" + num;
		console.log(num);
	}
}

add(7); */

//8

/* let arr = [1, 2, 3, 4, 5];

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}

let total = sum(arr);
console.log(total); */

//9

/* let num = 12345;

function getDigitsSum(num) {
	let str = String(num);
	let sum = 0;
	
	for (let elem of str) {
		sum += Number(elem);
	}
	
	return sum;
}

let res = getDigitsSum(num);
console.log(res); */

//10

/* function isPrime(num) {
	if (num < 2) return false;

	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		} 
	}
	return true;
}

console.log(isPrime(13)); */

// Практика на функции JavaScript

/* function getDivisors(num) {
	let divisors = [];

	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			divisors.push(i);
		}
	}

	return divisors;
} */

/* function getCommonDivisors(num1, num2) {
	let divisors1 = [];
	let divisors2 = [];
	let divisors3 = [];

	for (let i = 1; i <= num1; i++) {
		if (num1 % i === 0) {
			divisors1.push(i);
		}
	}

	for (let k = 0; k <= num2; k++) {
		if (num2 % k === 0 ) {
			divisors2.push(k);
		}
	}

	for (let j = 0; j < divisors1.length; j++) {
		let current = divisors1[j];

		for (let d = 1; d < divisors2.length; d++) {
			if (current === divisors2[d]) {
				divisors3.push(current);
				break;
			}
		}
	}

	return divisors3;

}*/

/* function getDigitSum(num) {
	let sum = 0;
	let str = String(num);

	for (let i = 0; i < str.length; i++) {
		sum += Number(str[i]);
	}

	return sum;
} */

/* function getCurrentDayOfTheWeek() {
    let days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];
    
    let today = new Date();
    let dayIndex = today.getDay();
    
    return days[dayIndex];
}

console.log(getCurrentDayOfTheWeek()); */

/* function getCurrentDayOfTheWeek() {
    let days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];

	let dayIndex = Date.getDay();

	return days[dayIndex];
}

console.log(new Date(2025, 11, 29)); */

/* function getDaysFromSeconds(seconds) {
    let SECONDS_IN_DAY = 86400;
    return Math.floor(seconds / SECONDS_IN_DAY);
} */

/* function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
} */

/* function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
} */