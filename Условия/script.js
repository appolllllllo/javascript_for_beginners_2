// Конструкция if-else в JavaScript

/* С помощью конструкции if-else мы можем задать программе, к примеру, вопрос "больше ли переменная a, чем переменная b", и в зависимости от ответа выполнить или один код, или другой.

Синтаксис конструкции выглядит так:

if (операция сравнения) {
    //расположенный здесь код выполниться,
    если результат операция сравнения верный
} else {
    //расположенный здесь код выполниться, если результат операция сравнения неверный
} */

// Операторы больше и меньше в JavaScript

// Для проверки того, которое из значений больше, а которое меньше, используются операторы больше >, больше или равно >=, меньше <, меньше или равно <=.

/* let test = 7;

if (test > 10) {
    console.log("+++");
} else {
    console.log("---");
}

if (test < 10) {
    console.log("+++");
} else {
    console.log("---");
}

if (test >= 10) {
    console.log("+++");
} else {
    console.log("---");
}

if (test <= 10) {
    console.log("+++");
} else {
    console.log("---");
} */

// Проверка на равенство в JavaScript

// Для проверки двух значений на равенство используется оператор ==. 

/* let test = 7;

if (test == 10) {
    console.log("+++");
} else {
    console.log("---");
} */

// Проверка на неравенство в JavaScript

// Оператор != проверяет на неравенство.

/* let test = 7;

if (test != 10) {
    console.log("+++");
} else {
    console.log("---");
} */

// Сравнение переменных в JavaScript

/* let test1 = 7;
let test2 = 8;

if (test1 > test2) {
    console.log("+++");
} else {
    console.log("---");
}

if (test2 > test1) {
    console.log("+++");
} else {
    console.log("---");
}

if (test1 == test2) {
    console.log("+++");
} else {
    console.log("---");
} */

// Равенство строк в JavaScript

// При использовании конструкции if можно сравнивать и строки.

/* let test1 = "Тата";
let test2 = "Aтат";

if (test1 == test2) {
    console.log("+++");
} else {
    console.log("---");
} */

// Равенство строк и чисел в JavaScript

// Как вы знаете, число в кавычках представляет собой строку. Например, '3' - это строка. Однако, при сравнении таких строк с настоящими числами JavaScript считает, что строка в кавычках равна такому же числу.

/* let test1 = '123';
let test2 = 123;

if (test1 == test2) {
    console.log("+++");
} else {
    console.log("---");
} */

// Равенство по значению и типу в JavaScript

// Пусть вы хотите сравнивать так, чтобы число в кавычках не было равно такому же числу без кавычек. Говоря другими словами, вы хотите сравнивать так, чтобы сравнение было не только по значению, но и по типу данных.

// Для этого вместо оператора == следует использовать оператор ===.

// Разница между оператором == и оператором === проявляется именно тогда, когда значения одинаковые, но разный тип данных. В остальных случаях эти операторы работают одинаково.

// Неравенство по значению и типу в JavaScript

// Кроме оператора != существует также оператор !==, учитывающий тип при сравнении.

// Логическое И в JavaScript

// Можно группировать операции сравнения с помощью оператора &&, представляющего собой логическое И.

/* let num = 7;

if (num > 0 && num < 5) {
    console.log("+++");
} else {
    console.log("---");
}

if (num >= 10 && num <= 20) {
    console.log("+++");
} else {
    console.log("---");
}

let num1 = 7;
let num2 = 8;

if (num1 <= 1 && num2 >= 3) {
    console.log("+++");
} else {
    console.log("---");
} */

// Логическое ИЛИ в JavaScript

// Оператор || представляет собой логическое ИЛИ и требует выполнения хотя бы одного условия.

// Приоритет логических операторов в JavaScript

// Операция && имеет приоритет над ||.

// Группировка условий в JavaScript

/* let num = 3;
		
if ( (num > 5 && num < 10) || (num == 20) ) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let num = 3;
		
if ( (num > 5) || ((num > 0) && (num < 3)) ) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let num = 3;
		
if (num == 9 || ((num > 10) && (num < 20)) || ((num > 20) && (num < 30)) ) { 
	console.log('+++');
} else {
	console.log('---');
} */

// Инвертирование логических выражений в JavaScript

