//1
let a = +prompt("Enter first number");
let b = +prompt("Enter second number")
if (a > b) {
    console.log("max=" + a)
} else if (a === b) {
    console.log(a + " equal " + b);
} else {
    console.log("max=" + b);
}

//2
let room = +prompt("Enter your room");
if (room > 0 && room < 21) {
    console.log("first appartment");
} else if (room > 20 && room < 49) {
    console.log("second appartment");
} else if (room > 48 && room < 91) {
    console.log("third appartment");
} else {
    console.log("appartment doesn't exist");
}

//3
let number = prompt("Enter number");
if (a === 10) {
    console.log("TRUE");
} else {
    console.log("False");
}

//4
let x = {
    type: "car",
    model: "BMW"
};
if (typeof x === 'number') {
    document.write('1')
} else if (typeof x === "string") {
    document.write('2')
} else if (typeof x === "boolean") {
    document.write('3')
} else if (typeof x === "object") {
    document.write('4')
} else {
    document.write('unknown')
}
document.write('<br>');
//5
let temperatura = +prompt("enter degrees");
if (temperatura >= 10 && temperatura <= 22) {
    document.write('We are going to study ');
} else {
    document.write("we have to stay at home ");
}
document.write("<br>");
//6
let win = +prompt("Enter number from 1 to 5");
switch (win) {
    case 1:
        document.write("you won a car");
        break;
    case 2:
        document.write("you won a motorbike");
        break;
    case 3:
        document.write("you won a smartphone");
        break;
    case 4:
        document.write("you won a house");
        break;
    case 5:
        document.write("you won an gym abonement");
        break;
    default:
        document.write("the number is incorrect");

}