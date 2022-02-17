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
class Cars{
        constructor(model, creator, year, max_speed, engine_volume) {
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;
        this.drive=function (){
            console.log(`Їдемо зі швидкістю ${max_speed} на годину`);
        }
        this.info=function (){
            for (const argument of this) {
                console.log(`${this[argument]} - ${argument}`)
            }
        }
        this.increaseMaxSpeed=function(newSpeed){
            this.max_speed+=newSpeed;
        }
        this.changeYear=function(newValue){
            this.year=newValue;
        }
        this.addDriver=function(driver){
            this.driver=driver
        }
    }
}