/* Рассмотрим следующий код:

if (num > 0 && num < 5) {
	console.log('+++');
} else {
	console.log('---');
}

Сейчас наше условие такое: num должно быть от 0 до 5. Давайте инвертируем это условие, то есть превратим его в его противоположность. Противоположное условие получится таким: num должно быть меньше или равно 0 ИЛИ больше или равно 5:

if (num <= 0 || num >= 5) {
	console.log('+++');
} else {
	console.log('---');
}

Как вы видите, чтобы инвертировать условие, приходится несколько задуматься. Гораздо проще будет использовать оператор !, представляющий собой логическое НЕ. С помощью этого оператора нам достаточно поставить знак ! перед изначальным условием - и оно инвертируется само:

if ( !(num > 0 && num < 5) ) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let num1 = 3;
let num2 = 4;

if (!(num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
} */

// Условия с булевыми значениями в JavaScript

/* let test = true;

if (test === true) {
    console.log("+++");
} else {
    console.log("---");
} */

/* let test = false;

if (test === false) {
    console.log("+++");
} else {
    console.log("---");
} */

// Сравнение значений с булевым типом в JavaScript

// Сравнение значений с булевым типом в JavaScript

/* В предыдущем примере мы использовали для сравнения оператор ===. В этом случае наша переменная сравнивалась на равенство true как по значению, так и по типу.

Для такого сравнения можно использовать и оператор ==. Если в переменной test всегда будет одно из значений true или false, то ничего и не изменится.

А вот если в переменную test могут попадать любые значения, то все становится намного сложнее.

В таком случае, если в переменной test будет не булево значение, то это значение вначале будет преобразовано к булеву и только затем будет сравниваться. */

/* Значения, которые при приведении к логическому типу дают false: false, 0, -0, NaN, null, undefined, "". */

// Сокращенная форма проверки на истину в JavaScript

/* Пусть мы хотим узнать, равна ли переменная test значению true. В этом случае конструкцию if можно записать так:

let test = true;

if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}

При программировании такие проверки требуются очень часто, поэтому для них существует более изящная сокращенная форма: вместо if (test == true) можно написать просто if (test).

Давайте перепишем наш код в сокращенной форме:

let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let test = true;

if (test === true) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let test = true;

if (test) {
    console.log("+++");
} else {
    console.log("---");
} */

// Сокращенная форма проверки на ложь в JavaScript

/* let test = true;

if(!test) {
    console.log("+++");
} else {
    console.log("---");
}

let test = true;

if(!test) {
    console.log("+++");
} else {
    console.log("---");
}

let test = true;

if(test) {
    console.log("+++");
} else {
    console.log("---");
} */

// Общая сокращенная форма проверки в JavaScript

/* Сокращенная форма проверки работает и для других типов данных. В этом случае эти данные сначала преобразуются к булеву типу, а потом сравниваются с true. */

// Сложные условия в сокращенной форме в JavaScript

/* В сокращенной форме можно использовать операторы && и ||. Смотрите пример:

let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}

Еще пример:

let test1 = true;
let test2 = true;

if (test1 || test2) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let test1 = true;
let test2 = true;

if (test1 && test2) {
    console.log("+++");
} else {
    console.log("---");
}

let test1 = true;
let test2 = true;

if (test1 && !test2) {
    console.log("+++");
} else {
    console.log("---");
}

let test1 = true;
let test2 = true;

if (!test1 && !test2) { 
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;

if (test1 && test2) { 
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 && test2 && test3) { 
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || test2 && test3) { 
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || !test2 && !test3) { 
	console.log('+++');
} else {
	console.log('---');
} */

// Необязательность конструкции else в JavaScript

/* Конструкция else не является обязательной. В следующем примере в консоль выведется сообщение только в том случае, если значение переменной равно 1. В противном случае просто ничего не случится:

let test = 1;

if (test == 1) {
	console.log('+++');
} */

/* let test = 10;

if (test == 10) {
    console.log("yes");
} */

// Необязательность фигурных скобок в JavaScript

/* В случае, если в фигурных скобках if или else будет только одно выражение, можно эти фигурные скобки не писать. Пусть, к примеру, дан вот такой код со всеми скобками:

if (test === 0) {
	console.log('+++');
} else {
	console.log('---');
}

Можно сократить его вот так:

if (test === 0) console.log('+++'); else console.log('---');
Или так:

if (test === 0) {
	console.log('+++');
} else console.log('---');

Можно также убрать все скобки, но оформить все не в линию, а вот так:

if (test === 0)
	console.log('+++');
else
	console.log('--'); */

