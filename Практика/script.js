// Создание элементов из массива на JavaScript

/* Пусть у нас есть некоторый массив:

let arr = [1, 2, 3, 4, 5];

Пусть также у нас есть некоторый элемент-родитель:

<div id="parent"></div>

Давайте добавим в наш родитель новые абзацы, текстом которых будут элементы нашего массива.

Реализуем описанное:

let parent = document.querySelector("#parent");

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let p = document.createElement("p");
    p.textContent = elem;

    parent.appendChild(p);
} */

/* let parent = document.querySelector("#parent");
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let p = document.createElement("p");
    p.textContent = elem;

    p.addEventListener("click", function() {
        p.textContent++;
    });

    parent.appendChild(p);
} */

// Практика на создание списков ul на JavaScript

/* let items = document.querySelector("#elem");
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let li = document.createElement("li");
    li.textContent = elem;

    items.appendChild(li);
} */

/* let items = document.querySelector("#elem");
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let li = document.createElement("li");
    li.textContent = elem;

    li.addEventListener("click", function() {
        alert(li.textContent);
    });

    items.appendChild(li);
} */

/* let items = document.querySelector("#elem");
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let li = document.createElement("li");
    li.textContent = elem;

    li.addEventListener("click", function() {
        li.textContent += "!";
    });

    items.appendChild(li);
} */

/* let items = document.querySelector("#elem");
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let li = document.createElement("li");
    li.textContent = elem;

    li.addEventListener("click", function func() {
        li.textContent += "!";
        li.removeEventListener("click", func);
    });

    items.appendChild(li);
} */

// Создание HTML таблиц на JavaScript

/* Пусть у нас есть вот такая пустая HTML таблица:

<table id="table"></table>

Давайте заполним эту таблицу рядами и колонками. Вот пример того, что у нас должно получится:

<table id="table">
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>

Для решения задачи нам нужно два вложенных цикла. Первый цикл будет создавать ряды таблицы, а второй - ячейки в каждом ряду:

let table = document.querySelector("#table");

for (let i = 0; i < 3; i++) {
    let tr = document.createElement("tr");

    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
} */

/* let table = document.querySelector("#table");

for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");

    for (let i = 0; i < 5; i++) {
        let td = document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
} */

/* let table = document.querySelector("#table");

for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");

    for (let i = 0; i < 5; i++) {
        let td = document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
} */

/* let table = document.querySelector("#table");

for (let i = 0; i < 10; i++) {
    let td = document.createElement("td");

    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        tr.textContent = "x";
        td.appendChild(tr);
    }
    table.appendChild(td);
} */

/* let table = document.querySelector("#table");
let width = document.querySelector("#width");
let height = document.querySelector("#height");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
    table.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");

        for (let i = 0; i < 5; i++) {
            let td = document.createElement("td");
             td.style.border = "1px solid black";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    table.style.width = width.value + "px";
    table.style.height = height.value + "px"
    table.style.borderCollapse = "collapse";
}); */

// Последовательное заполнение HTML таблиц

/* Пусть у нас есть вот такая пустая HTML таблица:

<table id="table"></table>

Давайте заполним эту таблицу ячейками и сделаем так, чтобы в этих ячейках шли числа от 1 до 9. Вот пример того, что у нас должно получится:

<table id="table">
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

Давайте приступим к реализации.

Для начала давайте просто сделаем таблицу размером 3 на 3, заполненную буквами 'x':

let table = document.querySelector("#table");

for (let i = 0; i < 3; i++) {
    let tr = document.createElement("tr");

    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        td.textContent = "x";
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

Давайте теперь сделаем так, чтобы вместо букв 'x' в ячейки записывались числа по возрастанию.

Для этого нам необходимо ввести еще один счетчик, который будет последовательно увеличивать свои значения в каждой итерации внутреннего цикла, вот так:

let table = document.querySelector("#table");

let k = 1; // начальное значение счетчика

for (let i = 0; i < 3; i++) {
    let tr = document.createElement("tr");

    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");

        td.textContent = k; // записываем счетчик в ячейку

        k++; // увеличиваем счетчик

        tr.appendChild(td);
    }
    
    table.appendChild(tr);
} */

/* let table = document.querySelector("#table");

let k = 1;

for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");
    
    for (let i = 0; i < 5; i++) {
        let td = document.createElement("td");

        td.textContent = k;

        k++;

        tr.appendChild(td);
    }

    table.appendChild(tr);
} */

/* let table = document.querySelector("#table");

let k = 2;

for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");

    for (let i = 0; i < 5; i++) {
        let td = document.createElement("td");

        td.textContent = k;

        k = k + 2;

        tr.appendChild(td);
    }

    table.appendChild(tr);
} */

// Создание HTML таблицы из массива на JavaScript

/* Пусть у нас есть некоторая пустая таблица:

<table id="table"></table>

Пусть у нас также дан некоторый двухмерный массив, например, такой:

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]; 

Давайте на основе этого массива сделаем HTML таблицу, заполненную элементами данного массива. To есть у нас получится таблица с тремя рядами, в каждом из которых будет по 4 ячейки.

Решим задачу с помощью двух вложенных циклов for-of:

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]; 

let table = document.querySelector("#table");

for (let subArr of arr) {
    let tr = document.createElement("tr");

    for (let elem of subArr) {
        let td = document.createElement("td");
        td.textContent = elem;
        tr.appendChild(td);
    }

    table.appendChild(tr);
} 

Как вы видите, наше решение получилось универсальным и не зависит от количества подмассивов и количества элементов в каждом подмассиве. Единственное условие - чтобы в подмассивах было одинаковое количество элементов. */

/* let table = document.querySelector("#table");

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; 

for (let subArr of arr) {
    let tr = document.createElement("tr");

    for (let elem of subArr) {
        let td = document.createElement("td");
        td.textContent = elem;
        tr.appendChild(td);
    }
table.appendChild(tr);
} */

/* let table = document.querySelector("#table");

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

for (let subArr of arr) {
    let tr = document.createElement("tr");

    for (let elem of subArr) {
        let td = document.createElement("td");
        td.textContent = elem ** 2;
        tr.appendChild(td);
    }
    table.appendChild(tr);
} */

