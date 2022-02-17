//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

//створити пустий масив, наповнити його 10 об'єктами new User(....)
let array =
    [
        new User(1, 'Oleg', 'Ivanov', 'fefefie@gmail.com', 3809854326),
        new User(2, 'Ivan', 'Kirov', 'efvrrefe@rambler.ru', 369456434),
        new User(3, 'Stepan', "Vovk", 'krivikov34@gmail.com', 354546030),
        new User(4, 'Nastia', 'Uvarova', 'dbdgoeigeo@gmail.com', 38093564464),
        new User(5, 'lina', 'Gorach', 'regtrhrtjih@gmail.com', 38069449339),
        new User(6, 'Inna', 'Igorivna', 'fefeie345@gmail.com', 38094464353),
        new User(7, 'Ostap', 'Romanov', 'bebeotglj3455@gmail.com', 380546469),
        new User(8, 'Roman', 'Popov', 'bebgrhlj35@gmail.com', 3805456669),
        new User(9, 'Nazar', 'Pankiv', 'njkyjglj3355@gmail.com', 38094546469),
        new User(10, 'Ostap', 'Romanov', 'vnveoetglj3455@gmail.com', 38091546469)
    ]

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filtered = array.filter((item) => {
    if (item.id % 2 === 0) {
        return item;
    }
})
console.log(filtered);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sorted = array.sort((a, b) => {
    return (b.id - a.id);
})
console.log(sorted);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Clients {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//створити пустий масив, наповнити його 10 об'єктами Client
let array2 = [
    new Clients(1, 'Oleg', 'Ivanov', 'fefefie@gmail.com', 3809854326, ['milk', 'fish', 'butter']),
    new Clients(2, 'Ivan', 'Kirov', 'efvrrefe@rambler.ru', 369456434, ['meat', 'eggs']),
    new Clients(3, 'Stepan', "Vovk", 'krivikov34@gmail.com', 354546030, ['coconut', 'water']),
    new Clients(4, 'Nastia', 'Uvarova', 'dbdgoeigeo@gmail.com', 38093564464, ['hot tea', 'watermelon']),
    new Clients(5, 'lina', 'Gorach', 'regtrhrtjih@gmail.com', 38069449339, ['ball', 't-shirt']),
    new Clients(6, 'Inna', 'Igorivna', 'fefeie345@gmail.com', 38094464353, ['ice-cream', 'trousers']),
    new Clients(7, 'Ostap', 'Romanov', 'bebeotglj3455@gmail.com', 380546469, ['car', 'book']),
    new Clients(8, 'Roman', 'Popov', 'bebgrhlj35@gmail.com', 3805456669, ['socks', 'cap']),
    new Clients(9, 'Nazar', 'Pankiv', 'njkyjglj3355@gmail.com', 38094546469, ['tennis rocket']),
    new Clients(10, 'Ostap', 'Romanov', 'vnveoetglj3455@gmail.com', 38091546469, ['skaitboard', 'jacket'])
]

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = array2.sort((a, b) => {
        return (a.order.length - b.order.length);
    }
)
console.log(sortedClients)