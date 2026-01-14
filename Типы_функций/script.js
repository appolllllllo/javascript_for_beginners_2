// Исходный код функции и ее результат в JavaScript

/* В JavaScript можно написать имя функции без круглых скобок. В этом случае мы увидим не результат работы функции, а ее исходный код.

Давайте попробуем. Пусть у нас есть какая-то функция, например, такая:

function func() {
	return '!';
}

Давайте вызовем эту функцию, написав ее имя и круглые скобки. В этом случае мы увидим результат работы функции:

function func() {
	return '!';
}

console.log(func()); // выведет '!'

А теперь давайте попробуем опустить после имени функции круглые скобки. В этом случае мы увидим исходный код нашей функции:

function func() {
	return '!';
}

console.log(func); // увидим код функции */

// Функция как переменная в JavaScript

/* Итак, в предыдущем уроке мы выяснили, что обратившись к функции без круглых скобок, мы получаем ее исходный код.

На самом деле все намного интереснее. В JavaScript, в отличие от других языков, функции являются такими же значениями переменных, как числа, строки и массивы.

Давайте посмотрим на примере. Пусть у нас есть, например, функция func:

function func() {
	console.log('!');
}

На самом деле у нас нет функции func. У нас есть переменная func, хранящая в себе исходный код функции.

Мы можем, к примеру, затереть переменную func чем-нибудь другим, например, строкой. В этом случае функция func больше не будет функцией, а будет строкой. Смотрите на примере:

function func() {
	console.log('!');
}
func(); // выведет '!'

func = 'string'; // затрем переменную func
console.log(func); // выведет 'string' */

/* function func() {
    return "Привет, Тата!";
}

console.log(func());

console.log(func);

func = 123;

console.log(func); */

// Запись функции в другую переменную в JavaScript

/* Пусть у нас есть наша функция func:

function func() {
	console.log('!');
}

Давайте скопируем ее исходный код в переменную test:

function func() {
	console.log('!');
}

let test = func; // теперь test такая же функция, как и func 

// Проверим:
test(); //выведет '!'
func(); //выведет '!' */

/* function func1() {
    return 3;
}

let func2 = func1;

console.log(func1() + func2()); */

// Присваивание функций в переменные в JavaScript

/* Итак, мы уже выяснили, что название функции и ее исходный код отделены друг от друга. Поэтому в JavaScript существует альтернативный синтаксис для создания функции: создается функция без имени и присваивается в какую-нибудь переменную. Эта переменная и становится именем функции.

Давайте посмотрим на примере:

let func = function() {
	console.log('!');
};

func(); // выведет '!' */

/* let func1 = function() {
    return 1;
}

let func2 = function() {
    return 2;
}

console.log(func1() + func2()); */

// Совпадение имени функции и переменной в JavaScript

/* Из описанного выше следует, что существование переменной и функции с одинаковым именем легко может привести к проблеме.

В следующем примере функция func будет затерта и вместо нее станет строка 'string':

function func() {
	return '!';
}

func = 'string'; // затрем переменную с функцией строкой 
func(); // получим ошибку, т.к. func - не функция 

Чтобы такого не происходило, следует придерживаться правила, общего для всех языков программирования: функции должны быть глаголами, а переменные - существительными. */

// Function expression и Function declaration в JavaScript

/* В JavaScript функцию можно объявить двумя способами.

Первый способ - это просто объявить функцию через function, сразу задав ее имя:

function func() {
	console.log('!');
}

func(); // выведет '!'

Второй способ - это сделать безымянную функцию и записать ее в какую-либо переменную:

let func = function() {
	console.log('!');
};

func(); // выведет '!'

По научному первый способ называется Function Declaration (объявление функции), а второй - Function Expression (функциональное выражение). */

/* function func() {
	console.log('!');
} // Function Declaration */

/* let func = function() {
	console.log('!');
} // Function Expression */

// Разница объявлений функции

/* Оба способа объявления функции эквивалентны, но есть существенная разница: функции, объявленные как Function Declaration, будут доступны, даже если обратится к ним до того, как они были объявлены.

Смотрите пример:

// Обращаемся к функции до ее объявления:
func(); //выведет '!'

function func() {
	console.log('!');
}
А функциональные выражения создаются в момент выполнения кода и недоступны выше. Поэтому такой код выдаст ошибку:

func(); //ошибка, такой функции еще нет! 

let func = function() {
	console.log('!');
}; */

/* func();

function func() {
    console.log("Привет от Function Declaration!");
} */

/* func();

let func = function () {
    console.log("Привет от Function Expression!")
}; */

