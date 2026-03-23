// Основы работы с объектом Event в JavaScript

/* В данном уроке мы изучим основы работы с объектом Event. Данный объект содержит в себе информацию о произошедшем событии. К примеру, если по элементу был сделан клик, мы можем узнать координаты этого клика, была ли нажата клавиша Ctrl, Alt или Shift в момент клика и так далее.

Давайте посмотрим, как получить объект Event. Пусть у нас есть кнопка:

<button id="elem">text</button>

Пусть по клику на эту кнопку выполняется некоторая функция:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {

});

Внутри привязанной функции уже есть объект Event - мы просто пока еще не знаем, как его получить. Получается он следующем образом: нужно при объявлении нашей функции передать в нее параметром любую переменную (как правило, event - но название может быть любым) и в эту переменную браузер автоматически положит объект Event:

elem.addEventListener('click', function(event) {
	console.log(event); // увидим объект с событием 
}); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("click", function(event) {
    console.log(event);
}); */

// Координаты события в JavaScript

// Свойство event.clientX

/* Свойство event.clientX содержит в себе координаты курсора мыши по оси X. Для определения координат есть также свойства event.clientY, event.pageX, event.pageY. Давайте посмотрим разницу между clientX/clientY и pageX/pageY.

Как работают clientX и clientY: если у вас есть окно 1000 на 1000 пикселей, и мышь находится в центре, то clientX и clientY будут оба равны 500. Если вы затем прокрутите страницу по горизонтали или вертикали, не двигая курсор, то значения clientX и clientY не изменятся, так как отсчитываются относительно окна, а не документа.

Как работают pageX и pageY: если у вас есть окно 1000 на 1000 пикселей, и курсор находится в центре, то pageX и pageY будут равны 500. Если вы затем прокрутите страницу на 250 пикселей вниз, то pageY станет равным 750. Таким образом pageX и pageY содержат координаты события с учетом прокрутки.

Синтаксис

event.clientX;

Пример

При движении мыши по странице будем выводить ее координаты относительно окна браузера (clientX и clientY):

<div id="elem">0 : 0</div>

let elem = document.getElementById("elem");

document.addEventListener("mousemove", function(event) {
    elem.innerHTML = event.clientX + " : " + event.clientY;
}); */

// Свойство event.clientY

/* Свойство event.clientY содержит в себе координаты курсора мыши по оси Y. Для определения координат есть также свойства event.clientX, event.pageX, event.pageY. Давайте посмотрим разницу между clientX/clientY и pageX/pageY.

Как работают clientX и clientY: если у вас есть окно 1000 на 1000 пикселей, и мышь находится в центре, то clientX и clientY будут оба равны 500. Если вы затем прокрутите страницу по горизонтали или вертикали, не двигая курсор, то значения clientX и clientY не изменятся, так как отсчитываются относительно окна, а не документа.

Как работают pageX и pageY: если у вас есть окно 1000 на 1000 пикселей, и курсор находится в центре, то pageX и pageY будут равны 500. Если вы затем прокрутите страницу на 250 пикселей вниз, то pageY станет равным 750. Таким образом pageX и pageY содержат координаты события с учетом прокрутки.

Синтаксис

event.clientY;

Пример

При движении мыши по странице будем выводить ее координаты относительно окна браузера (clientX и clientY):

<div id="elem">0 : 0</div>

let elem = document.getElementById("elem");

document.addEventListener("mousemove", function(event) {
    elem.innerHTML = event.clientX + " : " + event.clientY;
}); */

// Свойство event.pageX

