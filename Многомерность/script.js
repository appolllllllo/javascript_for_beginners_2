/* Многомерные массивы в JavaScript

Элементы массива могут быть не только строками и числами, но и массивами. В этом случае у нас получится массив массивов или многомерный массив.

В следующем примере массив arr состоит из трех элементов, в свою очередь являющихся массивами:

let arr = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h' 'i']]; 

Перепишем в более понятном виде:

let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
];

В зависимости от уровня вложенности массивы могут быть двухмерными - массив массивов, трехмерными - массив массивов массивов (ну и так далее - четырехмерными, пятимерными и тп).

Приведенный выше массив является двухмерным, так как внутри одного массива расположены другие подмассивы и уже в этих подмассивах нет других массивов.

Чтобы вывести какой-либо элемент из двухмерного массива следует писать уже не одну пару квадратных скобок, а две:

let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
];

console.log(arr[0][1]); // выведет 'b'
console.log(arr[1][2]); // выведет 'f' */

/* let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
];

console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]); */

/* let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1]); */

/* Трехмерный массив в JavaScript

Вот пример трехмерного массива:

let arr = [
    [
        ['a', 'b'],
        ['c', 'd'],
    ],
    [
        ['e', 'f'],
        ['g', 'h'],
    ],
    [
        ['i', 'j'],
        ['k', 'l'],
    ],
];
Для вывода элементов из такого массива уже необходимо написать три квадратные скобки:

console.log(arr[0][0][0]); // выведет 'a'
console.log(arr[2][1][0]); // выведет 'k' */

/* let arr = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];

console.log(arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1]); */

/* Произвольные массивы в JavaScript

Многомерные массивы не обязательно должны быть такими, как мы рассмотрели выше. Посмотрите, например, на следующий массив:

let arr = [['a', 'b', [1, 2, 3], 
    [4, 5]], ['d', ['e', 'f']]];

Как вы видите, этот массив "неправильный". В нем рядом с обычными элементами (например, 'a', 'b') располагаются массивы ([1, 2, 3] и [4, 5]). Перепишем наш массив в более понятном виде:

let arr = [
    [
        'a', 'b', [1, 2, 3], [4, 5],
    ],
    [
        'd', ['e', 'f'],
    ],
]; */

/* let arr = [
    [
        1, 2, 3, [4, 5, [6, 7]]
    ],
    [
        8, [9, 10]
    ]
];

console.log(arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1]); */

/* Перебор многомерных массивов в JavaScript

let arr = [[1, 2, 3, 4, 5], [6, 
    7, 8], [9, 10]]; 

Давайте выведем все его элементы в консоль. Для этого нам необходимо запустить два вложенных друг в друга цикла:

let arr = [[1, 2, 3, 4, 5], [6, 
    7, 8], [9, 10]]; 

for (let subArr of arr) {
    for (let elem of subArr) {
        console.log(elem);
    }
} */

/* let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;

for (let subArr of arr) {
    for (let elem of subArr) {
        sum += elem;
    }
}

console.log(sum); */

/* let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sum = 0;

for (let level1 of arr) {
    for (let level2 of level1) {
        for (let num of level2) {
            sum += num;
        }
    }
}

console.log(sum); */

// Перебор через обычный for в JavaScript

/* Массивы также можно перебирать не через цикл for-of, а через обычный for:

let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]; 

for (let i = 0; i < arr.length; i++) { 
    for (let j = 0; j < arr[i].length; j++) { 
        console.log(arr[i][j]);
    }
}*/

/* let arr = [[1, 2, 3], [4, 5], [6]];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}

console.log(sum); */

/* let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}

console.log(sum); */

/* Заполнение многомерных массивов JavaScript

Пусть теперь мы хотим в цикле создать какой-нибудь многомерный массив с числами. Например, вот такой двухмерный массив:

[[1, 2, 3], [1, 2, 3], [1, 2, 3]]

Решим поставленную задачу, применив два вложенных цикла. Внешний цикл будет создавать подмассивы, а внутренний - заполнять эти подмассивы числами:

let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = []; //создаем подмассив
        for (let j = 0; j < 3; j++) {
            arr[i].push(j + 1) //заполняем подмассив числами
        }
    }

console.log(arr); */

/* let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 5; j++) {
        arr[i].push(j + 1);
    }
}

console.log(arr); */

/* let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        arr[i].push("x");
    }
}

console.log(arr); */

/* let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let k = 0; k < 5; k++) {
            arr[i][j].push(k + 1);
        }
    }
}

console.log(arr); */

/* Проблемы при заполнении многомерных массивов в JavaScript

Давайте рассмотрим следующий код:

let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = []; // обратите внимание на эту строчку 
	
    for (let j = 0; j < 3; j++) {
        arr[i].push(j + 1);
    }
}

console.log(arr);

В этом коде важное место занимает создание пустого подмассива. Мы не можем опустить эту строчку, так как тогда во внутреннем цикле попытка запушить данные в arr[i] выдаст ошибку. */

/* let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);
    }
}

console.log(arr); */

