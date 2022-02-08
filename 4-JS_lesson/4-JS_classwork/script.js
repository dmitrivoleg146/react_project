// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumber(a, b, c) {
    console.log(Math.min(a, b, c))
}

minNumber(30, -20, 0);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber(a, b, c) {
    console.log(Math.max(a, b, c))
}

maxNumber(80, 0, -200);

//- створити функцію яка повертає найбільше число з масиву
let max_array = [-20, 20, -20, -40, -500, 0, -10.2];

function maxArrayNumber(array) {
    return Math.max.apply(null, array)
}

console.log(maxArrayNumber(max_array));

//- створити функцію яка повертає найменьше число з масиву
let min_array = [-20, 20, -20, -40, -500, 0, -10.2];

function minArrayNumber(array2) {
    return Math.min.apply(null, array2);
}

console.log(minArrayNumber(min_array));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let massive = [1, 2, 10];

function sumArr(array3) {
    let sum = 0;
    for (let i = 0; i < array3.length; i++) {
        sum += array3[i];
    }
    return sum;
}

console.log(sumArr(massive));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let masiveAnother = [3, 45, 30, -1, -10, 0];

function middleArr(array4) {
    let sum = 0;
    for (let i = 0; i < array4.length; i++) {
        sum += array4[i] / array4.length;

    }
    return sum;
}

console.log(middleArr(masiveAnother));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log(anyWord(3, 60, 40, -40, 0));

function anyWord(array) {
    let max = arguments[0];
    let min = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element;
        } else if (element < min) {
            min = element;
        }
    }
    console.log(max);
    return min;
}

//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomWords(words) {
    let func=[];
    for (let i = 0; i < words; i++) {
        func.push(Math.round(Math.random() * 100));
    }
    return func;
}

console.log(randomWords(19));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function limitArray(numbers ,limit){
    let func=[];
    for(let i=0;i<numbers;i++){
        func.push(Math.round(Math.random()*limit));
    }
    return func;
}
console.log(limitArray(10,1000))

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function newArray(...array){
    let array2=[];
    for(let i=array.length-1;i>=0;i--){
        array2.push(array[i]);
    }
    return array2;
}
console.log(newArray(3,5,6,7));