// Создание HTML таблицы из массива объектов

/* Пусть у нас дан некторый массив объектов, например, вот такой массив с юзерами:

let users = [
	{
		name: 'name1',
		surname: 'surname1',
		patronymic: 'patronymic1'
	},
	{
		name: 'name2',
		surname: 'surname2',
		patronymic: 'patronymic2'
	},
	{
		name: 'name3',
		surname: 'surname3',
		patronymic: 'patronymic3'
	},
];

Давайте сделаем из этого массива HTML таблицу, в каждый ряд который запишем данные отдельного юзера.

При такой структуре хранения данных обычно запускают один цикл по массиву и создают каждую ячейку таблицы в ручную, вот так:

let table = document.getElementById("table");

for (let user of users) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = user.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = user.surname;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = user.patronymic;
    tr.appendChild(td3);

    table.appendChild(tr);
}

Такой подход дает большую гибкость - мы можем сами регулировать порядок расположения данных по ячейкам таблицы (можем, к примеру, поменять местами имя и фамилию).

Кроме того, при желании мы можем навешивать события на определенные ячейки. К примеру, можно на ячейку с фамилией навесить какое-то действие по клику и так далее. */

/* let table = document.getElementById("table");

let employees = [
	{name: 'employee1', age: 30, salary: 
		400}, 
	{name: 'employee2', age: 31, salary: 
		500}, 
	{name: 'employee3', age: 32, salary: 
		600}, 
];

for (let employ of employees) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = employ.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = employ.age;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = employ.salary;
    tr.appendChild(td3);

    table.appendChild(tr);
} */

/* let table = document.getElementById("table");

let employees = [
	{name: 'employee1', age: 30, salary: 
		400}, 
	{name: 'employee2', age: 31, salary: 
		500}, 
	{name: 'employee3', age: 32, salary: 
		600}, 
];

for (let employee of employees) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = employee.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = employee.age;
    td2.addEventListener("click", function() {
        td2.textContent++;
    });
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = employee.salary;
    tr.appendChild(td3);

    table.appendChild(tr);
} */

/* let table = document.getElementById("table");

let employees = [
	{name: 'employee1', age: 30, salary: 
		400}, 
	{name: 'employee2', age: 31, salary: 
		500}, 
	{name: 'employee3', age: 32, salary: 
		600}, 
];

for (let employee of employees) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = employee.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = employee.age;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = employee.salary;
     td3.addEventListener("click", function() {
        td3.textContent = Number(td3.textContent) + ((Number(td3.textContent)) / 100 * 10);
    });
    tr.appendChild(td3);

    table.appendChild(tr);
} */

// Добавление рядов и колонок в HTML таблицу

/* Пусть у нас есть некоторая HTML таблица #table. Давайте научимся добавлять в нее новые ряды и колонки. */

// Добавление рядов

/* Добавление рядов не составляет труда: нужно создать tr, а затем запустить цикл, который добавит нужное количество ячеек в этот ряд (пусть 3):

let table = document.querySelector("#table");

let tr = document.createElement("tr");

for (let i = 1; i <= 3; i++) {
    let td = document.createElement("td");
    tr.appendChild(td);
}

table.appendChild(tr); */

/* let table = document.querySelector("#table");
let button = document.querySelector("#button");
let number = 1;

for (let i = 1; i <= 3; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= 3; j++) {
        let td = document.createElement("td");
        td.textContent = number++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

button.addEventListener("click", function() {
    let tr = document.createElement("tr");
    for (let i = 1; i <= 3; i++) {
        let td = document.createElement("td");
        td.textContent = number++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}); */

// Добавление колонок

/* А вот с добавлением колонок чуть посложнее: нужно запустить цикл, который переберет все ряды таблицы и в каждый ряд добавит новую ячейку:

let trs = document.querySelectorAll("#table tr");

for (let tr of trs) {
    let td = document.createElement("td");
    tr.appendChild(td);
} */

/* let table = document.querySelector("#table");
let button = document.querySelector("#button");

button.addEventListener("click", function() {
    let trs = document.querySelectorAll("#table tr");
    
    for (let tr of trs) {
        let td = document.createElement("td");
        tr.appendChild(td);
    }
    
    let newRow = document.createElement("tr");
    let columnCount = trs.length + 1;
    
    for (let i = 0; i < columnCount; i++) {
        let td = document.createElement("td");
        newRow.appendChild(td);
    }
    
    table.appendChild(newRow);
}); */

// Изменение ячеек HTML таблицы на JavaScript

/* Пусть дана некоторая HTML таблица #table. Пусть перед нами стоит задача что-то сделать с каждой ячейкой таблицы, например, записать в каждую из них текст '!'.

Давайте обсудим нюансы решения подобной задачи.

Как вы знаете, HTML таблица имеет двухмерную структуру: есть ряды, а в них ячейки. Можно решить нашу задачу следующим образом: перебрать циклом ряды и в каждом ряду перебрать циклом ячейки и сделать с ними нужное нам действие. To есть приведенная схема решения подобна тому, как бы мы создавали такую таблицу, заполняя ее рядами и ячейками.

Однако, в данном случае, два вложенных цикла будут лишними: можно просто получить все td и перебрать их циклом, выполняя нужную операцию. Сделаем это:

let tds = document.querySelectorAll("#table td");

for (let td of tds) {
    td.textContent = "1";
} */

/* let button = document.querySelector("#button");
let tds = document.querySelectorAll("#table td");

button.addEventListener("click", function() {
    for (let td of tds) {
        td.textContent = Number(td.textContent) * 2;
    }
}); */

// Самоудаление новых элементов на JavaScript

/* В предыдущем уроке мы в вами научились делать так, чтобы элементы удаляли сами себя по клику.

Пусть теперь элементов в родителе изначально нет:

<div id="parent"></div>

Давайте в цикле создадим 9 новых абзацев, при этом сделаем так, чтобы любой абзац удалялся по клику на нем:

let parent = document.querySelector("#parent");

for (let i = 1; i <= 9; i++) {
    let p = document.createElement("p");
    p.textContent = i;

    p.addEventListener("click", function() {
        this.remove();
    });
}

parent.appendChild(p); */

