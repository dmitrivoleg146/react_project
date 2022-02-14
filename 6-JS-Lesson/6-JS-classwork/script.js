// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let normalize = (arr, symbols) => {
    if (arr.includes(symbols)) {
        arr = arr.replaceAll(symbols, " ");
    }
    return arr;
}
console.log(normalize(n1, ".."));
console.log(normalize(n2, "---"));
console.log(normalize(n3, "__"));

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomNumbers = (array) => {
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    console.log(array);
}
let arr2 = [];
randomNumbers(arr2);

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
arr2.sort((a, b) => a - b);
console.log(arr2);

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let randomNumbersNew = (array) => {
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(Math.random() * 100))
    }
    return array.filter(value => value % 2 === 0)
}
arrNew = [];
console.log(randomNumbersNew(arrNew));

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log(arrNew.map(value => value.toString()));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let strongSort = (arr, direction) => {
    for (let i = 0; i < arr.length; i++) {
        if (direction === "ascending") {
            return arr.sort((a, b) => a - b);
        } else if (direction === "descending") {
            return arr.sort((a, b) => b - a);
        }
    }
}
let arrN = [32, 98, 26, 64, 48, 92, 94, 2, 88, 24, 48, 82, 12, 92, 64, 94, 68, 68, 68,
    78, 80, 78, 96, 42, 16, 26, 80, 96, 76, 44, 50, 32, 54, 30, 86, 8, 82, 56, 52, 96,
    82, 10, 68, 100, 92, 76, 96, 92, 78, 52, 54]
console.log(strongSort(arrN, "descending"))

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
let sortArray = coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration);
console.log(sortArray);

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArray = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filterArray)