/* if (testt > 0) console.log("+++"); else console.log("---");

if (test > 0)
    console.log("+++");
else 
    console.log("---"); */

/* if (test > 0) console.log("+++");

if (test > 0)
    console.log("+++"); */

// Проблема необязательности фигурных скобок в if-else

/* Не смотря на то, что JavaScript допускает показанные выше сокращения с фигурными скобками, я не рекомендую так делать, так как это рассадник трудноуловимых ошибок. Пусть к примеру есть следующий код:

let test = 3;

if (test > 0)
	console.log(test);

Пусть теперь мы решили в том случае, если условие выполняется, выводить еще и второе сообщение с текстом '+++':

let test = 3;

if (test > 0)
	console.log(test);
	console.log('+++');

Однако, без фигурных скобок внутри условия находится только первое сообщение. Первая строка будет срабатывать при верном условии, а вторая - всегда.

Фактически наш код эквивалентен:

let test = 3;

if (test > 0) {
	console.log(test);
}

console.log('+++'); // эта строка 
	оказалась снаружи условия 
А мы бы хотели такой код:

let test = 3;

if (test > 0) {
	console.log(test);
	console.log('+++'); // эта строка 
		внутри условия 
}

Именно поэтому рекомендуется всегда выполнять расстановку фигурных скобок, дабы не попадать в такого рода ошибки. */

// Конструкция else if в JavaScript

/* Конструкция else if позволяет задавать условия в блоке else. Давайте посмотрим на примере:

let num = 1;

if (num == 1) {
	console.log('value1');
} else if (num == 2) {
	console.log('value2');
} else if (num == 3) {
	console.log('value3');
}

Преимуществом использования else if вместо нескольких ифов является возможность отловить ситуацию, когда значение переменной num не подходит ни под одно из условий:

let num = 1;

if (num == 1) {
	console.log('value1');
} else if (num == 2) {
	console.log('value2');
} else if (num == 3) {
	console.log('value3');
} else {
	console.log('неверное значение переменной 
		num'); 
} */

/* let day = 7;

if (day <= 10) {
    console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
    console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
    console.log("Третья декада");
} else {
    console.log("Неверное значение переменной.");
} */

// Вложенные конструкции if-else в JavaScript

/* let num = 34;

if (num >= 10 && num <= 99) {
		let strNum = num.toString();
		let firstDigit = Math.floor(num / 10);
		let secondDigit = Math.floor(num % 10)
		let sum = firstDigit + secondDigit;

	if (sum <= 9) {
		console.log("Сумма цифр однозначна");
	} else {
		console.log("Сумма цифр двухзначна");
	}
} */

// Конструкция switch-case в JavaScript

/* С помощью конструкции switch-case можно выполнять различный код, в зависимости от значения переменной. */

/* let lang = "ru";

switch (lang) {
	case "ru":
		console.log("рус");
	break;
	case "en":
		console.log("анг");
	break;
	case "de":
		console.log("нем");
	break;
	default:
		console.log("язык не поддерживается");
} */

// Необязательность break в конструкции switch-case в JavaScript
	
/* Команда break в конструкции switch-case не является обязательной. При отсутствии break после выполнения задуманного case, выполнятся и все case ниже него. */

/* Давайте посмотрим на примере:

let num = 1; // пусть здесь число 1

switch (num) {
	case 1:
		console.log(1); // сработает это
	case 2:
		console.log(2); // сработает и это
	case 3:
		console.log(3); // сработает и это
}

Изменим значение переменной:

let num = 2; // пусть здесь число 2

switch (num) {
	case 1:
		console.log(1);
	case 2:
		console.log(2); // сработает это
	case 3:
		console.log(3); // сработает и это
}

Изменим значение переменной:

let num = 3; // пусть здесь число 3

switch (num) {
	case 1:
		console.log(1);
	case 2:
		console.log(2);
	case 3:
		console.log(3); // сработает это
}

Иногда такую особенность используют, при решении задач. Смотрите пример:

let num = 1;
let res;

switch (num) {
	case 1:
	case 2:
		res = 'a';
	break;
	case 3:
		res = 'b';
	break;
}

console.log(res);

Очевиднее, однако, решить такую задачу через if:

let num = 1;
let res;

if (num == 1 || num == 2) {
	res = 'a';
}

if (num == 3) {
	res = 'b';
}

console.log(res); */

