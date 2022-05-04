let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
let result = document.getElementById('result');
let sound = document.getElementById('sound')

let btn = document.getElementById('search-btn')

btn.addEventListener('click', () => {
    let inpWord = document.getElementById('inp-word').value
    console.log(inpWord)
    fetch(`${url}${inpWord}`)
        .then((response) => {
            response.json();
        })
        .then((data) => {
            console.log(data)
            result.innerHTML = `
            <div class="word">
            <h3>${inpWord}</h3>
            <button><i class="fa-solid fa-microphone"></i></button>
        </div>
        <div class="details">
            <p>pos</p>
            <p>/simple/</p>
        </div>
        <p class="word-meaning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur cum
            deserunt facere ipsa molestiae nam nihil odit perspiciatis quaerat qui quisquam ratione reprehenderit soluta
            ullam unde vero voluptas. Provident.</p>
        <p class="word-example">New word</p>`
        })
})