/* Свойство event.pageX содержит в себе координаты курсора мыши по оси X. Для определения координат есть также свойства event.clientX, event.clientY, event.pageY. Давайте посмотрим разницу между clientX/clientY и pageX/pageY.

Как работают clientX и clientY: если у вас есть окно 1000 на 1000 пикселей, и мышь находится в центре, то clientX и clientY будут оба равны 500. Если вы затем прокрутите страницу по горизонтали или вертикали, не двигая курсор, то значения clientX и clientY не изменятся, так как отсчитываются относительно окна, а не документа.

Как работают pageX и pageY: если у вас есть окно 1000 на 1000 пикселей, и курсор находится в центре, то pageX и pageY будут равны 500. Если вы затем прокрутите страницу на 250 пикселей вниз, то pageY станет равным 750. Таким образом pageX и pageY содержат координаты события с учетом прокрутки.

Синтаксис

event.pageX;

Пример

При движении мыши по странице будем выводить ее координаты относительно окна браузера (pageX и pageY):

<div id="elem">0 : 0</div>

let elem = document.getElementById("elem");

document.addEventListener("mousemove", function(event) {
    elem.innerHTML = event.pageX + " : " + event.pageY;
}); */

/* let elem = document.getElementById("elem");

document.addEventListener("mousemove", function(event) {
    elem.innerHTML = event.clientX + " : " + event.clientY;
}); */

// Тип события в объекте Event в JavaScript

/* Объект Event также содержит в себе тип произошедшего события. Под типом понимается название click, mouseover и так далее. Тип события содержит свойство type:

Element.addEventListener("click", function(event) {
    console.log(event.type) // выведет "сlick"
}); */

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
	if (event.type === "click") {
        elem.style.color = "green";
    } else if (event.type === "dblclick") {
        elem.style.color = "red";
    }
} */

// Элемент события в объекте Event в JavaScript

/* Объект Event также позволяет получить элемент, в котором произошло событие. Этот элемент содержится в свойстве target. Зачем это нужно, если этот элемент содержится в this?

Дело в том, что на самом деле this всегда содержит элемент, к которому было привязано событие, а свойство target - элемент, по которому реально был клик. Этот реальный элемент может совпадать с this, а может не совпадать.

Давайте посмотрим на примере. Пусть у нас есть div, а внутри него абзац:

<div id="elem">
	<p>text</p>
</div>

Привяжем событие к диву, но кликнем по абзацу. Очевидно, что клик по абзацу представляет собой одновременно и клик по диву, так как абзац содержится в нашем диве.

В описанном случае получится, что свойство target будет содержать конечный тег, в котором случилось событие - то есть абзац, а не див. Убедимся в этом:

let elem = document.querySelector('#elem');

elem.addEventListener("click", function(event) {
    console.log(event.target); // выведет наш абзац
    console.log(this); // выведет наш див
}); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        this.textContent += "!";
    } else if (event.target === this) {
        console.log("Клик был по тегу ul");
    }
}); */

// Получение нажатых клавиш в JavaScript

/* С помощью объекта Event можно получать нажатые клавиши. Давайте посмотрим, как это делается. Пусть у нас есть инпут:

<input>

Получим ссылку на него в переменную:

let elem = document.querySelector('input');

Навесим на наш инпут событие, срабатывающее по каждому нажатию клавиши:

elem.addEventListener("keypress", function(event) {

})

В свойстве key объекта с событием будет лежать нажатый символ:

elem.addEventListener("keypress", function(event) {
    console.log(event.key);
});

А в свойстве code будет лежать код нажатой клавиши:

elem.addEventListener("keypress", function(event) {
    console.assert.log(event.code);
}); */

/* let elem = document.querySelector("input");

elem.addEventListener("keypress", function(event) {
    console.log(event.key);
    console.log(event.code);
}); */

/* let elem = document.querySelector("input");

elem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        console.log("Нажата клавиша Enter!");
    }
}); */

/* let elem = document.querySelector("input");

elem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        console.log(event.keyCode);
    }
}); */

/* let elem = document.querySelector("input");

elem.addEventListener("keypress", function(event) {
    if (event.key === "Backspace") {
        console.log(event.keyCode);
    }
}); */