// Тернарный оператор в JavaScript

/* В данном уроке мы рассмотрим специальный тернарный оператор, представляющий собой сокращенный вариант конструкции if-else.

Его синтаксис выглядит следующим образом:

let переменная = условие ? значение1 
	: значение2; 

Оператор работает так: если условие истинно, то возвращается значение 1, в противном случае - значение 2. Давайте сделаем пример кода с использованием данного оператора:

let age = 17;
let adult = age >= 18 ? true: false;
console.log(adult);

Этот код в полном виде можно переписать следующим образом:

let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult); */

/* Тернарный оператор следует использовать только в самых простых случаях, так как его использование затрудняет понимание кода. */

/* let num = 1;

let res = num >= 0 ? "1": "2";

console.log(res); */

// Логические операции в JavaScript

/* Операторы сравнения можно использовать вне конструкций if. Смотрите пример:

console.log(1 == 1); // выведет true
console.log(1 == 2); // выведет false 

Можно сравнивать переменные:

let a = 1;
let b = 2;

console.log(a == b);

Можно не выводить результат сразу в консоль, а присвоить его какой-нибудь переменной:

let a = 1;
let b = 2;

let result = a == b;
console.log(result); */

/* let a = 2 * (3 - 1);
let b = 6 - 2;

console.log(a == b); */

/* let a = 5 * (7 - 4);
let b = 1 + 2 + 7;

console.log(a > b); */

/* let a = 2 ** 4;
let b = 4 ** 2;

console.log(a != b); */

// Функция confirm в JavaScript

/* Функция confirm вызывает окошко с вопросом, на который нужно ответить пользователю, и двумя кнопками для ответа: с кнопкой 'ОК' и с кнопкой 'Отмена'. Если пользователь нажмет 'ОК' - то функция вернет true, а если 'Отмена' - то вернет false.

В следующем примере функция confirm выведет диалоговое окно с вопросом. Если вы нажмете 'Ок', то в переменную ok запишется true, а если нажмете 'Отмена' - то false:

let ok = confirm('Текст вопроса');
console.log(ok);

Используем конструкцию if для обработки ответа пользователя:

let ok = confirm('Текст вопроса');

if (ok) {
	console.log('вы ответили да');
} else {
	console.log('вы ответили нет');
} */

/* let yes = confirm("Есть ли вам 18?");

if (yes) {
	alert("Достаточно было на секунду закрыть глаза, и маленькая уродливая ранка просачивалась нечетким образом в мое воспаленное сознание… Его прокуренные пальцы, блуждающие по моим безвольным губам… Руки, которыми он жадно мял мои покрасневшие, то ли от стыда, то ли от стеснения, щеки… Он гладил меня, трогал и сжимал. Так, будто все, что принадлежало мне и только мне, было в его безграничной власти…\n \nТата Апполонова «Эрик Рыжий»")
} else {
	console.log("Доступ пользователю запрещен.");
} */

// Область видимости переменных в if-else в JavaScript

/* Пусть для простоты у нас есть всегда выполняющееся условие:

if (true) {
	
}

Давайте рассмотрим следующий код:

if (true) {
	let res = '!';
}

console.log(res);

Как вы видите, в переменную res должно записаться значение '!'. Однако, если запустить этот код, то в консоль выведется ошибка!

Дело в том, что переменные, объявленные внутри фигурных скобок, видны только внутри этих скобок, и не видны снаружи. По-научному здесь идет речь об области видимости переменных.

Можно говорить о том, что областью видимости переменных, объявленных внутри фигурных скобок, являются только эти фигурные скобки. Однако, если переменная объявлена снаружи фигурных скобок, то видна и внутри них, и снаружи:

let res; // переменная объявлена снаружи 

if (true) {
	res = '!';
}

console.log(res); // выведет '!'

В следующем примере в переменную res в зависимости от условия записывается либо значение 1, либо значение 2:

let num = 5;

if (num >= 0) {
	let res = 1;
} else {
	let res = 2;
}

console.log(res);

Однако, если запустить этот код, то в консоль выведется ошибка. Как вы теперь уже понимаете, все дело в видимости переменных. Для решения проблемы объявим переменную снаружи условия:

let test = true;
let res; // объявим переменную снаружи условия 

if (test) {
	res = 1;
} else {
	res = 2;
}

console.log(res); // выведет 1 */

