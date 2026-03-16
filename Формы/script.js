/* Работа с textarea в JavaScript

В данном разделе учебника мы изучим работу с более сложными возможностями форм. Начнем изучение с тега textarea, представляющего собой многострочное поле ввода.

При работе с данным тегом есть некоторый нюанс. Суть в следующем: текст, который будет стоять в теге по умолчанию, располагается между открывающем и закрывающем тегом textarea:

Однако, не смотря на это, прочитывать и записывать текст тега следует не через свойство innerHTML, а через value. Для примера выведем текст приведенного выше textarea:

let elem = document.querySelector("#elem");
console.log(elem.value); // выведет "text" */

/* let elem = document.querySelector("#elem");
let paragraph = document.querySelector("p");

elem.addEventListener("blur", function() {
    paragraph.textContent = elem.value;
}); */

// Атрибут disabled в JavaScript

/* В HTML существуют специальные атрибуты без значений, например, атрибут disabled, используемый для блокировки элементов. Для того, чтобы установить такой атрибут, соответствующему свойству требуется присвоить значение true, а чтобы убрать - значение false.

Давайте посмотрим на практике. Пусть у нас есть заблокированый инпут:

<input id="elem" disabled>

Давайте выведем значение атрибута disabled этого инпута:

let elem = document.querySelector("#elem");
console.log(elem.disabled); // выведет true

А теперь давайте отблокируем его:

let elem = document.querySelector("#elem");
elem.disabled = false; */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    elem.disabled = true;
}); */

/* let elem = document.querySelector("#elem");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", function() {
    elem.disabled = true;
});

btn2.addEventListener("click", function() {
    elem.disabled = false;
}); */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log(elem.disabled);
}) */

// Работа с чекбоксами в JavaScript

/* Сейчас мы научимся работать с чекбоксами. Чекбокс представляет собой специальную галочку, которая может находится в двух состояниях: отмечено и нет.

Чекбокс создается следующим образом:

<input type="checkbox" id="elem">

Чтобы сделать чекбокс отмеченным - ему нужно написать атрибут checked:

<input type="checkbox" checked 
	id="elem"> 

Давайте для примера узнаем состояние нашего чекбокса:

let elem = document.querySelector("#elem");
console.log(elem.checked); */

/* let elem = document.querySelector("#elem");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", function() {
    elem.checked = true;
});

btn2.addEventListener("click", function() {
    elem.checked = false;
}); */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("button");
let paragraph = document.querySelector("p");

button.addEventListener("click", function() {
    if (elem.checked === true) {
        paragraph.textContent = "Привет";
    } else {
        paragraph.textContent = "Пока";
    }
}); */

// Чередование атрибутов без значений

/* Пусть дан заблокированный инпут и кнопка:

<input id="elem" disabled>
<input id="button" type="submit">

Давайте сделаем так, чтобы каждое нажатие на кнопку приводило к смене состояния инпута - с заблокированного на разблокированное и наоборот. Для начала получим ссылки на наши элементы в переменные:

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener("ckick", function() {
    if (elem.disabled) {
        elem.disabled = false;
    } else {
        elem.disabled = true;
    }
});

Задачу, однако, можно решить меньшим количеством кода:

button.addEventListener("click", function() {
    elem.disabled = !elem.disabled;
}); */

/* Если элемент заблокирован — разблокируй его.
Если не заблокирован — заблокируй. */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    elem.checked = !elem.checked;
}); */

// Работа с радиокнопками в JavaScript

/* Давайте теперь поработаем с радиокнопками. Они представляют собой группу переключателей, из которых может быть выбран только один. Чтобы несколько радиокнопочек были группой, они должны иметь одинаковое значение атрибута name:

<input type="radio" name="elem">
<input type="radio" name="elem">
<input type="radio" name="elem">

А чтобы отличить на JavaScript, какая именно кнопка была выбрана, каждой радиокнопке в группе добавляют атрибуты value с различным значением:

<input type="radio" name="elem" 
	value="1"> 
<input type="radio" name="elem" 
	value="2"> 
<input type="radio" name="elem" 
	value="3"> 

Чтобы сделать какую-нибудь радиокнопку отмеченной по умолчанию, ей необходимо задать атрибут checked:

<input type="radio" name="elem" 
	value="1" checked> 
<input type="radio" name="elem" 
	value="2"> 
<input type="radio" name="elem" 
	value="3"> 

Давайте посмотрим на практике, как работать с такими кнопками на JavaScript. Пусть у нас есть представленная выше группа радиокнопок, а также обычная кнопка:

<input type="submit" id="button">

Давайте сделаем так, чтобы по нажатию на кнопку на экран вывелось value той радиокнопочки, которая отмечена в данный момент.

Для решения задачи необходимо перебрать все наши радиокнопочки циклом и определить, какая из них выбрана. Для этого нужно прочитывать значение свойства checked каждой из перебираемых радиокнопок. У которой это свойство равно true - та радиокнопочка и выбрана.

Реализуем описанное:

let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector("#button");

button.addEventListener("click", function() {
    for (let radio of radios) {
        if (radio.checked) {
            console.log(radio.value);
        }
    }
}); */

