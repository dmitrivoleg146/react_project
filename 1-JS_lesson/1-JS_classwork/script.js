//1 Task
let result = [4, 6, 10, -4, 4.6, 5.6, 8, -39, -2, 0]
console.log(result);
//with math random
for (let i = 0; i < 11; i++) {
    let count = 0;
    for (let j = 0; j < Math.floor(Math.random() * 11); j++) {
        count++;
    }

    console.log(count);
}
//2 Task
let book = {
    name: "Eragon",
    pages: 350,
    genre: "fantasy",
}
//3 Task
let booky = {
    name: "Eragon",
    pages: 350,
    genre: "fantasy",
    author: "Christopher Paolini",
}
//4 Task
let books = [];
books[0] = {
    name: "Eragon",
    pages: 350,
    genre: "fantasy",
    author: "Christopher Paolini",
}
books[1] = {
    name: "Rich Dad Poor Dad ",
    pages: 200,
    genre: "financial",
    author: "Robert Kiyosaki",
}
books[2] = {
    name: "Technical Analysis",
    pages: 187,
    genre: "financial",
    author: "Jack Shwager",
}
book[3] = {
    name: "Fooled by Randomness",
    pages: 316,
    genre: "bussiness",
    author: "Nasib Talib",
}
//5 Task
let height = 23;
let width = 10;
let s;
s = height * width;
console.log(s);
//6 Task
let heightC = 10;
let dC = 4;
let v;
let r = dC / 2;
v = Math.PI * r ** 2 * 10;
console.log(v);
//7 Task
let n = 3;
let m = 4;
let k;
k = Math.sqrt((n ** 2) + (m ** 2));
console.log(k);