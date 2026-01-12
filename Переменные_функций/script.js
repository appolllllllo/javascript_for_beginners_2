// Глобальные переменные в функциях в JavaScript

/* В JavaScript (в других языках чаще всего не так) переменные, определенные снаружи функции, будут видны внутри этой функции. Такие переменные называются глобальными. Посмотрим на примере:

let num = 1; // переменная снаружи функции

function func() {
	console.log(num); // переменная num видна 
		внутри функции 
}

func(); // выведет 1м

На самом деле переменная должна быть определена не перед определением функции, а перед ее вызовом:

function func() {
	console.log(num);
}

let num = 1; // переменная снаружи функции
func();      // выведет 1

Если менять значение переменной и после этого каждый раз вызывать функцию - console.log каждый раз будет выводить разные результаты:

function func() {
	console.log(num);
}

let num; // объявим переменную

num = 1; // задаем значение 1
func();  // выведет 1

num = 2; // задаем значение 2
func();  // выведет 2

Если у нас несколько функций, то глобальная переменная будет доступна в каждой из этих функций:

function func1() {
	console.log(num);
}

function func2() {
	console.log(num);
}

let num = 1;

func1(); // выведет 1
func2(); // выведет 1

Если в одной из функций произойдут изменения с глобальной переменной, то эта переменная поменяется во всех функциях, использующих эту переменную:

function func1() {
	console.log(num);
	num++; // меняем глобальную переменную
}

function func2() {
	console.log(num);
}

let num = 1;

func1(); // выведет 1
func2(); // выведет 2

Так как любая из функций легко может поменять глобальную переменную, то их использование представляет собой рассадник трудноуловимых ошибок. По этой причине использование глобальных переменных в скрипте нужно сводить к минимуму. Желательно, чтобы их вообще не было или было самое минимальное количество. */

/* let num = 1;
		
function func() {
	console.log(num);
}

func(); // выведет 1 */

/* let num = 1;
		
function func() {
	console.log(num);
}

num = 2;
func(); // выведет 2 */

/* function func() {
	console.log(num);
}

let num;

num = 1;
func(); // выведет 1

num = 2;
func(); // выведет 2 */

// Локальные переменные в функциях в JavaScript

/* Переменные, определенные внутри функции, называются локальными. В отличии от глобальных переменных, локальные переменные видны только внутри функции, и не видны снаружи:

function func() {
	let num = 5; // локальная переменная
	console.log(num);
}

console.log(num); // ничего не выведет, а выдаст ошибку в консоль */

/* function func() {
	let num = 5;
	return num;
}

console.log(num); // ничего не выведет, а выдаст ошибку в консоль */

/* function func() {
	let num = 5;
	return num;
}

console.log(func()); // выведет 5 */

// Одинаковые имена переменных в функциях в JavaScript

/* Пусть и снаружи функции, и внутри есть переменная num. В этом случае любые изменения с локальной переменной num никак не влияют на глобальную переменную num:

let num = 1; // глобальная переменная

function func() {
	let num = 2; // локальная переменная
	console.log(num);
}
func(); // вызываем функцию, выведет 2 

console.log(num); // выведет 1 - глобальная переменная не поменялась 

Но, если мы забудем объявить локальную переменную num через let, то внутри функции не создастся локальная переменная num, а просто изменится глобальная переменная:

let num = 1;

function func() {
	num = 2; // забыли написать let - меняем внешнюю переменную 
	console.log(num);
}
func(); // вызываем функцию, выведет 2 

console.log(num); // выведет 2 - переменная поменялась 

Тут может быть две ситуации: или мы действительно хотели поменять глобальную переменную (тогда все ок), или мы забыли let и случайно поменяли глобальную переменную.

Второй случай является трудноуловимой ошибкой, ведущей к непредсказуемому поведению скрипта. Поэтому всегда, вводя новую переменную объявляйте ее через let. */

/* let num = 1;

function func() {
	num = 2;
}
func();

console.log(num); // выведет 2 */

/* let num = 1;

function func() {
	let num = 2;
}
func();

console.log(num); // выведет 1 */

// Изменение глобальных переменных в JavaScript

/* Учтите, что глобальная переменная будет меняться только в момент вызова функции. Если вызова функции нет - переменная не изменится:

let num = 1;

function func() {
	num = 2; // не написан let - меняем внешнюю переменную 
	console.log(num);
}
// func(); - закомментировали вызов функции

console.log(num); // выведет 1 - переменная не поменялась 

А сейчас продемонстрируем кодом то, что глобальная переменная поменяется только после вызова функции:

t num = 1;

function func() {
	num = 2;
}

console.log(num); // выведет 1
func(); // меняем переменную
console.log(num); // выведет 2 */

/* let num = 1;

function func() {
	num = 2;
}
func();

console.log(num); // выведет 2 */

/* let num = 1;

function func() {
	num = 2;
}

console.log(num); // выведет 1 */

/* let num = 1;

function func() {
	let num = 2;
}
func();

console.log(num); // выведет 1 */

/* let num = 1;

function func() {
	let num = 2;
}

console.log(num); // выведет 1
func(); // ничего не выведет */

