// /Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

//-- отримує текст з параграфа з id "content"
let idContent = document.getElementById('content')
console.log(idContent.innerText)

// -- отримує текст з блоку з id "rules"
let idRules = document.getElementById('rules');
console.log(idContent.innerText)

// -- замініть текст параграфа з id 'content' на будь-який інший
let idContent2 = document.getElementById('content')
idContent2.innerText = 'Woooow'

// -- замініть текст параграфа з id 'rules' на будь-який інший
let idRules2 = document.getElementById('rules');
idRules2.innerText = 'Lets go';

// -- змініть кожному елементу колір фону на червоний
let allRed = document.body.children;
for (const allRedElement of allRed) {
    allRedElement.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій
for (const allRedElement of allRed) {
    allRedElement.style.color = 'blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classInsideID = document.getElementById('rules');
console.log(classInsideID.classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let changeColor = document.getElementsByClassName('fc_rules')
for (const changeColorElement of changeColor) {
    changeColorElement.style.color = 'red'
}


