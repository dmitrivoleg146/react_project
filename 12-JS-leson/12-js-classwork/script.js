//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let answer = fetch('https://jsonplaceholder.typicode.com/posts')
answer.then((response) => {
    return response.json();
}).then(posts => {
    let wraper = document.createElement('div');
    wraper.classList.add('wraper');
    for (const post of posts) {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
                        <h3>ID: ${post.id}</h3>
                        <h4>Title: ${post.title}</h4>
                        <h5>Body: ${post.body}</h5>
                        `;
        wraper.append(div)

        let btn = document.createElement('button')
        btn.classList.add('post_click');
        btn.addEventListener('click', function (title) {
            let block = fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            block.then((response) => {
                return response.json();
            }).then(users => {
                for (const user of users) {
                    console.log(user)
                    let divCardComments = document.createElement('div');
                    divCardComments.classList.add('cardComments');
                    divCardComments.innerHTML = `
<h3>Id: ${user.id}</h3>
<h3>Name: ${user.name}</h3>
<h3>Body: ${user.body}</h3>
<h3>Email: ${user.email}</h3>`
                    div.appendChild(divCardComments)
                }
                btn.remove()

            })
        })
        div.appendChild(btn);
        wraper.appendChild(div);
        document.body.appendChild(wraper)

    }
})

