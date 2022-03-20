//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    let arr1 = [];
    for (let i = 0; i < str.length; i += n) {
        arr1.push(str.substr(i, n));
    }
    return arr1;
}
document.write(cutString('наслаждение', 5));

//- Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// let mailValidator = (str) => {
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === {
//         }){
//
//         }
//         {
//             console.log('The dot must be at least 2 characters away, after "@" !!!')
//         }
//     else
//         {
//             console.log('The dot is more than 2 characters away, after "@" !!!')
//         }
//     }
//
//     if (str.includes('@')) {
//         document.write('@ exists in our mail')
//     } else {
//         document.write('@ doesnt exists in our mail')
//     }
//
//     return str;
// }
// (mailValidator('some.email@gmail.com'));
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sortArray = coursesArray.sort((a, b) => {
    return (b.modules.length - a.modules.length);
})
console.log(sortArray);

//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let count = (array, stringSearch) => {
    let counter = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === stringSearch) {
            counter.push(array[i])
        }
    }
    return counter.length;
}
let symb = "о";
let str = "Астрономия это наука о небесных объектах";
console.log(count(str, symb));

//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cuttString = (str, n) => str.split(' ').splice(0, n).join(" ");
console.log(cuttString("Сила тяжести приложена к центру масс тела", 6))

let go = (number, number2) => {
    let age = 200 - number;
    let ageNew = age - number2;
    return `your age:${number} and your ageNew:${number2}`
}
console.log(go(30, 40))

let cutPieces = (fruits) => {
    return fruits * 3;
}
let fruitsProccessor = (apples, oranges) => {
    let applePieces = cutPieces(apples);
    let orangePieces = cutPieces(oranges);
    let juice = `Juice ${applePieces} + ${orangePieces}`;
    return juice;
}
console.log(fruitsProccessor(2, 3));

let calAge = (birth) => {
    return 2037 - birth;
}
let yearsAge = (birth, name) => {
    let age = calAge(birth);
    let retirement
}


let friends = ['jon', 'ivam', 'nazar'];
console.log(friends[friends.length - 1])

let calcAage = (birthYear) => {
    return 2019 - birthYear;
}
let ages = [1300, 1440, 2000, 2010];
const age1 = calcAage(ages[0])
const age2 = calcAage(ages[ages.length - 1])
console.log(age1, age2);
const agees = [calcAage(ages[0]), calcAage(ages[2])]
console.log(agees);

const newLength = friends.push('jack');
console.log(newLength)

friends.unshift('lucas')
console.log(friends)
let unshifted = friends.unshift('brother');
console.log(unshifted);
console.log(friends);
//1
let calcTip = (bill) => {
    if (bill > 50 && bill < 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

console.log(calcTip(100));
//2
let bills=[20,40,50];
let tip1=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[bills.length-1])];
console.log(tip1);
let sumThem=[bills[0]+tip1[0],bills[1]+tip1[1],bills[bills.length-1]+tip1[tip1.length-1]];
console.log(bills,tip1,sumThem)
let q=sumThem.toString();
console.log(q)


