// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход
// на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
let divMain=document.querySelector('.users');
fetch('https://jsonplaceholder.typicode.com/users')
.then(value=>value.json())
.then(users=>{
    for (const user of users) {
        let div=document.createElement('div');
        div.classList.add('user')
        let anchor=document.createElement('a')
        anchor.innerText=`${user.id} ${user.name}`
        anchor.href=`user_details.html?data=${JSON.stringify(user)}`
        div.append(anchor)
        divMain.append(div);
    }
    document.body.append(divMain)
})