/* let button = document.querySelector("#button");
let parent = document.querySelector("#parent");
let counter = 4;

button.addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = counter++;
    parent.appendChild(li);
});

parent.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
}); */

// Ссылка на удаление элемента на JavaScript

/* Пусть у нас абзац. Давайте рядом с ним сделаем ссылку, с помощью которой этот абзац можно будет удалить.

Реализуем:

<div id="parent">
	<p id="elem">text</p>
	<a href="#" id="remove">remove</a>
</div>

let elem = document.queruSelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function() {
    elem.remove();
});

Обратите внимание на то, что в атрибуте href ссылки стоит #. Если эту решетку убрать - мы получим переход по ссылке и, как следствие, обновление страницы.

На самом деле удаление абзаца тоже будет происходить, но мы это не заметим, так как страница обновится и все вернется в изначальное положение.

Для решения проблемы нужно предотвратить переход по ссылке с помощью preventDefault:

<div id="parent">
	<p id="elem">text</p>
	<a href="" id="remove">remove</a>
</div>

let elem = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function(event) {
    elem.remove();
    event.preventDefault(); // отменяем переход по ссылке
}); */

/* let elem = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function(event) {
    elem.remove();
    event.preventDefault();
}); */

// Создание ссылок для удаление элементов на JavaScript

/* Пусть теперь у нас есть много абзацев:

<div id="parent">
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>
</div>

Давайте сделаем так, чтобы каждому абзацу в конец добавлялась ссылка на его удаление.

Для начала давайте просто реализуем добавление ссылок:

let elems = document.querySelectorAll('#parent p');

for (let elem of elems) {
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';

    elem.appendChild(remove);
}

Давайте теперь сделаем так, чтобы по нажатию на ссылку, удалялся соответствующий ей абзац:

let elems = document.querySelectorAll('#parent p');

for (let elem of elems) {
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';

    elem.appendChild(remove);

    remove.addEventListener('click', function(event) {
        elem.remove();
        event.preventDefault();
    });
} */

/* let parent = document.querySelector('#parent');

for (let i = 1; i <= 3; i++) {
    let li = document.createElement('li');
    li.textContent = i;

    parent.appendChild(li);
}

let elems = document.querySelectorAll('#parent li');

for (let elem of elems) {
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';

    elem.appendChild(remove);

    remove.addEventListener('click', function(event) {
        elem.remove();
        event.preventDefault();
    });
} */

/* let table = document.querySelector('#table');
let button = document.querySelector('#button');
let count = 1;

for (let i = 1; i <= 3; i++) {
    let tr = document.createElement('tr');

    for (let j = 1; j <= 3; j++) {
        let td = document.createElement('td');
        td.textContent = count++;
        tr.appendChild(td);
    }

    let tdRemove = document.createElement('td');
    let remove = document.createElement('a');
    remove.href = '#';
    remove.textContent = 'remove';
    remove.addEventListener('click', function(event) {
        tr.remove();
        event.preventDefault();
    });
    tdRemove.appendChild(remove);
    tr.appendChild(tdRemove);

    table.appendChild(tr);
}

button.addEventListener('click', function() {
    let tr = document.createElement('tr');
    
    for (let i = 1; i <= 3; i++) {
        let td = document.createElement('td');
        td.textContent = count++;
        tr.appendChild(td);
    }
    
    let tdRemove = document.createElement('td');
    let remove = document.createElement('a');
    remove.href = '#';
    remove.textContent = 'remove';
    remove.addEventListener('click', function(event) {
        tr.remove();
        event.preventDefault();
    });
    tdRemove.appendChild(remove);
    tr.appendChild(tdRemove);
    
    table.appendChild(tr);
}); */

// Редактирование отдельного элемента на JavaScript

/* Сейчас мы научимся редактировать тексты элементов с помощью полей ввода. Начнем с простых вещей и будем постепенно усложнять.

Итак, пусть у нас даны абзац и инпут, расположенные в одном родителе:

<div id="parent">
	<p id="elem">text</p>
	<input id="input">
</div>

Давайте сделаем так, чтобы по потери фокуса в инпуте его текст появлялся в абзаце:

let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.addEventListener('blur', function() {
    elem.textContent = this.value;
});

Давайте теперь сделаем так, чтобы по заходу на страницу в инпуте уже стоял текст абзаца. Таким образом мы с помощью инпута сможем редактировать текст, расположенный в абзаце.

let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.textContent; // записываем в инпут текст абзаца

input.value = elem.textContent; // записываем в инпут текст абзаца

input.addEventListener('blur', function() {
    elem.textContent = this.value;
}); */

/* let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.textContent;

input.addEventListener('input', function() {
    elem.textContent = input.value;
}); */

// Появление инпута

/* Давайте теперь сделаем так, чтобы инпута изначально не было на странице, а он появлялся по клику на абзац. To есть наш начальный HTML будет выглядеть так:

<div id="parent">
	<p id="elem">text</p>
</div>

Для начала просто реализуем появление инпута, без редактирования:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    let input = document.createElement('input');
    input.value = elem.textContent;

    elem.parentElement.appendChild(input);
});

А теперь давайте сделаем так, чтобы по потери фокуса в инпуте менялся текст абзаца:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    let input = document.createElement('input');
    input.value = elem.textContent;

    input.addEventListener('blur', function() {
        elem.textContent = this.value;
    });

    elem.parentElement.appendChild(input);
});

Наш код, однако, несовершенен, так как каждое нажатие на абзац будет приводить к появлению нового инпута.

Для решения проблемы просто будем по потери фокуса удалять текущий инпут:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    let input = document.createElement('input');

    input.value = elem.textContent;

    input.addEventListener('blur', function() {
        elem.textContent = this.value;
        this.remove(); // удаляем инпут
    });

    elem.parentElement.appendChild(input);
}); */

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    let input = document.createElement('input');

    input.value = elem.textContent;

    input.addEventListener('blur', function() {
        elem.textContent = this.value;
        this.remove();
    });

    elem.parentElement.appendChild(input);
}); */

