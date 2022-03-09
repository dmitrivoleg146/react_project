//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let btn = document.querySelector('.clickMe');
btn.addEventListener('click', function () {
    document.getElementById('text').style.display = 'none'
})

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn2 = document.querySelector('.clickHide');
btn2.addEventListener('click', function () {
    this.style.display = 'none';
})

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні
// на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let age = document.querySelector('.confAge');
age.addEventListener('click', function () {
    let number = document.getElementById('number').value
    console.log(number)
    if (number > 18) {
        alert('Age is more than 18')
    } else if (number < 18) {
        alert('Age is less than 18')
    } else {
        alert('Age=18')
    }
})

//- Создайте меню, которое раскрывается/сворачивается при клике
let nav = document.getElementById('nav');
let hidden = document.querySelectorAll('.hidden')
nav.addEventListener('click', function () {
    for (const argument of hidden) {
        argument.classList.toggle('hidden')
    }
})


//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title: 'Sport', body: 'Football'},
    {title: 'Car', body: 'Porsche'},
    {title: 'Money', body: 'Dollar'},
    {title: 'City', body: 'Toronto'}
]
let divMain=document.createElement('div')
for (const comment of comments) {
    let div=document.createElement('div');
    div.style.display='flex'
    div.style.alignItems='center'
    div.style.justifyContent='center';
    div.style.flexDirection='column';

    let h2=document.createElement('h2');
    let p=document.createElement('p')
    let btn1=document.createElement('button')
    let btn2=document.createElement('button')
    btn1.style.background='brown'
    btn1.style.width='50px';
    btn1.style.height='50px'
    btn1.innerText='Title'

    btn2.style.background='brown'
    btn2.style.width='50px';
    btn2.style.height='50px'
    btn2.innerText='Body'

    h2.innerText=comment.title;
    p.innerText=comment.body
    btn1.addEventListener('click',function(){
        p.classList.toggle('hidden')
    })
    btn2.addEventListener('click',function(){
        h2.classList.toggle('hidden')
    })
    div.append(h2,p,btn1,btn2)
    divMain.append(div)
}
document.body.append(divMain)
