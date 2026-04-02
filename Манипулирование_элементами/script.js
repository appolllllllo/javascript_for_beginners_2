// Создание и вставка элементов на JavaScript

/* Сейчас мы научимся создавать новые DOM элементы через JavaScript, а затем добавлять их на страницу. Для этого предназначен метод createElement. Параметром этого метода следует передавать имя тега, который должен быть создан.

Если записать результат работы createElement в переменную, то в этой переменной будет такой элемент, как будто бы мы получили его через querySelector.

Единственное отличие - наш элемент не будет размещен на странице. А так мы можем менять ему текст, атрибуты, навешивать обработчики событий и в конце концов разместить его на странице.

Для размещения нового элемента на странице применяется метод appendChild. Этот метод следует применять к тому элементу, в который мы хотим поместить наш элемент. А параметром метода следует передавать наш новый элемент, созданный ранее через createElement.

Посмотрим на практическом примере. Пусть у нас есть див, а в нем - несколько абзацев:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

Давайте создадим абзац, установим ему текст и поместим на страницу в конец блока #parent:

let parent = document.querySelector("#parent");

let p = document.createElement("p");
p.textContent = "!";

parent.appendChild(p);

Результат выполнения кода:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
	<p>!</p>
</div> */

/* let elem = document.querySelector("#elem");

let li = document.createElement("li");
li.textContent = "item";

elem.appendChild(li); */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "item";

    elem.appendChild(li);
}); */

// Привязывание событий при вставке элементов

/* Давайте теперь при вставке элементов будем привязывать к ним обработчики событий.

Пусть, к примеру, у нас есть вот такой родительский элемент:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

Давайте добавим в конец этого родителя еще один абзац, установив ему обработчик клика:

let parent = document.querySelector("#parent");

let p = document.createElement("p");
p.textContnet = "!";

p.addEventListener("click", function() {
    console.log(this.textContent); // по клику выведем текст абзаца
});

parent.appendChild("p"); */

/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
    let li = document.createElement("li");

    elem.appendChild(li);

    li.addEventListener("click", function() {
        li.textContent = li.textContent + "!";
    });
}); */

// Создание элементов в цикле на JavaScript

/* В предыдущих уроках мы создавали по одному новому элементу. Давайте теперь сделаем так, чтобы новые элементы создавались в цикле.

Пусть для примера у нас есть вот такой див-родитель:

<div id="parent"></div>

Давайте запустим цикл, который добавит в конец нашего дива 9 новых абзацев:

let parent = document.querySelector("#parent");

for (let i = 1; i <= 9; i++) {
    let p = document.createElement("p");
    p.textContent = "!";

    parent.appendChild(p);
} */

/* let elem = document.querySelector("#elem");

for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    
    elem.appendChild(li);
} */

// Навешивание обработчиков в цикле на JavaScript

/* В предыдущем уроке мы научились создавать новые элементы в цикле. Давайте теперь будем навешивать обработчики событий при создании новых элементов.

Пусть у нас опять есть вот такой див-родитель:

<div id="parent"></div>

Запустим цикл, который добавит в конец нашего дива 9 новых абзацев, навесив на них обработчик клика:

let parent = document.querySelector("#parent");

for (let i = 1; i <= 9; i++) {
    let p = document.createElement("p");
    p.textContnet = "!";

    // Навешиваем обработчик клика:
    p.addEventListener("click", function() {
        console.log(this.textContnet);
    });
    
    parent.appendChild(p);
} */

/* let elem= document.querySelector("#elem");
let paragraph = document.querySelector("p");

for (let i = 1; i <= 5; i++) {
    let input = document.createElement("input");
    
    input.addEventListener("blur", function() {
        paragraph.textContent = this.value;
    });

    elem.appendChild(input);
} */

// Удаление элементов на JavaScript

/* Давайте теперь научимся удалять элементы. Для этого нужно использовать метод remove. Посмотрим на примере, как это делается. Пусть у нас есть абзацы:


<p>elem 1</p>
<p>elem 2</p>
<p>elem 3</p>
<p>elem 4</p>
<p>elem 5</p>

Давайте сделаем так, чтобы любой абзац удалялся по клику на нем:

let elems = document.querySelectorAll("p");

for (let elem of elems) {
    elem.addEventListener("click", function() {
        elem.remove()
    });
} */

/* let items = document.querySelectorAll("ul li");

for (let item of items) {
    item.addEventListener("click", function() {
        item.remove();
    });
} */

/* let parent = document.querySelector("#parent");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
    parent.lastElementChild.remove();
}); */

// Вставка элементов в начало или в конец на JavaScript

// Метод append