// Toчка с запятой при объявлении функций в JavaScript

/* При объявлении функции как Function Declaration после фигурной скобки } точка с запятой не ставится:

function func() {
	console.log('!');
}

Если же функция объявлена Function Expression, то после } ставится точка с запятой:

let func = function() {
	console.log('!');
};

Почему: потому что в JavaScript любое выражение должно заканчиваться точкой с запятой, а в данном случае у нас как раз-таки выражение. Эта точка с запятой не обязательна, так как JavaScript вообще разрешает их не ставить, но желательна. Ставьте всегда :) */

/* let func1 = function() {
    console.log('!');
};

let func2 = function() {
	console.log('!');
};

function func3() {
	console.log('!');
} */

// Нюансы функциональных выражений в JavaScript

/* Название Function Expression дано не просто так. Оно действительно означает это - то, что такие функции являются частью какого-либо выражения.

Например, мы можем сложить какую-нибудь строку и безымянную функцию:

let str = 'str' + function() {return 3;};
console.log(str); // выведет 'strfunction() {return 3;}' 

Почему мы видим такой странный результат, а не число 3? Потому что второе слагаемое - это не результат работы функции, а ее исходный код (ведь мы эту функцию не вызвали, а просто написали).

To есть название функциональное выражение обозначает то, что такая функция принимает участие в каком-нибудь выражении.

Присваивание к переменной тоже выражение:

let func = function() {
	console.log('!');
};

Можно также, к примеру, передать функцию в качестве параметра в console.log и он выведет ее исходный код в консоль - это тоже будет считаться выражением:

console.log(function() {return 3;});

Почему это важно: потому что отличие Function Declaration и Function Expression совсем не в том, что первая функция создается с именем, а вторая изначально имени не имеет. Это не так.

Пример. Вот у нас функция без имени, но при этом не участвует ни в каком выражении (то есть с ней не совершается никаких действий, говоря по-простому): */

/*
	Данная функция будет Function 
		Declaration, 
	но с синтаксической ошибкой:
*/

/* function() {
	console.log('!');
}

Такой код вообще выдаст ошибку! Почему: так как функция не участвует ни в каком выражении, то браузер считает ее Function Declaration, но не находит ее имени и выдает ошибку.

Чтобы ошибка исчезла, нужно заставить функцию стать частью какого-либо выражения. Например, напишем перед ней операцию +:

+function() { // такой код корректен
	console.log('!');
};

Как это работает: сама по себе операция + ничего не делает, это все равно как написать вместо числа 3 число +3 - допустимо, но ничего не меняет.

Но в случае с функцией - меняет. Теперь наша функция уже не просто написана, а участвует в выражении. Поэтому ошибки теперь не будет. Результата выполнения функции тоже не будет, ведь мы ее просто написали, но не вызвали.

Вместо + можно написать все, что угодно. Например:

-function() { // такой код корректен
	console.log('!');
};

!function() { // такой код корректен
	console.log('!');
};

Можно также взять нашу функцию в круглые скобки, в этом случае она также станет функциональным выражением:

(function() { // такой код корректен
	console.log('!');
}); */

/* function func() {
	console.log('!');
} // Function Declaration */

/* let func = function() {
	console.log('!');
} // Function Expression */

/* +function() {
	console.log('!');
} // Function Expression */

/* !function func() {
	console.log('!');
} // Function Expression */

/* -function func() {
	console.log('!');
} // Function Expression */

/* 1 + function func() {
	console.log('!');
} // Function Expression */

/* (function func() {
	console.log('!');
}) // Function Expression */

/* console.log(
	function() {
		console.log('!');
	}
); // Function Expression */

// Функция с именем, но Function Expression в JavaScript

/* Давайте теперь сделаем функцию, которая будет иметь имя, но при этом будет Function Expression, потому что участвует в выражении:

+function func() {
	console.log('!');
}

Интересно, что по имени func мы не сможем обратиться к нашей функции, это будет приводить к ошибке:

+function func() {
	console.log('!');
}

func(); // выдаст ошибку

Чтобы иметь возможность вызвать нашу функцию, ее нужно присвоить какой-нибудь переменной:

let test = function func() {
	console.log('!');
};

test(); // выведет '!'

Еще раз: функция, являющаяся функциональным выражением не может быть вызвана по ее имени. Такая функция может быть вызвана только с использованием переменной, в которую была записана эта функция.

Но тем не менее, функциональное выражение может иметь имя функции, это будет синтаксически корректно. Зачем такое нужно, мы будем разбираться в следующих уроках.

Подведем итог: функции являются Function Declaration или Function Expression не потому, что имеют имя или не имеют, а потому, что являются участниками выражений или не являются.

Как вы видели выше, функция без имени может быть воспринята как Function Declaration, а функции с именем может быть Function Expression. */

