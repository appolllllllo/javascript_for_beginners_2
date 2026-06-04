// Функции для работы с DOM элементом на JavaScript

/* Сейчас мы научимся делать вспомогательные функции, выполняющие какие-либо операции с DOM. Например, давайте сделаем функцию, которая первым параметром будет принимать id элемента, а вторым - текст элемента, и будет устанавливать этому элементу новый текст.

Вот описанная функция:

function setText(id, text) {
    let elem = document.getElementById(id);
    elem.textContent = text;
}

Давайте опробуем ее работу. Пусть у нас есть два абзаца:

<p id="elem1"></p>
<p id="elem2"></p>

Давайте поменяем текст этим абзацам, воспользовавшись созданной нами функцией:

setText('elem1', 'text1');
setText('elem2', 'text2'); */

/* function setText(selector, text) {
    let elem = document.querySelector(selector);
    elem.textContent = text;
}

setText('#elem1', 'text1');
setText('#elem2', 'text2'); */

/* function setAttr(selector, attrName, value) {
    let elem = document.querySelector(selector);
    elem.setAttribute(attrName, value);
}

setAttr('#elem1', 'title', 'Подсказка при наведении'); */

// Функции для работы с группой DOM элементов

/* Давайте теперь напишем функцию, которая параметром будет принимать селектор группы элементов и их новый текст. Пусть эта функция устанавливает всем подпадающим под селектор элементам новый текст.

Реализуем описанную функцию:

function setText(selector, text) {
    let elems = document.querySelectorAll(selector);

    for (let elem of elems) {
        elem.textContent = text;
    }
}

Давайте проверим ее на группе следующих элементов:

<p class="elem"></p>
<p class="elem"></p>
<p class="elem"></p>

Установим всем элементам с классом elem новый текст:

setText('.elem', 'text'); */

/* function appendText(selector, text) {
    let elems = document.querySelectorAll(selector);

    for (let elem of elems) {
        elem.textContent = elem.textContent + text;
    }
}

appendText('.elem', 'i love you'); */

// Передача коллбэка для работы с DOM на JavaScript

/* Пусть у нас есть некоторая группа DOM элементов:

<p class="elem">1</p>
<p class="elem">2</p>
<p class="elem">3</p>
<p class="elem">4</p>
<p class="elem">5</p>

Давайте сделаем функцию forEach, которая первым параметром будет принимать селектор группы элементов, а вторым параметром - функцию-коллбэк, которая применится по очереди к каждому из найденных элементов:

forEach('.elem', function() {
    // функция применится к каждому элементу
});

Пусть элементы, попавшие под селектор, по очереди попадают в первый параметр коллбэка:

forEach('.elem', function(elem) {
    console.log(elem); // выведет по очереди найденные элементы
});

Давайте с помощью нашей функции найдем все элементы с классом elem и для каждого найденного элемента применим коллбэк, который возведет в квадрат текст каждого элемента:

forEach('.elem', function(elem) {
    elem.textContent = elem.textContent ** 2;
});

Давайте теперь напишем реализацию задуманной нами функции forEach:

function forEach(selector, func) {
    let elems = document.querySelectorAll(selector);

    for (let elem of elems) {
        func(elem);
    }
} */

/* appendText('.elem', function(elem) {
    elem.textContent = elem.textContent + '!';
})

function appendText(selector, func) {
    let elems = document.querySelectorAll(selector);

    for (let elem of elems) {
        func(elem);
    }
} */

// Передача порядкового номера в коллбэк на JavaScript

/* Давайте сделаем так, чтобы, если в нашей функции-коллбэке написан второй параметр, в него пусть попадает порядковый номер элемента в найденном наборе элементов:

forEach('.elem', function(elem, index) {
    console.log(elem); // выведет элемент
    console.log(index); // выведет порядковый номер элемента
});

С помощью этого параметра мы можем, к примеру, добавить в конец каждому элементу его порядковый номер:

forEach('.elem', function(elem, index) {
    elem.textContent = elem.textContent + index;
});

Давайте переделаем код нашей функции forEach для осуществления описанного:

function forEach(selector, func) {
    let elems = document.querySelectorAll(selector);

    for (let i = 0; i < elems.length; i++) {
        func(elems[i], i);
    }
} */

/* addIndex('.elem', function(elem, index) {
    elem.textContent = elem.textContent + index;
});

function addIndex(selector, func) {
    let elems = document.querySelectorAll(selector);

    for (let i = 0; i < elems.length; i++) {
        func(elems[i], i + 1);
    }
} */

// Передача DOM элемента параметром функции

/* В предыдущих уроках мы передавали в наши функции селекторы элементов, и наши функции сами получали ссылки на эти элементы внутри своего кода. Существует и другой подход: в функции можно передавать уже полученные ранее ссылки на элементы.

Давайте посмотрим на примере. Пусть у нас есть следующий код:

<p id="elem1"></p>
<p id="elem2"></p>

Давайте сделаем функцию setText, которая первым параметром будет принимать ссылку на DOM элемент, а вторым - текст элемента:

function setText(elem, text) {
    elem.textContent = text;
}

Используем созданную нами функцию для установки текста наших абзацев:

let elem1 = document.getElementById('elem1');
setText(elem1, 'text1');

let elem2 = document.getElementById('elem2');
setText(elem2, 'text2'); */

