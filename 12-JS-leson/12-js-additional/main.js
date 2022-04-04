//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let answer = fetch('https://jsonplaceholder.typicode.com/users')
answer.then((response) => {
    return response.json();
})
    .then(users => {
        let divMain = document.createElement('div')
        for (const user of users) {
            let div = document.createElement('div')
            let {
                id,
                name,
                username,
                email,
                address: {street, suite, city, zipcode, geo: {lat, lng}},
                phone,
                website,
                company: {catchPhrase}
            } = user
            div.innerText = `${id} 
            ${name} 
            ${username} 
            ${email} 
            ${street} 
            ${suite} 
            ${city}
           ${zipcode} 
           ${lat} 
           ${lng} 
           ${phone} 
           ${website} 
           ${catchPhrase}  `
            let btn=document.createElement('button')
            btn.innerText='Click me'
            btn.addEventListener('click',function(){
                  fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/comments`)
                      .then((response)=>{
                          return response.json();
                      }).then(users=>{
                      for (const user1 of users) {
                          console.log(user1)
                      }
                  })
            })
            div.append(btn)
            divMain.append(div)
        }

        document.body.append(divMain)
    })




