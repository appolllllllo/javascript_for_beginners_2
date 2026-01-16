// Передача функций параметрами в JavaScript

/* Функции, подобно числам, строкам и массивам, могут передаваться параметрами в другие функции.

Рассмотрим подробнее на практическом примере. Пусть у нас есть функция test, принимающая два параметра:

test(параметр1, параметр2);

Давайте в первый параметр функции test передадим анонимную функцию, возвращающую 1, а во второй параметр - анонимную функцию, возвращающую 2:

test(
	function() {return 1;},
	function() {return 2;}
);

Код, приведенный выше, пока не рабочий, так как мы не создали саму функцию. Сделаем это:

function test(func1, func2) {
	
}

При определении функции мы указали два параметра - func1 и func2. Эти параметры ничего не знают про то, что в них будет передаваться. Можем, например, передать числа:

test(1, 2); // вызываем функцию

function test(func1, func2) {
	console.log(func1); // выведет 1
	console.log(func2); // выведет 2
}

А можем передать функции:

test(
	function() {return 1;}, // первый параметр 
	function() {return 2;}  // второй параметр 
);

function test(func1, func2) {
	console.log(func1); // выведет 'function() {return 1;}' 
	console.log(func2); // выведет 'function() {return 2;}' 
}

Как вы видите, теперь в консоль выводится исходный код функций. Давайте сделаем так, чтобы он выводил их результаты. Для этого напишем функциям круглые скобки:

test(
	function() {return 1;},
	function() {return 2;}
);

function test(func1, func2) {
	console.log( func1() ); // выведет 1
	console.log( func2() ); // выведет 2
}

Давайте выведем в консоль сумму результатов первой и второй функции:

test(
	function() {return 1;},
	function() {return 2;}
);

function test(func1, func2) {
	console.log( func1() + func2() 
		); // выведет 3 
} */

/* function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}

test (
    function() {return 1;},
    function() {return 2;},
    function() {return 3;}
); */

// Именованные функции-параметры в JavaScript

/* Функции, которые передаются параметрами, не обязательно должны быть анонимными.

Давайте сделаем их как Function Declaration. Первую функцию назовем get1, а вторую - get2:

function get1() {
	return 1;
}
function get2() {
	return 2;
}

Передадим в параметры функции test имена функций get1 и get2 (то есть их исходный код, а не результат):

function get1() {
	return 1;
}
function get2() {
	return 2;
}

test(get1, get2); // выведет 3

function test(func1, func2) {
	console.log( func1() + func2() );
}

Переделаем на Function Expression:

let get1 = function() {
	return 1;
}
let get2 = function() {
	return 2;
}

test(get1, get2); // выведет 3

function test(func1, func2) {
	console.log( func1() + func2() );
} */

/* function get1() {
    return 1;
}

function get2() {
    return 2;
}

function get3() {
    return 3;
}

function test(func1, func2, func3) {
    return(func1() + func2() + func3());
}

console.log(test(get1, get2, get3)); */

/* function func1() {
    return 1;
}

function func2() {
    return 2;
}

function func3() {
    return 3;
}

function test(func1, func2, func3) {
    return func1() + func2() + func3();
}

console.log(test(func1, func2, func3)); */

/* let func1 = function () {
    return 1;
}

let func2 = function () {
    return 2;
}

let func3 = function () {
    return 3;
}

function test(func1, func2, func3) {
    return func1() + func2() + func3();
}

console.log(test(func1, func2, func3)); */

// Параметры передаваемых функций в JavaScript

/* Пусть у нас есть функция test, которая параметром принимает другую функцию и в консоль выводит результат работы этой переданной функции:

function test(func) {
	console.log( func() );
}

Пусть переданная функция func параметром принимает число и что-то с ним делает. Передадим ей, например, число 3:

function test(func) {
	console.log( func(3) );
}

Давайте теперь вызовем функцию test, передав в нее параметром анонимную функцию. Эта анонимная функции параметром будет принимать число и возвращать квадрат этого числа.

В результате всего этого наша конструкция выведет квадрат числа 3, то есть 9:

// Выведет 9:
test(
	function(num) {
		return num * num;
	}
);

function test(func) {
	console.log(func(3));
}

// Выведет 9:
test(function(num) {
	return num * num;
});

function test(func) {
	console.log(func(3));
} */

