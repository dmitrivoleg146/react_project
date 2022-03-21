let favourites = JSON.parse(localStorage.getItem('favourites'))
let container=document.createElement('div')
for (const favourite of favourites) {
    let userDiv = document.createElement('div')
    userDiv.innerText = Object.values(favourite)
    container.append(userDiv)
}
document.body.append(container)