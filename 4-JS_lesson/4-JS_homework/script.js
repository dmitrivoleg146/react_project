// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}

let result1 = square(5, 10);
console.log(result1);

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    return Math.PI * Math.pow(r, 2);
}

let result2 = circle(5);
console.log(result2);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cilindre(h, r) {
    return 2 * Math.PI * h * r;
}

let result3 = cilindre(7, 22);
console.log(result3);

// - створити функцію яка приймає масив та виводить кожен його елемент

function array(...elements) {
    console.log(elements);
}

array([300, 100, 30, 40]);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(c) {
    document.write(`<p>${c} </p>`)
}

paragraph("Ivan");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function threeElements(d) {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${d}</li>`);
    }
    document.write("</ul>");
}

threeElements("hello")

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulElements(f, n) {
    document.write("<ul>");
    for (let i = 0; i < n; i++) {
        document.write(`<li>${f}</li>`);
    }
    document.write("</ul>");
}

ulElements("tuesday", 6);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let numStringBool=[10,"copybook",true,22,"building",false];
function  forElements(someWords){
    document.write(`</ul>`);
    for (let i=0;i<someWords.length;i++) {
        document.write(`</li>${someWords[i]+" "}</li>`);
    }
}
forElements(numStringBool);
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayObjects = [{id: 1, name: "Ivan", age: 21}, {id: 2, name: "Ira", age: 30}, {id: 3, name: "Nastia", age: 18}]

function arrayObject(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}`);
    }
}
arrayObject(arrayObjects);