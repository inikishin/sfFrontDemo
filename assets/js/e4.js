
// Задание 1.
function showOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, ' - ', obj[key])
        }
    }
}

let obj1 = {};
obj1.attr1 = 'attr1 value'
let obj2 = Object.create(obj1);
obj2.attr2 = 'attr2 val'
showOwnProperties(obj2);

// Задание 2.
//
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного
// объекта свойство с данным именем. Функция должна возвращать true или false.

function checkAttribute(attr, obj) {
    if (attr in obj) {
        return true
    }
    else {
        return false
    }
}

let obj = {'attr1': 'val1'}
console.log(checkAttribute('attr1', obj));
console.log(checkAttribute('attr2', obj));

// Задание 3.
//
// Написать функцию, которая создает пустой объект, но без прототипа.
function createEmptyObj() {
    return Object.create(null);
}
console.log(createEmptyObj())

// Задание 4

function Device(power) {
    this.power = power
    this.isOn = false
}

Device.prototype.getPower = function() {
    if (this.isOn) {
        return this.power;
    }
    else {
        return 0;
    }
}

Device.prototype.switchOnOff = function() {
    this.isOn = !this.isOn
}


function Tv(diagonal) {
    this.diagonal = diagonal
}

Tv.prototype = new Device(100)


function Notebook(cpu, ram, hdd) {
    this.cpu = cpu
    this.ram = ram
    this.hdd = hdd
}

Notebook.prototype = new Device(150)

const tv1 = new Tv('42"')
console.log(tv1, tv1.getPower())
tv1.switchOnOff()
console.log(tv1, tv1.getPower())
tv1.switchOnOff()
console.log(tv1, tv1.getPower())

const note1 = new Notebook('i7', '16Gb', '500Gb')
console.log(note1, note1.getPower())
note1.switchOnOff()
console.log(note1, note1.getPower())
note1.switchOnOff()
console.log(note1, note1.getPower())

note1.switchOnOff()
tv1.switchOnOff()
console.log('Overall power:', note1.getPower() + tv1.getPower())

// Задание 5

class DeviceClass {
    constructor(power) {
        this.power = power
        this.isOn = false
    }

    getPower() {
        if (this.isOn) {
            return this.power;
        } else {
            return 0;
        }
    }

    switchOnOff() {
        this.isOn = !this.isOn
    }
}

class TvClass extends DeviceClass {
    constructor(power, diagonal) {
        super(power);
        this.diagonal = diagonal
    }
}

class NotebookClass extends DeviceClass {
    constructor(power, cpu, ram, hdd) {
        super(power);
        this.cpu = cpu
        this.ram = ram
        this.hdd = hdd
    }
}

const tv2 = new TvClass(30, '42"')
console.log(tv2, tv2.getPower())
tv2.switchOnOff()
console.log(tv2, tv2.getPower())
tv2.switchOnOff()
console.log(tv2, tv2.getPower())

const note2 = new NotebookClass(45, 'i7', '16Gb', '500Gb')
console.log(note2, note2.getPower())
note2.switchOnOff()
console.log(note2, note2.getPower())
note2.switchOnOff()
console.log(note2, note2.getPower())

note2.switchOnOff()
tv2.switchOnOff()
console.log('Overall power:', note1.getPower() + tv1.getPower() + note2.getPower() + tv2.getPower())