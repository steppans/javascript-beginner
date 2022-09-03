// String

// const name = 'Stepan'
// const age = 19
// const output = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.' // Плохой стиль
// // Обратные кавыки
// const output = `Hello, my name is ${name} and I am ${age} years old.` // В динамике можно использовать и функции, а также тернарные выражения
// const output = `
//     <div>This is div</div>
//     <p>This is p</p>
// `

// console.log(output)

// const firstName = 'Stepan'
// console.log(firstName.length)
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.charAt(2))        // получаем букву на данной позиции
// console.log(firstName.indexOf('pan'))   // есть ли такое сочетание букв в строке
// console.log(firstName.startsWith('ste'))
// console.log(firstName.toLowerCase().startsWith('ste'))  // можно так
// console.log(firstName.endsWith('pan'))
// console.log(firstName.repeat(2))

// const string = '    <-Tab'
// console.log(string)
// console.log(string.trim()) // позволяет отчищать строку от пробелов

function logPerson(s, firstName, age) {
    console.log(s, firstName, age)
    return 'Info about person'
}

const personName = 'Stepan'
const personAge = 19

const output = logPerson`Name: ${personName}, Age: ${personAge}!`

console.log(output)        // 'Info about person'
// Что происходит: в массив s передаётся строка ``(обратные кавычки), разделённая на подстроки до символа '${}'
// А в остальные парметры функции передаются поочерёдно элеметы из динамической строки
// Это делается для валидации значений внутри функции, чтобы защитить наше приложение

function improvedLogPerson(s, firstName, age) {
    if (age < 0) {
        age = 'Ещё не родился'
    }
    return `${s[0]}${firstName}${s[1]}${age}${s[2]}`
}

const testName1 = 'Mikel'
const testName2 = 'Dimon'
const testAge1 = 10
const testAge2 = -5

console.log(improvedLogPerson`Name: ${testName1}, Age: ${testAge1}...`)
console.log(improvedLogPerson`Name: ${testName2}, Age: ${testAge2}...`)