// Прячем текст при редактировании элемента на JavaScript

/* Давайте теперь сделаем так, чтобы при редактировании инпут появлялся в самом абзаце - вместо текста этого абзаца. Пусть затем при окончании редактирования инпут будет убираться, а вместо него опять появляться текст абзаца.

Приступим к реализации.

Для начала давайте сделаем так, чтобы по клику на абзац ему в конец добавлялся инпут с текстом этого абзаца:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    let input = document.createElement('input');
    input.value = elem.textContent;

    elem.appendChild(input);
});

Наш код, однако, очень несовершенен - каждый раз по клику на абзац в него будет добавляться новый инпут.

При этом, если в первом инпуте будет стоять текст абзаца, то во втором инпуте уже будет стоять текст абзаца вместе с первым инпутом, а третьем инпуте уже будет стоять текст абзаца вместе с двумя инпутами и так далее.

Обратите также внимание на то, что клик по добавленному инпуту будет расцениваться как клик по абзацу: дело в том, что инпут находится в абзаце, и клик по инпуту просто всплывет выше к этому абзацу.

Это приведет к тому, что после появления первого инпута при попытке нажать на него для того, чтобы начать редактирование, мы автоматически сделаем клик по абзацу со всеми вытекающими последствиями.

Итак, проблема обрисована. Давайте теперь ее исправим.

Для этого просто при появлении инпута отвяжем от абзаца обработчик клика. В этом случае только первый клик по абзацу будет приводить к появлению инпута, а остальные клики, сделанные после появления инпута, будут проигнорированы.

Реализуем:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = elem.textContent;

    elem.appendChild(input);

    elem.removeEventListener('click', func); // отвяжем событие
});

Давайте теперь сделаем так, чтобы при появлении инпута, текст самого абзаца исчезал. Для этого перед вставкой инпута textContent абзаца присвоим пустой строке:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = elem.textContent; // сначала записываем текст абзаца в инпут
    elem.textContent = ""; // затем убираем текст абзаца

    elem.appendChild(input); // затем вставляем инпут

    elem.removeEventListener('click', func);
});

Давайте теперь сделаем так, чтобы при потери фокуса в инпуте текст этого инпута записывался в абзац:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = elem.textContent;
    elem.textContent = "";
    elem.appendChild(input);

    input.addEventListener('blur', function() {
        elem.textContent = this.value;
    });

    elem.removeEventListener('click', func);
});

Обратите внимание на то, что нам не нужно удалять инпут - он удаляет сам себя, когда записывает свой текст в абзац: так как инпут является частью текста абзаца, то запись какого-то текста в этот абзац просто удаляет наш инпут, и все.

У нас, однако, есть еще одна проблема: текст абзаца будет редактироваться лишь первый раз. После первого редактирования повторное нажатие на текст абзаца ни к чему не приведет.

Дело в том, что в момент появления инпута мы отвязали событие от абзаца по описанным выше причинам. Теперь нам необходимо в момент окончания редактирования привязать событие обратно.

Сделаем это:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    let input = document.createElement('input');
    input.value = elem.textContent;
    elem.textContent = "";

    elem.appendChild(input);

    input.addEventListener('blur', function() {
        elem.textContent = this.value;
        elem.addEventListener('click', func); // повесим событие обратно
    });

    elem.removeEventListener('click', func);
}); */

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
    let input = document.createElement('input');

    input.value = elem.textContent;
    elem.textContent = "";

    elem.appendChild(input);

    input.addEventListener('blur', function() {
        elem.textContent = this.value;
        elem.addEventListener('click', func);
    });

    elem.removeEventListener('click', func);
}); */

// Редактирование в группе элементов на JavaScript

/* Пусть теперь у нас есть не один абзац, а много:

<p>text1</p>
<p>text2</p>
<p>text3</p>

Давайте сделаем так, чтобы по клику на любой абзац в нем появлялся инпут для редактирование.

На самом деле такая задача для нас не представляет сложности, так как почти весь код был получен нами в предыдущем уроке.

Для решения нашей задачи просто запустим цикл по абзацам и в цикле используем код предыдущего урока (этот код даже не понадобится изменять):

let elems = document.querySelectorAll('p');

for (let elem of elems) {
    elem.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = elem.textContent;

        elem.textContent = '';
        elem.appendChild('input');

        input.addEventListener('blur', function() {
            elem.textContent = input.value;
            elem.addEventListener('click', func);
        });

        elem.removeEventListener('click', func);
    });
} */

/* let items = document.querySelector('ul');

for (let i = 1; i <= 3; i++) {
    let item = document.createElement('li');
    item.textContent = i;
    items.appendChild(item);
}

let elems = document.querySelectorAll('ul li');

for (let elem of elems) {
    elem.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = elem.textContent;
        elem.textContent = '';

        elem.appendChild(input);

        input.addEventListener('blur', function() {
            elem.textContent = input.value;
            elem.addEventListener('click', func);
        });

        elem.removeEventListener('click', func);
    });
}; */

/* let table = document.querySelector('table');
let count = 1;

for (let i = 1; i <= 3; i++) {
    let tr = document.createElement('tr');

    for (let j = 1; j <= 3; j++) {
        let td = document.createElement('td');
        td.textContent = count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

let elems = document.querySelectorAll('table td');

for (let elem of elems) {
    elem.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = elem.textContent;
        elem.textContent = '';

        elem.appendChild(input);

        input.addEventListener('blur', function() {
            elem.textContent = input.value;
            elem.addEventListener('click', func);
        })
        elem.removeEventListener('click', func);
    });
} */

// Одновременное редактирование и удаление элементов

