// a. заповнити його 50 парними числами за допомоги циклу.
let b = [];
b.length = 50;
for (let i = 0; i < b.length; i++) {
    if (i % 2 === 0) {
        b[i] = i;
        document.write(b[i] + " ");
    }
}
document.write("<br>")
// b. заповнити його 50 непарними числами за допомоги циклу.

let a = [];
a.length = 50;
for (let i = 0; i < b.length; i++) {
    if (i % 2 !== 0) {
        a[i] = i;
        document.write(a[i] + " ");
    }
}
document.write("<br>")
// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let c = [];
c.length = 20;
for (let i = 0; i < c.length; i++) {
    c[i] = i
    document.write(Math.floor(Math.random() * 20) + " ");
}
document.write("<br>")
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let d = [];
d.length = 20;
for (let i = 0; i < d.length; i++) {
    if (i > 8 && i < 732) {
        d[i] = i;

    }
    document.write(Math.floor(Math.random() * 20) + " ");
}

