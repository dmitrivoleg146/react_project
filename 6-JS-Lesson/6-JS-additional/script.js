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









