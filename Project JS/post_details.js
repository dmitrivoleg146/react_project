let url=new URL(location.href);
let post=JSON.parse(url.searchParams.get('data'))
let postContainer=document.getElementsByClassName('post')[0];
postContainer.innerText=JSON.stringify(post)


let commentContainer=document.createElement('div')
commentContainer.classList.add('commentContainer')
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
.then(value=>value.json())
    .then(users=>{
    for (const user of users) {
        let commentDiv=document.createElement('div')
        commentDiv.classList.add('commentDiv')
        commentDiv.innerText=`${user.postId}
        ${user.id}
        ${user.name}
        ${user.email}
        ${user.body}`
        commentContainer.append(commentDiv)
        document.body.append(commentContainer)
       console.log(user)
    }
})