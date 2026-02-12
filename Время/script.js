// Работа с объектом Date в JavaScript

/* Сейчас мы начнем изучать работу с датами на JavaScript. Для этого нам понадобится объект Date, с помощью которого в JavaScript можно осуществлять различные манипуляции с датами.

Объект с датой создается следующим образом:

new Date();

Давайте запишем созданный объект в какую-нибудь переменную, к примеру, в переменную date:

let date = new Date();

После проделанной операции переменная date будет представлять собой объект, хранящий в себе текущий момент времени (секунду, минуту, час и так далее).

Используя этот объект с помощью специальных методов мы можем получить нужные нам характеристики времени, например, текущий час, текущий день или текущий месяц.

К примеру, текущий час можно получить так: date.getHours(), а текущий месяц - вот так date.getMonth(). Смотрите все варианты:

let date = new Date();

let date = new Date();

console.log(date.getFullYear()); // год
console.log(date.getMonth());    // месяц
console.log(date.getDate());     // день

console.log(date.getHours());    // часы
console.log(date.getMinutes());  // минуты
console.log(date.getSeconds());  // секунды

Учтите, что месяц, который возвращает метод getMonth, начинается с нуля - январь нулевой, февраль первый и так далее. */

/* let date = new Date();

console.log(date.getDate());
console.log(date.getMonth() +1);
console.log(date.getFullYear()); */

// Форматирование даты в JavaScript

/* Давайте теперь научимся выводить дату в определенном формате. Пусть, к примеру, мы хотим вывести на экран текущие день, месяц и год в формате год-месяц-день.

Давайте сделаем это:

let date = new Date();

console.log(date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate());

Наш код, однако, имеет проблему: номера месяцев будут начинаться с нуля, а нам, скорее всего, хотелось бы, чтобы они начинались с единицы.

let date = new Date();

console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());

Наш код, однако, все равно не совершенен. Но заметить это можно только в определенные месяцы и в определенные дни. Пусть, к примеру, сейчас 5-го марта 2020 года.

В этом случае наша дата выведется в формате 2020-3-5. А нам хотелось бы, чтобы дата вывелась в формате 2020-03-05 - с нулями перед номерами дней и месяцев из одной цифры.

Для решения проблемы напишем функцию addZero, которая будет добавлять нули перед числами от 0 до 9:

function addZero(num) {
    if (num >= 0 && num <= 9) {
        return "0" + num;
    } else {
        return num;
    }
}

Применим созданную функцию и теперь действительно получим дату в нужном нам формате:

let date = new Date();

console.log(
    addZero(date.getFullYear()) + "-" +
    addZero(date.getMonth() + 1) + "-" +
    addZero(date.getDate())
); */

/* let date = new Date();

function AddZero(num) {
    if (num >= 0 && num <= 9) {
        return "0" + num;
    } else {
        return num;
    }
}

console.log(
    AddZero(date.getHours()) + ":" +
    AddZero(date.getMinutes()) + ":" +
    AddZero(date.getSeconds()) + " " +
    AddZero(date.getDate()) + "." +
    AddZero(date.getMonth() + 1) + "." +
    date.getFullYear() + "."
); */

// Смена формата даты в JavaScript

/* Давайте теперь научимся менять формат даты. Пусть, к примеру, у нас есть строка с датой в формате год-месяц-день. Давайте поменяем формат этой даты на другой, к примеру, на такой: день/месяц/год.

Давайте решим задачу на конкретном примере. Пусть в переменной date лежит дата '2025-12-31'. Давайте преобразуем эту дату в '31/12/2025'

Для решения задачи разобьем нашу строку '2025-12-31' в массив, используя метод split с разделителем дефисом. В результате в нулевом элементе массива окажется год, в первом - месяц, во втором - день:

let str = "2025-12-31";
let arr = str.split("-");

console.log(arr); // получим массив ['2025', '12', '31'] 

Теперь, обращаясь к разным элементам массива по их ключам, сформируем нужную нам строку:

let str = "2025-12-31";
let arr = str.split("-");
let res = arr[2] + "/" + arr[1] + "/" + arr[0];

console.log(res); // получим строку '31/12/2025'

Можно также использовать комбинацию методов split, reverse и join:

let str = "2025-12-31";
let res = str.split("-").reverse().join("/");

console.log(res); // получим строку '31/12/2025' */

