// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//1. перебрати його циклом while
let a = 0;
while (a < array.length) {
    document.write(array[a] + " ");
    a++
}
document.write("<br>");
// 2. перебрати його циклом for
for (let i = 0; i < array.length; i++) {
    document.write(array[i] + " ");
}
document.write("<br>");
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i = 0;
while (i < array.length) {
    if (i % 2 !== 0) {
        document.write(array[i] + " ");
    }
    i++;
}
document.write("<br>");
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
        document.write(array[i] + " ")
    }
}
document.write("<br>");
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let g = 0;
while (g < array.length) {
    if (g % 2 === 0) {
        document.write(array[g] + " ");
    }
    g++;
}
document.write("<br>")
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        document.write(array[i] + " ");
    }
}
document.write("<br>");
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
        array[i] = "okten";
    }
    document.write(array[i] + " ");
}
document.write("<br>");
// 8. вивести масив в зворотньому порядку.
for (let i = array.length - 1; i >= 0; i--) {
    document.write(array[i] + " ");
}
document.write("<br>");
// всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//7
for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 3 === 0) {
        array[i] = "okten";
    }
    document.write(array[i] + " ");
}
//6
document.write("<br>");
for (let i = array.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        document.write(array[i] + " ");
    }
}
document.write("<br>");
//5
let v = array.length-1;
while (v>=0) {
    if (v % 2 === 0) {
        document.write(array[v] + " ");
    }
    v--;
}
document.write("<br>")

//4
for (let i=array.length; i >=0; i--) {
    if (i % 2 !== 0) {
        document.write(array[i] + " ")
    }
}
document.write("<br>");
//3
let z = array.length-1;
while (z>=0) {
    if (z % 2 !== 0) {
        document.write(array[z] + " ");
    }
    z--;
}
//2
for (let i =array.length-1; i >=0; i--) {
    document.write(array[i] + " ");
}
//1
let t = array.length-1;
while (t>=0) {
    document.write(array[t] + " ");
    t--;
}

