// Задание 1
let inputValue = prompt("Enter value: ");

console.log(typeof inputValue++)

if (typeof inputValue++ === 'number' && !inputValue === 'NaN') {
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