/* let str = "2026-02-06";
let arr = str.split("-").reverse().join(".");

console.log(arr); */

// Получения дня недели на JavaScript

/* С помощью объекта Date можно также получить номер текущего дня недели. Делается это с помощью метода getDay. Этот метод возвращает числа от 0 до 6-ти, причем неделя начинается с воскресенья и этот день имеет номер 0. Понедельник - это день номер 1, вторник - номер 2 и так далее.

Давайте посмотрим работу метода getDay на примере. Пусть, к примеру, сегодня вторник. Toгда следующий код выведет число 2:

let date = new Date();

console.log(date.getDay()); */

/* let date = new Date();

console.log(date.getDay());

function WhatADay(num) {
    if (num === 0 || num === 6) {
        console.log("day off");
    } else {
        console.log("working day");
    }
}

WhatADay(date.getDay());

function WhenIsSunday(num) {
    if (num === 0) {
        console.log("today is Sunday");
    } else {
        console.log(7 - num);
    }
}

WhenIsSunday(date.getDay()); */

// Вывод частей даты словом в JavaScript

/* Вы уже умеете выводить день недели в виде числа с помощью метода getDay. Зачастую, однако, нам нужен не номер дня недели, а его текстовое название. Давайте напишем код, который будет преобразовывать числа, возвращаемые методом getDay, в соответствующие названия дней недели.

Для начала напишем код, который будет выводить номер текущего дня недели:

let date = new Date();
let day = date.getDay();

console.log(day);

А теперь доработаем этот код так, чтобы на экран выводился не номер дня недели, а его название (для краткости воскресенье будет 'вс', понедельник 'пн' и так далее).

Для решения задачи составим массив дней недели days и начнем его с воскресенья (так как это нулевой день):

let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; 

Как с помощью этого массива вывести на экран, к примеру, 'вт'? Нужно передать в квадратных скобках номер этого дня (вторник имеет номер 2):

console.log(days[2]); // выведет 'вт'

Однако, мы не хотим передавать день недели вручную, а хотим, чтобы JavaScript сам определил текущий день и вывел его название. Для этого нужно совместить то, что возвращает метод getDay, и наш массив days:

let date = new Date();
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]); */

/* let date = new Date();
let month = date.getMonth();

let months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек' 
];

console.log(months[month]); */

// Установка времени в объекте Date в JavaScript

/* Когда мы создавали объект с датой вот таким образом: new Date(), - мы оставляли круглые скобки пустыми. В этом случае мы получали текущий момент времени.

Можно, однако, поступить и по-другому - передать ему параметры в формате new Date(год, месяц, день, часы, минуты, секунды, миллисекунды) и в этом случае в переменную date запишется не текущий момент времени, а тот, который мы указали в параметрах. При этом при передаче параметром отсчет месяцев начинается с нуля.

Параметры можно опускать с конца. При этом отсутствующие параметры для миллисекунд, секунд и часов считаются равными нулю, а для дней - единице. Год и месяц опускать нельзя.

Давайте создадим объект с датой за определенный момент времени:

let date = new Date(2025, 10, 5, 12, 59, 59); 

Возможность задания момента времени можно использовать, например, для того, чтобы узнать день недели за определенную дату:

let date = new Date(2925, 10, 5); // установим 5 ноября 2025 года

let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]); */

/* let date = new Date(1997, 10, 07);
let day = date.getDay();

let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; ;

console.log(days[day]); */

// Получение времени в формате timestamp в JavaScript

