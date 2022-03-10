// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//         Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let form = document.createElement('form')
form.setAttribute('name', 'form')
form.style.width = '100%'
let input1 = document.createElement('input')
input1.setAttribute('name', 'input1')
let input2 = document.createElement('input')
input2.setAttribute('name', 'input2')
form.append(input1, input2)

let form2 = document.createElement('form')
form2.setAttribute('name', 'form2')
let input3 = document.createElement('input')
input3.setAttribute('name', 'input3')
let input4 = document.createElement('input')
input4.setAttribute('name', 'input4')
form2.append(input3, input4)

let btn = document.createElement('button')
btn.style.width = '70px';
btn.style.height = '20px'

btn.style.background = 'chocolate'
btn.innerText = 'Click Me';

document.body.append(form, form2, btn)
document.write('<br><br>')

btn.addEventListener('click', function () {
    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)
    console.log(input4.value)
})

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let input21 = document.createElement('input')
let input22 = document.createElement('input')
let input23 = document.createElement('input')
let btnNew = document.createElement('button');
btnNew.innerText = 'Create';

document.body.append(input21, input22, input23, btnNew)

btnNew.addEventListener('click', function () {
    let tr = input21.value;
    let td = input22.value;
    let text = input23.value;

    function Table(inp1, inp2, inp3) {
        let table = document.createElement('table');
        table.style.border = '2px solid gold'
        document.body.append(table)
        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            tr.style.border = '2px solid blue'
            for (let j = 0; j < td; j++) {
                let td = document.createElement('td')
                td.innerText = `${inp3}`;
                td.style.border = '2px solid brown'
                tr.append(td)
                table.append(tr)
            }
        }
    }

    Table(tr, td, text)
})
document.write('<br><br>')
//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let array = ['чахлик', 'гамнюк', 'свинтус', 'гнидич'];
let btnWrld = document.createElement('button')

let textN = document.createElement('input')
btnWrld.style.width = '60px';
btnWrld.style.height = '50px';
btnWrld.innerText='Check word'
textN.style.width = '120px';
textN.style.height = '40px';

textN.setAttribute('type', 'text')
document.body.append(textN,btnWrld)

btnWrld.addEventListener('click',function(){
    let inputValue=textN.value
    for (const textNElement of array) {
        if (inputValue === textNElement) {
            alert('Upps,bad word. Please,write good word!!!!')
            return
        }
        else{
            alert('Good word')
            return
        }
    }
})
document.write('<br><br>')
//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
let inputMore=document.createElement('input');
let buttonMore=document.createElement('button');
buttonMore.innerText='Button Click'
document.body.append(buttonMore,inputMore);

buttonMore.addEventListener('click',function(){
    let inputValue=inputMore.value
    for (const argument of array) {
       if(inputValue.includes(argument)){
           alert('Includes')
       }
    }
})





