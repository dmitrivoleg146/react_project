// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbers = [4, 5, 5.6, -7.9, 0];
let strings = ["Kyiv", "Lviv", "London", "Washington", "Madrid"];
let numstrbool = [45, true, "fruits", false, -500];
for (let numstrboolElement of numstrbool) {
    console.log(numstrboolElement + " ");

}
for (let stringsElement of strings) {
    console.log(stringsElement + " ");
}
for (let numbersElement of numbers) {
    console.log(numbersElement + " ");
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let k = [];
k[0] = "fruits";
k[1] = "Ivan";
k[2] = true;
k[3] = -20.3;
k[6] = 10;
console.log(k);

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i <= 10; i++) {
    document.write(`<div>Hello eveyone</div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i <= 10; i++) {
    document.write(`<div>Cool game ${i} </div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let b = 0;
while (b <= 20) {
    document.write(`<h1> Monday </h1>`);
    b++;

}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let m = 0;
while (m <= 20) {
    document.write(`<h1> Winter ${m} </h1>`);
    m++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let mas=[12,9,200,-49,0,43,15,100.25,94.45,-20.2];
for (let ma of mas) {
    console.log(ma);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array=['Turkey','capture','main','reason','decision','mind','country','belief','stairs','monkey'];
for (let j=0;j<array.length;j++) {
    console.log(array[j]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let all=[true,'sun',10,'winter','reward',-34.5,0,false,'nice','gigi'];
for (let i=0;i<all.length;i++){
    console.log(all[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let everything=['yes',-5,'building',true,'cat',23.6,false,'grass',0,-23.45]
for(let i=0;i<everything.length;i++){
    if(typeof everything[i]==='boolean'){
        console.log(everything[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let coming=['yes',-5,'building',true,'cat',23.6,false,'grass',0,-23.45];
for(let i=0;i<coming.length;i++){
    if(typeof coming[i]==='number')
    {
        console.log(coming[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let future=['yes',-5,'building',true,'cat',23.6,false,'grass',0,-23.45];
for(let i=0;i<future.length;i++){
    if(typeof future[i]==='string'){
        console.log(future[i]);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let f=[];
f[0]=14;
f[1]='games';
f[2]=true;
f[3]='clouds';
f[4]='mouse';
f[5]=-45.6;
f[6]=false;
f[7]='dreams';
f[8]=0;
f[9]=true;
for(let i=0;i<f.length;i++){
    console.log(f[i]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i=0;i<10;i++){
    document.write(" Крок "+ i+ " ");
    console.log(" Крок1 "+ i);
}
document.write('<br><br>');
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i=0;i<100;i++){
    document.write(" Крок "+ i+ " ");
    console.log(" Крок2 "+ i);
}
document.write('<br><br>');
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i=0;i< 100;i+=2){
    document.write(" Крок "+ i +" ");
    console.log(" Крок3 "+ i );
}
document.write('<br><br>');

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let i=0;i<100;i++){
    if(i%2===0){
        document.write(' Крок '+ i +" ");
        console.log(" Крок4 "+ i );
    }
}
document.write('<br><br>');
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i=0;i<100;i++){
    if(i%2!=0){
        document.write(' Крок '+ i +" ");
        console.log(" Крок5 "+ i );
    }
}