/* Метод append позволяет вставить в конец какого-либо элемента другой элемент. Параметром метод принимает элемент, как правило созданный через createElement, либо строку. Можно добавить сразу несколько элементов или строк, перечислив их через запятую.

Синтаксис

родитель.append(элемент или строка);

Пример 1

Давайте создадим абзац, установим ему текст и поместим на страницу в конец блока #parent:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

let parent = document.querySelector("#parent");

let p = document.createElement("p");
p.textContent = "!";

parent.append(p);

Результат выполнения кода:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
	<p>!</p>
</div>

Пример 2

Поместим сразу несколько абзацев в конец блока #parent:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

let parent = document.querySelector("#parent");

let p1 = document.createElement("p");
p1.textContent = "a";

let p2 = document.createElement("p");
p2.textContent = "b";

parent.append(p1, p2);

Результат выполнения кода:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
	<p>a</p>
	<p>b</p>
</div>

Пример 3

Давайте в качестве параметра метода используем строку:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

let parent = document.querySelector("#parent");
parent.append("!");

Результат выполнения кода:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
	!
</div>

Пример 5

Дан ul. Давайте разместим в нем 9 тегов li, при этом их текстом сделаем порядковые номера:

<ul id="parent"></ul>

let parent = document.querySelector("#parent");

for (let i = 1; i <= 9; i++) {
    let li = document.createElement("li");
    li.textContent = "i";
    parent.append(li);
}

Результат выполнения кода:

<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
	<li>6</li>
	<li>7</li>
	<li>8</li>
	<li>9</li>
</ul>

Пример 6

Давайте заполним таблицу tr-ками и td-шками:

<table id="table"></table>

let table = document.querySelector("#table");

for (let i = 1; i<= 3; i++) {
    let tr = document.createElement("tr"); // создаем tr-ку

    // Заполняем tr-ку td-шками:

    for (let j = 1; j <= 3; j++) {
        let td = document.createElement("td"); // создаем td-шку
        td.textContent = j; // пишем в нее текст

        tr.append(td); // добавляем созданную td-шку в конец tr-ки
    } 

    table.append(tr); // добавляем созданную tr-ку в конец таблицы
}

Результат выполнения кода:

<table id="table">
	<tr>
		<td>1</td>
		<td>2</td>
		<td>3</td>
	</tr>
	<tr>
		<td>1</td>
		<td>2</td>
		<td>3</td>
	</tr>
	<tr>
		<td>1</td>
		<td>2</td>
		<td>3</td>
	</tr>
</table> */

// Метод prepend

/* Метод prepend позволяет вставить в начало какого-либо элемента другой элемент. Параметром метод принимает элемент, как правило созданный через createElement, либо строку. Можно добавить сразу несколько элементов или строк, перечислив их через запятую.

Синтаксис

родитель.prepend(элемент или строка);

Пример 1

Давайте создадим абзац, установим ему текст и поместим на страницу в начало блока #parent:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

let parent = document.querySelector("#parent");

let p = document.createElement("p");
p.textContent = "!";

parent.prepend(p);

Результат выполнения кода:

<div id="parent">
	<p>!</p>
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

Пример 2

Поместим сразу несколько абзацев в начало блока #parent:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

let parent = document.querySelector("#parent");

let p1 = document.createElement("p");
p1.textContent = "a";

let p2 = document.createElement("p");
p2.textContent = "b";

parent.prepend(p1, p2);

Результат выполнения кода:

<div id="parent">
	<p>b</p>
	<p>a</p>
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

Пример 2

Давайте в качестве параметра метода используем строку:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

let parent = document.querySelector("#parent");
parent.prepend("!");

Результат выполнения кода:

<div id="parent">
	!
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div> */

/* let elem = document.querySelector("#elem");

let li1 = document.createElement("li");
li1.textContent = "start";

elem.prepend(li1);

let li2 = document.createElement("li");
li2.textContent = "finish";

elem.append(li2); */

// Вставка элементов перед элементами на JavaScript

// Метод insertBefore