/* test(function(num) {
    return num ** 3;
})

function test(func) {
    console.log(func(7));
} */

/* function cube(num) {
    return num ** 3;
}

function test(func) {
    console.log(func(7));
}

test(cube); */

/* let cube = function(num) { return num ** 3};

function test(func) {
    console.log(func(7));
}

test(cube); */

/* function sum(num1, num2) {
    return num1 + num2;
}

function test(func) {
    console.log(func(2, 3));
}

test(sum); */

// Передача числа параметром в JavaScript

/* Давайте теперь число, с которым что-то делает передаваемая функция, не будем жестко хранить внутри test, а передадим первым параметром:

function test(num, func) { // первым параметром приходит число 
	console.log(func(num));
}

Воспользуемся нашей функцией:

function test(num, func) {
	console.log(func(num));
}

// Выведет 4:
test(2, function(num) {
	return num * num;
});

В удобство нашей конструкции: у нас есть одна функция test, параметром принимающая число. Но то, что будет происходить с числом не зашито жестко в функции test.

Мы можем, к примеру, вторым параметром функции test передать функцию, возводящую в квадрат, а можем, к примеру, возводящую в куб:

function test(num, func) {
	console.log(func(num));
}

// Найдем квадрат числа:
test(2, function(num) {
	return num * num; // возвращает квадрат
});

// Найдем куб числа:
test(2, function(num) {
	return num * num * num; // возвращает куб 
}); */

/* function test(num, func1, func2) {
    return func1(num) + func2(num);
}

console.log(test(3, function(num) {return num ** 2;}, function(num) {return num ** 3;})); */

// Применение передачи функции параметром в JavaScript

/* Давайте сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию. Переданная функция должна будет применится к каждому элементу массива:

function test(arr, func) {
    // вернем измененный масив  
}

Реализуем:

function test(arr, func) {
    // Запускаем цикл:
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]); // применяем функцию к каждому элементу
    }

    return arr; // возвращаем измененный масив
}

Применим нашу функцию к какому-нибудь массиву:

function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

// Преобразуем массив чисел в массив их квадратов: 

let result = test(
    [1, 2, 3],
    function(num) {return num * num;}
);

console.log(result);

Оформим вызов нашей функции изящнее (так более принято):

function test(arr, func) {
	for (let i = 0; i < arr.length; 
		i++) { 
		arr[i] = func(arr[i]);
	}
	
	return arr;
}

// Оформим код изящнее:
let result = test([1, 2, 3], function(num) {
	return num * num;
});

console.log(result); // выведет [1, 4, 9] */

/* function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
 }

let result = test([1, 2, 3],
    function cube(num) {
        return num ** 3;
    }
)

console.log(result); */

// Вложенные функции в JavaScript

/* Пусть у нас есть функция, параметром принимающая два числа и возвращающая сумму квадратов этих чисел:

function func(num1, num2) {
    return num1 * num1 + num2 * num2;
}

console.log(func(2, 3)); // выведет 13 (результат 2 * 2 + 3 * 3) 

Давайте операцию возведения в квадрат вынесем в вспомогательную функцию square:

function square(num) {
    return num * num;
}

function func(num1, num2) {
    return square(num1) + square(num2);
}

console.log(func(2, 3)); // выведет 13

Пусть мы уверены, что функция square будет использоваться только в функции func и больше ни в какой другой.

В этом случае было бы удобно сделать так, чтобы ее никто случайно не использовал (вы сами или другой программист, работающий вместе с вами).

В JavaScript есть изящное решение: можно нашу вспомогательную функцию square поместить вовнутрь func. В этом случае наша вспомогательная функция будет доступна только внутри func, а снаружи - не будет.

Сделаем это:

function func(num1, num2) {
    function square(num) {
        return num * num;
    }

    return square(num1) + square(num2);
}

console.log(func(2, 3)); // выведет 13

function func(num1, num2) {
	function square(num) {
		return num * num;
	}
	
	return square(num1) + square(num2);
}

console.log(square(2)); // выдаст ошибку */ 

/* function func(num1, num2) {
    function square(num) {
        return num ** 2;
    }
    function cube(num) {
        return num ** 3;
    }
    return square(num1) + cube(num2);
}

console.log(func(2, 3)); */