/* let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);
    }
}

console.log(arr); */

/* let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);
    }
}

console.log(arr); */

/* let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);
    }
}

console.log(arr); */

/* let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
	
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);
    }
}

console.log(arr); */

/* let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);
    }
}

console.log(arr); */

/* Заполнение многомерных массивов по порядку в JavaScript

В предыдущих примерах все числа в подмассивах были одинаковыми. Давайте теперь сделаем так, чтобы числа возрастали, вот так:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

Для этого нужно сделать специальную переменную-счетчик, которая будет увеличивать свое значение на 1 при каждой итерации внутреннего цикла. Значение этого счетчика мы и будем записывать в массив, вот так:

let arr = [];
let k = 1; //счетчик

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i].push(k); // записываем счетчик
        k++; //увеличиваем счетчик
    }
}

console.log(arr);

Можно упростить код, сделав увеличение счетчика после присваивания:

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i].push(k++)
    }
}

console.log(arr);

Обратите внимание на то, что в данном случае должно быть обязательно k++, а не ++k, так как второй вариант сначала выполнит увеличение счетчика, а уже потом запись в массив (то есть в результате массив начнется с двойки, а не с единицы, вот так:

[[2, 3, 4], [5, 6, 7], [8, 9, 10]]) */

/* let arr = [];
let k = 1;

for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i].push(k++);
    }
}

console.log(arr); */

/* let arr = [];
let k = 2;

for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i].push(k);
        k += 2;
    }
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 2; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let m = 0; m < 2; m++) {
            arr[i][j].push(k++);
        }
    }
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) { 
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) { 
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) { 
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) { 
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) { 
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++;
	}
}

console.log(arr); */

/* Многомерные объекты в JavaScript

Многомерными могут быть не только массивы, но и объекты, вот пример:

let obj = {
	a: {
		key1: 'a1',
		key2: 'a2',
		key3: 'a3',
	},
	b: {
		key1: 'b1',
		key2: 'b2',
		key3: 'b3',
	},
	c: {
		key1: 'c1',
		key2: 'c2',
		key3: 'c3',
	},
}

Давайте выведем какие-нибудь элементы нашего объекта:

console.log(obj['a']['key1']); // выведет 'a1'

Можно также обращаться к элементам как к свойствам:

console.log(obj.a.key1); // выведет 'a1'

Можно комбинировать оба способа:

console.log(obj['a'].key1); // выведет 'a1'
console.log(obj.a['key1']); // выведет 'a1' */

/* let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}

console.log(obj["key1"].key1 + obj["key1"].key2 + obj["key1"].key3 + obj["key2"].key1 + obj["key2"].key2 + obj["key2"].key3 + obj["key3"].key1 + obj["key3"].key2 + obj["key3"].key3); */

/* let obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}

console.log(obj[2][2]);
console.log(obj[3][1]); */

/* let obj = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
}

console.log(obj["key1"]["a"] + obj["key1"]["b"] + obj["key1"]["c"]["d"] + obj["key1"]["c"]["e"] + obj["key1"]["f"] + obj["key2"]["g"] + obj["key2"]["h"]); */

/* Перебор многомерных объектов в JavaScript

Пусть дан следующий двухмерный объект:

let obj = {
	a: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	b: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	c: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
Давайте выведем все его элементы на экран. Для этого нам необходимо запустить два вложенных друг в друга цикла for-in:

for (let key in obj) {
	let subObj = obj[key];
	
	for (let subKey in subObj) {
		console.log(subObj[subKey]);
	}
} */

/* let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let sum = 0;

for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        sum += subObj[subKey];
    }
}

console.log(sum); */

/* let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}

let sum = 0;

for (let key in obj) {
    let subObj1 = obj[key];
    for (let subKey1 in subObj1) {
        let subObj2 = subObj1[subKey1];
        for (let subKey2 in subObj2) {
            let value = subObj2[subKey2];
            sum += value;
        }
    }
}

console.log(sum); */

/* Многомерные структуры в JavaScript

Можно комбинировать многомерные массивы и объекты, создавая различные структуры. Давайте, к примеру, сделаем объект, содержащий внутри себя массивы:

let users = {
	'boys':  ['boy1', 'boy2', 'boy3'],
	'girls': ['girl1', 'girl2', 
		'girl3'], 
};

Выведем какой-нибудь элемент из этого объекта:

console.log(users['boys'][1]); // выведет 'boy2' */

/* let students = {
	'group1': ['name11', 'name12', 
		'name13'], 
	'group2': ['name21', 'name22', 
		'name23'], 
	'group3': ['name31', 'name32', 
		'name33'], 
};

console.log(students["group3"][0]); */

/* Перебор многомерных структур JavaScript

let students = {
	'group1': ['student11', 'student12', 
		'student13'], 
	'group2': ['student21', 'student22', 
		'student23'], 
	'group3': ['student31', 'student32'],
};

Давайте выведем на экран имена всех студентов, перебрав наш объект двумя вложенными циклами.

Как вы видите, у нас объект с массивами. Это значит, что первый цикл должен быть по объекту, а второй - по массивам. To есть первый цикл будет for-in, а второй - for-of, вот так:

for (let group in students) {
	for (let name of students[group]) {
		console.log(name);
	}
} */

