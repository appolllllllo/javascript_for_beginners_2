// Основы работы с DOM в JavaScript

/* В предыдущих уроках мы изучали базовые возможности языка JavaScript. Начиная с данного урока мы займемся тем, для чего собственно JavaScript и предназначен - мы будем изменять элементы HTML страницы и реагировать на действия пользователя. Наши скрипты станут более зрелищными и полезными.

Во всех следующих уроках ваш JavaScript код должен быть размещен ниже HTML кода, к которому он обращается. To есть структура вашего кода должна выглядеть следующим образом:

<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		ваши html теги
		
		<script>
			ваш JavaScript код
		</script>
	</body>
</html>
Либо следующим образом, если вы пишите JavaScript код в отдельном файле:

<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		ваши html теги
		
		<script src="index.js"></script>
	</body>
</html>

В дальнейшем для краткости я не буду приводить полный код, а буду просто указывать, что нужно писать в HTML части, а что - в JavaScript части. */

// DOM элементы в JavaScript

/* Каждому тегу страницы в JavaScript соответствует некоторый объект со своими свойствами. В этом объекте хранится текст тега, значения его атрибутов, а также другие полезные вещи. В JavaScript такие объекты называют DOM элементами.

Пусть в нашем HTML коде есть следующий тег:

<div id="elem">text</div>
Пусть в переменной elem лежит ссылка на этот тег. В этом случае переменная elem будет объектом со свойствами id и textContent. Свойство id будет содержать значение атрибута id нашего тега, а свойство textContent - его текст.

В следующем уроке мы научимся получать в JavaScript ссылки на теги страницы. */

// Получение DOM элемента в JavaScript

/* Сейчас мы научимся получать DOM элементы страницы, чтобы в дальнейшем производить с ними какие-нибудь манипуляции.

Пусть у нас есть некоторая кнопка:

<input id="button" type="submit"></input>

Давайте получим ссылку на эту кнопку в переменную. Для этого следует использовать метод querySelector специального объекта document. Этот метод параметром принимает CSS селектор и возвращает ссылку на найденный по этому селектору элемент.

У нашей кнопочки есть атрибут id со значением button. Значит, мы можем найти это кнопку по селектору #button. Итак, давайте найдем нашу кнопочку и запишем ссылку на нее в переменную:

let button = document.querySelector('#button');

console.log(button); */

/* let elem1 = document.querySelector("#elem1");
console.log(elem1);

let elem2 = document.querySelector("#elem2");
console.log(elem2);

let elem3 = document.querySelector("#elem3");
console.log(elem3); */

// Сложные селекторы DOM элемента в JavaScript

/* Давайте сделаем что-нибудь более сложное. Пусть, к примеру, у нас есть вот такой HTML код:

<div id="parent">
	<input>
</div>

Давайте получим ссылку на инпут, находящийся внутри блока #parent:

let elem = document.querySelector('#parent input');
console.log(elem);

Как вы видите, мы получили наш инпут по селектору #parent input. На самом деле под этот CSS селектор попадают все инпуты, находящиеся в #parent.

Пусть, к примеру, у нас два таких инпута:

<div id="parent">
	<input value="1">
	<input value="2">
</div>

Toгда, если написать селектор #parent input в CSS коде, он затронет оба наших инпута:

#parent input {
	color: red;
}

Метод querySelector, однако, работает не так. Он всегда получает только один элемент - первый, попавший под указанный селектор. Давайте посмотрим на примере. Пусть у нас есть инпуты с классом elem:

<input class="elem">
<input class="elem">

Давайте получим первый из этих инпутов:

let elem = document.querySelector('.elem');
console.log(elem); // здесь будет первый инпут */

/* let elem = document.querySelector("block p");
console.log(elem); */

/* let elem = document.querySelector(".block p");
console.log(elem); */

/* let elem = document.querySelector(".www");
console.log(elem); */

// Привязывание обработчиков к элементам в JavaScript

/* Давайте теперь научим наши DOM элементы реагировать на действия пользователя сайта. Например, пользователь нажмет куда-либо мышкой, а наш код в ответ должен будет обработать это нажатие и вывести на экран какую-либо информацию.

Действия пользователя, которые мы можем отследить через JavaScript, называются событиями. События могут быть следующими: клик мышкой на элемент страницы, наведение мышкой на элемент страницы или наоборот - уход курсора мыши с элемента и так далее. Кроме того, есть события, не зависящие от действий пользователя, например, событие по загрузке HTML страницы в браузер.

Давайте для примера сделаем кнопку, по нажатию на которую на экран выведется какой-то текст. Для начала сделаем HTML код кнопки:

<input id="button" type="submit">

Получим теперь ссылку на кнопку в переменную:

let button = document.querySelector('#button');

let button = document.querySelector('#button');
Теперь нам необходимо задать реакцию нашей кнопки при клике по ней. Для этого в JavaScript существует специальный метод addEventListener, первым параметром принимающий название события (клик на кнопку имеет название 'click'), а вторым параметром - функцию-коллбэк, выполняющуюся при возникновении этого события.

Давайте, например, по клику на кнопку выведем какой-нибудь текст:

button.addEventListener('click', function()) {
    console.log('!!!');
}); */