/* Пусть у нас есть некоторый набор абзацев:

<div id="parent">
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>
</div>

Давайте для этих абзацев сделаем так, чтобы можно было редактировать текст каждого абзаца и при этом в конце каждого абзаца стояла ссылка на удаление.

При реализации описанной задачи нас ждет некоторая проблема.

Для того, чтобы понять суть проблемы, давайте посмотрим на HTML код, который получится, когда в конец каждого абзаца будут добавлены ссылки на удаление:

<div id="parent">
	<p>text1<a href="">remove</a></p>
	<p>text2<a href="">remove</a></p>
	<p>text3<a href="">remove</a></p>
</div>

Представим теперь, что по клику на любой абзац в нем будет появляться инпут для редактирования текста. В этом случае в инпут будет попадать весь текст абзаца - вместе со ссылкой на удаление!

Это, конечно же, не правильно.

Более удачным решение будет обернуть тексты абзацев в теги span, вот так:

<div id="parent">
	<p><span>text1</span><a href="">
		remove</a></p> 
	<p><span>text2</span><a href="">
		remove</a></p> 
	<p><span>text3</span><a href="">
		remove</a></p> 
</div>

Для такого кода можно просто навесить событие для редактирования не на сам абзац, а на span с текстом. В этом случае инпут для редактирования будет появляться в теге span, и наша ссылка для удаления останется нетронутой. */

/* let items = document.querySelectorAll('#parent p');

for (let item of items) {
    let link = document.createElement('a');

    link.href = '#';
    link.textContent = "remove";
    link.style.marginLeft = '10px';

    item.appendChild(link);

    link.addEventListener('click', function(event) {
        event.preventDefault();
        item.removeChild(item.firstChild);
    });
}

let spans = document.querySelectorAll('#parent p span');

for (let span of spans) {
    span.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = this.textContent;

        this.textContent = '';
        this.appendChild(input);

        input.addEventListener('blur', function() {
            span.textContent = input.value;
            span.addEventListener('click', func);
        });

        this.removeEventListener('click', func);

    });
} */

/* let items = document.querySelectorAll('#parent p');

for (let item of items) {

    let span = document.createElement('span');

    span.textContent = item.textContent;
    item.textContent = '';

    item.appendChild(span);

    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'remove';
    link.style.marginLeft = '10px';

    link.addEventListener('click', function(event) {
        event.preventDefault();
        item.removeChild(item.firstChild);
    });

    item.appendChild(link);
}

let spans = document.querySelectorAll('#parent p span');

for (let span of spans) {

    span.addEventListener('click', function func() {
        let input = document.createElement('input');

        this.textContent = '';
        this.appendChild(input);

        input.addEventListener('blur', function() {
            span.textContent = input.value;
            span.addEventListener('click', func);
        })

        this.removeEventListener('click', func);
    });
} */

// Стилизация элементов на JavaScript

/* Пусть у нас есть несколько абзацев:

<p>text1</p>
<p>text2</p>
<p>text3</p>

Давайте переберем эти абзацы циклом и в конец каждого абзаца добавим ссылку, по нажатию на которую тексту абзаца будет добавляться некоторая стилизация. К примеру, текст абзаца будет становится перечеркнутым (это делает CSS свойство text-decoration).

Давайте обсудим два нюанса такой задачи.

Во-первых, как уже обсуждалось в предыдущих уроках, не следует менять стили абзацы напрямую через JavaScript - гораздо удобнее будет навешивать какие-нибудь CSS классы.

Во-вторых, при реализации такой задачи вас ожидает некоторый сюрприз. Чтобы понять его суть, давайте посмотрим на HTML код абзацев после добавления ссылок:

<p>text1<a href="">link</a></p>
<p>text2<a href="">link</a></p>
<p>text3<a href="">link</a></p>

Представим теперь, что по нажатию на ссылку текст абзаца перечеркнется. Однако, ссылка в данном случае также является частью абзаца и тоже перечеркнется! Скорее всего такой эффект нам не нужен. Мы хотим, чтобы текст перечеркивался, но ссылка - нет.

Для решения проблемы нужно просто обернуть текст абзаца в тег span, вот так:

<p><span>text1</span><a href="">
	link</a></p> 
<p><span>text2</span><a href="">
	link</a></p> 
<p><span>text3</span><a href="">
	link</a></p> */

/* let items = document.querySelectorAll('p');

for (let item of items) {
    let span = document.createElement('span');
    span.textContent = item.textContent;
    item.textContent  = '';
    item.appendChild(span);

    let link = document.createElement('a');
    link.textContent = 'remove';
    link.href = '#';
    link.style.marginLeft = '10px';
    item.appendChild(link);

    link.addEventListener('click', function(event) {
        event.preventDefault();
        span.style.textDecoration = 'line-through';
    });
} */

/* let items = document.querySelectorAll('p');

for (let item of items) {
    let span = document.createElement('span');
    span.textContent = item.textContent;
    item.textContent  = '';
    item.appendChild(span);

    let link = document.createElement('a');
    link.textContent = 'remove';
    link.href = '#';
    link.style.marginLeft = '10px';
    item.appendChild(link);

    link.addEventListener('click', function (event) {
        event.preventDefault();
        span.style.textDecoration = 'line-through';
        link.remove();
    });
} */

/* let table = document.querySelector('#table');let counter = 1;

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        let td = document.createElement('td');
        td.textContent = counter++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

let rows = document.querySelectorAll('#table tr');

for (let row of rows) {
    let td = document.createElement('td');
    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'paint';
    link.style.marginLeft = '7px';

    td.appendChild(link);
    row.appendChild(td);

    link.addEventListener('click', function(event) {
        event.preventDefault();

        row.style.background = 'green';
    });
} */

/* let table = document.querySelector('#table');
let counter = 1;

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) {  // ← лучше использовать j
        let td = document.createElement('td');
        td.textContent = counter++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

let rows = document.querySelectorAll('#table tr');

for (let row of rows) {
    let td = document.createElement('td');
    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'paint';
    link.style.marginLeft = '7px';

    td.appendChild(link);
    row.appendChild(td);

    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (row.style.backgroundColor === 'green') {
            row.style.backgroundColor = '';
        } else {
            row.style.backgroundColor = 'green';
        }
    });
} */

// Кнопки для скрытия и показа элемента на JavaScript

