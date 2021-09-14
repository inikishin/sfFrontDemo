// Задание 1
let inputValue = prompt("Enter value: ");

console.log(typeof inputValue++)

if (typeof inputValue++ === 'number' && !(inputValue === 'NaN')) {
    console.log(inputValue % 2 === 0 ? 'Четное' : 'Нечетное');
} else {
    console.log('Упс, кажется, вы ошиблись');
}

// Задание 2
const x = {}
switch (typeof x) {
    case 'number':
        console.log(`${x} - число`);
        break;
    case 'boolean':
        console.log(`${x} - булево`);
        break;
    case 'string':
        console.log(`${x} - строка`);
        break;
    default:
        console.log(`Тип ${x} не определён`)
        break;
}

// Задание 3
const s = 'Hello'
console.log(s.split('').reverse().join(''));

// Задание 4
const n = Math.random() * 100;
console.log(`Random number - ${n}`);

// Задание 5
const arr = [1,2,3,4,5,6]

console.log(`Array count - ${arr.length}`);
arr.map(item => {console.log(item)});

// Задание 6
const arr6 = [1,2,3]

const s6 = new Set(arr6);
s6.size === 1 ? console.log('true') : console.log('false')

// Задание 7
const arr7 = [0, 1, 2, 3, 4, '0', NaN]
let res = {
    zero: 0,
    odd: 0,
    even: 0 // четный
}

for (i = 0; i < arr7.length; i++) {
    if (typeof arr7[i] === 'number' && !(isNaN(arr7[i]))) {
        if (arr7[i] === 0) {
            res.zero++
        } else if (arr7[i] % 2 === 0) {
            res.even++
        }
        else
        {
            res.odd++
        }
    }
}

console.log(res);
