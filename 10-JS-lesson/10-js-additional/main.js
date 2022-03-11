//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
document.addEventListener('click', function (e) {
    console.log(e.target.tagName);
    console.log(e.target.className)
    console.log(e.target.id)
    console.log((e.target.offsetWidth * e.target.offsetHeight))
})

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

window.addEventListener('click', function (e) {
    let newWin = window.open("popup", "hello", "width=1000px,height=300px");
    newWin.document.write(`${e.target.tagName},${e.target.className},
    ${e.target.id},${e.target.offsetWidth * e.target.offsetHeight}`);
})

//-- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let checkbox1 = document.createElement('input')
checkbox1.setAttribute('type', 'checkbox')
let checkbox2 = document.createElement('input')
checkbox2.setAttribute('type', 'checkbox')
let checkbox3 = document.createElement('input')
checkbox3.setAttribute('type', 'checkbox')

document.body.append(checkbox1, checkbox2, checkbox3)

checkbox1.addEventListener('click', function (e) {
    // let h2 = document.createElement('h2')
    e.preventDefault();
    if (checkbox1.checked) {
        userS = usersWithAddress.filter(value => !value.status)
        for (const h2Element of userS) {
            let div = document.createElement('div')
            div.innerText = `${h2Element.id}  ${h2Element.name} ${h2Element.age} ${h2Element.status} ${h2Element.address.city} ${h2Element.address.street} ${h2Element.address.number}`
            document.body.append(div)
        }
    } else {
        document.body.append('')
    }

})

checkbox2.addEventListener('click', function () {
    if (checkbox2.checked) {
        let userAge = usersWithAddress.filter(user => user.age >= 29)
        for (const userAgeElement of userAge) {
            let div = document.createElement('div')
            div.innerText = `${userAgeElement.id}  ${userAgeElement.name} ${userAgeElement.age} ${userAgeElement.status} ${userAgeElement.address.city} ${userAgeElement.address.street} ${userAgeElement.address.number}`
            document.body.append(div)
        }

    } else {
        document.body.append('')
    }
})

checkbox3.addEventListener('click',function (){
    if(checkbox3.checked){
        let userCity=usersWithAddress.filter(user=>user.address.city==='Kyiv');
        for (const userCityElement of userCity) {
            let div=document.createElement('div');
            div.innerText=`${userCityElement.id}  ${userCityElement.name} ${userCityElement.age} ${userCityElement.status} ${userCityElement.address.city} ${userCityElement.address.street} ${userCityElement.address.number}`
            document.body.append(div)
        }
    }
    else{
        document.body.append('')
    }
})

