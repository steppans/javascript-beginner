// // Number

// const num = 10         // integer
// const float = 11.21    // float
// const pow = 10e3       
// console.log(pow)

// const maxInt = Number.MAX_SAFE_INTEGER // к сущностям Number, Array, String можно обращаться и посмотреть нужные значения
// console.log('MAX_SAVE_INTEGER', maxInt)

// console.log('Math.pow', Math.pow(2, 6)) // глобальный объект Math содержит множество математических операций
// console.log('MIN_SAVE_INTEGER', Number.MIN_SAFE_INTEGER)

// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)

// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)

// const trash = 2 / 'a'       // NaN
// console.log(isNaN(trash))        // Number.isNaN(); Number.isFinite()
// console.log(isFinite(Infinity)) // конечна ли бесконечность?

// const stringInt = '17'
// const stringFloat = '24.19'
// console.log(Number.parseInt(stringInt) + 3) // +stringInt = 17 - number
// console.log(Number.parseFloat(stringFloat) + 8) // +stringFloat = 17.19 - number

// console.log(0.4 + 0.2)  // страшно смотерть в консоль
// // Пытаемся решить проблему
// console.log((2 / 5) + (1 / 5))
// console.log((0.4 + 0.2).toFixed(1)) // количество знаков после запятой, но это String
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // приводим к численному виду

// // Big Int
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(typeof Number.MAX_SAFE_INTEGER)

// console.log(typeof 9007199254740991000n) // в конце числа n означение другой тип числа - bigint
// // BigInt могут взаимодействовать только между собой
// console.log(9007199254740991000n - 9007199254740990999n)

// // console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))

// Math