// Основы работы с функцией setInterval в JavaScript

/* В данном уроке мы научимся работать с таймерами в JavaScript. Разобравшись с таймерами, вы сможете автоматически выполнять на странице какие-либо операции через заданный промежуток времени. К примеру, можно будет сделать слайдер картинок, в котором картинки будут меняться каждую секунду.

Для работы с таймерами в JavaScript используется функция setInterval, которая запускает заданный код через определенные промежутки времени.

Эта функция работает следующим образом: первым параметром она принимает исходный код функции, а вторым параметром - интервал, через который эта функция будет автоматически вызываться. Второй параметр задается в миллисекундах (1000 миллисекунд = 1 секунда).

Давайте изучим работу функции на каком-нибудь примере. Например, напишем код, который каждую секунду будет что-нибудь выводить в консоль.

Для начала сделаем функцию, выводящую что-нибудь в консоль:

function timer() {
    console.log("!");
}

А теперь с помощью setInterval заставим созданную нами функцию выполнятся каждую секунду:

setInterval(timer, 1000);

function timer() {
    console.log("!");
}

Не обязательно создавать отдельную функцию - можно просто в первый параметр setInterval передать анонимную функцию, вот так:

setInterval(function() {
    console.log("!");
}, 1000); */

/* function timer() {
    console.log("!");
}

setInterval(timer, 3000); */

/* setInterval(function() {
    console.log("!");
}, 3000); */

// Счетчик через функцию setInterval в JavaScript

/* Конечно же, не очень интересно то, что наш таймер каждый раз выводит одно и тоже. Давайте усложним нашу задачу и сделаем так, чтобы каждую секунду в консоль выводились числа по возрастанию: сначала 1, потом 2, потом 3 и так далее.

Для этого нам понадобится переменная-счетчик, которая будет хранить свои значения между запусками функции. Несложно понять, что можно просто сделать глобальную переменную:

let i = 0; // глобальная переменная

setInterval(function() {
    i++;
    console.log(i);
} 1000);

Перепишем более компактно:

let i = 0;
setInterval(function() {
    console.log(++i);
}, 1000);

Или еще более компактно через стрелочную функцию:

let i = 0;
setInterval(() => console.log(++i), 1000); */

/* let i = 100;

setInterval(function() {
    console.log(--i);
}, 1000); */

// Остановка таймера JavaScript

/* Вы уже знаете, как запустить таймер, давайте теперь научимся его останавливать. Для этого вам необходимо знать, что каждый таймер, запущенный с помощью функции setInterval, имеет уникальный номер. Этот номер возвращает функция setInterval в момент запуска таймера:

let timerId = setInterval(function() {
    console.log("!")
}, 1000);

alert(timeId); // выведет номер таймера

Для остановки таймера используется функция clearInterval, которая принимает уникальный номер того таймера, который нужно остановить.

Для примера давайте запустим таймер, выводящий в консоль числа по возрастанию, начиная с 1. Остановим таймер, как только на экран будет выведено число 10:

let i = 0;

let timerId = setInterval(function() {
    console.log(++i);

    if (i >= 10) {
        clearInterval(timerId);
    }
}, 1000; */

/* let i = 10;

let timerId = setInterval(function() {
    console.log(--i);

    if (i === 0) {
        clearInterval(timerId);
    }
}, 1000); */

// Кнопка для запуска таймера на JavaScript

/* В предыдущих уроках наш таймер начинал свою работу сразу по загрузке страницы. Давайте теперь сделаем кнопку, по нажатию на которую будет запускаться наш таймер:

<button id="start">start</button>

Напишем соответствующий JavaScript:

let start = document.querySelector("#start");

start.addEventListener("click", function() {
    let i = 0;

    setInterval(function() {
        console.log(++i);
    }, 1000);
}); */

/* let start = document.querySelector("#start");

start.addEventListener("click", function() {
    let i = 100;

    let timerId = setInterval(function() {
        console.log(--i);

        if (i === 0) {
            clearInterval(timerId);
        }
    }, 1000);
}); */

// Многократное нажатие на кнопку для запуска таймера на JavaScript

/* Код, приведенный мною выше, на самом деле имеет некоторую проблему. Эта проблема проявляется в том случае, если на нашу кнопку сделать несколько кликов. В этом случае каждый клик будет приводить к запуску нового таймера.

To есть, к примеру, три нажатия на кнопку приведут к тому, что будет запущено три таймера, и каждый из этих таймеров будет выводить значение счетчика в консоль. Это значит, что значения будут меняться в три раза быстрее!

Для решения описанной проблемы нужно просто сделать так, чтобы повторное нажатие на кнопку не приводило к новому запуску таймера. Например, можно после старта таймера отвязывать от кнопки привязанный обработчик клика:

let start = document.querySelector("#start");

start.addEventListener("click", function func() {
    let i = 0;

    setInterval(function() {
        console.log(++i);
    }, 1000);

    this.removeEventListener("click", func); // отвязываем обработчик
}); */