/* При работе с датой существует специальный формат timestamp, который в JavaScript показывает количество миллисекунд, прошедшее с 1-го января 1970 года по текущий (или заданный) момент времени.

Существует специальный метод getTime, с помощью которого можно получить время в формате timestamp. Давайте, например, получим текущий момент времени в этом формате:

let date = ew Date();

console.log(date.getTime());

Получим заданный момент времени в формате timestamp:

let date = new Date(2015, 11, 4, 23, 59, 59); 

console.log(date.getTime()); */

/* let date = new Date(2025, 0, 01);

console.log(date.getTime()); */

// Разность между датами в формате timestamp в JavaScript

/* Формат timestamp предназначен для нахождения разницы между датами. Давайте для примера получим разницу в миллисекундах между текущим и заданным моментом времени:

let now = new Date();
let date = new Date(2015, 11, 4, 23, 59, 59);

let diff = now.getTime() - date.getTime();

console.log(diff);

Очевидно, что чаще всего нам нужна разница не в миллисекундах, а в днях или в годах. Для этого просто нужно перевести милисекунды в нужное нам значение.

Например, чтобы перевести милисекунды в секунды, нужно милисекунды поделить на 1000, чтобы секунды перевести в минуты, нужно секунды поделить на 60 и так далее.

Давайте, например, переведем разницу между датами в минуты:

console.log(diff / (1000 * 60));

А теперь - в часы:

console.log(diff / (1000 * 60 * 60)); */

/* let date1 = new Date(2000, 0, 10);
let date2 = new Date(1988, 2, 1);

let diff = date1.getTime() - date2.getTime();

console.log (diff / (1000 * 60 * 60 * 24)); */

/* let birth = new Date(1997, 10, 7);
let now = new Date();

let yearsDiff = now.getFullYear() - birth.getFullYear();
let monthsDiff = now.getMonth() - birth.getMonth();
let daysDiff = now.getDate() - birth.getDate();

let totalMonths = yearsDiff * 12 + monthsDiff;

if (daysDiff < 0) {
    totalMonths--;
}

console.log(totalMonths); */

// Разница между объектами с датой в JavaScript

/* В предыдущих уроках для нахождения разницы между датами мы использовали формат timestamp. Однако, на самом деле, в JavaScript это не обязательно: даты, представленные в виде объекта Date, можно вычитать друг из друга, и результат их вычитания - разница в миллисекундах.

Для примера давайте выведем количество миллисекунд, которые прошли с 25 мая 2015, 12:59:59 по настоящий момент времени:

let now  = new Date();
let date = new Date(2015, 4, 25, 12, 59, 59); 

let diff = now - date; // вычитаем два объекта с датами друг от друга 
console.log(diff);     // увидим разницу в миллисекундах */

/* let date1 = new Date(2010, 1, 15);
let date2 = new Date(2000, 8, 1);

let diff = date1 - date2;

console.log(diff); */

/* let date1 = new Date(2010, 1, 15);
let date2 = new Date(2000, 8, 1);

let diffInDays = (date1 - date2) / (1000 * 60 * 60 * 24);

console.log(diffInDays); */

/* let date1 = new Date(2010, 1, 15);
let date2 = new Date(2000, 8, 1);

let year1 = date1.getFullYear();
let month1 = date1.getMonth();
let day1 = date1.getDate();

let year2 = date2.getFullYear();
let month2 = date2.getMonth();
let day2 = date2.getDate();

let diffInMonths = (year1 - year2) * 12 + (month1 - month2);

console.log(diffInMonths); */

/* let date1 = new Date(2010, 1, 15);
let date2 = new Date(2000, 8, 1);

let year1 = date1.getFullYear();
let year2 = date2.getFullYear();

let diffInYears = year1 - year2;

console.log(diffInYears); */

// Автоматическая корректировка дат в JavaScript