/* let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};

for (let key in data) {
    for (let value of data[key]) {
        console.log(value);
    }
} */

/* let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data23',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];

for (let value of data) {
    for (let key in value) {
        console.log(value[key]);
    }
} */

/* let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];

for (let elem of data) {
    for (let key in elem) {
        for (let value of elem[key]) {
            console.log(value);
        }
    }
} */

/* Массив объектов в JavaScript

Самой распространенной многомерной структурой является массив объектов. У него есть некоторые особенности. Давайте их изучим. Пусть у нас есть следующий массив с юзерами:

let users = [
	{
		name: 'name1',
		surn: 'surn1',
	},
	{
		name: 'name2',
		surn: 'surn2',
	},
	{
		name: 'name3',
		surn: 'surn3',
	},
];

Давайте переберем всех юзеров и выведем в консоль их имена и фамилии. При переборе массива объектов как правило используют только один цикл по массиву, а внутри него к объектам обращаются по ключам. Сделаем это:

for (let user of users) {
	console.log(user.name + ' ' + 
		user.surn); 
} */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let employee of employees) {
    console.log(employee.name + " - " + employee.salary);
} */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

let sum = 0;

for (let employee of employees) {
    sum += employee.salary;
}

console.log(sum); */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

let sum = 0;

for (let employee of employees) {
    if (employee.age >= 30) {
        sum += employee.salary;
    }
}

console.log(sum); */

/* Ключи из переменных в многомерных структурах JavaScript

Пусть дан следующий объект:

let obj = {
	'sub1': ['11', '12', '13'],
	'sub2': ['21', '22', '23'],
};

Давайте выведем какой-нибудь элемент из нашего объекта, например, элемент '22':

console.log(obj['sub2'][1]);

Пусть теперь ключи хранятся в переменных:

let lang = 'sub2';
let day = 1;

Выведем с помощью наших переменных элемент многомерной структуры:

console.log(obj[lang][day]); */

/* let affairs = {
	'2018': {
		11: {
			29: ['name111', 'name112', 'name113'],
			30: ['name121', 'name122', 'name123'],
		},
		12: {
			30: ['name211', 'name212', 'name213'],
			31: ['name221', 'name222', 'name223'],
		},
	},
	'2019': {
		12: {
			29: ['name311', 'name312', 'name313'],
			30: ['name321', 'name322', 'name323'],
			31: ['name331', 'name332', 'name333'],
		}
	},
}

let day = 30;
let month = 12;
let year = 2019;

console.log(affairs[year][month][day]); */

/* let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';

console.log(obj[key1][key2]); */

/* let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';

console.log(obj[key1][key2]); */

/* let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';

console.log(obj[key1][key2]); */

/* let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4'

console.log(obj[key1][key2]); */

/* Добавление элементов в многомерные массивы JavaScript

Пусть у нас есть вот такой массив с юзерами:

let users = [
	{
		name: 'name1',
		surn: 'surn1',
	},
	{
		name: 'name2',
		surn: 'surn2',
	},
	{
		name: 'name3',
		surn: 'surn3',
	},
];

Давайте добавим в этот массив еще одного юзера. Для этого параметром метода push передадим новый объект с юзером:

users.push({
	name: 'name4',
	surn: 'surn4',
}); */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];

employees.push({
	name: 'name4',
	salary: 600,
	age: 31,
	});

console.log(employees); */

/* Добавление элементов в многомерные объекты JavaScript

Пусть у нас дан следующий объект со студентами:

let students = {
	'group1': ['student11', 'student12', 
		'student13'], 
	'group2': ['student21', 'student22', 
		'student23'], 
	'group3': ['student31', 'student32'],
};

Давайте добавим еще одного студента в первую группу:

Давайте теперь сделаем еще одну, четвертую группу и добавим в нее студента. Для этого сначала обязательно нужно объявить новую группу массивом:

students.group4 = [];
И только потом в нее можно добавлять студентов:

students.group4.push('student41'); */

/* let affairs = {
	'2019-12-28': ['data11', 'data12', 
		'data13'], 
	'2019-12-29': ['data21', 'data22', 
		'data23'], 
	'2019-12-30': ['data31', 'data32', 
		'data33'], 
}

affairs['2019-12-29'].push('data24');

affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('data34', 'data35');

console.log(affairs); */

/* let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 
			'student113'], 
		'subgroup12': ['student121', 'student122', 
			'student123'], 
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 
			'student213'], 
		'subgroup22': ['student221', 'student222', 
			'student223'], 
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 
			'student313'], 
		'subgroup32': ['student321', 'student322', 
			'student323'], 
	},
};

students.group1.subgroup11.push('student114');

students.group1.subgroup13 = [];

students.group4 = {
	subgroup41: ['student411', 'student412']
};

console.log(students); */