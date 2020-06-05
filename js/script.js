let myVar;
console.log('myVar: ', myVar);

let obj = {};

console.log('obj.prop: ', obj.prop);

let arr = [1,2,3];

console.log('arr[5]: ', arr[5]);

let myTrue = true;
let myFalse = false;

console.log(2 === 2);
console.log(2 === 3);

console.log(Boolean(5));
console.log(Boolean('Hello'));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function(){}));
console.log('FALSE идет сейчас');
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
console.log('ЛОГИЧЕСКИЕ ОПЕРАТОРЫ');
// ||(или) &&(и) !(не)
// || возвращает истину если 1 true
console.log('||');
console.log(true || true); 
console.log(true || false);
console.log(false || false);

// && возвращает истину если 2 true
console.log('&&');
console.log(true && true); 
console.log(true && false);
console.log(false && false);
// ! изменяет знаение на противополодное
console.log('!');
console.log(!true);
console.log(!false);


// Числа
console.log(50);
console.log(7.5); // дробное
console.log(.5); // если 0 можно отпустить
console.log(5e6);
console.log(0b1111); // двоичная форма
console.log(0o11); // восьмеричная
console.log(0x22aacc); // шестнадцатеричная
console.log(Infinity); // может быть -Infinity
console.log(NaN);
// не будет ошибки если выйти за диапазон чисел
console.log('Нельзя выйти за максимальный диапазон чисел');
console.log(1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
console.log(-1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
// арифметические операторы
console.log('Арифметические операторы');
console.log(+5); // унарный плюс
console.log(-5); // унарный минус
// инкрименты
console.log('Инкрименты');
console.log('оператор: ++ до переменной')
let i = 5;
console.log(++i) // плюсует потом возвращает
console.log(i);

console.log('оператор: ++ после переменной')
let k = 5;
console.log(k++); // возвращает потом плюсует
console.log(k);

// декременты
console.log('Декременты');
console.log('оператор: -- до переменной')
let j = 5;
console.log(--j); // уменьшает потом возвращает
console.log(j);

console.log('оператор: -- после переменной')
let p = 5;
console.log(p--); // возвращает потом уменьшает
console.log(p);

// Math
console.log('Math');
console.log(Math.pow(5, 3)); // степень (старый)
// узнать является ли число целым
console.log('Узнать число целое');
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.5));

// Строки
console.log('Строки');
let myString = 'Hello world!';
console.log('myString: ', myString);
// конкатенация
console.log('Конкатенация');
console.log('Hello' + ' world');

let myStr = ' Hello my friends!';
console.log(myString + myStr);

let str = 'Hello my Friends'
// length длина строки
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);

console.log(str.substring(1)); // возвращение
console.log(str.substring(2, 5));
console.log(str.slice(-2)); // принимаает отрицательное значение
console.log(str.substr(1, 5)); // вернуть с какой буквы сколько букв

console.log(str);

console.log(str.indexOf('H'));
console.log(str.replace('my Friends', 'World'));

console.log(str.split(' '));

let fruits = 'apple, kiwi, orange';
console.log(fruits.split(', '));