/* JavaScript имеет очень интересную и полезную особенность: если при создании объекта Date был указан некорректный момент времени - он автоматически будет пересчитан в корректный. Давайте посмотрим на примере.

Как вы знаете, даты 35 января не существует. Максимально возможный день января - 31. Получается, что наша дата 35 января имеет 4 лишних дня. JavaScript в таком случае просто прибавит эти лишние 4 дня к следующему месяцу:

let date = new Date(2018, 0, 35);

console.log(date); // получится 4 февраля

Можно указывать не только лишние дни, но и месяцы. При этом следует помнить, что месяцы начинаются с нуля, а значит последний корректный месяц - 11-тый. Если указать 12-тый месяц, то получится январь следующего года:

let date = new Date(2018, 12, 1); // указываем 12-тый месяц 

console.log(date); // получится 1 января 2019 года 

Описанная корректировка работает и в меньшую сторону. Как вы знаете, самым минимальным днем месяца является день с номером 1. Поэтому, если указать день с номером 0, то получится последний день предыдущего месяца:

let date = new Date(2018, 1, 0); // указываем нулевой день

console.log(date); // получится 31 января

Можно также указывать отрицательные значения дней и месяцев. При этом нужно помнить, что минимальный день имеет номер 1, а минимальный месяц - номер 0. Это значит, что минус первый день попадает во 2 день с конца предыдущего месяца, а минус первый месяц попадает просто в последний месяц предыдущего года:

let date = new Date(2018, 1, -1); // указываем -1 день 

console.log(date); // получится 30 января

let date = new Date(2018, -1, 1); // указываем -1 месяц 

console.log(date); // получится 1 декабря 2017 года 

Все сказанное выше аналогично работает с часами, минутами и секундами:

let date = new Date(2018, 0, 1, 24, 0, 0); // указываем 24-тый час 

console.log(date); // получится 2 января, 0 часов 

let date = new Date(2018, 0, 1, 25, 0, 0); // указываем 25-тый час 

console.log(date); // получится 2 января, 1 час */

/* let date = new Date(2018, 1, 35);

console.log(date); // получится 5 марта */

/* let date = new Date(2018, 15, 1);

console.log(date); // получится 1 апреля 2019 года */

/* let date = new Date(2018, 3, 31);

console.log(date); // получится 1 мая */

/* let date = new Date(2018, 1, 31);

console.log(date); // получится 3 марта */

/* let date = new Date(2018, 12, 33);

console.log(date); // получится 2 февраля 2019 года */

/* let date = new Date(2018, 33, 33);

console.log(date); // получится 2 ноября 2020 года */

/* let date = new Date(2018, 5, 0);
console.log(date); // получится 31 мая */

/* let date = new Date(2018, 0, 0);
console.log(date); // получится 31 декабря 2017 года */

/* let date = new Date(2018, -12, -33);

console.log(date); // получится 28 ноября 2016 года */

/* let date = new Date(2018, 0, 1, 23, 0, 60); 

console.log(date); // получится 1 января */

/* let date = new Date(2018, 0, 1, 23, 60, 0); 

console.log(date); // получится 2 января */

/* let date = new Date(2018, 0, 1, 100, 100, 100); 
console.log(date); // получится 5 января */

// Нахождение последнего дня месяца в JavaScript

/* Используем изученную нами ранее автоматическую корректировку дат, чтобы легко решить нашу задачу. Ведь в JavaScript последний день месяца - это нулевой день следующего месяца.

Для примера определим количество дней в марте 2020 года. Для этого при создании объекта с датой укажем нулевой день апреля (он имеет номер 3, так как нумерация месяцев с нуля):

let date = new Date(2020, 3, 0);
console.log(date.getDate()); */

/* function getLastDayOfMonth (year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2020, 3)); */

/* let lastDay = new Date(2025, 5, 0);
let dayOfWeek = lastDay.getDay();

console.log(dayOfWeek); */

// Определение високосного года в JavaScript

