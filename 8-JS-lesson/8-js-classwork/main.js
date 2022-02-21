// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// a) додає клас з назвою групи, елементу з ід main_header
let nameGroup = document.getElementById('main_header');
nameGroup.innerText = 'my group:C';

// b) робить шириниу елементу ul 400px
let elem400Px = document.getElementsByTagName('ul');
elem400Px[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let width50 = document.getElementsByClassName('linkList');
for (const width50Element of width50) {
    width50Element.style.width = '50%';
    width50Element.style.border = '1px solid red';
}


// d) отримує текст який зберігається в елементі з класом listElement2
let elem2 = document.getElementsByClassName('listElement2');
elem2[0].innerHTML = '<a href=""><b>NEW TEXT</b></a>'

// e) отримує всі елементи li та змінює ім колір фону на сірий
let allLi = document.getElementsByTagName('li');
for (const allLiElement of allLi) {
    allLiElement.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let allA = document.getElementsByTagName('a');
for (let allAElement of allA) {
    allAElement.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let allA2Element of allA) {
    if (allA2Element.innerText === 'link3') {
        allA2Element.style.fontSize = '40px';
        allA2Element.style.border = '2px solid green'
    }
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subheader_color = document.getElementsByClassName('sub-header');
let color = prompt('Enter color:')
for (const colorElement of subheader_color) {
    colorElement.style.backgroundColor = color;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subheader_color2 = document.getElementsByClassName('sub-header');
for (const colorElement2 of subheader_color2) {
    if (colorElement2.innerText === 'content 2 segment') {
        colorElement2.style.color = prompt('Enter color')
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1');
content1.innerText = prompt('Enter text');


//l) отримати елементи p та змінити їм padding на 20px
let padding20 = document.getElementsByTagName('p')
for (const padding20Element of padding20) {
    padding20Element.style.padding = '40px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2=document.getElementsByClassName('text2');
text2[0].innerText='mon-year. Пример sep-2021';


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let allA3 = document.getElementsByTagName('a');
for (let allA3Element of allA3) {
    let XXX = allA3Element.innerText;
    allA3Element.className.add(`element_${XXX}`)
}










