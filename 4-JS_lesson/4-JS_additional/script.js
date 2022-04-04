//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function arguments(...a) {
    let sum="";
    for (let i = 0; i < a.length; i++) {
        if (a.length === 1) {
            sum =`${a[0]}`;
        } else {
          sum+=`${a[i]}`;
        }
    }
    console.log(sum);

}

arguments(5);
arguments(5, 8);
arguments(5, 8,49,33);

//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
let a = [1, 2, 3, 4];
let b = [2, 3, 4, 5];


function sumTogether(arr1, arr2) {
    arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i] + arr2[i]);

    }
    console.log(arr3);
}

sumTogether(a, b);

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
let objectElements = [{name: 'Dima', age: 13}, {model: 'Camry'}]

function arrayObject(array) {
    //console.log(Object.values(array));
    for (let i = 0; i < array.length; i++) {
        console.log(Object.values(array[i]))
    }
}

arrayObject(objectElements);

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
let propertyElements = [{name: 'Dima', age: 13}, {model: 'Camry'}]

function arrayKey(array) {
    //console.log(Object.values(array));
    for (let i = 0; i < array.length; i++) {
        console.log(Object.keys(array[i]))
    }
}

arrayKey(propertyElements);