/* В данном разделе мы научимся скрывать и показывать элементы страницы. Как обычно, начнем с чего-то простого, и будем постепенно усложнять.

Пусть для разминки у нас есть абзац и две кнопки:

<p id="elem">text</p>
<input type="submit" id="show" 
	value="show"> 
<input type="submit" id="hide" 
	value="hide"> 

Получим ссылки на наши элементы в переменные:

let elem = document.querySelector('#elem');
let show = document.querySelector('#show');
let hide = document.querySelector('#hide');

Давайте теперь сделаем так, чтобы по клику на одну кнопку наш абзац скрывался, а на другую - показывался. Будем для этого давать или убирать элементу соответствующий CSS класс:

.hidden {
    display: none;
}

Решим нашу задачу:

hide.addEventListener('click', function() {
	elem.classList.add('hidden');
});

show.addEventListener('click', function() {
    elem.classList.remove('hidden');
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
    if (elem.classList.contains('hidden') === true) {
        elem.classList.remove('hidden');
    } else {
        elem.classList.add('hidden');
    };
}); */

// Много элементов с кнопками показа на JavaScript

/* Пусть теперь у нас есть много абзацев и у каждого своя кнопка для сокрытия:

<p>1</p><button>toggle</button>
<p>2</p><button>toggle</button>
<p>3</p><button>toggle</button>

Сделаем так, чтобы по клику на кнопку скрывался или показывался соответствующий ей абзац.

Для этого нам каким-то образом нужно связать кнопки с нашими абзацами. Для этого существует несколько способов. */

//Первый способ

/* Свяжем кнопки и абзацы следующим образом:

<p id="elem1">1</p><button data-elem="elem1">
	toggle</button> 
<p id="elem2">2</p><button data-elem="elem2">
	toggle</button> 
<p id="elem3">3</p><button data-elem="elem3">
	toggle</button> 

Теперь по клику на любую кнопку мы будем читать содержимое ее атрибута data-elem и искать абзац с таким id. Его и будем тоглить. Реализуем описанное:

let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let elem = document.querySelector('#' + this.dataset.elem);
        elem.classList.toggle('hidden');
    });
} */

/* let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let elem = document.querySelector('#' + this.dataset.elem);
        elem.classList.toggle('hidden');
    });
} */

// Второй способ

/* Расставлять id и data-атрибуты не очень удобно. Давайте сделаем так, чтобы связь была по порядковому номеру: пусть первая кнопка скрывает первый абзац, вторая кнопка - второй и так далее.

Реализуем описанное:

let buttons = document.querySelectorAll('button');
let elems = document.querySelectorAll('p');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        elems[i].classList.toggle('hidden');
    });
} */

/* let buttons = document.querySelectorAll('button');
let elems = document.querySelectorAll('p');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        elems[i].classList.toggle('hidden');
    });
} */

//Третий способ

/* Как можно увидеть, абзац, связанный с кнопкой, является ее соседом слева. Можно это использовать в качестве связи:

let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        this.previousElementSibling.classList.toggle('hidden');
    });
} */

/* let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        this.previousElementSibling.classList.toggle('hidden');
    });
} */

// Активация элементов на JavaScript

/* Пусть у нас есть некоторая HTML таблица #table с пустыми ячейками.

Давайте сделаем так, чтобы по нажатию на любую ячейку она каким-то образом активировалась, например, становилась красного фона. Для этого активированным ячейкам будем давать какой-нибудь CSS класс:

.active {
	background: red;
}

Реализуем активацию:

let tds = document.querySelectorAll('#table td');

for (let td of tds) {
    td.addEventListener('click', function() {
        this.classList.add('active');
    });
} */

/* let table = document.querySelector('#table');
let counter = 1;

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        let td = document.createElement('td');
        td.textContent = counter++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

let tds = document.querySelectorAll('#table td');

for (let td of tds) {
    td.addEventListener('click', function() {
        this.classList.add('active');
    })
} */

/* let table = document.querySelector('#table');
let counter = 1;

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        let td = document.createElement('td');
        td.textContent = counter++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

let tds = document.querySelectorAll('#table td');

for (let td of tds) {
    td.addEventListener('click', function() {
        this.classList.toggle('active');
    })
} */

// Чередование стилей активации на JavaScript

/* В предыдущем уроке мы научились активировать ячейки по клику на них. Давайте теперь сделаем так, чтобы происходило чередование цветов: пусть первая ячейка красится в красный, вторая - в зеленый, третья - опять в красный и так далее.

Для решения этой задачи нам понадобится уже два CSS класса:

.color1 {
	background: red;
}
.color2 {
	background: green;
}

Реализуем описанное чередование:

let tds = document.querySelector('#table td');

let color = 'color1';
for (let td of tds) {
    td.addEventListener('click', function() {
        if (color == 'colar1') {
            color = 'color1';
        } else {
            color = 'color1';
        }

        this.classList.add(color);
    })
} */

/* let table = document.querySelector('#table');
let counter = 1;

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        let td = document.createElement('td');
        td.textContent = counter++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

let tds = document.querySelectorAll('#table td');

let color = 'color1'

for (let td of tds) {
    td.addEventListener('click', function() {
        if (color == 'color1') {
            color = 'color2';
        } else {
            color = 'color1';
        }
        this.classList.add(color);
    })
} */

// Чередование многих цветов из массива

/* Пусть теперь мы хотим чередовать не два цвета, а произвольное количество. Давайте для этого будем хранить массив CSS классов:

let colors = ['color1', 'color2', 'color3']; 

Напишем цвета наших классов:

.color1 {
	background: red;
}
.color2 {
	background: green;
}
.color3 {
	background: yellow;
}

А теперь реализуем чередование:

let tds = document.querySelectorAll('#table td');

let i = 0;
let colors = ['color1', 'color2', 'color3']; 

for (let td of tds) {
    td.addEventListener('click', function() {
        this.classList.add(colors[i]);

        i++;
        if (i == colors.length) {
            i = 0;
        }
    });
} */

/* let table = document.querySelector('#table');
let counter = 1;

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        let td = document.createElement('td');
        td.textContent = counter++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

let tds = document.querySelectorAll('#table td'); // получаем все ячейки таблицы

let i = 0; // создаем счетчик
let colors = ['color1', 'color2', 'color3']; // создаем массив из палитры цветов 

for (let td of tds) {
    td.addEventListener('click', function() {
        this.classList.add(colors[i]); // применяем текущий цвет из массива

        i++;
        if (i == colors.length) { 
            i = 0;
        } // если дошли до конца массива, сбрасываем счетчик до 0
    });
} */

