// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strLen1 = 'hello world';
let strLen2 = 'lorem ipsum';
let strLen3 = 'javascript is cool'
console.log(strLen1.length + " " + strLen2.length + " " + strLen3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strUp1 = strLen1.toUpperCase();
let strUp2 = strLen2.toUpperCase();
let strUp3 = strLen3.toUpperCase();
console.log(strUp1 + ' ' + strUp2 + ' ' + strUp3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strDown1 = strLen1.toLowerCase();
let strDown2 = strLen2.toLowerCase();
let strDown3 = strLen3.toLowerCase();
console.log(strDown1 + ' ' + strDown2 + ' ' + strDown3);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   ';
let strClear = strDirty.trim();
console.log(strClear);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str = 'Каждый охотник желает знать';
let stringToarray = (someString) => {
    return someString.split(" ");

}
let arr = stringToarray(str);
document.write(arr + "<br>");


//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (arr, length) => {
    return arr.substring(0, length);
}
document.write(delete_characters(str, 7) + '<br>');

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str2 = "HTML JavaScript PHP";
let insert_dash = (arr) => {
    return arr.split(" ").join('-');
}
let upper = insert_dash(str2.toUpperCase());
document.write(upper + "<br>");

// Напишіть функцію, яка приймає рядок як аргумент і
// перетворює регістр першого символу рядка з нижнього регістру у верхній.
let newTransform = (i) => {
    return i[0].toUpperCase() + i.slice(1);
}
console.log(newTransform(strLen1));

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    return str.split(' ').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ');
};
document.write(capitalize('monday tuesday wednesday thursdy friday'));