/* let button1 = document.querySelector("#button1");
button1.addEventListener("click", function() {
    console.log(1);
});

let button2 = document.querySelector("#button2");
button2.addEventListener("click", function() {
    console.log(2);
});

let button3 = document.querySelector("#button3");
button3.addEventListener("click", function() {
    console.log(3);
}); */

// Именованные обработчики событий в JavaScript

/* В предыдущих уроках мы использовали в качестве обработчиков событий анонимные функции. Это на самом деле не обязательно - функция может быть и обычной, с именем. Пусть для примера у нас есть такая функция:

function func() {
	console.log('!!!');
}

Пусть также есть кнопка:

<input id="button" type="submit">

Давайте сделаем так, чтобы по клику на кнопку выполнилась наша функция func. Для этого параметром addEventListener передадим имя нашей функции, вот так:

let button = documnet.querySelector('#button');
button.addEventListener('click', func);

function func() {
	console.log('!!!');
} */

/* let button1 = document.querySelector("#button1");
button1.addEventListener("click", func1);

let button2 = document.querySelector("#button2");
button2.addEventListener("click", func2);

function func1() {
	console.log(1);
}

function func2() {
	console.log(2);
} */

// Один обработчик ко многим элементам в JavaScript

/* Одну функцию можно привязать сразу к нескольким элементам. Пусть для примера у нас есть следующая функция:

function func() {
	console.log('!!!');
}

Есть также две кнопки:

<input id="button1" type="submit" 
	value="button1"> 
<input id="button2" type="submit" 
	value="button2"> 

Получим ссылки на эти кнопки в переменные:

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

А теперь давайте привяжем нашу функцию func и к первой, и ко второй кнопке:

button1.addEventListener('click', func);
button2.addEventListener('click', func); */

/* function func() {
	console.log('message');
}

let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
let elem4 = document.querySelector("#elem4");
let elem5 = document.querySelector("#elem5");

elem1.addEventListener("click", func);
elem2.addEventListener("click", func);
elem3.addEventListener("click", func);
elem4.addEventListener("click", func);
elem5.addEventListener("click", func); */

// Несколько обработчиков одного события в JavaScript

/* К одному элементу можно привязать сразу несколько функций. Давайте посмотрим на примере. Пусть у нас есть кнопка:

<input id="button" type="submit">

Пусть у нас есть две функции:

function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

Получим ссылку на нашу кнопку в переменную:

let button = document.querySelector('#button');

А теперь давайте привяжем к нашей кнопке в качестве обработчиков клика и первую, и вторую функции:

button.addEventListener('click', func1);
button.addEventListener('click', func2); */

/* function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}

let elem = document.querySelector("#elem");

elem.addEventListener("click", func1);
elem.addEventListener("click", func2);
elem.addEventListener("click", func3); */

// Обработчики разных событий в JavaScript

/* Кроме клика по элементу, существуют и другие события. Например, с помощью события dblclick можно отловить двойной клик по элементу, с помощью события mouseover - наведение курсора на элемент, а с помощью события mouseout - уход курсора с элемента.

При этом к одному элементу можно привязывать обработчики различных типов событий. Давайте, например, привяжем к одному элементу реакцию на наведение курсора и реакцию на уход:

button.addEventListener('mouseover', function() {
	console.log('1');
});

button.addEventListener('mouseout', function() {
	console.log('2');
}); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("dblclick", function() {
	console.log("Да, меня зовут Тата.");
});

elem.addEventListener("mouseover", function() {
	console.log("Привет-привет");
});

elem.addEventListener("mouseout", function() {
	console.log("Пока-пока");
}); */

// Работа с текстом элементов на JavaScript

/* У DOM элементов есть свойство textContent, позволяющее прочитывать текст этих элементов. Давайте посмотрим на примере. Пусть у нас есть следующий тег:

<p id="elem">text</p>

Получим ссылку на этот тег в переменную:

let elem = document.querySelector('#elem');

Прочитаем текст тега:

console.log(elem.textContent);

Поменяем текст тега:

elem.textContent = '!!!'; */

/* let button = document.querySelector("#button");
let paragraph = document.querySelector("#text");

button.addEventListener("click", function() {
	console.log(paragraph.textContent);
}); */

/* let button = document.querySelector("#button");
let paragraph = document.querySelector("#text");

button.addEventListener("click", function() {
	paragraph.textContent = "Почему слово «синопсис» (краткое изложение сюжета) созвучно слову «сепсис» (заражение крови)?";
	console.log(paragraph.textContent);
}); */

/* let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	console.log(Number(num1.textContent) + Number(num2.textContent));
}); */

/* let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let sum = document.querySelector("#sum");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	sum.textContent = Number(num1.textContent) + Number(num2.textContent) + Number(num3.textContent);
	console.log(sum.textContent);
}); */

/* let num = document.querySelector("#num");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	num.textContent = Number(num.textContent) + 1;
	console.log(num.textContent);
}); */

/* let text = document.querySelector("#text");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	text.textContent = text.textContent + "!";
	console.log(text.textContent);
}); */

// Работа с HTML кодом элементов на JavaScript