// Практика на изменение элементов на JavaScript

/* let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

let parent = document.querySelector('ul');

for (let i = 0; i < arr.length; i++) {
    let item = document.createElement('li');
    item.textContent = arr[i];
    parent.appendChild(item);
} */

/* let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

let parent = document.querySelector('ul');

for (let i = 0; i < arr.length; i++) {
    let item = document.createElement('li');
    item.textContent = arr[i];
    parent.appendChild(item);

    item.addEventListener('click', function func() {
        let input = document.createElement('input');

        input.value = this.textContent;
        this.textContent = '';
        this.appendChild(input);

        input.addEventListener('blur', function() {
            item.textContent = input.value;
            item.addEventListener('click', func);
        })

        this.removeEventListener('click', func);
    }); 
} */

/* let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let parent = document.querySelector('ul');

function enableEdit(item) {
    item.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = item.textContent;
        item.textContent = '';

        item.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            item.textContent = input.value;
            item.addEventListener('click', func);
        });

        this.removeEventListener('click', func);
    });
}

for (let i = 0; i < arr.length; i++) {
    let item = document.createElement('li');
    item.textContent = arr[i];
    parent.appendChild(item);
    enableEdit(item);
}

let addInput = document.createElement('input');
addInput.placeholder = 'Введите текст и нажмите Enter...';
parent.parentElement.appendChild(addInput);

addInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && this.value.trim() !== '') {
        let li = document.createElement('li');
        li.textContent = this.value.trim();
        parent.appendChild(li);
        enableEdit(li);
        this.value = '';
    }
}); */

/* let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let parent = document.querySelector('ul');

function enableEdit(item) {
    item.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = item.textContent;
        item.textContent = '';

        item.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            item.textContent = input.value;
            item.addEventListener('click', func);
        });

        this.removeEventListener('click', func);
    });
}

function enableRemove(item) {
    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'remove';
    link.style.marginLeft = '10px';

    link.addEventListener('click', function(event) {
        event.preventDefault();
        this.parentElement.remove();
    });
    item.appendChild(link);
}

for (let i = 0; i < arr.length; i++) {
    let item = document.createElement('li');
    item.textContent = arr[i];
    parent.appendChild(item);
    enableEdit(item);
    enableRemove(item);
}

let addInput = document.createElement('input');
addInput.placeholder = 'Введите текст и нажмите Enter...';
parent.parentElement.appendChild(addInput);

addInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && this.value.trim() !== '') {
        let li = document.createElement('li');
        li.textContent = this.value.trim();
        parent.appendChild(li);
        enableEdit(li);
        enableRemove(li);
        this.value = '';
    }
}); */

/* let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let parent = document.querySelector('ul');

function enableEdit(item) {
    item.addEventListener('click', function func() {
        let span = item.querySelector('span');
        let input = document.createElement('input');
        input.value = span.textContent;
        span.textContent = '';
        span.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            span.textContent = input.value; 
            span.addEventListener('click', func);
        });

        this.removeEventListener('click', func);
    });
}

function enableRemove(item) {
    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'remove';
    link.style.marginLeft = '10px';

    link.addEventListener('click', function(event) {
        event.preventDefault();
        this.parentElement.remove();
    });
    item.appendChild(link);
}

function enableCross(item) {
    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'cross';
    link.style.marginLeft = '10px';

    link.addEventListener('click', function(event) {
        event.preventDefault();
        item.querySelector('span').style.textDecoration = 'line-through';
    });
    item.appendChild(link);
}

for (let i = 0; i < arr.length; i++) {
    let item = document.createElement('li');
    let span = document.createElement('span'); 
    span.textContent = arr[i];
    item.appendChild(span);
    parent.appendChild(item);
    
    enableEdit(item);
    enableRemove(item);
    enableCross(item);
}

let addInput = document.createElement('input');
addInput.placeholder = 'Введите текст и нажмите Enter...';
parent.parentElement.appendChild(addInput);

addInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && this.value.trim() !== '') {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = this.value.trim();
        li.appendChild(span);
        parent.appendChild(li);
        
        enableEdit(li);
        enableRemove(li);
        enableCross(li);
        this.value = '';
    }
}); */

/* let employees = [
	{name: 'employee1', age: 30, salary: 
		400}, 
	{name: 'employee2', age: 31, salary: 
		500}, 
	{name: 'employee3', age: 32, salary: 
		600}, 
];

let table = document.querySelector('#table');

for (let employee of employees) {
    let tr = document.createElement('tr');

    let keys = ['name', 'age', 'salary'];

    for (let key of keys) {
        let td = document.createElement('td');
        td.textContent = employee[key];
        tr.appendChild(td);
    }

    table.appendChild(tr);
} */

/* let employees = [
    {name: 'employee1', age: 30, salary: 400}, 
    {name: 'employee2', age: 31, salary: 500}, 
    {name: 'employee3', age: 32, salary: 600}, 
];

let table = document.querySelector('#table');

for (let employee of employees) {
    let tr = document.createElement('tr');

    let keys = ['name', 'age', 'salary'];

    for (let key of keys) {
        let td = document.createElement('td');
        td.textContent = employee[key];

        td.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = td.textContent;
            
            td.textContent = '';
            td.appendChild(input);
            input.focus();

            input.addEventListener('blur', function() {
                td.textContent = input.value;
                td.addEventListener('click', func);
            });

            td.removeEventListener('click', func);
        });
        
        tr.appendChild(td);
    }
    
    table.appendChild(tr);
} */