/* let inp = document.querySelector("input");
let paragraph = document.querySelector("p");

inp.addEventListener("keypress", function(event) {
    let text = inp.value;
    if (event.key === "Enter") {
        paragraph.textContent += text;
        inp.value = ""; 
    }
}); */

// Отслеживание клавиш-модификаторов в JavaScript

/* С помощью объекта Event можно узнать, были ли нажаты в момент события клавиши Ctrl, Alt и Shift. Это делается с помощью свойств ctrlKey, altKey и shiftKey - они имеют значение true или false в зависимости от того, была ли нажата эта клавиша в момент события или нет.

Давайте посмотрим на примере. Пусть у нас дана следующая кнопка:

<button id="elem">text</button>

По клику на кнопку будем выводить сообщение о том, была ли нажата одна из клавиш Ctrl, Alt и Shift:

let elem = document.querySelector("#elem");

elem.addEventListener("click", function(event) {
    if (event.ctrlKey) {
        console.log("нажат Ctrl");
    }

    if (event.altKey) {
        console.log("нажат Alt");
    }

    if (event.shiftKey) {
        console.log("нажат Shift");
    }
}); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("click", function(event) {
    if (event.altKey) {
        elem.style.color = "red";
    }
}); */

/* let elem = document.querySelector("#elem");

elem.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        if (event.ctrlKey) {
            event.target.textContent += "1";
        } else if (event.shiftKey) {
            event.target.textContent += "2";
        }
    }
}); */

// Отмена действия по умолчанию в JavaScript

/* Иногда с помощью JavaScript требуется отменить действие тега по умолчанию. К примеру, по нажатию на ссылку отменить переход по этой ссылке. Как правило такое требуется в том случае, если эту ссылку мы используем просто для запуска какого-либо кода. В этом случае то, что при клике на ссылку произойдет переход по ней, нам совсем не нужно.

Отмена действия по умолчанию производится с помощью объекта Event. Для этого у него есть специальный метод preventDefault(), который следует вызвать в любом месте обработчика события.

Попробуем на практике. Пусть у нас есть вот такая ссылка:

<a href="/" id="elem">ссылка</a>

Давайте сделаем так, чтобы по клику на ссылку не происходило перехода на другую страницу:

let elem = document.querySelector("#elem");

elem.addEventListener("ckick", function(event) {
    event.preventDefault();
    console.log("Вы не можете перейти по этой ссылке!");
}); */

/* let links = document.querySelectorAll("#link");

for (let link of links) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        this.textContent += this.href;
    });
} */

/* let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let paragraph = document.querySelector("p");
let link = document.querySelector("#link");

link.addEventListener("click", function(event) {
    event.preventDefault();
    paragraph.textContent = Number(inp1.value) + Number(inp2.value);
}); */

// Всплытие событий в JavaScript

/* Представьте себе, что у вас есть несколько вложенных друг в друга блоков:

<div id="elem1">
	<div id="elem2">
		<div id="elem3"></div>
	</div>
</div>

Получим ссылки на наши дивы в переменные:

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

А теперь навесим на них обработчики кликов:

elem1.addEventListener('click', function() {
	alert('зеленый');
});
elem2.addEventListener('click', function() {
	alert('голубой');
});
elem3.addEventListener('click', function() {
	alert('красный');
});

Выведем наши блоки на экран, добавив им некоторый CSS:

Нажмите теперь на самый внутренний красный блок - и вы увидите, как событие сначала сработает в красном блоке, потом в голубом, потом в зеленом. И это логично, ведь кликая на внутренний блок, вы одновременно кликаете на все внешние.

To есть получается, что когда вы кликаете на самый внутренний блок, событие клика возникает сначала в нем, затем срабатывает в его родителе, в родителе его родителя и так далее, пока не дойдет до самого верха.

Такое поведение называется всплытием (bubbling) событий - по аналогии со всплытием пузырька воздуха со дна. Так же, как и пузырек, наше событие как будто выплывает наверх, каждый раз срабатывая на более высоких блоках. */

