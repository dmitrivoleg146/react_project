// - створити функцію яка обчислює та повертає площу прямокутника
let square = (a, b) => a * b;
console.log(square(5, 7));

//- створити функцію яка обчислює та повертає площу кола
let circle = (r) => Math.PI * Math.pow(r, 2);
console.log(circle(10));

//- створити функцію яка обчислює та повертає площу циліндру
let cilindre = (r, h) => 2 * Math.PI * r * h;
console.log(circle(20, 7));

//- створити функцію яка приймає масив та виводить кожен його елемент
let array = (...arr) => {
    console.log(arr)
}
array(10, 30, 20, 40);

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraph = (p) => {
    document.write(`<p>${p}</p>`)
}
paragraph("Hello");

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulka = (liText) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);
}
ulka("cinema");

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulka2 = (liText, numberLi) => {
    document.write(`<ul>`)
    for (let i = 0; i < numberLi; i++) {
        document.write(`<li>${liText}</li>`)
    }
    document.write(`</ul>`);
}
ulka2("Evening", 10);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let numStringBool = [10, "copybook", true, 22, "building", false];
let everyElement = (words) => {
    document.write(`<ol>`)
    for (const arrayElement of words) {
        document.write(`<li>${words}</li>`)
    }
    document.write(`</ol>`);
}
everyElement(numStringBool);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayObjects = [{id: 1, name: "Ivan", age: 21}, {id: 2, name: "Ira", age: 30}, {id: 3, name: "Nastia", age: 18}]
let difObject = (array) => {
    for (const idElement of array) {
        document.write(`<div> ${idElement.id} ${idElement.name} ${idElement.age}</div>`)
    }
}
difObject(arrayObjects);