// Нюансы области видимости переменных в конструкциях if-else в JavaScript

/* Область видимости переменных обладает некоторым нюансом. Давайте рассмотрим его на примере. Давайте объявим снаружи нашего условия переменную res с одним значением, а внутри условия поменяем это значение на другое:

let res = 1;

if (true) {
	res = 2;
}

console.log(res); // выведет 2

Как вы видите, переменная res поменялась внутри условия. Все, однако, поменяется, если внутри условия также объявить переменную res через let:

let res = 1;

if (true) {
	let res = 2; // объявим переменную через let 
}

console.log(res); // выведет 1, а не 2!

Здесь все дело в том, что объявление переменой через let внутри условия создало локальную переменную res.

То есть внутри условия существует одна переменная res, а снаружи условия - другая. Убедится в этом можно, выведя значение переменной в консоль внутри условия:

let res = 1;

if (true) {
	let res = 2;
	console.log(res); // выведет 2
}

console.log(res); // выведет 1 */

/* let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult); */

/* let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult); */

/* let age = 27;
let res;

if (age >= 18) {
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res); */

// Проверка частей часа через if-else в JavaScript

/* Пусть у нас есть переменная min, в которой хранится количество минут от 1 до 60:

let min = 10;

Давайте определим, в какую четверть часа попадает указанное количество минут:

let min = 10;

if (min >= 0 && min <= 14) {
	console.log('1 четверть');
}

if (min >= 15 && min <= 29) {
	console.log('2 четверть');
}

if (min >= 30 && min <= 44) {
	console.log('3 четверть');
}

if (min >= 45 && min <= 59) {
	console.log('4 четверть');
} */

/* let min = 45;

if (min >= 0 && min <= 19) {
	console.log("1 треть");
} else if (min >= 20 && min <= 39) {
	console.log("2 треть");
} else if (min >= 40 && min <= 59) {
	console.log("3 треть");
} */

// Проверка длины строк и массивов в JavaScript

/* Пусть у нас есть переменная str, в которой хранится некоторая произвольная строка:

let str = '12345';

Давайте напишем условие, которое выведет сообщение в консоль, если длина строки равна или больше трех символов:

let str = '12345';

if (str.length >= 3) {
	console.log('!');
} */

/* let arr = [3, 4, 5];

if (arr.length === 3) {
	console.log(arr[0] + arr[1] + arr[2]);
} */

// Проверка символов строки в JavaScript

/* Пусть дана некоторая строка, состоящая из цифр:

let str = '12345';

Давайте проверим, равен ли первый символ этой строки числу 1:

let str = '12345';

if (str[0] == 1) {
	console.log('!');
}
Проверим теперь последний символ на равенство числу 5:

let str = '12345';
let last = str[str.length - 1];

if (last == 5) {
	console.log('!');
} */

/* let str = "abcde";

if (str[0] === "a") {
	console.log(true);
} else {
	console.log(false);
} */

/* let str = "tuvwx";
let last = str[str.length - 1];

if (last === "x") {
	console.log(true);
} else {
	console.log(false);
} */

/* let str = "abcde";

if (str[0] === "a" || str[0] === "b") {
	console.log(true);
} else {
		console.log(false);
} */

// Проверка цифр числа в JavaScript

/* Пусть у нас дано число:

let num = 12345;

Попытка обратиться к первому символу числа приведет к неожиданному поведению:

let num = 12345;

if (num[0] == 1) {
	console.log('+++');
} else {
	console.log('---'); // сработает 
		это 
}

Как вы уже должны знать, проблема в том, что можно обращаться к символам строки, но нельзя - к цифрам числа:

let num = 12345;
console.log(num[0]); // выведет 
	undefined 

Для решения проблемы преобразуем наше число в строку:

let num = 12345;
let str = String(num);

if (str[0] == 1) {
	console.log('+++'); // сработает 
		это 
} else {
	console.log('---');
}

Не обязательно вводить новую переменную, можно применить [0] непосредственно к результату функции String:

let num = 12345;

if (String(num)[0] == 1) {
	console.log('верно'); // выведет 
		'верно' 
} else {
	console.log('неверно');
}

Пусть теперь мы хотим проверить первую цифру на то, что она равна 1, либо 2. Напишем соответствующий код:

let num = 12345;

if (String(num)[0] == 1 || String(num)[0] 
	== 2) { 
	console.log('+++');
} else {
	console.log('---');
}

В данном случае получается, что конструкция String(num)[0] повторится два раза. Это, во-первых, длинно, а во-вторых, не оптимально, так как мы два раза преобразуем число в строку - второй раз получается лишний, а ресурсы программы на это тратятся.

Исправим проблему:

let num = 12345;
let first = String(num)[0];

if (first == 1 || first == 2) {
	console.log('+++');
} else {
	console.log('---');
} */


