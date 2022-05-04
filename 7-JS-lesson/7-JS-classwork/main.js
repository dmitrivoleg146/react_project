//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, max_speed, engine_volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_volume = engine_volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }
    this.info = function () {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let cars = new Car('Porsche', 'Germany', 2022, 290, 3.0);
console.log(cars)
cars.drive();
cars.info();
cars.increaseMaxSpeed(50);
console.log(cars.max_speed)
cars.changeYear(2015);
console.log(cars.year)
cars.addDriver('Ivan');
console.log(cars)


//   // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, creator, year, max_speed, engine_volume) {
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;
        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${max_speed} на годину`);
        }
        this.info = function () {
            for (const argument of this) {
                console.log(`${this[argument]} - ${argument}`)
            }
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.max_speed += newSpeed;
        }
        this.changeYear = function (newValue) {
            this.year = newValue;
        }
        this.addDriver = function (driver) {
            this.driver = driver
        }
    }
}

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name, age, leg_size) {
        this.name = name;
        this.age = age;
        this.leg_size = leg_size;
    }
}

let popelushka1 = [
    new Popelushka('Inna', 20, 35),
    new Popelushka('Vira', 30, 38),
    new Popelushka('Anna', 19, 36),
    new Popelushka('Nastia', 21, 34),
    new Popelushka('Vika', 28, 37),
    new Popelushka('Kate', 32, 39),
    new Popelushka('Angelina', 24, 40),
    new Popelushka('Ira', 29, 41),
    new Popelushka('Sasha', 19, 43),
    new Popelushka('Kate', 22, 42)
]

class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

let prince1 = (new Prince('Ivan', 22, 43))

let connection = (popelushka1, prince1) => {
    for (let popelushaElement of popelushka1) {
        if (popelushaElement.leg_size === prince1.slipper) {
            return (`Similar ${popelushaElement.name}`)
        }
    }

}
console.log(connection(popelushka1, prince1));

let finder = popelushka1.find((item) => item.leg_size === prince1.slipper)
console.log(finder);




