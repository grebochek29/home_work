//Основы:
//1) Создайте переменные для хранения числа, строки и булева значения. Выведите их значения в консоль.

const num = 234234
const bool = true
const str = 'jojo'
console.log(num, bool, str)

// Типы данных и преобразование:
// 2) Преобразуйте строку в число и наоборот. Выведите результат в консоль.

const str1 = "123"
console.log(Number(str1))
console.log(str1.toString())


//Массивы:
// 3) Создайте массив чисел. Используя цикл, выведите каждый элемент массива в консоль.

const arr = [1,2,3,4,5]

for( let i = 0; i < arr.length;i++) {
    console.log(arr[i])
}


// Объекты:
// 4) Создайте объект, представляющий информацию о человеке (имя, возраст, город и т.д.). Выведите значения свойств в консоль.

let person1 = {
    name: "Vadim",
    age: 18,
    gender: "male",
    city: "Bishkek"
}
    console.log(person1.name)
    console.log(person1.age)
    console.log(person1.gender)
    console.log(person1.city)
    


// Условные операторы:
// 5) Напишите программу, которая проверяет, является ли число четным или нечетным, и выводит соответствующее сообщение.


let a = prompt("введите число")

        if(a % 2 == 0) {
            console.log("чётное")
        } else {
            console.log("нечётное")
        }
       
 
// Циклы:
// 6) Используя цикл, выведите числа от 1 до 10 в консоль. 

for (let i = 1;  i <= 10; i++) {
    console.log(i)
}


// Функции:
// 7)Создайте функции 3 типов (arrow, declaration, expression). Все три функции должны выводить в консоль - Hello World!



const arrowFunction = () => {
console.log('Hello World!');
}
arrowFunction()

function declarationFunction() {
console.log('Hello World!')
}
declarationFunction()

const expressionFunction = function() {
console.log('Hello World!')
}
expressionFunction()


// Промисы:
// 8) Создайте два промиса - 1. Отрабатывает успешно 2. Отрабатывает с ошибкой

 
const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Promise выполнено")
    }, 2000)
    })
    
    simplePromise.then(result => {
        console.log(result)
        })

const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    reject(new Error("Произошла ошибка"))
    }, 4000)
    })
    
    
// Дополонительно:


// 1) Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение.


function calculateAverage(numbers) {
    let sum = 0
    
    for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    }
    
    let average = sum / numbers.length;
    return average
    }
    
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    let result = calculateAverage(numbers)
    console.log(result)



// 2) Напишите функцию, которая принимает массив строк и возвращает новый массив строк, где каждый элемент в верхнем регистре.

function capitalizeStrings(arr) {
    return arr.map(str => str.toUpperCase())
    }
    let strings = ["джотаро", "какёин", "польнареф"]
    let result1 = capitalizeStrings(strings)
    console.log(result1)


//3) Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив объектов с полями "имя" и "возраст", отсортированный по возрастанию возраста.

function sort(arr) {
    return arr.sort((a, b) => a.age - b.age);
    }
    
    let people = [
    { name: "Абдул", age:26  },
    { name: "Джотаро", age:17  },
    { name: "Джозеф", age:68  }
    ]
    
    let sortedPeople = sort(people)
    console.log(sortedPeople)

// 4) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа.

function filterUniqueNumbers(numb) {
    let uniqueNumbers = []
    
    for (let i = 0; i < numb.length; i++) {
    if (uniqueNumbers.indexOf(numb[i]) === -1) {
    uniqueNumbers.push(numb[i])
    }
    }
    
    return uniqueNumbers;
    }
    
    let numb = [1, 2, 3, 4, 5, 1, 2, 3]
    let res = filterUniqueNumbers(numb)
    console.log(res)

// 5) Напишите функцию, которая принимает массив объектов и сортирует их по полю "имя" в алфавитном порядке.

function sortObjectsByName(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name))
    }
    
    let peopl = [
    { name: "vadim" },
    { name: "mary" },
    { name: "dastan" }
    ]
    
    let sortedPeopl = sortObjectsByName(peopl)
    console.log(sortedPeopl)

// 6) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let evenNumber = number
    .slice()
    .filter(num => num % 2 === 0);
    
    let result14 = evenNumber.join(",");
    console.log(result14)


// 7) Напишите функцию, которая принимает массив объектов с полями "имя" и "зарплата"и возвращает новый массив объектов, содержащий только тех сотрудников, чья зарплата больше 50000.

function filterBySalary(arr) {
    return arr.filter(employee => employee.salary > 50000);
    }
    
    let employees = [
    { name: "челик", salary: 60000 },
    { name: "ещё челик", salary: 45000 },
    { name: "и ещё какоё то челик", salary: 55000 }
    ]
    
    let highPaidEmployees = filterBySalary(employees)
    console.log(highPaidEmployees)


//8) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше 10 и меньше 20.   


    function filterNumbers(arr) {
        return arr.filter(number23 => number23 > 10 && number23 < 20)
        }
        
        let numbers23 = [5, 12, 15, 25, 8]
        let result23 = filterNumbers(numbers23)
        console.log(result23)



//9) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только те строки, которые длиннее 5 символов.

function filterStrings(arr) {
    return arr.filter(str => str.length > 5)
    }
    
    let strings12 = ["apple", "banana", "cherry", "orange", "watermelon"]
    let result12 = filterStrings(strings12)
    console.log(result12)
    


    
    function filterByAverage(arr) {
    const average = arr.reduce((acc, current) => acc + current, 0) / arr.length
    return arr.filter(number345 => number345 > average)
    }
    
    let numbers345 = [5, 10, 15, 20, 25, 30]
    let result345 = filterByAverage(numbers345)
    console.log(result345)