/* У DOM элементов есть свойство innerHTML, позволяющее прочитывать HTML код этих элементов. Давайте посмотрим на примере. Пусть у нас есть следующий тег:

<p id="elem"><b>text</b></p>

Получим ссылку на этот тег в переменную:

let elem = document.querySelector('#elem');

Прочитаем HTML код тега:

console.log(elem.innerHTML); // выведет <b>text</b> 

Поменяем текст тега:

elem.innerHTML = '<i>!!!</i>'; */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	console.log(elem.innerHTML);
}); */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	elem.innerHTML = "<b>text</b>";
	console.log(elem.innerHTML);
}); */

// Атрибуты тегов как свойства в JavaScript

/* Давайте теперь научимся получать атрибуты тегов. Здесь действует следующее правило: каждому атрибуту тега соответствует одноименное свойство DOM элемента.

Давайте посмотрим на примере. Пусть у нас есть вот такой тег:

<input id="elem" type="text">

Получим ссылку на наш элемент в переменную:

let elem = document.querySelector('#elem');

Выведем значения нужных нам атрибутов:

console.log(elem.id);   // выведет 'elem' 
console.log(elem.type); // выведет 'text' 

А теперь для примера поменяем значение атрибута:

elem.type = 'submit'; */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
	console.log(elem.type);
}); */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
	elem.type = "submit";
	console.log(elem.type);
}); */

/* let link = document.querySelector("#link");
let paragraph = document.querySelector("#text");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	paragraph.textContent = link.href;
	console.log(paragraph.textContent);
}); */

/* let link = document.querySelector("#link");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	link.textContent = link.textContent + " (" + link.href + ")";
	console.log(link.textContent);
}); */

/* let img = document.querySelector("#img");
let button = document.querySelector("#button");
let paragraph = document.querySelector("#paragraph");

button.addEventListener("click", function() {
	paragraph.textContent = img.src;
	console.log(paragraph.textContent);
}); */
 
/* let img = document.querySelector("#img");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	img.width = img.width * 2;
}); */

/* let shrek = document.querySelector("#shrek");
let button1 = document.querySelector("#button1");
let fiona = document.querySelector("#fiona");
let button2 = document.querySelector("#button2");

button1.addEventListener("click", function() {
	shrek.src = "shrek.jpg";
}); 

button2.addEventListener("click", function() {
	fiona.src = "fiona.jpg";
}); */

// Работа с текстовыми полями в JavaScript

/* Сейчас мы научимся получать текст от пользователей нашего сайта. Для этого в HTML предусмотрен специальный тег input, представляющий собой текстовое поле для ввода данных.

<input>

У данного тега есть специальный атрибут value, задающий начальный текст, который будет написан в инпуте по заходу на страницу:

<input value="text">

Пользователь нашего сайта после захода на страницу может поменять текст инпута. При этом, если у нас есть переменная, содержащая ссылку на этот инпут, то свойство value этой переменной всегда будет содержать текущее значение текста инпута.

Попробуем на практике. Пусть у нас инпут с атрибутом value:

<input id="elem" value="text">

Получим ссылку на этот инпут в переменную:

let elem = document.querySelector('#elem');

А теперь выведем на экран текущий текст инпута:

console.log(elem.value);

А теперь поменяем текст инпута на другой:

elem.value = 'new text'; */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	elem.value = "Введите текст...";
}); */

/* let elem = document.querySelector("#elem");
let paragraph = document.querySelector("#paragraph");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	paragraph.textContent = elem.value;
}); */

/* let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	elem2.value = Number(elem1.value) ** 2;
}); */

/* let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	[elem1.value, elem2.value] = [elem2.value, elem1.value];
}); */

/* let inputs = [
    document.querySelector("#elem1"),
    document.querySelector("#elem2"),
    document.querySelector("#elem3"),
    document.querySelector("#elem4"),
    document.querySelector("#elem5")
];

let paragraph = document.querySelector("#paragraph");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
    let sum = 0;
    for (let input of inputs) {
        sum += Number(input.value);
    }
    paragraph.textContent = sum / inputs.length;
}); */

// Фокус текстовых полей в JavaScript

/* Пусть у нас есть инпут. Вы можете нажать на этот инпут и после этого в нем заморгает курсор-палочка и можно будет вводить в него текст.

Про такое состояние говорят, что инпут сейчас имеет фокус ввода. На практике это означает, что если начать вводить текст с клавиатуры, то этот текст будет попадать в тот инпут, который сейчас имеет фокус ввода. Если затем кликнуть куда-нибудь вне инпута, то этот инпут потеряет фокус ввода и в него нельзя будет вводить текст.

Для того, чтобы поймать момент получения или потери фокуса инпутом, в JavaScript предусмотрены специальные события: cобытие focus позволяет отловить получение фокуса инпутом, а событие blur - потерю. Попробуем на практике. Пусть у нас инпут:

<input id="elem" value="text">

Получим ссылку на него в переменную:

let elem = document.querySelector('#elem');

А теперь сделаем так, чтобы по получению фокуса в консоль вывелся текущий текст инпута:

elem.addEventListener('focus', function() {
	console.log(elem.value);
}); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("focus", function() {
	elem.value = 1;
	console.log(elem.value);
});

elem.addEventListener("blur", function() {
	elem.value = 2;
	console.log(elem.value);
}); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("blur", function() {
	elem.value = Number(elem.value) ** 2;
}); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("focus", function() {
	elem.value = "";
}); */

