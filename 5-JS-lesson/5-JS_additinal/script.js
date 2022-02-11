// - Дано натуральное число n. Выведите все числа от 1 до n.
let natural = (n) => {
    for (let i = 1; i < n; i++) {
        console.log(i);
    }
}
natural(20);

//- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае
let twoWords = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }

}
twoWords(60, 40);

//функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let foo = (arr, i) => {
    let temp = arr[i]
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    console.log(arr);

}
(foo([9, 8, 0, 4], 2));


//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
let move_zeros = (arr) => {
    if (arr.length > 2 && arr.length < 100) {
        for (const arrElement of arr) {
            if (arr[arrElement] === 0) {
                arr.push("0");
                delete arr[arrElement];
            }
        }
    }
    return arr;
}

document.write(move_zeros([0, 0, 1, 0]));