/* Используя изученные ранее приемы, мы можем легко определить для любого года, високосный он или нет: просто необходимо узнать, сколько дней в феврале. Для этого нам нужно взять нулевой день марта:

let date = new Date(2020, 2, 0);

console.log(date.getDate()); // выведет 29, тк 2020 год - високосный 

Усовершенствуем наш код так, чтобы тип года выводился текстом:

let date = new Date(2020, 2, 0);

if (date.getDate() == 29) {
    console.log('високосный');
} else {
    console.log('обычный');
} */

/* function isLeap(year) {
    let date = new Date(year, 2, 0);
    if (date.getDate() == 29) {
        console.log("true");
    } else {
        console.log("false");
    }
}

isLeap(2026); */

// Проверка корректности даты в JavaScript

/* Давайте теперь научимся проверять дату на корректность. Например, 31 января - это корректная дата, а 32 января - некорректная. Как вы знаете, JavaScript автоматически корректирует даты. В нашем случае это значит, что 32 января автоматически станет 1 февраля.

Такое свойство JavaScript можно использовать для того, чтобы проверить дату на существование. Как будем проверять: создадим объект с датой и посмотрим, поменялись ли части даты или нет. Другими словами, выполнил ли JavaScript корректировку нашей даты или нет. Если выполнил - значит переданная нами дата некорректна, а если не выполнил - корректна.

Давайте сделаем описанное:

let year  = 2025;
let month = 0;
let day   = 32;

let date = new Date(year, month, day);

if (date.getFullYear() == year && date.getMonth() == month && date.getDay() == day) {
    console.log('корректна');
} else {
    console.log('некорректна');
} */

/* function checkDate(year, month, day) {
    let date = new Date(year, month, day);
    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
        console.log("true");
    } else {
        console.log("false");
    }
}

checkDate(2026, 13, 35); */

// Получение дня текущего года в JavaScript

/* Давайте получим объект с датой, содержащий 8-е марта текущего года. Под словами текущий год имеется ввиду то, что скрипт должен работать в любом году, всегда получая тот год, который сейчас на планете.

Для этого нам нужно сделать еще один вспомогательный объект с датой, содержащий текущий момент времени. С помощью этого объекта мы сможем получить текущий год, а затем использовать этот год при создании объекта с желаемой нами датой, вот так:

let now = new Date(); // получаем текущий момент
let date = new Date(now.getFullYear(), 2, 8); // получаем нашу дату

Полученный момент времени мы можем использовать, например, чтобы определить день недели, соответствующий этой дате:

console.log(date.getDay()); */

/* let now = new Date();

let date = new Date(now.getFullYear(), 11, 31);

console.log(date.getDay()); */

// День следующего или предыдущего месяца

/* Давайте узнаем день недели первого числа предыдущего месяца. Для этого от текущего месяца отнимем единицу:

let now = new Date();

let date = new Date(now.getFullYear(), now.getMonth() - 1, 1);

console.log(date.getDay()); */

/* Вопрос: не будет ли проблемы, если текущий месяц январь? Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц.

Нет. JavaScript автоматически нормализует некорректные даты, включая отрицательные месяцы. */

/* let now = new Date();

let date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

console.log(date.getDay()); */

// День следующего или предыдущего года

/* Давайте получим объект с датой, содержащий 21 января следующего года. Для этого прибавим к текущему году единицу:

let now = new Date();
let date = new Date(now.getFullYear() + 1, 0, 21); */

/* let now = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);

console.log(date.getDay()); */

/* let now = new Date();
let date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());

console.log(date.getDay()); */

/* let now = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());

console.log(date.getDay()); */

// Разность моментов

/* Давайте найдем разность между двумя моментами времени:

let date1 = new Date();
let date2 = new Date(2015, 4, 25, 12, 59, 59);

console.log(date1 - date2); // разность в миллисекундах */