/* function appendText(elem, text) {
    elem.textContent = elem.textContent + text;
}

let elem1 = document.getElementById('elem1');
appendText(elem1, 'text1');

let elem2 = document.getElementById('elem2');
appendText(elem2, 'text2'); */

/* function appendText(elem, text) {
    elem.textContent += text;
}

let elems = document.querySelectorAll('.elem');

for (let elem of elems) {
    appendText(elem, '!');
} */

/* function setValue(elem, text) {
    elem.value = text;
}

let elem = document.querySelector('input');
setValue(elem, 'i love you'); */

// Передача группы DOM элементов параметрами функций

/* Пусть теперь наша функция setText первым параметром будем принимать ссылку не на один элемент, а сразу набор элементов:

function setText(elems, text) {
    for (let elem of elems) {
        elem.textContent = text;
    }
}

Давайте опробуем нашу функцию на практике. Пусть у нас есть следующие абзацы:

<p class="elem"></p>
<p class="elem"></p>
<p class="elem"></p>
<p class="elem"></p>
<p class="elem"></p>

Давайте с помощью нашей функции установим всем этим абзацам какой-нибудь текст:

let elems = document.querySelectorAll('.elem');
setText(elems, 'text'); */

/* function appendText(elems, text) {
    for (let elem of elems) {
        elem.textContent += text;
    }
}

let elems = document.querySelectorAll('.elem');
appendText(elems, '!'); */

/* function appendElem(elem, text) {
    let li = document.createElement('li');
    li.textContent = text;
    elem.appendChild(li);
}

let elem = document.querySelector('ul');
appendElem(elem, 'privet'); */

/* let numbers = [1, 2, 3, 4, 5];

function appendElem(elem, text) {
        let li = document.createElement('li');
        li.textContent = text;
        elem.appendChild(li);
}

let elem = document.querySelector('ul');

for (let number of numbers) {
    appendElem(elem, number);
} */

// Функция для создания HTML таблиц на JavaScript

/* Давайте теперь сделаем функцию createTable, которая будет создавать таблицу заданного размера и добавлять ее в конец заданного элемента.

Пусть первым параметром наша функция принимает количество рядов, вторым параметром - количество колонок, а третьим - ссылку на DOM элемент, внутри которого будет создаваться наша таблица.

Давайте посмотрим, как мы будем пользоваться описанной функцией, когда она будет создана. Пусть, к примеру, у нас дан вот такой див:

<div id="elem"></div>

Давайте сделаем внутри этого дива таблицу 3 на 4:

let div = document.querySelector('#elem');
createTable(3, 4, div);

Пусть теперь у нас даны два дива:

<div id="elem1"></div>
<div id="elem2"></div>

Давайте сделаем свою таблицу в каждом из этих дивов:

let div1 = document.querySelector('#elem1');
createTable(3, 4, div1);

let div2 = document.querySelector('#elem2');
createTable(5, 6, div2);

Для того, чтобы создаваемые таблицы сразу были видны, можно добавить какой-нибудь CSS, например, такой:

td {
	width: 50px;
	height: 50px;
	border: 1px solid black;
} */

/* function createTable(rows, cols, parent) {
    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
}

let parent = document.querySelector('div');

createTable(3, 3, parent); */

// Возврат таблицы из функции на JavaScript

/* В предыдущем уроке мы сделали функцию createTable. Давайте модифицируем эту функцию так, чтобы она не добавляла таблицу в какой-то элемент, а просто возвращала ее через return.

To есть приведенный код предыдущего урока преобразуется вот в такой:

let div = document.querySelector('#elem');
let table = createTable(3, 4);
div.appendChild(table);

Можно переписать короче:

let div = document.querySelector('#elem');
div.appendChild(createTable(3, 4));

Получение ссылки на таблицу может понадобится для того, чтобы что-то сделать с созданной таблицей. К примеру, давайте покрасим ее цвет текста в красный:

let div = document.querySelector('#elem');

let table = createTable(3, 4);
table.style.color = 'red';

div.appendChild(table); */

/* let div = document.querySelector('div');
let count = 1;

function createTable(rows, cols) {
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.textContent = count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

let table = createTable(3, 4);
table.style.color = 'red';

div.appendChild(table); */

/* let div = document.getElementById('elem');

function createTable(rows, cols, parent) {
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
}

createTable(3, 4, div); */

// Функция для создания таблицы из массива

/* В предыдущих уроках мы сделали функцию createTable, которая создает таблицу заданного размера. Давайте теперь сделаем функцию createTableByArr, которая параметром будет принимать двухмерный массив и строить на его основе таблицу.

To есть приведенный код предыдущего урока преобразуется вот в такой:

let div = document.querySelector('#elem');

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 

let table = createTableByArr(arr);

div.appendChild(table);

В результате выполнения этого кода должна получится следующая таблица:

<div id="elem">
	<table>
		<tr>
			<td>1</td>
			<td>2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>4</td>
			<td>5</td>
			<td>6</td>
		</tr>
		<tr>
			<td>7</td>
			<td>8</td>
			<td>9</td>
		</tr>
	</table>
</div> */

/* let div = document.querySelector('div');

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 

function createTableByArr(arr) {
    let table = document.createElement('table');
    for (let rows of arr) {
        let tr = document.createElement('tr');
            for (let num of rows) {
                let td = document.createElement('td');
                td.textContent = num;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }

let table = createTableByArr(arr);

div.appendChild(table); */