/* let employees = [
    {name: 'employee1', age: 30, salary: 400}, 
    {name: 'employee2', age: 31, salary: 500}, 
    {name: 'employee3', age: 32, salary: 600}, 
];

let table = document.querySelector('#table');

for (let employee of employees) {
    let tr = document.createElement('tr');

    let keys = ['name', 'age', 'salary'];

    for (let key of keys) {
        let td = document.createElement('td');
        td.textContent = employee[key];

        td.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = td.textContent;
            
            td.textContent = '';
            td.appendChild(input);
            input.focus();

            input.addEventListener('blur', function() {
                td.textContent = input.value;
                td.addEventListener('click', func);
            });

            td.removeEventListener('click', func);
        });
        
        tr.appendChild(td);
    }
    
    table.appendChild(tr);
}

let rows = document.querySelectorAll('#table tr');

for (let row of rows) {
    let td = document.createElement('td');

    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'remove';
    
    td.appendChild(link);

    link.addEventListener('click', function(event) {
        event.preventDefault();
        this.parentElement.parentElement.remove();
    });
    row.appendChild(td);
} */

/* let employees = [
    {name: 'employee1', age: 30, salary: 400}, 
    {name: 'employee2', age: 31, salary: 500}, 
    {name: 'employee3', age: 32, salary: 600}, 
];

let table = document.querySelector('#table');
let button = document.querySelector('button');
let inputs = document.querySelectorAll('input');

function enableEdit(td) {
    td.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = td.textContent;
        td.textContent = '';
        td.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            td.textContent = input.value;
            td.addEventListener('click', func);
        });

        td.removeEventListener('click', func);
    });
}

function enableRemove(tr) {
    let td = document.createElement('td');
    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'remove';
    link.style.marginLeft = '10px';

    link.addEventListener('click', function(event) {
        event.preventDefault();
        tr.remove();
    });

    td.appendChild(link);
    tr.appendChild(td);
}

for (let employee of employees) {
    let tr = document.createElement('tr');
    let keys = ['name', 'age', 'salary'];

    for (let key of keys) {
        let td = document.createElement('td');
        td.textContent = employee[key];
        tr.appendChild(td);
        enableEdit(td);
    }
    
    enableRemove(tr);
    table.appendChild(tr);
}

button.addEventListener('click', function() {
    let tr = document.createElement('tr');

    for (let input of inputs) {
        let td = document.createElement('td');
        td.textContent = input.value.trim();
        tr.appendChild(td);
        enableEdit(td);
    }

    enableRemove(tr);
    table.appendChild(tr);

    inputs.forEach(inp => inp.value = '');
}); */

/* let workersList = document.querySelector('#workers-list');

let employees = [
	{name: 'employee1', age: 30, salary: 
		400}, 
	{name: 'employee2', age: 31, salary: 
		500}, 
	{name: 'employee3', age: 32, salary: 
		600}, 
];

for (let employee of employees) {
        let li = document.createElement('li');li.textContent = employee.name + ' | ' + employee.age + ' | ' + employee.salary;
        workersList.appendChild(li);
    } */

/* let workersList = document.querySelector('#workers-list');

let employees = [
	{name: 'employee1', age: 30, salary: 
		400}, 
	{name: 'employee2', age: 31, salary: 
		500}, 
	{name: 'employee3', age: 32, salary: 
		600}, 
];

for (let employee of employees) {
    let li = document.createElement('li');

    for (let key of Object.keys(employee)) {
        let span = document.createElement('span');
        span.textContent = employee[key];
        span.style.marginRight = '5px';
        li.appendChild(span);
        
    }
    workersList.appendChild(li);
    
}

let spans = document.querySelectorAll('#workers-list li span');

function enableEdit() {
    let spans = document.querySelectorAll('#workers-list li span');
    
    for (let span of spans) {
        span.addEventListener('click', function() {
            if (this.querySelector('input')) return;

            let input = document.createElement('input');
            input.value = this.textContent;
            this.textContent = '';
            this.appendChild(input);
            input.focus();

            input.addEventListener('blur', function() {
                this.parentElement.textContent = input.value;
            });
        });
    }
}

enableEdit(); 

function enableRemove() {
    let items = document.querySelectorAll('#workers-list li');
    
    for (let item of items) {
        let link = document.createElement('a');
        link.href = '#';
        link.textContent = 'remove';
        link.style.marginLeft = '10px';

        link.addEventListener('click', function(event) {
            event.preventDefault();
            this.parentElement.remove(); 
        });

        item.appendChild(link);
    }
}

enableRemove(); */

/* let workersList = document.querySelector('#workers-list');
let button = document.querySelector('button');
let inputs = document.querySelectorAll('#name, #age, #salary');

let employees = [
    {name: 'employee1', age: 30, salary: 400}, 
    {name: 'employee2', age: 31, salary: 500}, 
    {name: 'employee3', age: 32, salary: 600}, 
];

function enableEdit(spans) {
    for (let span of spans) {
        span.addEventListener('click', function() {
            if (this.querySelector('input')) return;

            let input = document.createElement('input');
            input.value = this.textContent;
            this.textContent = '';
            this.appendChild(input);
            input.focus();

            input.addEventListener('blur', function() {
                this.parentElement.textContent = input.value;
            });
        });
    }
}

function enableRemove(li) {
    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'remove';
    link.style.marginLeft = '10px';
    link.style.cursor = 'pointer';
    link.style.color = 'red';

    link.addEventListener('click', function(event) {
        event.preventDefault();
        this.parentElement.remove();
    });

    li.appendChild(link);
}

for (let employee of employees) {
    let li = document.createElement('li');
    let newSpans = [];

    for (let key of Object.keys(employee)) {
        let span = document.createElement('span');
        span.textContent = employee[key];
        span.style.marginRight = '5px';
        li.appendChild(span);
        newSpans.push(span);
    }

    workersList.appendChild(li);
    enableEdit(newSpans);
    enableRemove(li);
}

button.addEventListener('click', function() {
    for (let input of inputs) {
        if (input.value.trim() === '') return;
    }

    let li = document.createElement('li');
    let newSpans = [];

    for (let input of inputs) {
        let span = document.createElement('span');
        span.textContent = input.value.trim();
        span.style.marginRight = '5px';
        li.appendChild(span);
        newSpans.push(span);
    }

    workersList.appendChild(li);
    enableEdit(newSpans);
    enableRemove(li);
    
    inputs.forEach(inp => inp.value = '');
}); */