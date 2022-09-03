// Функции

// // Function Declaration
// // К такой функции мы можем обращаться, когда захотим (даже если она перенесена ниже её вызова в коде)
// function greet(firstName) {
//     console.log(`Hi - ${firstName}`)
// }

// // Function Expression
// // К такой функции можно обращаться только после её определения
// const goodbye = function(firstName) {  // можно так передавать анонимную функцию, а можно 'function goodbye() {...}'
//     console.log(`Bye - ${firstName}`)
// }

// greet('Dasha')
// goodbye('Dasha')

// console.log(typeof greet)
// console.dir(greet)         // изучить лучше тип function -> функции в JavaScript - это объекты

// Анонимные функции

// let counter = 0
// // Запускает анонимную функцию через некоторый интервал в миллиметрах
// const interval = setInterval(function() {  // setTimeout() - запускает задержку (по аналогии - clearTimeout)
//     if (counter === 5) {
//         clearInterval(interval)            // глобальная функция, которая останавливает запущенный интервал
//     }
//     else {
//         console.log(++counter)
//     }
// }, 1000)  

// Стрелочные функции

// function greet(firstName) {
//     console.log(`Hi - ${firstName}`)
// }

// const arrowGreet = (firstName) => {
//     console.log(`Hi - ${firstName}`)
// } 

// const arrowGreet2 = firstName => console.log(`Hi - ${firstName}`) // так можно если в теле функции одна строка, и передаётся один параметр

// greet('Misha')
// arrowGreet('Misha')
// arrowGreet2('Misha')

// const pow2 = num => num ** 2 // возвращает число
// console.log(pow2(10))

// Параметры по умолчанию

// const sum = (a = 10, b = a*2) => a + b
// console.log(sum(11, 13))
// console.log(sum())

// function sumAll(...all) {
//     console.log(all)
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// Замыкания

function createMember(firstName) {
    return function(lastName) {
        console.log(firstName + lastName)
    }
}

const logWithLastName = createMember('Stepan')
console.log(logWithLastName)
logWithLastName('Smirnov')
logWithLastName('Ivanov')

createMember('Stepan')('Smirnov') // дефолтный запуск
// По сути это сделано для того, чтобы таким образом создать аналог приватных переменных.
// Ведь у функции с lastName нет никакого доступа к переменной firstName