/* Метод insertBefore позволяет вставить элемент перед другим элементом. Чаще всего используется после создания элемента с помощью createElement. Метод применяется к родителю того элемента, перед которым произойдет вставка.

Синтаксис

родитель.insertBefore(элемент, перед кем вставить); 

Пример 1

Создадим абзац и поместим его перед вторым абзацем:

<div id="parent">
	<p>elem 1</p>
	<p id="before">elem 2</p>
	<p>elem 3</p>
</div>

let parent = document.querySelector("#parent");
let before = document.querySelector("#before");

let p = dpcument.createElement("p");
p.textContent = "!";

parent.insertBefore(p, before);

Результат выполнения кода:

<div id="parent">
	<p>elem 1</p>
	<p>!</p>
	<p>elem 2</p>
	<p>elem 3</p>
</div>

Пример 2

Добавим абзац в начало элемента #parent. Для этого вставим наш абзац перед первым потомком #parent. Этого потомка можно найти с помощью firstElementChild:

<div id="parent">
	<p>elem 1</p>
	<p>elem 2</p>
</div>

let parent = document.querySelector('#parent');

let p = document.createElement("p");
p.textContent = "!";

parent.insertBefore(p, parent.firstElementChild);

Результат выполнения кода:

<div id="parent">
	<p>!</p>
	<p>elem 1</p>
	<p>elem 2</p>
</div>

Пример 3

 При передаче вторым параметром null метод insertBefore срабатывает как appendChild. В то же время, если в элементе нет дочерних элементов, firstElementChild возвращает null. Следовательно, добавлять в начало элемента можно даже тогда, когда в нем нет дочерних элементов:

<div id="parent"></div>

let parent = document.querySelector('#parent');

let p = dpcument.createElement("p");
p.textContent = "!";

parent.insertBefore(p, parent.firstChild);

Результат выполнения кода:

<div id="parent">
	<p>!</p>
</div> */

/* let parent = document.querySelector("#parent");
let elem = document.querySelector("#elem");

let li = document.createElement("li");
li.textContent = "new";

parent.insertBefore(li, elem); */

/* let parent = document.querySelector("#parent");
let elem = document.querySelector("#elem");

let li = document.createElement("li");
li.textContent = "new";

li.addEventListener("click", function() {
    li.textContent += "!"
});

parent.insertBefore(li, elem); */

// Смежная вставка элементов на JavaScript

// Метод insertAdjacentElement

/* Метод insertAdjacentElement позволяет вставить элемент в любое место страницы. Чаще всего используется после создания элемента с помощью createElement. Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки beforeBegin), после него (способ вставки afterEnd), а также в начало (способ вставки afterBegin) или в конец (способ вставки beforeEnd) опорного элемента.

Синтаксис

опорный элемент.insertAdjacentElement(способ вставки, код для вставки); 

Пример 1. Способ beforeBegin

Пусть опорный элемент - это элемент #target. Вставим перед ним новый абзац:

<div id="target">
	<p>elem</p>
</div>

let p = document.createElement("p");
p.textContent = "!";

let target = document.querySelector("#target");
target.insertAdjacentElement("beforeBegin", p);

Результат выполнения кода:

<p>!</p>
<div id="target">
	<p>elem</p>
</div>

Пример 2. Способ afterEnd

А теперь вставим новый абзац после опорного элемента:

<div id="target">
	<p>elem</p>
</div>

let p = document.createElement("p");
p.textContent = "!";

let target = document.querySelector("#target");
target.insertAdjecentElement("afterEnd", p);

Результат выполнения кода:

<div id="target">
	<p>elem</p>
</div>
<p>!</p> 

Пример 3. Способ afterBegin

Вставим новый абзац в начало опорного элемента:

<div id="target">
	<p>elem</p>
</div>

let p = document.querySelector("p");
p.textCpntent = '!';

let target = document.querySelector("#target");
target.insertAdjacentElement("afterBegin", p);

Результат выполнения кода:

<div id="target">
	<p>!</p>
	<p>elem</p>
</div>

Пример 4. Способ beforeEnd

Вставим новый абзац в конец опорного элемента:

<div id="target">
	<p>elem</p>
</div>

let p = document.createElement("p");
p.textContent = '!';

let target = document.querySelector("#target");
target.insertAdjacentElement("beforeEnd", p);

Результат выполнения кода:

<div id="target">
	<p>elem</p>
	<p>!</p>
</div> */

/* let elem = document.querySelector("#elem");

let p = document.createElement("p");
p.textContent = '!!!';

elem.insertAdjacentElement('beforeBegin', p); */

/* let elem = document.querySelector("#elem");

let p = document.createElement("p");
p.textContent = "!!!";

elem.insertAdjacentElement("afterEnd", p); */

/* let elem = document.querySelector("#elem");

let p = document.createElement("p");
p.textContent = "!!!";

elem.insertAdjacentElement("afterBegin", p); */

/* let elem = document.querySelector("#elem");

let p = document.createElement("p");
p.textContent = "!!!";

elem.insertAdjacentElement("beforeEnd", p); */

// Смежная вставка тегов на JavaScript

// Метод insertAdjacentHTML

