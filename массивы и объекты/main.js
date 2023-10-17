//1.Создание объекта  
let person = {
    name: "Вадим",
    age:  18,
    city:  "Бишкек"
}

console.log(person)

//2.Изменение объекта
person.age = 81

console.log(person)

//3.Длина массива
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.length)

//4.Добавление элементов в массив
let animals = []

animals.push("капибара")
animals.push("собака")
animals.push("тигр")

console.log(animals)

//5.Объект в массиве
const people = []

people.push({ name: 'John', age: 30, city: 'New York' })
people.push({ name: 'Alice', age: 25, city: 'London' })
people.push({ name: 'Bob', age: 35, city: 'Paris' })

console.log(people)

//6.Массив с разными типами данных
var data = [42, "Hell", { manga: "jojo" }]

console.log(data)

//7.Доступ к элементам массива

var fruits = ["Манго", "Банан", "Апельсин", "Груша", "Ананас"];

console.log(fruits[2])

//8.Доступ к свойствам объекта

var book = {
    title: "JoJo’s Bizarre Adventure",
    author: "Хирохико Араки",
    year: 1987
    };
    

    console.log(book.author);