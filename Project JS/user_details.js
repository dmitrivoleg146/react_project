let url=new URL(location.href)
let user=JSON.parse(url.searchParams.get('data'))
console.log(user)
let userDetails=document.getElementsByClassName('user_details')[0];
userDetails.innerHTML=`<h2>${(user.id)}</h2>
<h2>${(user.name)}</h2>
<h2>${(user.username)}</h2>
<h2>${(user.email)}</h2>
<h2>${(user.address.city)}</h2>
<h2>${(user.address.geo.lat)}</h2>
<h2>${(user.phone)}</h2>
<h2>${(user.website)}</h2>
<h2>${(user.address.geo.lng)}</h2>
<h2>${(user.address.street)}</h2>
<h2>${(user.address.suite)}</h2>
<h2>${(user.address.zipcode)}</h2>
<h2>${(user.company.bs)}</h2>
<h2>${(user.company.catchPhrase)}</h2>
<h2>${(user.company.name)}</h2>`

let buttonDiv=document.createElement('div')
buttonDiv.classList.add('buttonContainer')
let btn=document.createElement('button');
btn.innerText="show user's posts"
btn.classList.add('btn-grad');
buttonDiv.append(btn)
document.body.append(buttonDiv)
let postContainerMain=document.createElement('div');
postContainerMain.classList.add('postContainer')

btn.addEventListener('click',function(){
    this.disabled=true
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value=>value.json())
        .then(user=>{
            for (const userElement of user) {
                let mainDivButton=document.createElement('div');
                mainDivButton.classList.add('mainDivButton')
                let postContainer=document.createElement('div');
                postContainer.classList.add('post')
                postContainer.innerText=userElement.title
                let postButton=document.createElement('button');
                postButton.innerText='post details'
                postButton.classList.add('postButton')
                postButton.addEventListener('click',function(){
                    location.href=`post_details.html?data=${JSON.stringify(userElement)}`
                })

                mainDivButton.append(postContainer,postButton)
                postContainerMain.append(mainDivButton)
            }
        })
})
document.body.append(postContainerMain)


