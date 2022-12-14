// Массивы

const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
const fib = [1, 1, 2, 3, 5, 8, 13]    // в JavaScript можно хранить объекты разного типа в массиве

// // Добавление элементов в конец
// cars.push('Renault')
// console.log(cars)
// // Добавление элемента в начало 
// cars.unshift('Volga')
// console.log(cars)
// // Удаление первого элемента из Array
// firstItem = cars.shift()            // возвращает первый элемент
// console.log(cars)
// // Удаление последнего элемента из Array
// lastItem = cars.pop()
// console.log(cars)

// console.log(cars.reverse())            // переворачиваем массив

// // Задача 1
// const text = 'Hi, I learn JavaScript'
// const reverseText = text.split('').reverse().join('')      // split - если строка пустая '', то возвращает массив из букв
// console.log(reverseText)

// const index = cars.indexOf('BMW')     // возвращает индекс элемента, который мы ищем
// cars[index] = 'Porsche'
// console.log(cars)
// // indexOf работает хорошо с примитивными типами данных. С другими объектами в массиве работает findIndex

const people = [
    {firstName: 'Stepan', money: 1700},
    {firstName: 'Dmitriy', money: 900},
    {firstName: 'Mike', money: 3100},
]

// const index = people.findIndex(function(person){
//     return person.money === 900
// })
// console.log(index)

// const person = people.find(function(person){
//     return person.money === 900
// })
// console.log(person)

// Ещё проще
// const person = people.find(person => person.money === 3100) 
// console.log(person)

// let findedPerson
// for (person of people) {
//     if (person.money === 900) {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)

// console.log(cars.includes('Mazda'))

// Методы высокого порядка

// const upperCaseCars = cars.map(car => car.toUpperCase()) // возвращет новый массив с изменёнными данными
// console.log(upperCaseCars)
// console.log(cars)

// // const pow2Fib = fib.map(num => num ** 2)
// // console.log(pow2Fib)

// // Можно так
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// console.log(pow2Fib)

// const pow2Fib = fib.map(num => num ** 2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)           // не void метод 
// console.log(filteredNumbers)

// const allMoney = people.reduce((acc, person) => {      // acc - счётчик для суммирования(например), второй параметр функции - начальное значение счётчика
//     acc += person.money
//     return acc
// }, 0)

// console.log(allMoney)

// Немного из продвинутого программирования

const allMoney = people
.filter(person => person.money > 1000)
.reduce((acc, person) => {
    acc += person.money
    return acc
}, 0)

console.log(allMoney)
