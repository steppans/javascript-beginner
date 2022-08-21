# JavaScript: Начало
## Oсновы
- Всю полезную документацию по JavaScript можно найти в `mdn` - "Mozilla developer network".
- ### 1. Переменные
```javascript
// style - camelCase (стиль переменных JavaScript)

// JavaScript поддердивает ';', но в подавляющем большинстве этот символ не нужен

// Устаревший вид задачи переменных
var firstName = 'Stepan' // можно изменить

// Современный кодстайл - 2 варианта
// const lastName = 'Smirnov' // read only (константное значение - нельзя менять)
let age = 19 // позволяет изменять значение также, как и var
const isProgrammer = true // boolean

const $ = 'some value' // '$' можно использовать в определении переменных 

console.log(firstName) // выводит параметры в Web конс
```
- ### 2. Мутирование
```javascript
// alert и console.log - функции в самом web, это не функции JavaScript

console.log('My name: ' + firstName + '\nMy age: ' + age) // JavaScript видит, что идёт работа со строками и приводит числовую переменную age в строковую (age.toString())

alert(firstName) // всплывающее окошко в браузере

const lastName = prompt('Enter last name') // новое окошко для записи
alert(firstName + ' ' + lastNam
```
- ### 3. Операторы
```javascript
const currentYear = 2022
const birthYear = 2003

const currentAge = currentYear - birthYear

console.log(currentAge)
console.log(15 * 3)

let count = 2
console.log(++count) // count++ тоже работает также как и в C++ (--count/count--) 
// '+='; '-='; '*='; '/=' - все эти операторы тоже имеются в JavaScript
```
- ### 4. Типы данныx
```javascript
const isProgrammer = true
const firstName = 'Stepan'
const age = 19
let x

console.log(typeof isProgrammer) // boolean
console.log(typeof firstName) // string
console.log(typeof age) // number 
console.log(typeof x) // undefined
console.log(null) // тоже тип данных

```
- ### 5. Приоритет операторов
```javascript
const fullAge = 19
const birthYear = 2003
const currentYear  = 2022

// Операторы сравнения: > < >= <=
const isFullAge = currentYear - birthYear >= fullAge
// Приоритет операторов можно смотреть в документации
console.log(isFullAge) // true
```

- ### 6. Приоритет операторов
```javascript
const courseStatus = 'fail' // ready, fail, pending

if (courseStatus === 'ready') {
    console.log('Course has been already ready and you can learn it')
} else if (courseStatus === 'pending') {
    console.log('Course now is in process of developing')
} else {
    console.log('Course was failed')
}

const num1 = 42 // number
const num2 = '42' // string

// Различия между ==/=== (JavaScript - динамически-типизированный язык)
console.log(num1 == num2)   // true
console.log(num1 === num2)  // false

let isReady = true

if (isReady){ // так тоже можно 
    console.log('Ready!!!')
}

// Тернарное выражение
isReady = false
isReady ? console.log('Ready!!!') : console.log('Not ready!!!')
```

- ### 7. Булева логика
```javascript
// && - логическое 'И'
// || - логическое 'ИЛИ'
// ! - логическое 'ОТРИЦАНИЕ'
```

- ### 8. Функции
```javascript
function calculateAge(year) {
    return 2022 - year
}

const myAge = calculateAge(2003)
console.log(myAge)

function logInfoAbout(name, year) {
    const age = calculateAge(year)

    if (age > 0){
        console.log('Human ' + name + ' now is ' + age + ' yaers old')
    } else {
        console.log('It is future!')
    }
}

logInfoAbout('Stepan', 2003)
logInfoAbout('Misha', 1999)
logInfoAbout('Petr', 2026)
```

- ### 9. Массивы
```javascript
const cars = ['Mazda', 'Mersedes', 'Ford']
// const cars = new Array('Mazda', 'Mersedes', 'Ford')
console.log(cars)
console.log(cars[1]) // доступ к элементу по индексу
console.log(cars.length)

cars[0] = 'Porsche' // несмотря на то, что cars является константным, значения его элементов можно менять 
console.log(cars)
cars[3] = 'Mazda' // добавляем статически, зная длину
console.log(cars)
cars[cars.length] = 'Jeep' // добавляем динамически
console.log(cars)
```

- ### 10. Циклы
```javascript
const cars = ['Mazda', 'Mersedes', 'Ford']

// for (let i = 0; i < cars.length; ++i) { // как в C++
//     // console.log(i)
//     const car = cars[i]
//     console.log(car)
// }

for (let car of cars) {
    console.log(car)
}
```

- ### 11. Объекты
```javascript
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
```

## Числа
```javascript
const num = 10         // integer
const float = 11.21    // float
const pow = 10e3       
console.log(pow)

const maxInt = Number.MAX_SAFE_INTEGER // к сущностям Number, Array, String можно обращаться и посмотреть нужные значения
console.log('MAX_SAVE_INTEGER', maxInt)

console.log('Math.pow', Math.pow(2, 6)) // глобальный объект Math содержит множество математических операций
console.log('MIN_SAVE_INTEGER', Number.MIN_SAFE_INTEGER)

console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)

console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log(Number.NaN) // Not A Number
console.log(typeof NaN)

const trash = 2 / 'a'       // NaN
console.log(isNaN(trash))        // Number.isNaN(); Number.isFinite()
console.log(isFinite(Infinity)) // конечна ли бесконечность?

const stringInt = '17'
const stringFloat = '24.19'
console.log(Number.parseInt(stringInt) + 3) // +stringInt = 17 - number
console.log(Number.parseFloat(stringFloat) + 8) // +stringFloat = 17.19 - number
```

Небольшой конфуз 
```javascript
console.log(0.4 + 0.2)  // страшно смотерть в консоль
// Пытаемся решить проблему
console.log((2 / 5) + (1 / 5))
console.log((0.4 + 0.2).toFixed(1)) // количество знаков после запятой, но это String
console.log(parseFloat((0.4 + 0.2).toFixed(1))) // приводим к численному виду
```
### BigInt - новый тип данных
```javascript
console.log(Number.MAX_SAFE_INTEGER)
console.log(typeof Number.MAX_SAFE_INTEGER)

console.log(typeof 9007199254740991000n) // в конце числа n означение другой тип числа - bigint
// BigInt могут взаимодействовать только между собой
console.log(9007199254740991000n - 9007199254740990999n)

// console.log(10n - 4) // error
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))
console.log(5n / 2n) // 2n
```
### Math - глобальный объект математических операций
```javascript

```