// Исключения при работе с атрибутами в JavaScript

/* При работе с атрибутами существует исключение - это атрибут class. Это слово является специальным в JavaScript и поэтому мы не можем просто написать elem.class, чтобы считать значение атрибута class. Вместо этого следует писать elem.className.

Давайте посмотрим на примере. Пусть у нас дан вот такой инпут:

<input id="elem" class="aaa bbb">

Давайте выведем значение атрибута class для нашего инпута:

let elem = document.querySelector('#elem');
console.log(elem.className); // выведет 'aaa bbb' 

Существуют и другие исключения, например, атрибут for. К нему следует обращаться через htmlFor. */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	console.log(elem.className);
}); */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	elem.className = "something";
	console.log(elem.className);
}); */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	let arr = elem.className.split(" ");
	console.log(arr);
}); */

// Цепочки методов и свойств в JavaScript

/* Пусть у нас есть инпут:

<input id="elem" value="text">

Давайте выведем на экран текст инпута:

let elem = document.querySelector('#elem');
console.log(elem.value); // выведет 'text' 

Как вы видите, мы сначала получаем элемент по его id, записываем этот элемент в переменную elem, а затем выводим на экран свойство value из этой переменной.

На самом деле можно не вводить переменную elem, а строить цепочку из точек таким образом:

console.log( document.querySelector('#elem').value ); // выведет 'text' 

Таким же образом - цепочкой - можно производить и перезапись атрибутов:

document.querySelector('#elem').value = 'www'; */

/* console.log( document.querySelector("#image").src ); */

// Преимущества и недостатки цепочек в JavaScript

/* Не смотря на то, что цепочки сокращают код, в большинстве случаев введение переменной все-таки удобнее. Сравните два примера - сейчас я ввел переменную elem и могу записывать любое количество атрибутов, при этом querySelector вызывается только один раз:

let elem = document.querySelector('#elem');
elem.value = 'www';
elem.type  = 'submit';

А сейчас я не ввожу новую переменную и поэтому мне приходится вызывать querySelector два раза:

document.querySelector('#elem').value = 'www';
document.querySelector('#elem').type  = 'submit';

На мой взгляд, этот код стал сложнее, хотя и занимает на одну строчку меньше. Кроме того, если я захочу сменить значение id с 'elem' на какое-то другое, мне придется делать это во многих местах, что не очень удобно.

Есть и еще проблема - нагрузка на браузер. Поиск элементов по странице, который делает метод querySelector, является довольно медленной операцией (и вообще любая работа с элементами страницы - это медленная операция - запомните это).

В нашем случае, если мы каждый раз используем querySelector, то браузер каждый раз будет обрабатывать HTML страницу и искать элемент с заданным id несколько раз (не важно, что id одинаковые - браузер проделает все действия несколько раз), совершая бесполезные операции, которые могут замедлить работу браузера.

Если же мы используем переменную elem - никакого поиска по странице не происходит (элемент уже найден и ссылка на него лежит в переменной). */

/* <img id="image" src="avatar.png" width="300" height="500"> 

console.log(document.querySelector('#image').src);
console.log(document.querySelector('#image').width);
console.log(document.querySelector('#image').height);

let img = document.querySelector("#image");
img.

Недостатки:

1. Многократный вызов document.querySelector.
Каждая строка ищет один и тот же элемент в DOM. — это неэффективно: браузер трижды проходит по дереву DOM, хотя элемент один и тот же.

2. Нарушение принципа DRY (Don’t Repeat Yourself)
Один и тот же селектор #image повторяется трижды — усложняет поддержку (если изменится id, придётся править в трёх местах).

3. Потенциальная ошибка при отсутствии элемента
Если элемента с id="image" нет, каждый вызов вернёт null, и попытка прочитать .src вызовет ошибку.

let image = document.querySelector('#image');

console.log(image.src);
console.log(image.width);
console.log(image.height); */

// Объект this в JavaScript

/* Сейчас мы будем работать со специальным объектом this, доступным в функции-обработчике события. Этот объект указывает на элемент, в котором произошло событие.

Объект this удобен, когда элемент, в котором произошло событие, и элемент, с которым совершаются действия в результате события, - это один и тот же элемент.

Например, если у нас есть инпут, мы можем привязать к нему обработчик потери фокуса и по наступлению этого события что-то сделать с текстом инпута. Давайте сделаем описанное. Пусть у нас дан инпут:

<input id="elem" value="text">

Давайте получим ссылку на него в переменную elem:

let elem = document.querySelector('#elem');

Привяжем к нему функцию-обработчик события blur:

elem.addEventListener('blur', func);

Внутри этой функции func будет доступен объект this, указывающий на наш инпут:

function func() {
	console.log(this); // содержит ссылку на наш элемент 
}

Выведем содержимое атрибута value нашего инпута:

function func() {
	console.log(this.value); // выведем содержимое атрибута 
}

Ну, а теперь запишем в инпут какой-нибудь текст:

function func() {
	this.value = '!!!';
}

Можно использовать и анонимную функцию:

elem.addEventListener('blur', function() {
	this.value = '!!!';
}); */