/* let num = 20;

if (String(num)[1] === "0") {
	console.log("+++");
} else {
	console.log("---");
} */

/* let num = 25;

let last = String(num)[1];
if (last === "0" || last === "2" || last === "4" || last === "6" || last === "8") {
	console.log("Число четное");
} else {
	console.log("Число нечетное");
} */

// Проверка остатка от деления в JavaScript

/* Пусть у нас есть две переменные с числами:

let a = 10;
let b = 3;

Давайте найдем остаток от деления одной переменной на другую:

let a = 10;
let b = 3;

console.log(a % b); // выведет 1

Пусть теперь в переменных хранятся такие значения, что одна переменная делится на вторую нацело:

let a = 10;
let b = 5;

console.log(a % b); // выведет 0

Давайте напишем скрипт, который будет проверять, делится ли нацело одно число на второе:

let a = 10;
let b = 3;

if (a % b === 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком');
}

Пусть теперь требуется, если число делится с остатком, вывести этот остаток в консоль:

let a = 10;
let b = 3;

if (a % b === 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком' + a % b); 
}

В приведенном выше коде получается, что остаток вычисляется в двух местах, а это не оптимально. Поправим проблему:

let a = 10;
let b = 3;
let rest = a % b;

if (rest === 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком' + rest); 
} */

/* let num = 7;

if (num % 2 === 0) {
	console.log("Число четное");
} else {
	console.log("Число нечетное");
} */

/* let num = 9;
if (num % 3 === 0) {
	console.log("Число делится на 3");
} else {
	console.log("Число не делится на 3");
} */

// Поиск ошибок в коде с условиями JavaScript


//1

/* let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
} */

//2

/* let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
} */

//3

/* let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
} */

//4

/* let num = 123;

if (String(num)[0] === "1") {
	console.log('+++');
} else {
	console.log('---');
} */

//5

/* let num = 123;

if (String(num)[0] === "1") {
	console.log('+++');
} else {
	console.log('---');
} */

//6

/* let num = 123;

if (String(num)[0] === "1") {
	console.log('+++');
} else {
	console.log('---');
} */

//7

/* let num = 123;
let first = String(num)[0];

if (first === "1") {
	console.log('+++');
} else {
	console.log('---');
} */

//8

/* let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

//9

/* let num = 12;
let str = String(num);

if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

//10

/* let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

//11

/* let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

//12

/* let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

//13

/* let num = 123033;
let str = String(num);

let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]); 
let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]); 

if (sum1 === sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
} */

// Практика на условия if-else в JavaScript

//1

/* let month = 11;

if (month === 12 || month === 1 || month === 2) {
	console.log("Время года: зима");
} else if (month >= 3 && month <= 5) {
	console.log("Время года: весна");
} else if (month >= 6 && month <= 8) {
	console.log("Время года: лето");
} else if (month >= 9 && month <= 11) {
	console.log("Время года: осень");
} else {
	console.log("Ошибка: месяц должен быть от 1 до 12")
} */

//2

/* let str = "abcde";

if (str[0] === "a") {
	console.log("да");
} else {
	console.log("нет");
} */

//3

/* let num = 12345;

let first = Number(String(num)[0]);

if (first >= 1 && first <= 3) {
	console.log("да");
} else {
	console.log("нет");
} */

//4

/* let num = 123;
let str = String(num);

if (Number(str[0]) + Number(str[1]) + Number(str[2]) === 6) {
	console.log("Сумма цифр равна 6");
} else {
	console.log("Сумма цифр не равна 6");
} */

//5

/* let num = 123456;
let str = String(num);

if ( Number(str[0]) + Number(str[1]) + Number(str[2]) === Number(str[3]) + Number(str[4]) + Number(str[5])) {
	console.log("Сумма первых трех чисел равна сумме вторых трех чисел");
} else {
	console.log("Сумма первых трех чисел не равна сумме вторых трех чисел");
} */