/* let start = document.querySelector("#start");

start.addEventListener("click", function func() {
    let i = 100;

    let timerId = setInterval(function() {
        console.log(--i);

        if (i === 0) {
            clearInterval(timerId));
        }
    }, 1000);

    this.removeEventListener("click", func);
}); */

// Кнопки для запуска и остановки таймера на JavaScript

/* Давайте теперь сделаем две кнопки: по нажатию на первую пусть таймер запускается, а по нажатию на вторую - останавливается. Здесь уже все будет не так просто и нас ждет подвох. Для того, чтобы понять суть этого подвоха, распишу создание кода по шагам.

Итак, делаем две кнопочки:

<button id="start">start</button>
<button id="stop">stop</button>

Получаем ссылки на эти кнопки в переменные:

let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

По нажатию на первую кнопку стартуем таймер, записав его номер в переменную:

start.addEventListener("click", function() {
    let timerId = setInterval(function() {
        console.log("!");
    }, 1000);
})

А теперь остановим таймер по нажатию на вторую кнопку:

start.addEventListener("click", function() {
    let timerId = setInterval(function() {
        console.log("!");
    }, 1000);
})

stop.addEventListener("click", function() {
    clearInterval(timerId);
});

Однако, если попытаться запустить приведенный выше код, нас ждет сюрприз: при попытке остановить таймер окажется, что переменная timerId равна undefined! Почему так произошло? Потому при запуске таймера мы сделали нашу переменную timerId локальной внутри функции, привязанной к кнопке start.

Для решения проблемы сделаем переменную timerId глобальной - в этом случае она будет доступна как в функции запуска таймера, так и в функции остановки:

let timerId; // сделаем переменную глобальной

start.addEventListener("click", function() {
    timerId = setInterval(function() {
        console.log("!")
    }, 1000);
});

stop.addEventListener("click", function() {
    clearInterval(timerId);
}); */

/* let i = 100;

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let timerId;

start.addEventListener("click", function() {
    timerId = setInterval(function() {
        console.log(--i);

        if (i === 0) {
            clearInterval(timerId);
        }
    }, 1000);
});

stop.addEventListener("click", function() {
    clearInterval(timerId);
}); */

/* let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + 
			date.getSeconds()); 
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
}); */

/* let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + 
			date.getSeconds()); 
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
}); */

/* let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + 
			date.getSeconds()); 
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
}); */

/* let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + 
			date.getSeconds()); 
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
}); */

/* let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;

function startHandler() {
    timerId = setInterval(function() {
        console.log("!");
    }, 1000);
    
    start.removeEventListener("click", startHandler);
    start.disabled = true;
}

start.addEventListener("click", startHandler);

stop.addEventListener("click", function() {
    clearInterval(timerId); 
    
    start.addEventListener("click", startHandler);
    start.disabled = false;
}); */

// Практика на таймеры и работу с DOM в JavaScript

/* Пусть у нас дан инпут:

<input id="elem" value="1">

Давайте сделаем таймер, который каждую секунду увеличивать значение атрибута value нашего инпута на единицу:

let elem = document.querySelector("#elem");

setInterval(function() {
    elem.value = Number(elem.value) + 1;
}, 1000); */

/* Значение elem.value — это строка (все значения атрибутов в HTML хранятся как строки). Произойдет конкатенация строк (склеивание), а не сложение чисел. */

/* let elem = document.querySelector("#elem");
let start = document.querySelector("#start");
let timerId;

start.addEventListener("click", function func() {
    timerId = setInterval(function() {
        elem.value = Number(elem.value) - 1;
    }, 1000);

    start.removeEventListener("click", func);
}); */

/* let elem = document.querySelector("#elem");
let start = document.querySelector("#start");
let timerId;

start.addEventListener("click", function func() {
    timerId = setInterval(function() {
        elem.value = Number(elem.value) - 1;

         if (Number(elem.value) === 0) {
        clearInterval(timerId);
    }
    }, 1000);

    start.removeEventListener("click", func);
}); */

// Таймеры и потеря контекста в JavaScript

/* При использовании таймеров в обработчиках событий нас поджидают проблемы с потерей контекста. Давайте посмотрим на примере.

Пусть у нас есть инпут:

<input id="elem" value="text">

Пусть по клику на этот инпут сработает анонимная функция и внутри этой функции запустится таймер, каждую секунду выводящий что-нибудь в консоль:

let elem = document.querySelector("#elem");

elem.addEventListener("click", function() {
    setInterval(function() {
        console.log("!!!"); // что-нибудь выводим в консоль
    }, 1000)
});

Пока все работает верно. Но пусть теперь мы хотим выводить в консоль value нашего инпута - нас ждет сюрприз: в консоль будет выводится undefined:

elem.addEventListener('click', function() {
	setInterval(function() {
		console.log(this.value); // будет выводится undefined 
	}, 1000);
});

Все дело в том, что у нас получается функция в функции: есть внешняя анонимная функция, которая вызывается по клику и внутренняя анонимная функция, которую запускает таймер. Во внешней функции this указывает на инпут, но во внутренней - нет. Имеет место потеря контекста.

Почему выводится undefined, а не вываливается ошибка в консоль, как это было в предыдущих уроках? Потому что this внутри функции, вызываемой через setInterval, указывает на window.

Это значит, что мы пытаемся прочитать свойство value у объекта window, вот так: window.value, а такого свойства в нем нет, и мы получаем undefined (не ошибку).

Поправим проблему введением self:

elem.addEventListener("click", function() {
    let self = this;

    setInterval(function() {
        console.log(self.value);
    }, 1000);
}); */

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    let self = this;
	setInterval(function() {
		self.value = Number(elem.value) + 1;
	}, 1000);
}); */

