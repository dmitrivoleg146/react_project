// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let createBlock = document.createElement('div');
createBlock.classList.add('wrap');
createBlock.classList.add('collapse')
createBlock.classList.add('alpha')
createBlock.classList.add('beta')
createBlock.style.background = 'red';
createBlock.style.width = '300px'
createBlock.style.height = '300px'
createBlock.style.margin = '50px'
document.body.append(createBlock);
document.body.append(createBlock.cloneNode(true));


//- Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let array = ['Main', 'Products', 'About us', 'Contacts']
let getUl=document.getElementsByClassName('menu')[0];
for (const ulElement of array) {
    let element = document.createElement('li')
    element.innerText=ulElement
    getUl.append(element)
    document.body.append(getUl);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let block=document.createElement('div');
    block.innerText=`${coursesAndDurationArrayElement.title} ${coursesAndDurationArrayElement.monthDuration}`;
    document.body.append(block)
}

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const coursesAndDurationArray2Element of coursesAndDurationArray2) {
    let block=document.createElement('div')
    block.classList.add('item');

    let h1Create=document.createElement('h1');
    h1Create.classList.add('heading')
    h1Create.innerText=`${coursesAndDurationArray2Element.title}`

    let pCreate=document.createElement('p');
    pCreate.classList.add('description');
    pCreate.innerText=`${coursesAndDurationArray2Element.monthDuration}`

    block.append(h1Create)
    block.append(pCreate)
    document.body.append(block)


}

