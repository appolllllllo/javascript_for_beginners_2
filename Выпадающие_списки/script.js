// Работа с выпадающими списками в JavaScript

/* В данном уроке мы изучим работу с тегом select, представляющим собой выпадающий список. Если вы не умете работать с этим тегом на HTML, то для начала изучите его устройство в справочнике по этой ссылке: select.

Давайте посмотрим, как работать с этим тегом через JavaScript. Пусть у нас дан вот такой выпадающий список:

<select id="select">
	<option>one</option>
	<option selected>two</option>
	<option>three</option>
</select>

Получим ссылку на селект в переменную:

let select = document.querySelector('#select');

Давайте теперь при изменении селекта выведем на экран текст выбранного пункта списка. Для этого нужно прочитать свойство value нашего селекта:

select.addEventListener('change', function(){
	console.log(this.value);
}); */

/* let select = document.querySelector("#select");
let paragraph = document.querySelector("p");
let button = document.querySelector("button");

button.addEventListener('click', function() {
    paragraph.textContent = select.value;
}); */

/* let select = document.querySelector("#select");
let paragraph = document.querySelector("p");

select.addEventListener("change", function() {
    let year = select.value;
    let date = new Date(year, 1, 29);
    if (date.getDate() === 1) {
        paragraph.textContent = "Невисокосный год";
    } else {
        paragraph.textContent = "Високосный год";
    }
}); */

// Атрибут value в выпадающих списках в JavaScript

/* Как правило, пунктам списка добавляют атрибут value. В этом случае свойство value селекта будет содержать не текст option, а значение его атрибута value.

Давайте переделаем наш селект:

<select id="select">
	<option value="1">one</option>
	<option value="2" selected>two</option>
	<option value="3">three</option>
</select>

Проверим, чему теперь равно выбранное значение:

select.addEventListener('change', function(){
	console.log(this.value);
}); */

/* let select = document.querySelector("#select")
let paragraph = document.querySelector("p");

select.addEventListener("change", function() {
    if (select.value == 6 || select.value == 7) {
        paragraph.textContent = "Выходной";
    } else {
        paragraph.textContent = "Рабочий";
    }
}); */

// Изменение выбранного пункта списка на JavaScript

/* В предыдущем уроке мы научились получать выбранный пункт списка. Давайте теперь будем изменять выбранный пункт с помощью JavaScript.

Для этого в свойство value селекта запишем значение атрибута value того option, который мы хотим выбрать.

<select id="select">
	<option value="one">один</option>
	<option value="two" selected>
		два</option> 
	<option value="three">три</option>
</select>

Пусть также есть кнопка:

<input type="submit" id="button">

let select = document.querySelector('#select');
let button = document.querySelector('#button');

А теперь давайте сделаем так, что бы при нажатии на кнопку наш селект сменил выбор:

button.addEventListener("click", function() {
    select.value = "one";
});

Если у нашего списка нет атрибутов value, то в свойство value селекта нужно записывать текст тега option, который мы хотим выбрать. */

/* let select = document.querySelector("#select");

let date = new Date()
select.value = date.getMonth(); */

// Номер выбранного пункта выпадающего списка

/* В селектах существует специальное свойство selectedIndex, хранящее в себе номер того пункта списка, который сейчас выбран. Нумерация при этом начинается с нуля. При этом данное свойство можно как прочитывать, так и записывать, меняя выбранный пункт списка.

Посмотрим работу с данным свойством на примере. Пусть у нас дан следующий выпадающий список:

<select id="select">
	<option value="one">один</option>
	<option value="two" selected>
		два</option> 
	<option value="three">три</option>
</select>

Давайте выведем номер выбранного пункта списка:

let select = document.querySelector('#select');
console.log(select.selectedIndex); // выведет 1

А теперь выберем какой-нибудь другой пункт:

let select = document.querySelector('#select');
select.selectedIndex = 2; // выберет 'три' */

/* let select = document.querySelector("select");
let input = document.querySelector("input");

input.addEventListener("blur", function() {
    select.selectedIndex = Number(input.value);
}); */

/* let select = document.querySelector("#select");

let date = new Date();

select.selectedIndex = date.getDay(); */

// Получение пунктов выпадающего списка на JavaScript

/* Пусть у нас дан некоторый выпадающий список:

<select id="select">
	<option value="one">один</option>
	<option value="two">два</option>
	<option value="three">три</option>
</select>

Вопрос: как нам получить все пункты этого списка? Самый простой способ - это воспользоваться соответствующим селектором:

let options = document.querySelectorAll('#select option');

console.log(options);

Можно вести не поиск по всему документу, а конкретно в нашем селекте:

let select  = document.querySelector('#select');
let options = select.querySelectorAll('option');

console.log(options); */

/* При работе с селектами есть следующая особенность: переменная, в которой хранится ссылка на селект является массивом, элементами которого являются теги option. Это значит, что эту переменную можно перебрать циклом:

let select = document.querySelector("#select");

for (let option of select) {
	console.log(option);
}

let select = document.querySelector('#select');

for (let option of select) {
	console.log(option);
}

Ну или просто обратится к пункту с нужным номером:

let select = document.querySelector('#select');
console.log(select[0]); */

/* let select = document.querySelector("#select");

for (let option of select) {
	option.textContent += option.value;
} */

// Работа с пунктами выпадающего списка на JavaScript

/* Пусть у нас в переменной есть ссылка на тег option. Например, полученная следующим образом:

let select = document.querySelector('#select');
let option = select[0];

В этом случае в свойстве text будет хранится текст оптиона, в свойстве value - значение одноименного атрибута, а в свойстве selected - значение true или false в зависимости от того, выбранный пункт списка или нет:

console.log(option.text);
console.log(option.value);
console.log(option.selected); */

/* let select = document.querySelector("#select");

for (let option of select) {
	if (option.selected) {
		option.textContent += "!";
	} else {
		option.textContent += "?";
	}
} */

/* В предыдущих уроках мы обращались к тегу select, получая или меняя выбранный пункт списка. Это на самом деле не обязательно. Ведь можно взять и непосредственно какому-нибудь тегу option установить свойство selected в значении true.

К примеру, сделаем выбранным пункт списка с номером два:

let select = document.querySelector('#select');
let option = select[2];
option.selected = true; */

/* let select = document.querySelector("#select");
let button = document.querySelector("button");

button.addEventListener("click", function() {
	let option = select[select.length - 1];
	option.selected = true;
}); */

// Получение выбранного оптиона в JavaScript

/* Используя все изученное, можно получить выбранный тег option следующим образом:

let select = document.querySelector('#select');
console.log(select[select.selectedIndex]); */

/* let select = document.querySelector("#select");
let button = document.querySelector("button");
let paragraph = document.querySelector("p");

button.addEventListener("click", function() {
	paragraph.textContent = select.options[select.selectedIndex].text;
}); */

/* let select = document.querySelector("#select");
let button = document.querySelector("button");

button.addEventListener("click", function() {
	select.options[select.selectedIndex].text += "!";
}); */