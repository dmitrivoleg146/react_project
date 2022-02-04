//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time = 35;
if (time > 0 && time <= 14) {
    document.write("1");
} else if (time >= 15 && time <= 29) {
    document.write("2");
} else if (time >= 30 && time <= 44) {
    document.write("3");
} else if (time >= 45 && time <= 59) {
    document.write("4");
} else {
    document.write("Not exist");
}
document.write("<br>");

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt("Enter day:");
if (day >= 1 && day <= 10) {
    document.write("1 decade");
} else if (day >= 11 && day <= 20) {
    document.write("2 decade");
} else if (day >= 21 && day <= 31) {
    document.write("3 decade ");
} else {
    document.write("incorrect ")
}
document.write("<br>");

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = 'Hello';
if (test === true) {
    document.write('True');
} else {
    document.write('False');
}
let g = (test === true) ? "True" : "False";
document.write(g);
document.write("<br>");

//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt("Enter a: (1,0,-3)");
if (a !== 0) {
    document.write("True")
} else {
    document.write("False");
}
document.write("<br>");

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let days = +prompt("Enter day of the week");
switch (days) {
    case 1:
        document.write('school');
        break;
    case 2:
        document.write('programming');
        break;
    case 3:
        document.write('english');
        break;
    case 4:
        document.write('spanish');
        break;
    case 5:
        document.write('gym');
        break;
    case 6:
        document.write('clean the house');
        break;
    case 7:
        document.write('rest');
        break;
    default:
        document.write("mistake")
}
document.write('<br>');

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = +prompt('Enter Year:');
let k = (year % 4 === 0) ? document.write('Intercalary Year ') : document.write('Yesss,normal year');
document.write('<br>');

//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let code = prompt("What is an official name of JavaScript:")
if (code === "ECMAScript") {
    document.write("Truee");
} else {
    document.write("«Don't know? ECMAScript!");
}