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