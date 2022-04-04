for (let i = 1; i < 10; i++) {
    console.log(`i earn ${i} millions`)
}

for (let i = 1; i < 3; i++) {
    console.log(`my day number ${i}`);
    for (let j = 1; j < 5; j++) {
        console.log(`my exercise number ${j}`)
    }
}

let calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
let bills = [22, 295, 176, 440, 37, 105, 10, 1110, 86, 52];
let tips = [];
let totals = [];
for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals)
let calcAvarage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum / arr.length;
}
console.log(calcAvarage(totals));
console.log(calcAvarage(tips))

let arr11 = [4, 34, 2, -9, 4, 'error', false, 345, 5, -355, 3];
let arr22 = [4, 3, 2, -9, 3, 'error', 603, 52, -725, 30]
let calcultor = (array1,array2) => {
    let temps=array1.concat(array2)
    let min = temps[0];
    let max = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') {
            continue;
        }
        if (temps[i] > max) {
            max = temps[i];
        } else if (temps[i] < min) {
            min = temps[i]
        }
    }
    console.log(max, min);
    return max-min;
}
let g=calcultor(arr11,arr22);
console.log(g)

let printForecast=(array)=>{
    let str='';
    for(let i=0;i<array.length;i++){
        str=str+`${array[i]}C in ${i+1} days...`;
    }
    console.log(str)
}
printForecast(bills)


