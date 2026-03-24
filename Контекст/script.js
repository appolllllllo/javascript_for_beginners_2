// Основы работы с контекстом в JavaScript

/* Пусть у нас есть какая-то функция func, внутри которой используется this:

function func() {
	console.log(this.value);
}

На что указывает this в этой функции? А мы не знаем. И JavaScript не знает. И сама функция не знает. To есть в момент создания функции то, на что именно указывает this, не определено. И определится это только тогда, когда эта функция будет вызвана.

Пусть у нас есть какой-то инпут:

<input id="elem" value="text">

Привяжем к этому инпуту нашу функцию func так, чтобы она выполнилась по потери фокуса инпутом. Теперь в момент выполнения функции this будет указывать на наш инпут:

let elem = document.querySelector('#elem');

elem.addEventListener("blur", func);

function func() {
	console.log(this.value); // по потери фокуса выведет 'text' 
}

Но ведь у нас может быть не один инпут, а несколько:

<input id="elem1" value="text1">
<input id="elem2" value="text2"></input>

И к каждому из этих инпутов мы можем привязать нашу функцию func. В этом случае для первого элемента this в момент вызова функции будет указывать на него, а для второго - на него.

На практике это значит, что this внутри функции зависит от того, на каком из инпутов мы потеряли фокус:

let elem1 = document.querySelector('#elem1');
elem1.addEventListener('blur', func);

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('blur', func);

function func() {
	console.log(this.value); // выведет или 'text1', или 'text2' 
}

В общем-то, такая особенность this очень удобна - мы создаем всего одну функцию и привязываем ее к любому количеству инпутов. Если бы this не указывал на тот элемент, в котором произошло событие, то у нас бы такое не получилось - пришлось бы для каждого инпута создавать свою функцию с тем же кодом! */

// Контекст непривязанной функции в JavaScript

/* Давайте посмотрим, что будет, если в функции указать this, но не привязать ее ни к какому элементу, вот так:

function func() {
	console.log(this);
}

func();

В этом случае результат зависит от того, строгий у нас режим или нет. Если режим нестрогий, то в this будет хранится ссылка на window:

function func() {
	console.log(this); // ссылка на окно window 
}

func();

А если режим строгий, то в this будет хранится undefined:

"use strict";

function func() {
	console.log(this); // undefined
}

func();

Из сказанного выше может показаться, что в строгом режиме this всегда будет undefined. Как бы не так! Если просто вывести this вне функции, то в нем будет ссылка на window независимо от режима:

"use strict";
console.log(this); // в this ссылка на window */

// Выводы

/* В любой функции можно написать this, это не приведет к каким-либо ошибкам JavaScript. Но вот что именно будет лежать в этом this не определено до момента вызова функции. Причем при разных вызовах функции this может принимать разное значение. Все зависит от контекста, в котором была вызвана функция. */

// Потеря контекста в JavaScript

/* Пусть у нас есть функция в функции. Давайте внешнюю функцию назовем parent, а внутреннюю - child:

function parent() {
    function child() {

    }
}

Из предыдущих уроков вы знаете, что если задать какую-либо переменную во внешней функции - она будет доступна во внутренней:

function parent() {
    let str = 'abcde';

    function child() {
        console.log(str); // выведет 'abcde'
    }
    child(); // вызываем внутреннюю функцию
}

parent(); // вызываем внешнюю функцию

Есть, однако, нюанс: внутренняя функция имеет доступ ко всем переменным внешней, но не имеет доступа this. To есть: если внешняя функция привязана к какому-то DOM элементу, то this в ней будет указывать на этот элемент, но this внутренней функции - не будет!

На что же тогда будет указывать this внутренней функции? Ответ: он будет равен undefined (в строгом режиме), так как функция ни к чему не привязана.

Давайте проверим на практике. Пусть у нас дан инпут:

<input id="elem" value="text">

Привяжем к этому инпуту функцию parent, которая будет вызываться по потери фокуса инпутом:

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener("blur", parent);

// Вызовется по потери фокуса:
function parent() {
	// тут будет какой-то код
	
	function child() {
		// тут будет какой-то код
	}
	child(); // вызываем дочернюю функцию 
}

Давайте выведем содержимое this в консоль в двух местах: внутри функции parent и внутри функции child:

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this); // выведет ссылку на наш инпут 
	
	function child() {
		console.log(this); // выведет undefined 
	}
	child();
}

Запустите этот код, потеряйте фокус инпуту и посмотрите в консоль - вы увидите, что первый console.log выведет в консоль ссылку на наш инпут, а второй - просто undefined. Такая ситуация, когда this неожиданным для нас образом указывает не на то, что нам нужно, называется потеря контекста. */

/* "use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // выведет text
	
	function child() {
		console.log(this.value); // выведет undefined
	}
	child();
} */

// Решение проблемы с контекстом в JavaScript

/* В предыдущем уроке вы увидели, как теряется контекст во внутренней функции. Давайте решим эту проблему. Существует несколько способов решения. Давайте их разберем в следующих уроках. */

// Контекст через переменную в JavaScript

/* Решение следующее: во внешней функции запишем this в любую переменную и эта переменная будет доступна во внутренней функции, как и все переменные (обычно эту переменную называют self). Таким образом мы передадим this из внешней функции во внутреннюю:

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
    console.log(this.value); // выведет 'text'

    let self = this; // запишем this в любую переменную, например, в self 

    function child() {
        console.log(self.value); // выведет 'text'
    }
    child();
} */