/* let now = new Date();

let date1 = new Date(now.getFullYear(), 0, 1);
let date2 = new Date(now.getFullYear(), 8, 10);

let diff = (date2 - date1) / (1000 * 60 * 60 * 24);

console.log(diff); */

/* let now = new Date();

let date1 = new Date(now.getFullYear(), now.getMonth(), 20);
let date2 = new Date(now.getFullYear(), now.getMonth() + 1, 10);

let diff = (date2 - date1) / (1000 * 60 * 60 * 24);

console.log(diff); */

// Момент времени дня

/* Давайте получим объект с датой, содержащий полдень сегодняшнего дня:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);

А теперь полдень завтрашнего дня:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 12); */

/* let now = new Date();

let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);

let diff = (now - date) / (1000 * 60 * 60);

console.log(diff); */

// Начало дня в JavaScript

/* Давайте получим объект с датой, содержащий начало текущего дня:

let now  = new Date();

let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

Как вы уже знаете, параметры объекта Date можно опускать с конца. В этом случае часы, минуты и секунды будут иметь значение 0. Опустим их:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 

А вот день опустить нельзя, так как если он опущен, то примет значение 1, а нам нужен текущий день. Опустить месяц, не опуская год также нельзя по правилам работы с Date.

Опустить одновременно год, месяц и день также нельзя - в этом случае возьмется текущий момент времени. Почему это плохо, ведь нам и нужен текущий год, текущий месяц и текущий день? Дело в том, что нам нужна полночь, то есть часы, минуты и секунды должны иметь значение 0, а в текущем моменте времени они будут иметь текущие значения, а не полночь. */

/* let now = new Date();

let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

let diff = (now - date) / (1000 * 60 * 60);

console.log(diff); */

// Конец дня в JavaScript

/* Давайте получим объект с датой, содержащий конец текущего дня:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59); 

Можно посчитать концом текущего дня полночь следующего (разница в 1 секунду):

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); 

Как вы уже знаете, нули в таком случае можно опустить:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); 

Кстати, полночью также будет является время 24:00:00 текущего дня:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0);

Опустим нули:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24); */

/* let now = new Date();

let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

let diff = (date - now) / (1000 * 60 * 60);

console.log(diff); */

// Циклическая проверка моментов времени в JavaScript

/* Давайте найдем все первые числа месяцев текущего года, которые являются воскресеньем:

let now = new Date();
let year = now.getFullYear();

for (let month = 0; month <= 11; month++) {
    let date = new Date(year, month, 1);

    if (date.getDay() == 0) {
        console.log(year + '-' + month + '-1');
    }
} */

/* let now = new Date();
let counter = 0;

for (let year = 2000; year <= now.getFullYear(); year ++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() == 0 || date.getDay() == 6) {
        counter ++;
    }
}

console.log(counter); */

// Практика на получение моментов времени в JavaScript

/* let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

let diff = (now - date) / 1000;

console.log(diff); */

/* let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

let diff = (date - now) / 1000;

console.log(diff); */

/* let now = new Date();
let date = new Date(now.getFullYear() + 1, 0, 1 );

let diff = (date - now) / (1000 * 60 * 60 * 24);

console.log(diff); */

/* let now = new Date();
let year = now.getFullYear();
let count = 0;

for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) {
        count++;
    }
}

console.log(count); */

/* let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());

let year = date.getFullYear();

console.log(year); */

/* let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() + 1, 0);

let day = date.getDay();

console.log(day); */

/* let now = new Date();
let date = new Date(now.getFullYear(), 2, 0);

if (date.getDate() == 29) {
    console.log("високосный");
} else {
    console.log("обычный");
} */

/* let year = new Date().getFullYear();
while (true) {
    year--;
    if (new Date(year, 2, 0).getDate() === 29) {
        console.log(year);
        break;
    }
} */

/* let year = new Date().getFullYear();
while (true) {
    year++;
    if (new Date(year, 2, 0).getDate() === 29) {
        console.log(year);
        break;
    }
} */