// Именованные функциональные выражения в JavaScript

/* Пусть у нас есть вот такое функциональное выражение:

let test = function() {
	console.log('!');
};

test(); // выведет '!'

Давайте нашей функции дадим имя func:

let test = function func() {
	console.log('!');
};

test();

Как вы уже знаете, по этому имени не обратиться к функции:

let test = function func() {
	console.log('!');
};

test(); // выведет '!'
func(); // выдаст ошибку

Зачем же давать имя функции, если оно не будет доступно? Дело в том, что это имя будет недоступно снаружи функции, но доступно внутри этой функции.

Давайте проверим:

let test = function func() {
	console.log(func); // функция 
		выведет свой же исходный код 
};

test(); // вызываем функцию

Давайте вызовем нашу функцию внутри нее самой:

let test = function func() {
	console.log('!'); // выводим '!'
	func(); // вызываем сами себя
};

test();

Если запустить данный код, то в консоль будет выводится бесконечное количество выводов в консоль.

На самом деле наша функция может быть вызвана внутри себя не только как func, но и как test:

let test = function func() {
	console.log('!');
	test(); // вызываем сами себя
};

test();

В чем же разница? Разница в том, что имя test - это просто переменная. В процессе работы скрипта наша функция может записаться в другую переменную или передаться параметром - в этом случае связь между переменной test и функцией может пропасть.

Имя func же жестко привязано к функции специально для того, чтобы можно было обратиться к нашей функции внутри нее самой.

Такие Function Expression с именем функции называются именованными функциональными выражениями. */

// Как проверить тип функции в JavaScript

/* В задачах ниже вам нужно будет определить функция определена как Function Declaration или Function Expression.

В простых случаях это не составляет труда сделать визуально. Но как проверить, что вы сделали это правильно? Используйте разницу между Function Declaration или Function Expression: первые могут быть вызваны выше своего определения, а вторые - нет.

Пусть у нас есть вот такая функция:

let test = function() {
	console.log('!');
}
Обратимся к этой функции до ее определения:

test(); // выведет ошибку в консоль, значит Function Expression 

let test = function() {
	console.log('!');
}

Вот еще пример:

func(); // выведет '!', значит Function Declaration 

function func() {
	console.log('!');
}

Поставим перед нашей функцией плюсик:

func(); // выведет ошибку в консоль, 
	значит Function Expression 

+function func() {
	console.log('!');
}

Так как функция выше - это Function Expression и она не присвоена никакой переменной, то ее никак не вызвать, ведь по имени func она будет недоступна. */

/* test();

let test = function func() {
	console.log('!');
} // Function Expression */

/* func();

console.log(
	function func() {
		console.log('!');
	}
); // Function Expression */

/* func();

+function func() {
	console.log('!');
} // Function Expression */

/* func();

function func() {
	console.log('!');
} // Function Declaration */

// Выражение слева функции в JavaScript

/* Давайте рассмотрим следующий код:

+function func() {
	console.log('!');
}

Как вы уже знаете, эта функция является функциональным выражением, ни смотря на то, что у нее задано имя (мы уже выяснили, что наличие имени вообще не критерий). Уберем этот плюс - и получим Function Declaration:

function func() {
	console.log('!');
}

Давайте поставим + на строчке перед функцией - она опять станет Function Expression:

+
function func() {
	console.log('!');
}

А теперь после плюса поставим число 1 и точку с запятой - наша функция станет Function Declaration:

+1;
function func() {
	console.log('!');
}

Почему так: потому что на первой строке написана одна законченная команда, закрытая точкой с запятой. Поэтому эта команда никак не влияет на нашу функцию.

На самом деле точку с запятой можно убрать, ведь в JavaScript она не обязательна - функция все равно останется Function Declaration:

+1
function func() {
	console.log('!');
}

А вот если после 1 влепить еще один плюс, то функция станет Function Expression:

+1+
function func() {
	console.log('!');
}

Почему так: потому что на первой строчке незавершенное выражение - стоит плюс и после него ничего. Поэтому интерпретатор JavaScript считает, что этот плюс относится к строке ниже, то есть к нашей функции.

Если же на первой строке стоит завершенное выражение, то JavaScript автоматически ставит ему точку с запятой и это выражение никак не влияет на нашу функцию. */

/* -
function func() {
	console.log('!');
} // Function Expression */

/* -1;
function func() {
	console.log('!');
} // Function Declaration */

