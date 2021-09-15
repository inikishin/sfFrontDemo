// Задание 1
let arr = [0, 1, 2, 3, 4, '0', NaN]
let res = {
    zero: 0,
    odd: 0,
    even: 0 // четный
}

arr.forEach(item => {
        checkElementType(item);
    }
);

function checkElementType(element) {
    if (typeof element === 'number' && !(isNaN(element))) {
        if (element === 0) {
            res.zero++
        } else if (element % 2 === 0) {
            res.even++
        }
        else
        {
            res.odd++
        }
    }
}

console.log(res);

// Задание 2
function isSimpleNumber(n) {
    const value = Math.abs(n);
    if (value > 1000) {
        return "Данные неверны";
    }

    if (value === 1 || value === 0) {
        return true;
    }

    let condition = true

    for (i=2; i<value; i++) {
        if (value % i === 0) {
            condition = false
        }
    }
    return condition
}
console.log(isSimpleNumber(-3));

// Задание 3
function fn1(n1) {
    return function fn2(n2) {return n1+n2}
}

console.log(fn1(1)(2))

// Задание 4
let inputValue1 = prompt()
let inputValue2 = prompt()

let x = inputValue1

function printValue() {
    if (x <= inputValue2) {
        console.log(x);
        x++;
    }
    else
    {
        clearInterval(interval);
        console.log("That's all!")
    }
}

let interval = setInterval(printValue, 1000);

// Задание 5
inputValue1 = prompt('x')
inputValue2 = prompt('n')

const fn = (x, n) => (Math.pow(inputValue1, inputValue2));

console.log(`Result - ${fn(2, 3)}`);