// Область видимости вложенных функций в JavaScript

/* Если функция содержит внутри другую функцию - переменные внешней функции видны во внутренней:

function test() {
	let num = 1; // переменная внешней функции
	
	function func() {
		console.log(num); // выведет 1
	}
	
	func(); // вызываем внутреннюю 
		функцию 
}

test(); // вызываем внешнюю функцию

Также во внутренней функции будут видны переменные, определенные снаружи внешней функции:

let num = 1; // глобальная переменная

function test() {
	function func() {
		console.log(num); // выведет 1
	}
	
	func(); // вызываем внутреннюю 
		функцию 
};

test(); // вызываем внешнюю функцию */

/* function test() {
	let num = 1;
	
	function func() {
		console.log(num); // выведет 1
	}
	
	func(); // вызываем внутреннюю функцию
}

test();  // вызываем внешнюю функцию */

/* function test() {
	let num = 1;
	
	function func() {
		console.log(num); // ничего не выведется в консоль, потому что мы не вызвали внутреннюю функцию
	}
}

test(); // вызываем внешнюю функцию */

/* function test() {
	let num = 1;
	
	function func() {
		console.log(num); // ничего не выведется в консоль, потому что мы не вызвали внешнюю функцию
	}
	
	func();
} */

/* function test() {
	let num;
	
	function func() {
		console.log(num); // выведется 1 и 2
	}
	
	num = 1
	func();
	
	num = 2
	func();
}

test(); */

// Параметры внешней функции в JavaScript

/* Параметры внешней функции также будут доступны во внутренней:

function test(num) {
	function func() {
		console.log(num); // выведет 1
	}
	
	func(); // вызываем внутреннюю функцию 
};

test(1); // передаем параметром число  */

/* function test(num1, num2) {
	function func() {
		console.log(num1 + num2); // выведется 3
	}
	
	func();
}

test(1, 2); */

/* function test(num1, num2) {
	function func() {
		console.log(num1 + num2); // выведется 4
	}
	
	num1 = 2;
	func();
}

test(1, 2); */

// Параметры внешней и внутренней функций в JavaScript

/* Давайте сделаем так, чтобы и внешняя функция и внутренняя принимали параметры:

function test(num) {
	function func(localNum) {
		console.log(localNum);
	}
}

Передадим параметр внешней функции в вызов внутренней функции:

function test(num) {
	function func(localNum) {
		console.log(localNum); // выведет 1
	}
	
	func(num); // передаем параметр
}

test(1); // передаем параметром число 

Получается, что во внутренней функции будет доступна переменная num как внешняя переменная из родительской функции и переменная localNum, являющаяся локальной переменной внутренней функции.

Обе эти переменные будут иметь одинаковые значения:

function test(num) {
	function func(localNum) {
		console.log(num); // выведет 1
		console.log(localNum); // выведет 1
	}
	
	func(num);
}

test(1);

Разница между ними будет в следующем: если во внутренней функции изменить переменную num - она поменяется и во внешней функции:

function test(num) {
	function func(localNum) {
		num = 2; // меняем переменную num
	}
	
	func(num);   // передаем параметр
	console.log(num);  // выведет 2
}

test(1); // передаем параметром число 

А переменная localNum будет локальной. Ее изменения не будут приводить ни к каким изменениям во внешней функции. Да и сама переменная localNum не будет видна снаружи внутренней функции:

function test(num) {
	function func(localNum) {
		localNum = 2; // меняем переменную num
	}
	
	func(num); // передаем параметр
}

test(1); // передаем параметром 
	число */

/* function test(num) {
	function func(localNum) {
		console.log(localNum); // выведется 1
	}
	
	func(num);
}

test(1); */

/* function test(num) {
	function func(localNum) {
		console.log(localNum); // выведется 2
	}
	
	func(num + 1);
}

test(1); */

/* function test(num) {
	function func(localNum) {
		console.log(num); // выведет 1
	}
	
	func(num + 1);
}

test(1); */

/* function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num); // выведет 1
}

test(1); */

/* function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(localNum); // код выдаст ошибку
}

test(1); */

/* function test(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	console.log(num); // выведет 2
}

test(1); */