/* let elem = document.querySelector("#elem");

function func1() {
	this.value = 1;
};

function func2() {
	this.value = 2;
};

elem.addEventListener("focus", func1);
elem.addEventListener("blur", func2); */

/* let button = document.querySelector("#button");
button.addEventListener("click", function() {
	this.textContent = Number(this.textContent) + 1;
}); */

// Преимущество this в JavaScript

/* Из сказанного ранее пока не очевидно особое преимущество this. Ведь внутри функции-обработчика и так будет доступен наш элемент - ведь переменная elem будет глобальной для нашей функции func:

let elem = document.querySelector('#elem');
elem.addEventListener('click', func);

function func() {
	// здесь доступна переменная elem с нашим элементом 
}

И, несложно сообразить, что содержимое this и содержимое переменной elem в нашем случае равны:

let elem = document.querySelector('#elem');
elem.addEventListener('click', func);

function func() {
	console.log(elem === this); // выведет true 
}

В чем же особое преимущество this? Оно проявляется, когда у нас несколько элементов, и к каждому привязана одна и та же функция.

Посмотрим на примере. Пусть у нас есть 3 кнопки:

<input id="button1" type="submit" 
	value="text1"> 
<input id="button2" type="submit" 
	value="text2"> 
<input id="button3" type="submit" 
	value="text3">

Получим ссылки на них в переменные:

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

Привяжем к этим кнопкам одну и ту же функцию:

button1.addEventListener('click', func);
button2.addEventListener('click', func);
button3.addEventListener('click', func);

А внутри функции будем выводить this.value:

function func() {
	console.log(this.value);
}

Получится, что у нас есть три кнопки. Нажатие на каждую кнопку будет приводить к вызову функции func. При этом при каждом клике this будет содержать ссылку на ту кнопку, в которой произошло событие.

To есть каждое нажатие будет выводить в консоль value той кнопки, на которой произошло нажатие, но делать это будет одна и та же функция func! Вот в чем преимущество использования this. */

/* let paragraph1 = document.querySelector("#paragraph1");
let paragraph2 = document.querySelector("#paragraph2");
let paragraph3 = document.querySelector("#paragraph3");
let paragraph4 = document.querySelector("#paragraph4");
let paragraph5 = document.querySelector("#paragraph5");

function func() {
	this.textContent += "!";
}

paragraph1.addEventListener("click", func);
paragraph2.addEventListener("click", func);
paragraph3.addEventListener("click", func);
paragraph4.addEventListener("click", func);
paragraph5.addEventListener("click", func); */

/* let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");

function func() {
	this.value = Number(this.value) ** 2;
}

elem1.addEventListener("blur", func);
elem2.addEventListener("blur", func);
elem3.addEventListener("blur", func); */

// Получение группы элементов в JavaScript

/* В предыдущих уроках мы с помощью метода querySelector получали один элемент страницы. Теперь пришло время научится получать группу элементов и проделывать какие-нибудь операции сразу со многими элементами.

Для этого существует метод querySelectorAll, получающий все теги, подпадающие под CSS селектор, в виде массива элементов. Чтобы сделать что-нибудь с найденными элементами, нужно поработать с полученным массивом, например, перебрать его циклом и в цикле выполнить какую-либо операцию с каждым элементом по отдельности.

Пусть, к примеру, у нас даны абзацы с классом www:

<p class="www">text1</p>
<p class="www">text2</p>
<p class="www">text3</p>

Давайте получим массив этих абзацев, переберем их циклом и в цикле выведем тексты найденных абзацев в консоль:

let elems = document.querySelectorAll(".www");

for (let elem of elems) {
	console.log(elem.textContent);
}

А теперь давайте в конец текста каждого абзаца добавим восклицательный знак:

let elems = document.querySelectorAll(".www");

for (let elem of elems) {
	elem.textContent = elem.textContent + "!";
} */

/* let paragraphs = document.querySelectorAll(".paragraph");
let button = document.querySelector("#button");

function func() {
for (let paragraph of paragraphs) {
	paragraph.textContent = "text";
}
}

button.addEventListener("click", func); */

/* let paragraphs = document.querySelectorAll(".paragraph");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent += " " + (i + 1);
    }
}); */

/* let nums = document.querySelectorAll(".num");
let paragraph = document.querySelector("#paragraph");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
    let sum = 0;
    for (let num of nums) {
        sum += Number(num.value);
    }
    paragraph.textContent = sum;
}); */

// Добавление обработчиков в цикле в JavaScript

/* В качестве обработчиков, навешиваемых в цикле, можно использовать и анонимные функции. Это делает код более компактным и избавляет нас от придумывания имени для функции, которая используется только в одном месте.

Давайте навесим на элементы анонимные обработчики:

let elems = document.querySelectorAll("p");

for (let elem of elems) {
	elem.addEventListener("click", function {
		console.log(this.textContent);
	});
} */

/* let divs = document.querySelectorAll('div');

for (let div of divs) {
	div.addEventListener('click', function() {
		this.textContent++;
	});
} */

// Отвязывание событий в JavaScript

