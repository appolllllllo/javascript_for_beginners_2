// Работа с узлами в JavaScript

/* Как вы знаете, теги могут содержать другие теги или, говоря в терминах JavaScript, DOM элементы могут содержать другие DOM элементы. Кроме этого, однако, в них могут быть комментарии и обычный текст. Комментарии, тексты и DOM элементы объединяют одним названием - узлы.

Как вы знаете, теги могут содержать другие теги или, говоря в терминах JavaScript, DOM элементы могут содержать другие DOM элементы. Кроме этого, однако, в них могут быть комментарии и обычный текст. Комментарии, тексты и DOM элементы объединяют одним названием - узлы.

Вам уже знакомы свойства firstElementChild, lastElementChild, nextElementSibling, previousElementSibling. Эти свойства работают именно с DOM элементами, игнорируя остальные узлы. Как правило, именно это нам и требуется.

Однако, существуют также свойства firstChild, lastChild, nextSibling, previousSibling. Эти свойства работают аналогичным образом, однако, учитывая все узлы. Давайте посмотрим разницу между этими свойствами на примере. Пусть у нас есть див, содержащий в себе три узла:

<div id="elem"><!--com-->text<span>
	tag</span></div> 

Получим ссылку на этот див в переменную:

let elem = document.querySelector("#elem");

А теперь давайте посмотрим, что содержится в свойствах firstChild и firstElementChild:

console.log(elem.firstChild); // выведет комментарий

console.log(elem.firstElementChild); // тег span */

/* let elem = document.querySelector("#elem");

elem.lastElementChild.style.color = "red";
console.log(elem.lastChild); */

/* let elem = document.querySelector("#elem");

console.log(elem.nextSibling, elem.nextElementSibling.textContent); */

/* let elem = document.querySelector("#elem");

console.log(elem.previousSibling, elem.previousElementSibling.textContent); */

// Перебор узлов циклом в JavaScript

/* Как вы уже должны знать, в свойстве children содержатся все DOM элементы, являющиеся непосредственными потомками данного элемента. Существует аналогичное свойство childNodes, которое содержит в себе все потомки-узлы элемента.

Давайте, например, с помощью этого свойства выведем различные узлы из нашего элемента:

console.log(elem.childNodes[0]);
console.log(elem.childNodes[1]);
console.log(elem.childNodes[2]);

А теперь давайте переберем узлы элемента циклом:

for (let node of elem.childNodes) {
	console.log(node);
} */

/* let elem = document.querySelector("#elem");

for (let node of elem.childNodes) {
    console.log(node);
} */

// Название узлов в JavaScript

/* let elem = document.querySelector("#elem");

for (let node of elem.childNodes) {
    console.log(node.nodeName);
} */

// Тип узлов в JavaScript

/* Все узлы имеют свойство nodeType. Его значение числовое: 1 для элементов, 3 для текстовых узлов, 8 для комментариев. Остальные значения в настоящее время или малоиспользуемы, или устарели. */


/* let elem = document.querySelector("#elem");

for (let node of elem.childNodes) {
    if (node.nodeType === 1 || node.nodeType === 3) {
        console.log(node);
    }
} */

// Текст узлов в JavaScript

/* Давайте теперь разберемся, как прочитать или изменить текст узлов. Для всех узлов работает свойство textContent. Для текстовых узлов и комментариев есть свойства nodeValue и data (они практически одинаковые, второе - короче, лучше пользоваться им). Для элементов есть свойство innerHTML, прочитывающее текст вместе с тегами. */

/* let elem = document.querySelector("#elem");

for (let node of elem.childNodes) {
    console.log(node.textContent);
} */

/* let elem = document.querySelector("#elem");

for (let node of elem.childNodes) {
    if (node.nodeType === 8 || node.nodeType === 3) {
        console.log(node.data);
    }
} */

/* let elem = document.querySelector("#elem");

for (let node of elem.childNodes) {
    if (node.nodeType === 3 || node.nodeType === 1) {
        console.log(node.textContent);
    }
} */

/* let elem = document.querySelector("#elem");

for (let node of elem.childNodes) {
    if (node.nodeType === 3) {
        node.nodeValue += node.nodeType;
    } else if (node.nodeType === 1) {
        node.textContent += node.nodeType;
    } else if (node.nodeType === 8) {
        node.nodeValue += node.nodeType;
    }
} */