/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('click', function() {
	alert('фиолетовый');
});

elem2.addEventListener('click', function() {
	alert('сиреневый');
});

elem3.addEventListener('click', function() {
	alert('розовый');
}); */

// Получение целевого элемента при всплытии событий

/* Пусть у нас есть два элемента: div и абзац p, лежащий внутри этого дива:

<div>
	<p></p>
</div>

Получим ссылку на наш див в переменную:

let div = document.querySelector('div');

Добавим нашим тегам некоторые стили:

div {
	padding: 20px;
	border: 1px solid red;
}

p {
	width: 200px;
	height: 200px;
	border: 1px solid green;
}

Пусть теперь на див навешен обработчик клика:

div.addEventListener('click', function() {
	console.log('click');
});

Из-за того, что наш див имеет padding, то, когда мы кликаем на див, мы можем попасть по абзацу, а можем попасть в место, где этого абзаца нет, то есть непосредственно по диву.

При этом в обработчике клика this всегда будет указывать на тот элемент, на который навешан обработчик. В нашем случае это наш див:

div.addEventListener('click', function() {
	console.log(this); // див
});

Однако, мы можем получить именно тот тег, в котором случилось событие. Для этого мы можем посмотреть, что лежит в event.target:

div.addEventListener('click', function(event) {
	console.log(event.target); // или див, или абзац 
});

Можно различить эти два варианта с помощью условий:

let div = document.querySelector("div");

div.addEventListener("click", function(event) {
    if (event.target.tagName === "DIV") {
        console.log("клик именно по этому диву");
    }
    if (event.target.tagName === "p") {
        console.log("клик по абзацу");
    }
});

Можно вместо tagName использовать matches:

let div = document.querySelector("div");

div.addEventListener("click", function(event) {
    if (event.target.matches("div")) {
        console.log("клик именно по диву");
    }
    if(event.target.matches("p")) {
        console.log("клик именно по абзацу");
    }
}); */

/* let div = document.querySelector("div");

div.addEventListener("click", function(event) {
    if (event.target.tagName === "DIV") {
        console.log("был совершен клик по диву");
    }
    if (event.target.tagName === "UL") {
        console.log("был совершен клик по списку")
    }
    if (event.target.tagName === "LI") {
        console.log("был совершен клик по пункту из списка");
    }
}); */

/* let div = document.querySelector("div");

div.addEventListener("click", function(event) {
    if (event.target.tagName === "DIV") {
        console.log("был совершен клик по диву");
    }
    if (event.target.tagName === "UL") {
        console.log("был совершен клик по списку");
    }
    if (event.target.tagName === "LI") {
        event.target.textContent += "!";
    }
}); */

// Прекращение всплытия событий в JavaScript

/* Всплытие события можно остановить на любой элемент, через который всплывает событие. Для этого в коде элемента следует вызвать метод stopPropagation объекта Event.

В следующем примере клик по красному блоку сработает на нем самом, затем на голубом блоке и все - голубой блок прекращает дальнейшее всплытие и зеленый блок уже никак не отреагирует:

elem1.addEventListener("click", function() {
    console.log("зеленый");
});

elem2.addEventListener("click", function(event) {
    console.log("голубой");
    event.stopPropagation(); // остановим всплытие
});

elem3.addEventListener("click", function() {
    console.log("красный");
}); */

// Несколько обработчиков на элементе в JavaScript

/* Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены. To есть, stopPropagation препятствует продвижению события дальше, но на текущем элементе все обработчики отработают. Смотрите пример:

elem1.addEventListener('click', function() {
	console.log('зеленый');
});

elem2.addEventListener('click', function(event) {
	console.log('голубой - первый обработчик'); 
	event.stopPropagation(); // остановим всплытие 
});

elem2.addEventListener('click', function() {
	console.log('голубой - второй обработчик'); 
		// все равно сработает 
});

elem3.addEventListener('click', function() {
	console.log('красный');
}); */