/* В данном уроке мы научимся отвязывать обработчики события, которые ранее были привязаны нами к элементам. Пусть для примера дана следующая кнопка:

<input id="button" type="submit">

Привяжем к этой кнопке функцию func:

let button = document.querySelector('#button');
button.addEventListener('click', func);

function func() {
	console.log('!!!');
}

Давайте теперь сделаем так, чтобы обработчик события срабатывал на первый клик, а потом отвязывался от кнопки. Для этого существует специальный метод removeEventListener. Этот метод первым параметром принимает тип события, а вторым - ссылку на функцию, которую нужно отвязать.

Как правило, это значит, что обработчик события отвязывается так же, как и привязывался. To есть, если мы привязали его вот так: addEventListener('click', func), то и отвяжем с теми же параметрами, вот так: removeEventListener('click', func).

Итак, решим поставленную нами задачу:

let button = document.querySelector("#betton");
button.addEventListener("click", func);

function func() {
	console.log("!!!");
	this.removeEventListener("click", func);
} */

/* let link = document.querySelector("#link");
let button = document.querySelector("#button");

button.addEventListener("click", func);

function func() {
	link.textContent += "(" + link.href + ")";
	this.removeEventListener("click", func);
} */

/* let button = document.querySelector("#button");

button.addEventListener("click", func);

function func() {
	button.textContent = Number(button.textContent) + 1;

	if (Number(button.textContent) >= 10) {
		button.removeEventListener("click", func);
	}
} */

// Отвязывание обработчиков событий в цикле в JavaScript

/* Пусть теперь у нас есть не один элемент, а несколько. Например, несколько абзацев:

<p>text1</p>
<p>text2</p>
<p>text3</p>

Давайте к каждому из этих абзацев обработчиком клика привяжем функцию func:

let elems = document.querySelectorAll("p");

for (let elem of elems) {
	elem.addEventListener("click", func);
}

function func() {
	console.log(this.textContent);
}

Давайте теперь переделаем код так, чтобы каждый абзац реагировал только на первое нажатие на него. Для этого при клике на абзац будем отвязывать от него привязанный обработчик. При этом отвязывание будет конкретно от этого абзаца, никак не затрагивая остальных.

Как вы уже знаете, элемент, в котором произошло событие, можно получить в функции-обработчике через this. Это значит, что нужно выполнять отвязывание обработчика от this, вот так:

let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener("click", func);
}

function func() {
	console.log(this.textContent);
	this.removeEventListener("click", func); // отвязываем обработчик 
} */

/* let paragraphs = document.querySelectorAll("p");

for (let paragraph of paragraphs) {
	paragraph.addEventListener("click", func);
}

function func() {
	this.textContent += "!";
	this.removeEventListener("click", func);
} */

// Отвязывание анонимных функций в JavaScript

/* Пусть теперь к нашим абзацам привязана анонимная функция:

let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function() {
		console.log(this.textContent);
	});
}

Пусть мы хотим отвязать эту функцию от абзаца после клика по этому абзацу. Нас, однако, ждет проблема: у функции нет имени, а значит мы не сможем обратится к ней по этому имени, чтобы отвязать ее.

let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener("click", function func() {
		console.log(this.textContent);
	});
}

Теперь эту функцию можно отвязать внутри нее самой:

let elems = document.querySelector("p");

for (let elem of elems) {
	elem.addEventListener("click", function func() {
		console.log(this.textContent);
		this.removeEventListener("ckick", func); // отвязываем функцию 
	});
} */

/* let elems = document.querySelectorAll("li");

for (let elem of elems) {
	elem.addEventListener("click", function func() {
		this.textContent = Number(this.textContent) + 1; 
	});
} */

/* let elems = document.querySelectorAll("li");

for (let elem of elems) {
	elem.addEventListener("click", function func() {
		this.textContent = Number(this.textContent) + 1; 
		this.removeEventListener("click", func);
	});
} */

/* let elems = document.querySelectorAll("li");

for (let elem of elems) {
    elem.addEventListener("click", function() {
        let num = Number(this.textContent);
        if (num < 10) {
            this.textContent = num + 1;
        }
    });
} */

// Советы по написанию кода на примере DOM в JavaScript

/* Пусть перед вами стоит задача достаточной сложности, для реализации которой нужно написать некоторое количество строк кода.

Неправильным подходом будет пытаться написать весь код решения целиком, а потом начать его проверять. В этом случае высока вероятность, что у вас ничего не заработает, а ошибку придется искать в большом количестве кода.

Правильным подходом является разбиение задачи на маленькие элементарные шаги, которые вы будете реализовывать и сразу проверять их правильность. В этом случае, даже если вы где-то ошибетесь, вы сразу заметите проблему и исправите ее.

Давайте попробуем на практике. Пусть у вас есть абзацы:

<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>

Пусть перед вами стоит задача найти абзацы с числами, кратными 3, и найти сумму их чисел.

Первым маленьким шагом я бы предложил получить наши абзацы в виде массива и вывести этот массив в консоль, чтобы посмотреть, что мы все правильно получили. Сделаем это:

let elems = document.querySelectorAll('p');
console.log(elems);

Следующим маленьким шагом нужно перебрать наши абзацы циклом и вывести каждый из них в консоль по отдельности:

let elems = document.querySelectorAll("p");

for (let elem of elems) {
	console.log(elem);
}

А теперь в цикле выведем тексты наших абзацев:

let elems = document.wuerySelectorAll("p");

for (let elem of elems) {
	console.log(elem.textContent);
}

Теперь давайте выведем тексты тех абзацев, чье число делится на 3:

let elems = document.querySelectorAll('p');

for (let elem of elems) {
	let text = +elem.textContent;
	
	if (text % 3 === 0) {
		console.log(text);
	}
}

Убедившись, что мы получаем правильные абзацы, можно приступать к суммированию их чисел:

let elems = document.querySelectorAll('p');
let sum = 0;

for (let elem of elems) {
	let text = +elem.textContent;
	
	if (text % 3 === 0) {
		sum += text;
	}
}

console.log(sum) */