// Одноименные параметры в JavaScript

/* Пусть теперь внешняя и внутренняя функция имеют одноименные параметры:

function test(num) {
	function func(num) {
		console.log(num); // выведет 1
	}
	
	func(num);
};

test(1);

В этом случае во внутренней функции будет локальная переменная num. Ее изменение во внутренней функции никак не будет влиять на внешнюю переменную num:

function test(num) {
	function func(num) {
		num = 2; // меняем локальную переменную num 
	}
	
	func(num);
	console.log(num); // выведет 1 - ничего не поменялось 
}

test(1);

Получится, что внутренняя функция никак не сможет обратиться к внешней переменной num для того, чтобы изменить ее:

function test(num) {
	function func(num) {
		// тут нельзя получить доступ в внешней переменной num 
	}
	
	func(num);
}
test(1); */

/* function test(num) {
	function func(num) {
		console.log(num); // выведется 1
	}
	
	func(num);
}

test(1); */

/* function test(num) {
	function func(num) {
		num = 2;
	}
	
	func(num);
	console.log(num); // выведется 1
}

test(1); */

/* function test(num) {
	function func(num) {
		console.log(num); // выведется 2
	}
	
	num = 2;
	func(num);
}

test(1); */

/* function test(num) {
	function func(num) {
		console.log(num); // выведется 1
	}
	
	func(num);
	num = 2;
}

test(1); */

// Функция, возвращающая функцию в JavaScript

/* Пусть у нас есть вот такая функция, возвращающая строку:

function func() {
	return '!';
}

let result = func();
console.log(result); // выведет '!'

Давайте теперь вместо строки, по аналогии, вернем анонимную функцию:

function func() {
	return function() {
		return '!';
	};
}

let result = func(); // в переменной result будет функция 
console.log(result); // выведет 'function() {return '!';}' 

Как вы видите, переменная result теперь представляет собой функцию. Давайте выведем в консоль результат ее работы. Для этого напишем ей круглые скобки:

function func() {
	return function() {
		return '!';
	};
}

let result = func();
console.log( result() ); // выведет '!' 

Так как вызов func() возвращает функцию, то мы можем сразу же и вызвать эту возвращаемую функцию, вот так: func()() - первые круглые скобки получают результат функции func (который сам является функцией), а вторые круглые скобки применяются к результату func.

Давайте попробуем:

function func() {
	return function() {
		return '!';
	};
}

console.log( func()() ); // выведет '!' */

/* function func1() {
    return function() {
        return 1;
    }
}

function func2() {
    return function() {
        return 2;
    }
}

console.log(func1()() + func2()()); */

// Любой уровень вложенности в JavaScript

/* Могут быть и такие вызовы функций: func()()() и func()()()() - и так далее до бесконечности.

Для этого нужно, чтобы внутренняя функция тоже возвращала функцию, та - еще одну и так далее. Вот пример:

function func() {
	return function() {
		return function() {
			return '!';
		};
	};
}

console.log( func()()() ); // выведет '!' */

/* function func() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return "!";
                };
            };
        };
    };
}

console.log(func()()()()()); */

// Параметры возвращаемой функции в JavaScript

/* В изученные нами вызовы функций можно передавать параметры. В следующем примере внутренняя функция ожидает параметром строку и выводит ее в консоль:

function func() {
	return function(str) {
		return str;
	};
}

Внутренней функции соответствует вторая скобка при вызове, значит в эту вторую скобку и передаем желаемую строку:

function func() {
	return function(str) {
		return str;
	};
}

console.log( func()('!') ); // выведет '!' 

Давайте сделаем так, чтобы и первая функция принимала параметр, и вторая. А результатом вызова сделаем сумму этих параметров:

function func(num1) {
	return function(num2) {
		return num1 + num2;
	};
}

console.log( func(1)(2) ); // выведет 3 */

/* function func(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
}

console.log(func(2)(3)(4)); */

/* function func(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return function() {
                    return [num1, num2, num3, num4];
                }
            };
        };
    };
}

console.log(func(2)(3)(4)(5)()); */

// Функции-коллбэки в JavaScript

