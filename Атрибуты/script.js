// Получение атрибутов в JavaScript

// Метод getAttribute

/* Метод getAttribute считывает значение заданного атрибута у тега.

Синтаксис

элемент.getAttribute(имя атрибута);

Пример

Давайте выведем содержимое атрибута value элемента:

<input id="elem" value="abcde">

let elem = document.querySelector("#elem");
let value = elem.getAttribute("value");

console.log(value);

Результат выполнения кода:

'abcde' */

/* let elem = document.querySelector("#elem");
let value = elem.getAttribute("value");

console.log(value); */

/* let elem = document.querySelector("#elem");
let className = elem.getAttribute("class");

console.log(className); */

// Установка атрибутов в JavaScript

// Метод setAttribute

/* Метод setAttribute позволяет изменить значение заданного атрибута какого-либо тега.

Синтаксис

элемент.setAttribute(имя атрибута, новое значение); 

Пример

Давайте элементу поменяем значение атрибута value:

<input id="elem" value="abcde">

let elem = document.querySelector("#elem");
elem.setAttribute("value", "!!!");

HTML код станет выглядеть так:

<input id="elem" value="!!!"> */

/* let elem = document.querySelector("#elem");
elem.setAttribute("value", "Hello, world"); */

/* let elem = document.querySelector("#elem");
elem.setAttribute("class", "valid"); */

// Удаление атрибутов в JavaScript

// Метод removeAttribute

/* Метод removeAttribute удаляет заданный атрибут у какого-либо тега.

Синтаксис

элемент.removeAttribute(имя атрибута);

Пример

Давайте для элемента удалим атрибут value:

<input id="elem" value="abcde">

let elem = document.querySelector("#elem");
elem.removeAttribute("value");

HTML код станет выглядеть так (исчезнет атрибут value):

<input id="elem"> */

/* let elem = document.querySelector("#elem");
elem.removeAttribute("value"); */

// Проверка наличия атрибутов в JavaScript

// Метод hasAttribute

/* Метод hasAttribute проверяет наличие заданного атрибута у элемента. Если атрибут есть - выведет true, если нет - выведет false.

Синтаксис

элемент.hasAttribute(имя атрибута);

Пример 1

Давайте проверим наличие атрибута value у элемента:

<input id="elem" value="abcde">

let elem = document.querySelector("#elem");

console.log(has.Attribute("value"));

Результат выполнения кода:

true

Пример 2

А теперь атрибута value нету:

<input id="elem">

let elem = document.querySelector('#elem');

console.log(elem.hasAttribute('value'));

Результат выполнения кода:

false */

/* let elem = document.querySelector("#elem");

console.log(elem.hasAttribute("value")); */

// Пользовательские атрибуты в JavaScript

/* В HTML разрешено добавлять свои, пользовательские атрибуты тегам. Такие атрибуты должны начинаться с data-, а затем должно идти любое название атрибута, которое вам удобно.

Пользовательские атрибуты могут быть использованы огромным количеством различных способов. Многие из этих способов мы изучим далее в учебнике, а еще больше вы сможете в дальнейшем изобрести самостоятельно.

Обращение к таким атрибутам устроено не стандартным образом. Нельзя просто обратиться к одноименному свойству элемента, как мы делали это раньше, а следует использовать специальное свойство dataset, после которого через точку пишется имя атрибута без data-. Например, если наш атрибут называется data-test, то для обращения к нему мы будем писать elem.dataset.test, где elem - переменная с нашим элементом.

Давайте посмотрим на примере. Пусть у нас дан вот такой элемент:

<div id="elem" data-num="1000"></div>

Выведем на экран значение его атрибута data-num:

let elem = document.querySelector("#elem");

console.log(elem.dataset.num); // выведет 1000

А теперь присвоим этому атрибуту другое значение:

let elem = document.querySelector("#elem");
elem.dataset.num = 123; */

/* let div = document.querySelector("#elem");

div.addEventListener("click", function() {
    div.textContent += div.dataset.text;
}); */

/* let divs = document.querySelectorAll("div");

for (let div of divs) {
    div.addEventListener("click", function() {
        div.textContent += div.dataset.num;
    });
} */

/* let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let counter = document.querySelector("#counter");

button1.dataset.num = "0";

button1.addEventListener("click", function() {
    button1.dataset.num = Number(button1.dataset.num) + 1;   
});

button2.addEventListener("click", function() {
    counter.value = button1.dataset.num;
}); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("blur", function() {
    if (elem.dataset.length == elem.value.length) {
        console.log("true");
    } else {
        console.log("false");
    }
}); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("blur", function() {
    if (elem.value.length >= elem.dataset.min && elem.value.length <= elem.dataset.max) {
        console.log("true");
    } else {
        console.log("false");
    }
}); */

// Имена атрибутов с дефисами в JavaScript