/* let elems = document.querySelectorAll("li");
let totalSum = 0;

for (let elem of elems) {
    let digits = String(elem.textContent).split("").map(Number);
    
    let digitSum = 0;
    for (let digit of digits) {
        digitSum += digit;
    }
    
    if (digitSum === 6) {
        totalSum += Number(elem.textContent);
    }
}

console.log(totalSum); */

// Поиск ошибок в коде с DOM в JavaScript

/* let elems = document.querySelectorAll('p');

for (let elem of elems) {
    elem.addEventListener("click", function() {
        this.textContent += '!';
    });
} */

/* let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.textContent = Number(this.textContent) + 1;
	});
} */

/* let button = document.querySelector('button');
let elem = document.querySelector('p');

button.addEventListener('click', function() {
	elem.innerHTML = '<b>text</b>'; 
}); */

/* let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');

button.addEventListener('click', function() {
	let sum = 0;
	
	for (let elem of elems) {
		sum = sum + Number(elem.textContent);
	}
	
	console.log(sum);
}); */

/* let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.textContent += '!';
	});
} */

/* let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');

button.addEventListener('click', function() {
	for (let elem of elems) {
		elem.innerHTML = "<b>" + elem.textContent + "</b>";
	}
}); */

/* let button = document.querySelector('button');
let elems = document.querySelectorAll('p');

button.addEventListener('click', function() {
    let sum = 0;
    for (let elem of elems) {
        sum += Number(elem.textContent);
    }
    console.log(sum);
}); */

/* let button = document.querySelector('button');
let elems  = document.querySelectorAll('input');

button.addEventListener('click', function() {
	let sum = 0;
	for (let elem of elems) {
	sum = Number(elem.value) + sum;
}
	console.log(sum);
}); */

/* let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

btn.addEventListener('click', function() {
	inp3.value = Number(inp1.value) 
		+ Number(inp2.value); 
}); */

/* let btn  = document.querySelector('#btn');
let res  = document.querySelector('#res');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');

btn.addEventListener('click', function() {
	res.textContent = Number(inp1.value) + Number(inp2.value);
}); */

/* let inputs = document.querySelectorAll('input')
let button = document.querySelector('#btn')

button.addEventListener('click', function() {
	for (let input of inputs) {
		if (input.value === input.dataset.text) {
			input.classList.add('right')
		} else {
			input.classList.add('wrong')
		}
	}
}); */

/* let inputs = document.querySelectorAll('input')
let button = document.querySelector('#btn')

let texts = [
	'text1',
	'text2',
	'text3',
];

button.addEventListener('click',function() {
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value === texts[i]) {
			inputs[i].classList.add('right');
		} else {
			inputs[i].classList.add('wrong');
		}
	}
}); */

/* let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
	let sum = 0;
	for (let input of inputs) {
		sum += Number(input.value);
	}
	console.log(sum);
}); */

/* let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

btn.addEventListener('click', function() {
	let sum  = Number(inp1.value) + Number(inp2.value);
	inp3.value = sum;
}); */

/* let inp = document.querySelector('#inp');

inp.addEventListener('blur', function() {
	let digits = inp.value.split('');
	let sum = 0;
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	
	console.log(sum);
}); */

// Отработка изученного материала на работу с DOM

/* let input = document.querySelector("#input");
let paragraph = document.querySelector("#paragraph");

input.addEventListener("blur", function() {
	paragraph.textContent = paragraph.textContent + input.value;
}); */

/* let inputs = document.querySelectorAll("#input");
let paragraph = document.querySelector("#paragraph");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
	let sum = 0;
	for (let input of inputs) {
		sum = sum + Number(input.value);
		paragraph.textContent = sum;
	}
}); */

/* let input = document.querySelector("#input");

input.addEventListener("blur", function() {
	let digits = input.value.split("");
	let sum = 0;
	for (let digit of digits) {
		sum = sum + Number(digit);
	}
	console.log(sum);
}); */

/* let input = document.querySelector("#input");

input.addEventListener("blur", function() {
	let parts= input.value.split(",");

	let numbers = [];
	for (let part of parts) {
		numbers.push(Number(part));
	}
	
	let sum = 0;
	for (let num of numbers) {
		sum += num;
	}

	let average = sum / numbers.length;

	console.log(average);
}); */

/* let fullname = document.querySelector("#fullname");
let inputs = document.querySelectorAll("#inp");

fullname.addEventListener("blur", function() {
	let parts = fullname.value.split(" ");
	if (parts[0]) inputs[0].value = parts[0];
    if (parts[1]) inputs[1].value = parts[1];
    if (parts[2]) inputs[2].value = parts[2];
}); */