/* Код не работал по причине потери контекста. Во внешней функции this указывает на инпут, но во внутренней - нет. Мы объявили новую переменную self во внешней функции и вложили в нее значение this, чтобы оно было доступно и во внутренней функции. */

// Практика на таймеры и работу с DOM в JavaScript

/* let button = document.querySelector("button");
let paragraph = document.querySelector("p");
let timerId;

button.addEventListener("click", function func() {
    timerId = setInterval(function() {
        paragraph.textContent = Number(paragraph.textContent) + 1;
    }, 1000);

    button.removeEventListener("click", func);
}); */

/* let button = document.querySelector("button");
let paragraph = document.querySelector("p");
let timerId;

button.addEventListener("click", function func() {
    timerId = setInterval(function() {
        paragraph.textContent = Number(paragraph.textContent) - 1;

        if (Number(paragraph.textContent) === 0) {
            clearInterval(timerId);
        }
    }, 1000);

    button.removeEventListener("click", func);
}); */

/* let elem = document.querySelector("#elem");

setInterval(function() {
    elem.value = Number(elem.value) ** 2;
}, 1000); */

/* let inp = document.querySelector("input");
let paragraph = document.querySelector("p");

let timerId;

inp.addEventListener("blur", function func() {
    paragraph.textContent = Number(inp.value);
    timerId = setInterval(function() {
        paragraph.textContent = Number(paragraph.textContent) - 1;

        if (Number(paragraph.textContent) === 0) {
            clearInterval(timerId);
        }
    }, 1000);

    inp.removeEventListener("blur", func);
}); */

/* let inp = document.querySelector("input");
let paragraph = document.querySelector("p");
let button = document.querySelector("#start");
let timerId;

button.addEventListener("click", function func() {
    paragraph.textContent = Number(inp.value);
    timerId = setInterval(function() {
        paragraph.textContent = Number(paragraph.textContent) - 1;

        if (Number(paragraph.textContent) === 0) {
            clearInterval(timerId);
        }
    }, 1000);

    button.removeEventListener("click", func);
}); */

/* let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let paragraph = document.querySelector("p");

paragraph.textContent = 0;

let timerId;

start.addEventListener("click", function func() {
    timerId = setInterval(function() {
        paragraph.textContent = Number(paragraph.textContent) + 1;
    }, 1000);
    start.removeEventListener("click", func)
});

stop.addEventListener("click", function() {
    clearInterval(timerId);
}); */

/* let paragraph = document.querySelector("p");
paragraph.style.color = "red";

setInterval(function() {

    if (paragraph.style.color === "red") {
        paragraph.style.color = "green";
    } else 
        paragraph.style.color = "red";
}, 1000); */

/* let paragraph = document.querySelector("p");

setInterval(function() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    paragraph.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000); */

// Задержка перед выполнением в JavaScript

/* Давайте теперь разберем функцию setTimeout, которая позволяет сделать задержку перед запуском кода. Эта задержка, в отличии от функции setInterval, случится только один раз.

Первым параметром setTimeout принимает исходный код функции, а вторым - задержку в миллисекундах перед запуском этой функции.

Посмотрим работу функции на каком-нибудь примере. Пусть у нас есть вот такая кнопка:

<input type="submit" id="elem">

Получим ссылку на нашу кнопку в переменную:

let elem = document.querySelector('#elem');

Давайте теперь сделаем так, чтобы по нажатию на кнопку на экран вывелся alert, но не сразу, а через 3 секунды после нажатия:

elem.addEventListener("click", function() {
    setTimeout(function() {
        alert("!");
    }, 3000);
}); */

/* let paragraph = document.querySelector("p");

setTimeout(function() {
    paragraph.textContent = "Привет! 10 секунд прошло.";
}, 10000); */

// Запуск таймера в JavaScript

/* Хотя функция setTimeout и не предназначена для создания таймеров, однако их все равно можно делать с ее помощью, если воспользоваться рекурсией:

let i = 0;

function timer() {
    setTimeout(function() {
        console.log(++1);

        timer(); // вызовем сами себя
    }, 1000)
}

timer();

Остановить такой таймер можно просто не дав случится рекурсии:

function timer() {
    setTimeout(function() {
        console.log(++1);

        if (i < 10) { // запускаем, только если счетчик меньше 10
            timer();
        }
    }, 1000)
}
timer(); */

/* let i = 0;

function timer() {
    console.log(i);
    i++;
    setTimeout(timer, i * 1000);
}

timer(); */