/* Метод insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы. Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки 'beforeBegin'), после него (способ вставки 'afterEnd'), а также в начало (способ вставки 'afterBegin') или в конец (способ вставки 'beforeEnd') опорного элемента.

Синтаксис

опорный элемент.insertAdjacentHTML(способ вставки, код для вставки); 

Пример 1. Способ beforeBegin

Пусть опорный элемент - это элемент #target. Вставим перед ним новый абзац:

<div id="target">
	<p>elem</p>
</div>

let target = document.querySelector('#target');
target.insertAdjacentHTML('beforeBegin', '<p>!</p>');

Результат выполнения кода:

<p>!</p>
<div id="target">
	<p>elem</p>
</div>

Пример 2. Способ afterEnd

А теперь вставим новый абзац после опорного элемента:

<div id="target">
	<p>elem</p>
</div>

let target = document.querySelector('#target');
target.insertAdjacentHTML('afterEnd', '<p>!</p>');

Результат выполнения кода:

<div id="target">
	<p>elem</p>
</div>
<p>!</p>

Пример 3. Способ afterBegin

Вставим новый абзац в начало опорного элемента:

<div id="target">
	<p>elem</p>
</div>

let target = document.querySelector('#target');
target.insertAdjacentHTML('afterBegin', '<p>!</p>');

Результат выполнения кода:

<div id="target">
	<p>!</p>
	<p>elem</p>
</div>

Пример 4. Способ beforeEnd

Вставим новый абзац в конец опорного элемента:

<div id="target">
	<p>elem</p>
</div>

let target = document.querySelector('#target');
target.insertAdjacentHTML('beforeEnd', '<p>!</p>');

Результат выполнения кода:

<div id="target">
	<p>elem</p>
	<p>!</p>
</div> */

/* let elem = document.querySelector("#elem");

elem.insertAdjacentHTML('beforebegin', '<div class="www"><p>text</p><p>text</p><input></div>'); */

// Клонирование элементов на JavaScript

/* В данном уроке мы научимся получать копии элементов. С этими копиями можно будет работать, как с обычными элементами - изменять их и вставлять в нужное место страницы. Процесс получения копий элементов называется клонирование.

Клонировать элемент можно с помощью метода cloneNode. В этот метод нужно передавать параметром true либо false. Если передан true, то элемент клонируется полностью, вместе со всем атрибутами и дочерними элементами, а если false - только сам элемент.

Давайте посмотрим на примере. Пусть у нас есть вот такой код:

<div id="parent">
	<div class="elem">
		<p>первый абзац</p>
		<p>второй абзац</p>
	</div>
</div>

Сделаем копию блока с классом elem и вставим его в конец блока #parent:

let parent = document.querySelector("parent");
let elem = parent.querySeelctor(".elem");

let clone = elem.cloneNode(true);
parent.appendChild(clone);

В результате получится следующее:

<div id="parent">
	<div class="elem">
		<p>первый абзац</p>
		<p>второй абзац</p>
	</div>
	<div class="elem">
		<p>первый абзац</p>
		<p>второй абзац</p>
	</div>
</div> */

/* let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", function() {
    let clone = input.cloneNode(true);
    document.body.appendChild(clone);
}); */

// Проверка элементов в JavaScript

// Метод matches

/* Метод matches позволяет проверить, удовлетворяет ли элемент указанному CSS селектору.

Синтаксис

элемент.matches('селектор');

Пример

Проверим, является ли наш элемент абзацем с классом www:

<p id="elem" class="www"></p>

let elem = document.querySelector('#elem');
console.log(elem.matches('p.www'));

Результат выполнения кода:

true */

// Метод contains

/* Метод contains позволяет проверить, содержит ли один элемент внутри себя другой. Параметром метода передается элемент, который будет проверяться на то, что он находится внутри элемента, к которому применился метод.

Синтаксис

родитель.contains(элемент);

Пример 1

Проверим, находится ли абзац #child в блоке #parent:

<div id="parent">
	<p id="child"></p>
</div>

let parent = document.querySelector('#parent');
let child = document.querySelector('#child');

let contains = parent.contains(child);
console.log(contains);

Результат выполнения кода:

true

Пример 2

А теперь в родителе нет переданного элемента и поэтому метод возвращает false:

<div id="parent"></div>
<p id="child"></p>

let parent = document.querySelector('#parent');
let child = document.querySelector('#child');

let contains = parent.contains(child);
console.log(contains);

Результат выполнения кода:

false

Пример 3

Можно передать тот же элемент, на котором метод был вызван, в этом случае метод также вернет true:

<div id="parent"></div>

let parent = document.querySelector('#parent');
let contains = parent.contains(parent);

console.log(contains);

Результат выполнения кода:

true */

/* let elem = document.querySelector("#elem");

console.log(elem.matches(".www")); */

/* let elem = document.querySelector("#elem");

console.log(elem.matches('p')); */

/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

let contains = elem1.contains(elem2);

console.log(contains); */