/* -1
function func() {
	console.log('!');
} // Function Declaration */

/* 1
function func() {
	console.log('!');
} // Function Declaration */

/* -1-
function func() {
	console.log('!');
} // Function Expression */

// Выражение справа функции в JavaScript

/* Учтите, что выражение, в котором участвует функция, должно быть слева от нее. Если мы что-то пытаемся сделать справа от функции, это не сделает ее функциональным выражением. Пример:

function func() { // это Function Declaration 
	console.log('!');
} + 1;

Почему так: потому что в данном случае этот +1 является просто новой командой, написанной после функции. Если написать эту команду с новой строки, все становится очевиднее:

function func() {
	console.log('!');
}
+1; // просто команда

Сделаем из нашей функции Function Expression. Например, поставим перед функцией +:

+function func() { // это Function Expression 
	console.log('!');
} + 1;

Или выполним присваивание:

let test = function func() { // это Function Expression 
	console.log('!');
} + 1;

Или передадим параметром в console.log:

console.log(function func() { // это Function Expression 
	console.log('!');
} + 1); */

/* function func() {
	console.log('!');
}
+1; // Function Declaration */

/* function func() {
	console.log('!');
} + 1; // Function Declaration */

/* +function func() {
	console.log('!');
} + 1; // Function Expression */

/* +
function func() {
	console.log('!');
} + 1; // Function Expression */

/* + 1
function func() {
	console.log('!');
} + 1; // Function Declaration */

/* function func() {
	console.log('!');
} + console.log('!'); // Function Declaration */

// Массив с анонимными функциями в JavaScript

/* Я уже упоминал ранее, что функции в JavaScript ведут себя, будто строки или числа. В частности, можно сделать массив, состоящий из функций. Сделаем:

let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

Давайте, например, выведем в консоль содержимое нулевого элемента массива:

let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

console.log(arr[0]); // увидим исходный код первой функции 

Как вы видите, в примере выше мы получаем исходный код функции, а не результат.

Чтобы происходил вызов функции, к ней нужно дописать круглые скобки. Так как наша функция хранится в arr[0], то круглые скобки нужно будет написать после квадратных, вот так: arr[0](). Проверим:

let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

arr[0](); // выведет '1'

Можно также перебрать наш массив с функциями циклом и в этом цикле вызвать каждую из функций:

let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

for (let func of arr) {
	func(); // вызываем наши функции в цикле 
} */

/* let arr = [
	function() {return 1;},
	function() {return 2;},
	function() {return 3;},
];

console.log(arr[2]());

console.log(arr[0]() + arr[1]() + arr[2]());

for (let func of arr) {
	console.log(func());
}; */

// Объект с анонимными функциями в JavaScript

/* В предыдущем уроке мы делали массив, состоящий из функций. Давайте теперь вместо массива сделаем объект с ключами, значениями которых будут функции:

let obj = {
	func1: function() {console.log(1)},
	func2: function() {console.log(2)},
	func3: function() {console.log(3)},
};

let obj = {
	func1: function() {console.log(1)},
	func2: function() {console.log(2)},
	func3: function() {console.log(3)},
};

obj.func1(); // выведет 1 */

/* let obj = {
	func1: function() {return 1;},
	func2: function() {return 2;},
	func3: function() {return 3;},
};

console.log(obj.func1() + obj.func2() + obj.func3());

for (let key in obj) {
	console.log(obj[key]());
} */

// Применение объекта с функциями в JavaScript

/* Давайте сделаем объект с двумя функциями, каждая из которых параметром будет принимать число. Пусть первая функция возводит переданное число в квадрат, а вторая функция - в куб. Реализуем:

let math = {
	square: function(num) {return num * num}, 
	cube: function(num) {return num * num * num}, 
};

Воспользуемся нашими функциями:

let math = {
	square: function(num) {return num * num}, 
	cube: function(num) {return num * num * num}, 
};

console.log( math.square(2) ); // выведет 4
console.log( math.cube(2) ); // выведет 8 */

/* let math = {
	sum: function(arr) {
		let result = 0;
		for (let num of arr) {
			result += num;
		}
		return result;
	},
	sumSquare: function(arr) {
		let result = 0;
		for (let num of arr) {
			result += num ** 2;
		}
		return result;
	},
	sumCube: function (arr) {
		let result = 0;
		for (let num of arr) {
			result += num ** 3;
		}
		return result;
	},
};

console.log(math.sum([1, 2, 3]));
console.log(math.sumSquare([1, 2, 3]));
console.log(math.sumCube([1, 2, 3])); */