/* let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector("button");
let paragraph = document.querySelector("p");

button.addEventListener("click", function() {
    for (let radio of radios) {
        if (radio.checked) {
            paragraph.textContent = radio.value;
        }
    }
}); */

// Событие change в JavaScript

/* В данном уроке вы с вами разберем событие change, возникающее в полях ввода при их изменениях. Что это значит? Пусть, к примеру, у вас есть инпут и в нем есть какой-то текст. Если вы измените этот текст, то в этом случае и возникнет это событие.

Давайте посмотрим на примере. Пусть у нас есть инпут:

<input id="elem" value="text">

Давайте по его изменению выведем в консоль его новое значение:

let elem = document.querySelector('#elem');

elem.addEventListener('change', function() {
	console.log(this.value);
}); */

/* let elem = document.querySelector("#elem");
let paragraph = document.querySelector("p");

elem.addEventListener("change", function() {
    paragraph.textContent = elem.value;
}); */

/* let elem = document.querySelector("#elem");
let paragraph = document.querySelector("p");

elem.addEventListener("change", function() {
        paragraph.textContent = elem.checked;
}); */

/* blur срабатывает при потере фокуса (всегда), а change — срабатывает при изменении значения (и потере фокуса для текстовых полей) */

/* let input = document.querySelector("input");

input.addEventListener("change", function() {
    if (input.value.length < 5) {
        input.style.border = "1px solid green";
    } else {
        input.style.border = "1px solid red";
    }
}); */

// Событие input в JavaScript

/* Следующее событие, которое мы изучим, называется input. Оно возникает каждый раз при вводе нового символа в инпут или textarea. Посмотрим на примере. Пусть у нас есть инпут:

<input id="elem">

let elem = document.querySelector('#elem');

elem.addEventListener('input', function() {
	console.log(this.value);
}); */

/* let elem = document.querySelector("#elem");
let paragraph = document.querySelector("p");

elem.addEventListener("input", function() {
    if (elem.value.length >= 5) {
        paragraph.textContent = "Не больше 5 символов";
        paragraph.style.color = "red";
    } else {
        paragraph.textContent = "";
    }
}); */

/* let elem = document.querySelector("#elem");
let paragraph = document.querySelector("p");

elem.addEventListener("input", function() {
    if (elem.value.length <= 5) {
        paragraph.textContent = "Осталось ввести: " + (5 - Number(elem.value.length));
        paragraph.style.color = "green";
    } else {
        paragraph.textContent = "Длина текста превышена на: " + (Number(elem.value.length) - 5);
        paragraph.style.color = "red";
    }
}); */

// Методы focus и blur в JavaScript

/* Вы уже знаете, что такое фокус ввода. Вы также знаете, как установить или потерять фокус: для установки нужно нажать в поле ввода, а для потери - в какое-то другое место.

В JavaScript, однако, существуют специальные методы, которые позволяют принудительно установить фокус в инпут или убрать его оттуда. Это методы focus и blur.

Давайте посмотрим их работу на примере. Пусть у нас есть вот инпут и кнопка:

<input id="elem" value="text">
<input type="submit" id="button">

Давайте по нажатию на кнопку установим фокус ввода на наш инпут:

let elem = document.querySelector("#elem");
let button = document.querySelector(#button);

button.addEventListener("click", function() {
    elem.focus();
}); */

/* let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");

inp1.addEventListener("input", function() {
    if (inp1.value.length === 2) {
        inp2.focus();
    }
});

inp2.addEventListener("input", function() {
    if (inp2.value.length === 2) {
        inp2.blur();
    }
}); */

// Поиск ошибок в коде с формами в JavaScript

/* let textarea = document.querySelector('textarea');
let div = document.querySelector('div');

textarea.addEventListener('blur', function() {
	div.textContent = textarea.value;
}); */

/* let checkbox = document.querySelector('input[type="checkbox"]');
let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', function() {
	if (checkbox.checked) {
		div.textContent = '111';
	} else {
		div.textContent = '222';
	}
}); */

/* let checkbox = document.querySelector('input[type="checkbox"]');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	if (checkbox.checked) {
		console.log('+++');
	} else {
		console.log('---');
	}
}); */