// Немедленное прекращение всплытия в JavaScript

/* Для того, чтобы полностью остановить обработку, современные браузеры поддерживают метод stopImmediatePropagation. Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе. Давайте его применим:

elem1.addEventListener('click', function() {
	console.log('зеленый');
});

elem2.addEventListener('click', function(event) {
	console.log('голубой - первый обработчик'); 
	event.stopImmediatePropagation(); // остановим всплытие 
});

elem2.addEventListener('click', function() {
	console.log('голубой - второй обработчик'); // уже не сработает 
});

elem3.addEventListener('click', function() {
	console.log('красный');
}); */

// Применение прекращения всплытия событий в JavaScript

/* Пусть внутри одного родителя у нас есть кнопка и некоторый блок:

<div id="parent">
	<button>click me</button>
	<div id="block">
		text
	</div>
</div>

Получим ссылки на наши элементы в переменные:

let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block  = document.querySelector('#block');

Пусть наш блок изначально скрыт:

#block:not(.active) {
	display: none;
}

Сделаем так, чтобы по клику на кнопку наш блок показался:

button.addEventListener('click', function() {
	block.classList.add('active');
});

А теперь сделаем так, чтобы по клику на любое место родителя наш блок скрывался:

parent.addEventListener('click', function() {
	block.classList.remove('active');
});

Нас, однако, ждет неожиданный сюрприз: так как кнопка находится внутри родителя, то клик по кнопке одновременно означает и клик по родителю. Это значит, что сначала наш блок покажется, а затем из-за всплытия события сработает обработчик в родителе и наш блок скроется.

Вот тут-то нам и пригодится возможность отменить всплытие: мы можем сделать так, чтобы при клике на кнопку отменить всплытие, родитель не реагировал на этот клик. */

/* let parent = document.querySelector("#parent");
let button = document.querySelector("button");
let block = document.querySelector("#block");

button.addEventListener("click", function(event) {
    event.stopPropagation();
    block.classList.add("active");
});

parent.addEventListener('click', function(event) {
	block.classList.remove('active');
}); */

// Погружение событий в JavaScript

/* Кроме всплытия событий есть еще и погружение. На самом деле событие сначала идет сверху вниз (стадия перехвата), доходит до нашего элемента (стадия цели) и только потом начинает всплывать (стадия всплытия).

Для того, чтобы повесить обработчик события с учетом стадии перехвата в addEventListener есть третий необязательный параметр. Если он равен true - событие сработает на стадии перехвата, а если false - на стадии всплытия (это по умолчанию). Давайте посмотрим на примере:

elem1.addEventListener('click', function() {
	console.log('зеленый - погружение');
}, true);
elem1.addEventListener('click', function() {
	console.log('зеленый - всплытие');
}, false);

elem2.addEventListener('click', function() {
	console.log('голубой - погружение');
}, true);
elem2.addEventListener('click', function() {
	console.log('голубой - всплытие');
}, false);

elem3.addEventListener('click', function() {
	console.log('красный - погружение');
}, true);
elem3.addEventListener('click', function() {
	console.log('красный- всплытие');
}, false); */

// Навешивание обработчиков на новые элементы в JavaScript

