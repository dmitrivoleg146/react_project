//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNumber = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a)
    } else if (b < c && b < a) {
        console.log(b);
    } else {
        console.log(c);
    }
}
minNumber(4, 0, -20);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumber = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > c && b > a) {
        console.log(b);
    } else {
        console.log(c);
    }
}
maxNumber(90, 49, -10);

//- створити функцію яка повертає найбільше число з масиву
let arr1 = [34, 12, 0, -39, 200, 12, 45]
let maxArray = (array1) => {
    let max = array1[0];
    for (const array1Element of array1) {
        if (array1Element > max) {
            max = array1Element;
        }
    }
    return max;
}
console.log(maxArray(arr1));

//- створити функцію яка повертає найменьше число з масиву
let arr2 = [34, 12, 0, -39, 200, 12, 45];
let minArray = (array2) => {
    let min = array2[0];
    for (const minElement of array2) {
        if (minElement < min) {
            min = minElement;
        }
    }
    return min;
}
console.log(minArray(arr2))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
let arr3 = [1, 2, 10];
let sumArray = (array3) => {
    let sum = 0;
    for (const array3Element of array3) {
        sum += array3Element;
    }
    return sum;
}
console.log(sumArray(arr3));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arr4 = [1, 2, 10];
let middleArray = (array4) => {
    let sum = 0;
    for (const array4Element of array4) {
        sum += array4Element / array4.length;
    }
    return sum
}
console.log(middleArray(arr4));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let manyNumbers = (...numbers) => {
    let min = numbers[0];
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        } else if (number < min) {
            min = number;
        }
    }
    console.log(max);
    return min;
}
console.log(manyNumbers(5, 7, 2, -4, 10, 0, -20, -100));

//- створити функцію яка заповнює масив рандомними числами
let randomNumbers = (lenght) => {
    let arr1 = [];
    for (let i = 0; i < lenght; i++) {
        arr1.push(Math.round(Math.random() * 100));
    }
    return arr1;
}
console.log(randomNumbers(30));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomLimits=(lenght,limit)=>{
    let arr1=[];
    for(let i=0;i<lenght;i++){
        arr1.push(Math.round(Math.random() * limit));
    }
    return arr1;
}
console.log(randomLimits(40,30))

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrN=[1,2,3];
let newArr=(arr)=>{
    let arr1=[];
    for(let i=arr.length-1;i>=0;i--){
       arr1.push(arr[i]);
    }
    return arr1;
}
console.log(newArr(arrN));