/* "use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	let self = this; // сохраняем контекст
	
	function square() {
		return self.value * self.value; // используем сохраняемый контекст
	}

    alert(square());
} */

// Контекст через параметр в JavaScript

/* Существует и другое решение проблемы. Сделаем так, чтобы функция child принимала параметр:

function child(param) {
    // тут будет код
}

А при вызове этой функции будем передавать в нее this:

function parent() {
    child(this); // передаем параметр this

    function child(param) {
        // в переменной param лужит переданное содержимое this
    }
}

Так как вызов child осуществляется в родительской функции, то и передаваемый this указывает на то, что нужно. Затем этот this попадает в параметр param и в таком виде и будет доступен внутри функции.

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	child(this); // передаем параметром this
	
	function child(param) {
		console.log(param.value); // выводим value инпута 
	}
} */

/* "use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	alert( square(this) );
	
	function square(param) {
		return param.value * param.value;
	}
} */

// Контекст через стрелочную функцию в JavaScript

/* Третье решение проблемы заключается в использовании стрелочных функций, которые не так давно появились в JavaScript. Такие функции, помимо всего прочего, не имеют своего контекста, а сохраняют контекст родителя. Исправим нашу проблему с помощью стрелочной функции:

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
    console.log(this.value); // выведет "text"

    let child = () => {
        console.log(this.value); // выведет "text"
    }
    child();
} */

/* "use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
    let child = () => {
        alert(this.value * this.value);
    };
    child();
} */

// Привязывание контекста через метод call в JavaScript

/* Итак, мы разобрали, как на самом деле работает this. Давайте теперь рассмотрим методы, которые позволяют принудительно указать, в каком контексте вызывается функция (то есть принудительно сказать, чему равен this).

Первый метод, который мы разберем, называется call. Давайте посмотрим на его работу на примере. Пусть у нас есть инпут:

<input id="elem" value="text">

Давайте получим ссылку на этот инпут и запишем ее в переменную elem:

let elem = document.querySelector('#elem');

Давайте теперь сделаем функцию func, внутри которой выведем this.value:

function func() {
	console.log(this.value);
}

Пока наша функция не знает, на что ссылается this. Вот, если бы мы ее привязали через addEventListener, тогда да. Но мы не будем этого делать. В замен мы просто вызовем нашу функцию, сказав ей, что this должен быть равен elem.

Это делается вот так: func.call(elem). Этот код эквивалентен простому вызову функции func вот так: func(), только с условием, что this равен elem.

Итак, синтаксис метода call такой: функция.call(объект). Давайте соберем все вместе:

let elem = document.querySelector("#elem");

function func() {
    console.log(this.value); // выведет value инпута
}

func.call(elem); */

/* let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");

function func() {
	console.log(this.value);
}

func.call(elem1);
func.call(elem2);
func.call(elem3); */

// Метод call с параметрами в JavaScript

/* Пусть теперь функция func принимает некоторые параметры, назовем их param1 и param2:

function func(param1, param2) {
    console.log(this.value + param1 + param2);
}

При вызове функции через call можно передать эти параметры вот так:

func.call(elem, param1, param2); */

/* let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname); 
}

func.call(elem, "Smit", "John"); */

// Привязывание контекста через метод apply в JavaScript

/* Давайте теперь рассмотрим метод apply для привязывания контекста. Он работает практически так же, как и метод call. Разница заключается в том, что в apply параметры передаются в виде массива, а не перечисляются через запятую. В зависимости от задачи бывает удобен то один, то другой метод.

Вот пример передачи параметров в метод apply:

func.apply(elem, [param1, param2]); */

/* let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name); 
}

func.apply(elem, ["John", "Smit"]); */

// Привязывание контекста через метод bind в JavaScript

/* Следующий метод bind позволяет навсегда привязать контекст к функции. Своим результатом этот метод возвращает новую функцию, внутри которой this будет иметь жестко заданное значение.

Давайте посмотрим на примере.

Пусть у нас есть инпут:

<input id="elem" value="text">

Пусть ссылка на этот инпут записана в переменную elem:

let elem = document.querySelector('#elem');

Пусть у нас также есть следующая функция func:

function func(param1, param2) {
    console.log(this.value + param1 + param2);
}

Давайте с помощью bind сделаем новую функцию, которая будет копией функции func, но this в ней всегда будет равен elem:

let newFunc = func.bind(elem);

Теперь в переменной newFunc лежит функция. Давайте вызовем ее, передав в первый параметр '1', а во второй '2' (напоминаю, что в elem лежит инпут с value, равным 'text'):

newFunc('1', '2');

Давайте соберем все вместе:

let elem = document.getElementById('elem');

function func(param1, param2) {
	console.log(this.value + param1 + 
		param2); 
}

let newFunc = func.bind(elem);
newFunc('1', '2'); // выведет 'text12'

Не обязательно записывать результат работы bind в новую функцию newFunc, можно просто перезаписать func. После этого func будет такой же функцией, как и была, но с жестко связанным this:

func = func.bind(elem); */

/* let elem = document.getElementById('elem');

function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname); 
}

func = func.bind(elem);

func('John', 'Smit');  
func('Eric', 'Luis'); */