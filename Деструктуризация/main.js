//Задание 1: Деструктуризация объекта

let person1 = {
    name: "Vadim",
    age: 18,
    gender: "male",
    city: "Bishkek"
    }
    let { name, age, gender, city, occupation } = person1

console.log(`Имя: ${name}`)
console.log(`Возраст: ${age}`)
console.log(`Пол: ${gender}`)
console.log(`Город: ${city}`)


//Задание 2: Деструктуризация массива

let numbers1 = [3123, 7242, 122342, 1843543, 25124213523];
let [first, , , , last] = numbers1

console.log({first})
console.log({last})


//Задание 3: Функция и деструктуризация

function pepe(person2) {
    const { name, age } = person2
    return { name, age }
    }
    
    let person2 = {
        name: "Vadim",
        age: 18,
        gender: "male",
        city: "Bishkek"
        }
    
    let result = pepe(person2)
    console.log(result)


//Задание 4: Обмен значениями

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log({a})
console.log({b})


//Задание 5: Вложенная деструктуризация

let company = {
    comp: "Codify",
    address: "Насирдина Исанова 105/3",
    employees: [
    { name: "Aidar", position: "mentor" },
    { name: "Nadira", position: "technical support" },
    ]
    }
    
    let { comp, employees: [{ name: firstName }] } = company
    console.log({comp})
    console.log({firstName})


//Задание 6: Деструктуризация в цикле

//список стундентов из группы колледжа 
let students = [
    { name: "Vadim", age: 18 },
    { name: "Nurbek", age: 18  },
    { name: "Dastan", age: 17 },
    { name: "Nursultan", age: 18 },
    { name: "Beksultan", age: 17 },
    ]
    
    for (let { name, age } of students) {
    console.log(`Имя: ${name}, Возраст: ${age}`);
    }