/* Функции можно передавать параметрами в другие функции. Такие функции-параметры называются коллбэками (callback). Давайте посмотрим работу с ними на примере.

Пусть мы хотим сделать функцию, которая первым параметром будет принимать массив, а вторым - коллбэк, который будет применять к каждому элементу массива:

function each(arr, callback) {
	// тут какой-то код
}

Напишем реализацию нашей функции:

function each(arr, callback) {
    let result = [];

    for (let ekem of arr) {
        result.push( callback(elem) ); //вызываем функцию-коллбэк
    }

    return result;
}

Наша функция each - универсальная. Это значит, что мы можем передавать в нее различные коллбэки, выполняя разные операции над массивами. При этом код нашей функции останется неизменным - будут меняться только передаваемые коллбэки.

Давайте для примера с помощью нашей функции возведем в квадрат каждый элемент какого-нибудь массива. Для этого передадим параметром соответствующий коллбэк:

let result = each([1, 2, 3, 4, 5],
    function(num) {
        return num ** 2;
    });

    console.log(result);

А теперь возведем элементы массива в куб. Для этого в качестве параметра передадим уже другой коллбэк, выполняющий эту операцию:

let result = each([1, 2, 3, 4, 5], 
	function(num) { 
	return num ** 3;
});

console.log(result); */

/* function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push( callback(elem));
    }

    return result;
}

let result = each([1, 2, 3, 4, 5], 
	function(num) { 
	return num * 2;
});

console.log(result); */

/* function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }

    return result;
}

let strings = ["hello", "world", "JavaScript"];

let reversed = each(strings, function(str) {
    return str.split("").reverse().join("");
});

console.log(reversed); */

/* function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push( callback(elem));
    }

    return result;
}

let strings = ["hello", "world"];

let newStrings = each(strings, function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
})

console.log(newStrings); */

// Нюансы коллбэков в JavaScript

/* Коллбэки не обязательно должны быть анонимными функциями. Пусть для примера у нас есть следующая функция:

function square(num) {
	return num ** 2;
}

function square(num) {
	return num * num;
}

let result = each([1, 2, 3, 4, 5], 
	square); 
console.log(result); */

/* function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }
    return result;
}

function cube(num) {
	return num ** 3;
}

let result = each([1, 2, 3, 4, 5], cube);

console.log(result); */

// Стрелочные функции в JavaScript

/* Давайте теперь рассмотрим стрелочные функции, упрощающие синтаксис функций.

В следующем примере кода первой написана обычная функция, а второй - соответствующая ей стрелочная (обе функции делают одно и тоже):

let func1 = function(num1, num2) {
    let result = num1 * num2;
    return result;
}

let func2 = (num1, num2) => {
    let result = num1 * num2;
    return result;
}

Если в функции одна строка кода, то в стрелочных функциях можно не писать return и фигурные скобки:

let func1 = function(num1, num2) {
	return num1 * num2
}

let func2 = (num1, num2) => num1 * num2;

Если параметр стрелочной функции один - круглые скобки можно не писать:

let func1 = function(num) {
	return num * num;
}

let func2 = num => num * num

Если в функции вообще нет параметров - нужно писать пустые круглые скобки:

let func1 = function() {
	console.log('!!!');
}

let func2 = () => console.log('!!!') */

// Применение стрелочных функций в JavaScript

/* Особое преимущество стрелочные функции имеют в качестве коллбэков. Давайте посмотрим на примере, на сколько упрощается код в таком случае. Пусть для примера у нас есть следущая функция filter:

function filter(arr, callback) {
    let res = [];

    for (let elem of arr) {
        if (callback(elem) === true) {
            res.push(elem);
        }
    }

    return res;
}

let result = filter([1, 2, 3, 4, 5], 
	function(elem) { 
	if (elem % 2 === 0) {
		return true;
	} else {
		return false;
	}
});

Давайте теперь упростим нашу функцию. Для начала давайте избавимся от конструкции if и напишем условие просто через оператор ===:

let result = filter([1, 2, 3, 4, 5], 
	function(elem) { 
	return elem % 2 == 0;
});

Заменим теперь обычную функцию на стрелочную:

let result = filter([1, 2, 3, 4, 5], 
	elem => elem % 2 == 0); */

/* let result = filter([1, 2, 3, 4, 5], 
    elem => elem > 0); */