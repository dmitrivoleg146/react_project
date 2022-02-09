// a. заповнити його 50 парними числами за допомоги циклу.
let array = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        array[i] = i;
    }
}
console.log(array);

// b. заповнити його 50 непарними числами за допомоги циклу.
let array1 = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 !== 0) {
        array1[i] = i;
    }
}
console.log(array1);

//  c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let c = [];
for (let i = 0; i < 20; i++) {
    c[i] = i;
    document.write(Math.floor(Math.random() * 20) + " ");
}
document.write("<br>");
// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let d = [];
for (let i = 0; i < 20; i++) {
    d[i] = i;
    document.write(Math.floor(Math.random() * 732) + 1 + " ");
}
// // Вивести за допомогою console.log кожен третій елемент
let v = []
for (let i = 2; i < 50; i += 3) {
    v[i] = i;
    console.log(v[i] + " ");
}
document.write("<br>");
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
let array3 = [4, 17, 13, 6, 22, 31, 45, 66, 100, -18, 30, 20, -34, -589, 345];
for (let i = 2; i < array3.length; i += 3) {
    if (array3[i] % 2 === 0) {
        console.log(array3[i]);
    }
}
//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let array4 = [];
for (let i = 2; i < array3.length; i += 3) {
    array4[i] = i;
    if (array4[i] % 2 === 0) {
        console.log(array4[i] + " ");
    }
}
//5. Вивести кожен елемент масиву, сусід справа якого є парним
let array5 = [1, 2, 3, 5, 7, 9, 56, 8, 67]
for (let i = 0; i < array5.length; i++) {
    if (array5[i + 1] % 2 === 0) {
        document.write(array5[i] + " ");
    }
}
document.write("<br>");
//Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let array6 = [100, 250, 50, 168, 120, 345, 188];
sum = 0;
for (let i = 0; i < array6.length; i++) {
    sum += array6[i] / array6.length;
}
document.write(Math.round(sum));
document.write("<br>");

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let array7 = [100, 250, 50, 168, 120, 345, 188];
let arr7 = [];
for (let i = 0; i < array7.length; i++) {
    array7[i] *= 5;
    arr7[i] = array7[i];
    document.write(arr7[i] + " ");
}
document.write("<br>");
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let array8 = [100, "gigi", true, 168, true, "morning", false, "bicycle"];
let arr8 = [];
for (let i = 0; i < array8.length; i++) {
    if (typeof array8[i] === "number") {
        arr8[i] = array8[i];
        document.write(arr8[i] + ' ');
    }
}
document.write("<br>");
//- Дано 2 масиви з рівною кількістю об'єктів.З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let idAndCitie = [];
for (const idAndUsersElement of usersWithId) {
    for (const idAndCitieElement of citiesWithId) {
        if (idAndUsersElement.id === idAndCitieElement.user_id) {
            idAndUsersElement.cities = idAndCitieElement;
        }
    }
}
idAndCitie = usersWithId;
console.log(idAndCitie);

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let array10 = [100, 250, 50, 168, 120, 345, 188, 0, -20, -19.25];
for (const number of array10) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let array11 = [100, 250, 50, 168, 120, 345, 188, 0, -20, -19.25];
let arr11 = [];
for (let i = 0; i < array11.length; i++) {
    arr11[i] = array11[i];
    console.log(arr11[i]);
}

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let stringArr1 = ['a', 'b', 'c'];
for (let i = 0; i < stringArr1.length; i++) {
    document.write(stringArr1[i]);
}
document.write("<br>")
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let stringArr2 = ['a', 'b', 'c'];
let i=0;
while(i<stringArr2.length){
    document.write(stringArr1[i]);
    i++;
}
document.write("<br>")
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let stringArr3 = ['a', 'b', 'c'];
for (const string of stringArr3) {
    document.write(string);
}