/* let fullname = document.querySelector("#fullname");

fullname.addEventListener("blur", function() {
	let parts = fullname.value.split(" ");

	for (let i = 0; i < parts.length; i++) {
		if (parts[i] !== "") {
			parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
		}
	}

	fullname.value = parts.join(" ");
}); */

/* let text = document.querySelector("#text");

text.addEventListener("blur", function() {
	let words = text.value.split(" ");
	text.value = words.length;
}); */

/* let date = document.querySelector("#date");

date.addEventListener("blur", function() {
	let parts = date.value.split(".");
	let newDate = parts[2] + "-" + parts[1] + "-" + parts[0];
	date.value = newDate;
}); */

/* let word = document.querySelector("#word");

word.addEventListener("blur", function() {
	let value = word.value.toLowerCase();
	let reversed = value.split("").reverse().join("");

	if (value === reversed) {
        word.value = "true";
    } else {
        word.value = "false";
    }
}); */

/* let num = document.querySelector("#num");

num.addEventListener("blur", function() {
    num.value = num.value.includes("3") ? "true" : "false";

});*/

/* let button = document.querySelector("#button");
let paragraphs = document.querySelectorAll("p");

button.addEventListener("click", function() {
	for (let i = 0; i < paragraphs.length; i++) {
		paragraphs[i].textContent += (i + 1);
}
}); */

/* let links = document.querySelectorAll("a");

for (let link of links) {
    link.textContent += " (" + link.href + ")";
} */

/* let links = document.querySelectorAll("a");

for (let link of links) {
    if (link.href.startsWith("http://")) { 
        link.textContent += " →";
    }
} */

/* let paragraphs = document.querySelectorAll("p");

for (let paragraph of paragraphs) {
	paragraph.addEventListener("click", function() {
		let num = Number(this.textContent);
		this.textContent = num * num;
	});
} */

/* let date = document.querySelector("#date");

date.addEventListener("blur", function() {
	let parts = date.value.split(".");

	let day = parseInt(parts[0]);
    let month = parseInt(parts[1]) - 1;
    let year = parseInt(parts[2]);

	let userDate = new Date(year, month, day);

	let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

	let dayOfWeek = days[userDate.getDay()];

	console.log(dayOfWeek);
}); */

/* let input = document.querySelector('#number');
let plusBtn = document.querySelector('#plus');
let minusBtn = document.querySelector('#minus');

plusBtn.addEventListener('click', function() {
    input.value = Number(input.value) + 1;
});

minusBtn.addEventListener('click', function() {
    let currentValue = Number(input.value);
    if (currentValue > 0) {
        input.value = currentValue - 1;
    }

}); */

/* let input = document.querySelector('input');
let paragraphs = document.querySelectorAll('p');

let clickCount = 0;

for (let paragraph of paragraphs) {
	paragraph.addEventListener("click", function() {
		clickCount++;
		input.value = clickCount;
	});
} */

/* let divs = document.querySelectorAll('div');

for (let i = 0; i < divs.length; i++) {
	let text = divs[i].textContent;

	if (text.length > 10) {
		divs[i].textContent = text.slice(0, 10) + "...";
	}
} */

/* let string = document.querySelector('#string');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    
    string.value = result;
}); */

/* let text = document.querySelector('#text');
let button = document.querySelector('#button');

button.addEventListener("click", function() {
	let chars = text.value.split("");

	for (let i = chars.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[chars[i], chars[j]] = [chars[j], chars[i]];
	}

	text.value = chars.join("");
}); */

/* let input = document.querySelector('#fahrenheit');
let button = document.querySelector('#button');
let paragraph = document.querySelector('#paragraph');

button.addEventListener('click', function() {
    let fahrenheit = Number(input.value);
	let celsius = (fahrenheit - 32) * 5 / 9;

	paragraph.textContent = celsius.toFixed(2) + ' °C';
}); */

/* let input = document.querySelector('#number');
let button = document.querySelector('#button');
let paragraph = document.querySelector('#paragraph');

button.addEventListener('click', function() {
    let n = Number(input.value);
    let result = 1;
    
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    paragraph.textContent = result;
}); */

/* let aInput = document.querySelector("#a");
let bInput = document.querySelector("#b");
let cInput = document.querySelector("#c");
let button = document.querySelector("#button");
let paragraph = document.querySelector("#paragraph");

button.addEventListener("click", function() {
    let a = Number(aInput.value);
    let b = Number(bInput.value);
    let c = Number(cInput.value);

    if (a === 0) {
        paragraph.textContent = "a не может быть равно нулю";
        return;
    }

    let D = b * b - 4 * a * c;

    if (D < 0) {
        paragraph.textContent = "Нет действительных корней";
    } else if (D === 0) {
        let x = (-b) / (2 * a);
        paragraph.textContent = "x = " + x.toFixed(2);
    } else {
        let sqrtD = Math.sqrt(D);
        let x1 = (-b + sqrtD) / (2 * a);
        let x2 = (-b - sqrtD) / (2 * a);
        paragraph.textContent = "x₁ = " + x1.toFixed(2) + ", x₂ = " + x2.toFixed(2);
    }
}); */

