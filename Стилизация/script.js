// Стилизация элементов через атрибут style в JavaScript

/* Давайте теперь научимся добавлять CSS стили элементам. Это делается путем изменения атрибута style. К примеру, чтобы поменять цвет, нужно построить следующую цепочку: elem.style.color, и присвоить ей нужное значение цвета.

Посмотрим на примере. Пусть у нас есть вот такой элемент:

<p id="elem">text</p>

let elem = document.querySelector('#elem');
elem.style.color = 'red'; */

/* let elem = document.querySelector("div");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    elem.style.width = "300px";
    elem.style.height = "300px";
    elem.style.border = "2px solid black";
}); */

// Стилизация свойств с дефисом в JavaScript

/* Свойства, которые записываются через дефис, например font-size, преобразуются в camelCase. To есть font-size станет fontSize:

elem.style.fontSize = '20px'; */

/* let elem = document.querySelector("div");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    elem.style.fontSize = "20px";
    elem.style.borderTop = "2px solid  black";
    elem.style.backgroundColor = "red";
}); */

// Исключение при стилизации элементов в JavaScript

/* Свойство float является исключением, так как оно является специальным в JavaScript. Для него следует писать cssFloat:

elem.style.cssFloat = 'right'; */

/* let elems = document.querySelectorAll("li");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    for (let elem of elems) {
        elem.style.cssFloat = "left";
    }
}); */

// Стилизация с помощью CSS классов на JavaScript

/* В предыдущем уроке мы научились менять CSS стили элементов через изменение атрибута style. Чаще всего это не очень хорошая идея. Дело в том, что, если раскидать CSS стили по JavaScript коду, в дальнейшем будет проблематично изменить дизайн сайта, так как придется ковырять JavaScript код в поисках зашитых туда стилей.

Более удобно для дальнейшей поддержки будет добавлять или убирать элементу CSS классы, тем самым стилизуя их нужным образом.

Давайте посмотрим на примере. Пусть у нас есть несколько абзацев:

<p>text1</p>
<p>text2</p>
<p>text3</p>

Давайте сделаем так, чтобы по клику на любой абзац, этот абзац красился в какой-нибудь цвет, например, в зеленый. Для этого в CSS файле сделаем специальный класс для окрашивания абзацев:

.colored {
	color: green;
}

Преимущество использование класса в том, что теперь легко можно будет поменять желаемый цвет - для этого нужно будет просто внести изменение в CSS файл, не ковыряя JavaScript код. Особенно удобно это будет в том случае, если JavaScript код пишете вы, а в дальнейшем стилизовать его будет кто-то другой (возможно менее квалифицированный человек, умеющий работать только с CSS).

Итак, теперь, после введения класса, по клику на любой абзац можно изменить его цвет, просто добавив ему наш класс:

let elems = document.querySelectorAll('p');

for (let elem of elems) {
    elem.addEventListener("click", function() {
        this.classList.add("colored"); // добавляем абзацу класс
    });
} */

/* Вы выбрали для названия класса слово colored, чтобы сделать код независимым от конкретных значений цвета и удобным для командной работы. */

/* let elem = document.querySelector("p");

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", function() {
    elem.classList.add("decoration");
});

btn2.addEventListener("click", function() {
    elem.classList.add("weight");
});

btn3.addEventListener("click", function() {
    elem.classList.add("colored");
}); */

// Преимущество стилизации с помощью CSS классов в JavaScript

/* Использование классов вместо изменения стилей напрямую имеет еще одно преимущество. Легким движением руки можно сделать так, что стили элементов будут чередоваться.

Например, можно сделать так, что при первом клике на абзац он будет красится в определенный цвет, а при повторном клике - возвращать себе исходный цвет. Для этого нужно просто метод add поменять на метод toggle:

let elems = document.querySelectorAll('p');


for (let elem of elems) {
    elem.addEventListener("click", function() {
        this.classList.toggle("colored");
    });
} */

/* let elem = document.querySelector("p");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", function() {
    elem.classList.toggle("decoration");
});

btn2.addEventListener("click", function() {
    elem.classList.toggle("weight");
});

btn3.addEventListener("click", function() {
    elem.classList.toggle("colored");
}); */

// Применение cтилизации в JavaScript

/* Давайте сделаем кнопку, по нажатию на которую элемент будет то показываться, то скрываться. Пусть по умолчанию элемент скрыт (это реализуем с помощью display: none), а покажется он с помощью добавления класса active. Этот класс будем то добавлять, то убирать с помощью classList.toggle:

<button id="button">click me</button>
<div id="elem"></div>

#elem {
	display: none;
	width: 200px;
	height: 200px;
	border: 1px solid green;
}
#elem.active {
	display: block;
}

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
	elem.classList.toggle('active');
}); */