// Строковое сравнение дат на JavaScript

/* Пусть у нас есть две даты в следующем текстовом формате:

let date1 = '2020-12-01';
let date2 = '2019-12-01';

В таком случае можно выполнить сравнение этих дат и узнать, какая из этих дат больше:

console.log(date1 > date2); // выведет true 

Каким образом происходит сравнение этих дат? Дело в том, что наши даты представляют собой строки и JavaScript сравнивает их как строки. To есть он сначала сравнивает первые символы двух дат: если они одинаковы, то JavaScript сравнивает вторые символы, и так далее, пока не найдет отличия. Благодаря тому, что в нашем формате даты сначала расположен год, потом месяц, а потом день, и возможно такое сравнение.

Дело в том, что если цифра первого года оказывается больше цифры второго года, значит уже не имеет значения, что там с месяцами и днями - первый год точно больше. Если же годы совпадают, то больше будет та дата, у которой больше месяц. А если и месяцы совпадают, то больше будет та дата, у которой больше день. Ну, а если и дни одинаковы, то и даты равны.

Важно также, чтобы даты были в одном формате. В нашем случае разделителями частей дат являются дефисы. Это, конечно же, не обязательно. Например, можно поставить точки:

let date1 = '2020.12.01';
let date2 = '2019.12.01';

Или вообще убрать разделители:

let date1 = '20201201';
let date2 = '20191201';

Главное, чтобы сравнение было корректным, размещение должно быть следующим: сначала год, потом месяц, потом день. */

/* let date1 = '2020-11-30';
let date2 = '2020-12-01';

if (date1 > date2) {
    console.log("Первая дата больше.");
} else {
    console.log("Вторая дата больше.");
} */

// Сравнение даты без года в JavaScript

/* Необязательно сравнивать года. Дата может состоять просто из месяца и дня:

let date1 = '12-01';
let date2 = '11-01';

console.log(date1 > date2); */

/* let date1 = '09-21';
let date2 = '09-23';

if (date1 > date2) {
    console.log("Первая дата больше.");
} else {
    console.log("Вторая дата больше.");
} */

// Попадание даты в промежуток

/* Пусть есть три промежутка: с 1 января по 8 марта, с 9 марта по 17 июня, с 18 июня по 31 декабря. Пусть у нас также есть какая-то дата, содержащая месяц и день. Давайте определим, в какой промежуток попадает эта дата:

let date = '08-20';

if (date >= '01-01' && date <= 
	'03-08') { 
	console.log('1 промежуток');
}

if (date >= '03-09' && date <= 
	'06-17') { 
	console.log('2 промежуток');
}

if (date >= '06-18' && date <= 
	'12-31') { 
	console.log('3 промежуток');
} */

/* let date = "07.11";

if (date >= "01.11" && date <= "22.11") {
    console.log("Знак зодиака: Скорпион");
}

if (date >= "23.11" && date <= "22.12") {
    console.log("Знак зодиакаЖ Стрелец");
} */

// Сравнение объектов с датами в JavaScript

/* Можно сравнивать не только строки, но и объекты с датами. Посмотрим на примере. Пусть нас есть два объекта с датами, которые мы создали через new Date и записали в переменные. Давайте сравним, какая дата больше:

let date1 = new Date(2020, 1, 1);
let date2 = new Date(2019, 1, 1);

console.log(date1 > date2); // выведет true 

Пусть теперь первая дата будет меньше второй:

let date1 = new Date(2020, 1, 1);
let date2 = new Date(2021, 1, 1);

console.log(date1 > date2); // выведет false */

/* let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);

if (now > date) {
    console. log("Полдень был.");
} else if (now < date) {
    console.log("Полдень не был.");
} else {
    console.log("Сейчас полдень.");
} */

/* let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 15);

if (now >= date) {
    console.log("Половина месяца прошла.");
} else {
    console.log("Половина месяца не прошла.");
} */