/* let num = 1;

function func() {
	num = 2;
}

console.log(num); // выведет 1
func(); // ничего не выведет */

/* let num = 1;

function func() {
	num++;
}

func();
func();
func();
console.log(num); //выведет 4 */

/* function func() {
	num = 2;
}

let num = 1;
console.log(num); // выведет 1
func(); // ничего не выведет */

/* function func() {
	num = 2;
}

let num = 1;
func(); // ничего не выведет
console.log(num); // выведет 2 */

// Глобальные переменные и параметры функций в JavaScript

/* Пусть у нас есть функция, принимающая параметром число:

function func(localNum) {
	console.log(localNum);
}

Пусть снаружи функции есть переменная num:

function func(localNum) {
	console.log(localNum);
}

let num = 1; // внешняя глобальная переменная 

Давайте вызовем нашу функцию, передав ей параметром переменную num:

function func(localNum) {
	console.log(localNum);
}

let num = 1;
func(num); // вызываем функцию с параметром, выведет 1 

Получится, что внутри функции будет доступна как переменная localNum (параметр функции), так и переменная num (как внешняя переменная):

function func(localNum) {
	console.log(num); // выведет 1
	console.log(localNum); // выведет 1
}

let num = 1;
func(num);

Сама переменная localNum будет локальной переменной функции и не будет доступна извне:

function func(localNum) {
	
}

let num = 1;
func(num); // вызываем функцию с параметром 
console.log(localNum); // выдаст ошибку 

Так как переменная localNum - локальная, то никакие изменения с ней ничего не поменяют снаружи:

function func(localNum) {
	localNum = 2; // ничего не меняет снаружи 
}

let num = 1;
func(num);

Если же поменять внутри переменную num (глобальную), то изменения появятся и снаружи:

function func(localNum) {
	num = 2;
}

let num = 1;
func(num);
console.log(num); // выведет 2

Однако, если внутри функции объявить переменную num через let, то мы создадим таким образом локальную переменную num, никак не влияющую на внешнюю переменную:

function func(localNum) {
	let num = 2; // объявим через let
}

let num = 1;
func(num);
console.log(num); // выведет 1 - ничего не поменялось */

/* function func(localNum) {
	console.log(localNum);
}

func(1); // выведет 1 */

/* function func(localNum) {
	console.log(localNum);
}

let num = 1;
func(num); // выведет 1 */

/* function func(localNum) {
	console.log(localNum);
}

let num = 1;
func(num); // выведет 1
num = 2; */

/* let num = 1;

function func(localNum) {
	console.log(localNum);
}

num = 2;
func(num); // выведет 2 */

/* function func(localNum) {
	localNum = 2;
}

let num = 1;
func(num); //ничего не выведет
console.log(num); // выведет 1 */

/* function func(localNum) {
	num = 2;
}

let num = 1;
func(num);
console.log(num); // выведет 2 */

/* function func(localNum) {
	let num = 2;
}

let num = 1;
func(num);
console.log(num); // выведет 1 */

// Совпадение имен с параметрами в JavaScript

/* Параметры функции являются локальными переменными внутри нее. Давайте назовем параметр функции таким же именем, как и внешнюю глобальную переменную:

function func(num) {
	console.log(num);
}

let num = 1;
func(num);

В данном случае у нас получится так, что снаружи функции будет переменная num и внутри функции будет переменная num. Но это будут разные переменные: изменение переменной внутри функции будет приводить к изменению локальной переменной функции. А внешняя переменная внутри функции будет недоступна и не сможет быть изменена никаким способом. Проверим:

function func(num) {
	num = 2; // меняем локальную переменную 
}

let num = 1;
func(num);
console.log(num); // выведет 1 - ничего не поменялось */

/* function func(num) {
	num = 2;
}

let num = 1;
func(num);
console.log(num); // выведет 1 */

/* function func() {
	num = 2;
}

let num = 1;
func();
console.log(num); //выведет 2 */

/* function func() {
	let num = 2;
}

let num = 1;
func();
console.log(num); // выведет 1 */

// Параметры-объекты JavaScript

/* Объекты, в отличие от примитивов, передаются по ссылке. Это значит, что изменение объекта внутри функции приведет к тому, что он поменяется и снаружи функции. Смотрите пример:

function func(arr) {
	arr[0] = '!';
}

let arr = [1, 2, 3];
func(arr);
console.log(arr); // выведет ['!', 2, 3] */

/* function func(obj) {
	obj.a = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj);
console.log(obj); // выведет { a: '!', b: 2, c: 3 } */

/* function func(arg) {
	arg = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj.a); 
console.log(obj); // выведет { a: 1, b: 2, c: 3 } */

/* function func(obj) {
	obj = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj.a);
console.log(obj); // выведет {a: 1, b: 2, c: 3} */

/* function func(arr) {
	arr.splice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr); // выведет [1, 3] */

/* function func(arr) {
	arr.slice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr); // выведет [1, 2, 3] */

/* function func(arr) {
	let newArr = arr;
	newArr[0] = '!';
}

let arr = [1, 2, 3];
func(arr);
console.log(arr); // выведет ['!', 2, 3] */