/* Пользовательские атрибуты могут содержать дефисы в своем названии, например, вот так:

<div id="elem" data-my-test="1000"></div>

Для обращения к таким атрибутам следует использовать camelCase:

let elem = document.querySelector('#elem');
console.log(elem.dataset.myTest); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("click", function() {
    elem.textContent = elem.textContent + Number(elem.dataset.productPrice) * Number(elem.dataset.productAmount);
}); */

// Обращение к атрибутам через методы в JavaScript

/* К пользовательским атрибутам можно также обращаться с помощью методов типа getAttribute, в этом случае следует писать полное название атрибута:

<div id="elem" data-num="1000" data-my-num="2000"></div> 

let elem = document.querySelector('#elem');

console.log(elem.getAttribute("data-num")); // выведет 1000
console.log(elem.getAttribute("data-my-num")); // выведет 2000 */

/* let paragraphs = document.querySelectorAll("p");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].setAttribute("data-num", i + 1)
    };

    console.log(document.body.innerHTML); */

// Манипулирование массивом CSS классов в JavaScript

// Свойство classList

/* Свойство classList содержит псевдомассив CSS классов элемента, а также позволяет добавлять и удалять классы элемента, проверять наличие определенного класса среди классов элемента.

Речь идет об атрибуте class, внутри которого можно писать несколько классов через пробел, например www ggg zzz. С помощью classList можно удалить, к примеру, класс ggg, не затронув остальные классы.

Синтаксис

элемент.classList;

Пример 1. Количество классов

Узнаем количество классов элемента:

<p id="elem" class="www ggg zzz"></p>

let elem = document.querySelector("elem");

let length = elem.classList.length;
console.log(length);

Результат выполнения кода:

3 */

/* Пример 2. Перебираем классы

Выведем по очереди классы элемента:

<p id="elem" class="www ggg zzz"></p>

let elem = document.querySelector("#elem");
let classNames = elem.classList;

for (let className of classNames) {
    console.log(className);
}

Результат выполнения кода:

'www'
'ggg'
'zzz' */

/* let elem = document.querySelector("#elem");

let length = elem.classList.length;

console.log(length); */

/* let elem = document.querySelector("#elem");

let classNames = elem.classList;

for (let className of classNames) {
    console.log(className);
} */

// Добавление CSS классов в JavaScript

// Метод add объекта classList

/* Метод add объекта classList позволяет добавлять CSS классы элементу.

Синтаксис

element.classList.add(class);

Пример 1

Добавим элементу класс kkk:

<p id="elem" class="www ggg zzz"></p>

let elem = document.querySelector("#elem");
elem.classList.add("kkk");

Результат выполнения кода:

<p id="elem" class="www ggg zzz kkk"></p> 

Пример 2

Добавим элементу класс zzz, который уже есть в элементе - ничего не произойдет, так как дубли классов не добавляются:

<p id="elem" class="www ggg zzz"></p>

let elem = document.querySelector('#elem');
elem.classList.add('zzz');

Результат выполнения кода:

<p id="elem" class="www ggg zzz"></p> */

/* let elem = document.querySelector("#elem");

elem.classList.add("xxx");

console.log(document.body.innerHTML); */

// Удаление CSS классов в JavaScript

// Метод remove объекта classList

/* Метод remove объекта classList удаляет заданный CSS класс элемента.

Синтаксис

element.classList.remove('className');

Пример 1

Удалим класс ggg:

<p id="elem" class="www ggg zzz"></p>

let elem = document.querySelector("#elem");
elem.classList.remove("ggg");

Результат выполнения кода:

<p id="elem" class="www zzz"></p> */

/* let elem = document.querySelector("#elem");

elem.classList.remove("www", "zzz");

console.log(document.body.innerHTML); */

// Проверка CSS классов в JavaScript

// Метод contains объекта classList

/* Метод contains объекта classList проверяет наличие CSS класса элемента.

Синтаксис

element.classList.contains(class);

Пример

Проверим, есть ли у элемента класс ggg:

<p id="elem" class="www ggg zzz"></p>

let elem = document.querySelector("#elem");

let contains = elem.classList.contains("ggg");
console.log(contains);

Результат выполнения кода:

true */

/* let elem = document.querySelector("#elem");

let contains = elem.classList.contains("ggg");

console.log(contains); */

// Чередование CSS классов в JavaScript

// Метод toggle объекта classList

/* Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть.

Синтаксис

element.classList.toggle(class);

Пример 1

В данном примере при использовании метода toggle класс zzz удалится, так как он уже есть в элементе:

<p id="elem" class="www ggg zzz"></p>

let elem = document.querySelector("#elem");
elem.classList.toggle("zzz");

Результат выполнения кода:

<p id="elem" class="www ggg"></p>

Пример 2

В данном примере при использовании метода toggle класс zzz добавится, так как его нету в элементе:

<p id="elem" class="www ggg"></p>

let elem = document.querySelector('#elem');
elem.classList.toggle('zzz');

Результат выполнения кода:

<p id="elem" class="www ggg zzz"></p> */

/* let elem = document.querySelector("p");

elem.classList.toggle("www");

console.log(document.body.innerHTML); */