/* <ul>
	<li>item</li>
	<li>item</li>
	<li>item</li>
	<li>item</li>
	<li>item</li>
</ul>

<button>add</button>

Получим наши элементы в соответствующие переменные:

let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');

Сделаем так, чтобы по клику на любую li ей в конец добавлялся восклицательный знак:

for (let item of items) {
    item.addEventListener("click", function() {
        this.textContent = this.textContent += "!";
    });
}

Давайте теперь сделаем так, чтобы по нажатию на кнопку в конец списка добавлялся новая li:

button.addEventListener("click", function() {
    let item = document.createElement("li");
    item.textContent = "item";
    list.appendChild(item);
});

Мы, однако, получим проблему: клик на новую добавленную li не будет приводить к добавлению восклицательного знака в конец. Дело в том, что мы добавляем обработчик клика только на те li, которые существовали изначально, но не на новые.

Исправим проблему, навесив на новую li обработчик клика:

button.addEventListener("click", function() {
    let item = document.createElement("li");
    item.textContent = "item";

    item.addEventListener("click", function() {
        // обработчик клика
        this.textContent = this.textContent += "!";
    });
    list.appendChild(item);
})

Однако, теперь код функции-обработчика дублируется в двух местах - для изначально существующих li и для новых. Исправим это, вынеся его в отдельную функцию:

function handler() {
    this.textContent = this.textContent + "!";
}

Используем нашу функцию, чтобы избежать дублирования кода:

for (let item of items) {
	item.addEventListener('click', handler);
}

button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.textContent = 'item';
	
	item.addEventListener('click', handler);
	
	list.appendChild(item);
});

Задача в общем-то решена и мы избежали дублирования кода функции-обработчика. Однако, навешивать обработчики событий нам все равно приходится в двух местах: и в цикле для существующих li, и в при клике на кнопку. В следующем уроке мы разберем способ избавится от этого неудобства. */

// Делегирование событий в JavaScript

/* В предыдущем уроке была описана проблема, возникающая при добавлении новых элементов, и приведено ее решение. В данном уроке мы рассмотрим более удачный способ обойти проблему - делегирование событий. Давайте его разберем.

Как вы уже знаете, кликая на li, мы одновременно кликаем и на ul. Это возможно благодаря всплытию событий. Мы можем использовать это для решения нашей задачи: навесим событие не на каждую li, а на их родителя ul:

list.addEventListener('click', function() {
	
});

Теперь в обработчике события this будет указывать на элемент, к которому привязан обработчик, а event.target - на элемент, в котором случилось событие:

list.addEventListener("click", function(event) {
    console.log(this); // наш список
    console.log(event.target) // пункт списка
});

Сделаем так, чтобы li, на которой случился клик, в конец добавлялся восклицательный знак:

list.addEventListener("click", function(event) {
    event.target.textContent = event.target.textContent += "!";
}); */

/* let button = document.querySelector("button");
let list = document.querySelector("ul");
let items = document.querySelector("li");

list.addEventListener("click", function(event) {
    event.target.textContent += "!";
});

button.addEventListener("click", function() {
    let item = document.createElement("li");
    item.textContent = "item";
    list.appendChild(item);
}); */

// Универсальное делегирование событий в JavaScript

/* Приведенный в предыдущем уроке код рабочий, однако, не без недостатков. Давайте разберем эти недостатки и напишем более универсальное решение.

Недостаток нашего кода проявится в том случае, когда внутри li будут какие-то вложенные теги. В нашем случае пусть это будут теги i:

<ul>
	<li>item <i>italic</i> item</li>
	<li>item <i>italic</i> item</li>
	<li>item <i>italic</i> item</li>
	<li>item <i>italic</i> item</li>
	<li>item <i>italic</i> item</li>
</ul>

В этом случае нажатие на тег i приведет к добавлению восклицательного знака в конец тега i, а не тега li, как мы хотели бы - ведь в event.target попадает именно тот тег, в котором случилось событие.

Решить проблему можно с помощью метода closest:

В этом случае нажатие на тег i приведет к добавлению восклицательного знака в конец тега i, а не тега li, как мы хотели бы - ведь в event.target попадает именно тот тег, в котором случилось событие.

Решить проблему можно с помощью метода closest:

list.addEventListener('click', function(event) 

{
	let li = event.target.closest('li');
	
	if (li) {
		li.innerHTML = li.innerHTML + '!';
	}
}); */

/* let list = document.querySelector("ul");

list.addEventListener("click", function(event) {
    let li = event.target.closest("li");

    if (li) {
        li.innerHTML += "!";
    }
}); */