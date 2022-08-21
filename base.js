// // Основы
// // 1. Переменные

// // style - camelCase (стиль переменных JavaScript)

// // JavaScript поддердивает ';', но в подавляющем большинстве этот символ не нужен

// // Устаревший вид задачи переменных
// var firstName = 'Stepan' // можно изменить

// // Современный кодстайл - 2 варианта
// // const lastName = 'Smirnov' // read only (константное значение - нельзя менять)
// let age = 19 // позволяет изменять значение также, как и var
// const isProgrammer = true // boolean

// const $ = 'some value' // '$' можно использовать в определении переменных 

// console.log(firstName) // выводит параметры в Web консоль 

// // 2. Мутирование

// // alert и console.log - функции в самом web, это не функции JavaScript

// console.log('My name: ' + firstName + '\nMy age: ' + age) // JavaScript видит, что идёт работа со строками и приводит числовую переменную age в строковую (age.toString())

// alert(firstName) // всплывающее окошко в браузере

// const lastName = prompt('Enter last name') // новое окошко для записи
// alert(firstName + ' ' + lastName)

// // 3. Операторы

// const currentYear = 2022
// const birthYear = 2003

// const currentAge = currentYear - birthYear

// console.log(currentAge)
// console.log(15 * 3)

// let count = 2
// console.log(++count) // count++ тоже работает также как и в C++ (--count/count--) 
// // '+='; '-='; '*='; '/=' - все эти операторы тоже имеются в JavaScript

// // 4. Типы данныx

// const isProgrammer = true
// const firstName = 'Stepan'
// const age = 19
// let x

// console.log(typeof isProgrammer) // boolean
// console.log(typeof firstName) // string
// console.log(typeof age) // number 
// console.log(typeof x) // undefined
// console.log(null) // тоже тип данных

// // 5. Приоритет операторов
// const fullAge = 19
// const birthYear = 2003
// const currentYear  = 2022

// // Операторы сравнения: > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge
// // Приоритет операторов можно смотреть в документации
// console.log(isFullAge) // true

// // 6. Условные операторы
// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Course has been already ready and you can learn it')
// } else if (courseStatus === 'pending') {
//     console.log('Course now is in process of developing')
// } else {
//     console.log('Course was failed')
// }

// const num1 = 42 // number
// const num2 = '42' // string

// // Различия между ==/=== (JavaScript - динамически-типизированный язык)
// console.log(num1 == num2)   // true
// console.log(num1 === num2)  // false

// let isReady = true

// if (isReady){ // так тоже можно 
//     console.log('Ready!!!')
// }

// // Тернарное выражение
// isReady = false
// isReady ? console.log('Ready!!!') : console.log('Not ready!!!')

// 7. Булева логика

// && - логическое 'И'
// || - логическое 'ИЛИ'
// ! - логическое 'ОТРИЦАНИЕ'

// // 8. Функции

// function calculateAge(year) {
//     return 2022 - year
// }

// const myAge = calculateAge(2003)
// console.log(myAge)

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0){
//         console.log('Human ' + name + ' now is ' + age + ' yaers old')
//     } else {
//         console.log('It is future!')
//     }
// }

// logInfoAbout('Stepan', 2003)
// logInfoAbout('Misha', 1999)
// logInfoAbout('Petr', 2026)

// 9. Массивы

// const cars = ['Mazda', 'Mersedes', 'Ford']
// // const cars = new Array('Mazda', 'Mersedes', 'Ford')
// console.log(cars)
// console.log(cars[1]) // доступ к элементу по индексу
// console.log(cars.length)

// cars[0] = 'Porsche' // несмотря на то, что cars является константным, значения его элементов можно менять 
// console.log(cars)
// cars[3] = 'Mazda' // добавляем статически, зная длину
// console.log(cars)
// cars[cars.length] = 'Jeep' // добавляем динамически
// console.log(cars)

// // 10. Циклы

// const cars = ['Mazda', 'Mersedes', 'Ford']

// // for (let i = 0; i < cars.length; ++i) { // как в C++
// //     // console.log(i)
// //     const car = cars[i]
// //     console.log(car)
// // }

// for (let car of cars) {
//     console.log(car)
// }

// 11. Объекты

const person = {            // new Object()
    firstName: 'Stepan',
    lastName: 'Smirnov',
    year: 2003,
    languages: ['RU', 'EN', 'DE'],
    isStudent: true,

    // Methods
    fullName: function () {
        console.log(this.lastName + ' ' + this.firstName)
    }
}

console.log(person)
console.log(person.firstName) // также можно person['firstName']
person.fullName()             // вызываем метод объекта

// Можно изменять значения по ключам и добавлять новые (даже если const используется при создании объекта)
person.isStudent = false
person.isProgrammer = false

console.log(person)