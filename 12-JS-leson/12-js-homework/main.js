// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
let post = fetch('https://jsonplaceholder.typicode.com/posts')
post.then((response) => {
    return response.json()
}).then(user => {
    let divMain = document.createElement('div');
    divMain.classList.add('container')
    for (const userElement of user) {
        console.log(userElement)
        let div = document.createElement('div');
        div.classList.add('post');
        div.innerText = `
        userId: ${userElement.userId}
id: ${userElement.id}
title: ${userElement.title}
body: ${userElement.body} `
        divMain.append(div)
        document.body.append(divMain)
    }
    let br=`<br>`
})

// /Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
let comment=fetch('https://jsonplaceholder.typicode.com/comments')
comment.then((response)=>{
    return response.json();
}).then(users=>{


    let mainDiv=document.createElement('div');
    mainDiv.classList.add('container');
    for (const user of users) {
        console.log(user)
        let div=document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
                        <h3>ID: ${user.id}</h3>
                        <h4>Name: ${user.name}</h4>
                        <h5>Email: ${user.email}</h5>
                        <h6>Body: ${user.body}</h6>
                        `;
        mainDiv.appendChild(div);
        document.body.appendChild(mainDiv);
    }
})