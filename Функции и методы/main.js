// //? Задания для строк:
//Легкое задание (declaration function):

//1
let string1 = 'wild'
let string2 = 'rift'

function concatStrings(str1, str2) {
    return str1.concat(str2)
    }
    
let result1 = concatStrings(string1, string2)
console.log(result1)


//Среднее задание (expression function):

//1
function stringToLowerCase(str) {
    return str.toLowerCase()
    console.log(result)
    }

let str = 'MR. PROPER'
let result2 = stringToLowerCase(str)
console.log(result2)


//2
function replaceAll(str, substring, replacement) {
    return str.replaceAll(substring, replacement)
}
    
let origString = "jotaro kudjo"
let result3 = replaceAll(origString, "o", "u")
console.log(result3) 


//Среднее задание (expression function):
//2
const includesSubstring = (str, substring) => {
    return str.includes(substring)
    }
    
    let string3 = "N word"
    let substring1 = "N"
    let result4 = includesSubstring(string3, substring1)
    console.log(result4)


//Легкое задание (arrow function):
//3
const getIndexOf = (str, substring) => {
    return str.indexOf(substring)
    }
    
    let string = "piter                 griffin"
    let substring = "griffin"
    let index = getIndexOf(string, substring)
    console.log(index)


//Легкое задание (declaration function):
//1
function splitString(str) {
    return str.split(" ")
    }
    
    let string5 = "joseph joestar"
    let result = splitString(string5)
    console.log(result)


//Среднее задание (expression function):
//2
const extractSubstring = (str, startIndex, endIndex) => {
    return str.slice(startIndex, endIndex)
    }
    
    let string6 = "chikn nuggit"
    let result5 = extractSubstring(string6, 6, 12)
    console.log(result5)


//Задания для чисел:

//Среднее задание (declaration function):
//1
function convertToString(number) {
    return number.toString()
    }

    let num = 993
    let result6 = convertToString(num)
    console.log(result6)


//Легкое задание (expression function):
//2
const parseDecimalNumber = (str) => {
    return parseFloat(str)
    }
    
    let decimalString = "3.14"
    let result7 = parseDecimalNumber(decimalString)
    console.log(result7)


//Среднее задание (arrow function):
//3
const sumNumbers = (num1, num2) => num1 + num2

let result8 = sumNumbers(1231, 7866)
console.log(result8)


//Легкое задание (declaration function):
//1
function getFixedNumber(number) {
    return number.toFixed(2);
    }
    
    let num1 = 3.14159;
    let result9 = getFixedNumber(num1);
    console.log(result9)


//Среднее задание (expression function):
//2
const parseInteger = (str) => {
    return parseInt(str)
    }
    
    let stringNumber = "42"
    let result11 = parseInteger(stringNumber)
    console.log(result11)

//Легкое задание (declaration function):
//1
function addNumbers(num1, num2) {
    return num1 + num2;
    }
    
    let result12 = addNumbers(3, 4);
    console.log(result12)


//Среднее задание (expression function):
//2
const parseToFloat = (str) => {
    return parseFloat(str)
    };
    
    let floatString = "1321.12341"
    let result13 = parseToFloat(floatString)
    console.log(result13)


// Задания для массивов:

//Легкое задание:
//1
let fruits = ['персик', 'банан', 'манго']

fruits.push('груша')
fruits.pop()

console.log(fruits)


//Среднее задание:
//2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers
.slice()
.filter(num => num % 2 === 0);

let result14 = evenNumbers.join(",");

console.log(result14)


//Легкое задание:
//3
let colors = ["красный", "зеленый", "синий"]

colors.shift()
colors.unshift("желтый")

console.log(colors)


//Среднее задание:
//4
let firstArray = [1, 2, 3]
let secondArray = [4, 5, 6]

let mergedArray = firstArray.concat(secondArray)
let valueToCheck = 4

console.log(mergedArray.includes(valueToCheck))


//Легкое задание:
//1
let animals = ['кошка', 'собака', 'кролик']

animals.push('тигр')

let newAnimal = 'тигр'
let index2 = animals.indexOf(newAnimal)

console.log(index2)


//Среднее задание:
//2
let numbers2 = [1, 2, 3, 4, 5]
let slicedArray = numbers.slice(0, 2)
let reversedArray = slicedArray.reverse()
let result15 = reversedArray.toString()

console.log(result15)


//Легкое задание:
//3
let fruits2 = ['персик', 'банан', 'манго']

fruits.unshift('груша')
fruits.shift()

console.log(fruits2)


//Среднее задание:
//4
let firstArray2 = [1, 2, 3]
let secondArray2 = [4, 5, 6]

let mergedArray2 = firstArray2.concat(secondArray2)
let result16 = mergedArray2.join(",")

console.log(result16)


// ДОП ЗАДАНИЯ:

// Задания для строк:

// Сложное задание (declaration function):
//1
function findUniqueWords(str) {
    let words = str.toLowerCase().split(" ")
    let uniqueWords = {}
    
    for (let word of words) {
    uniqueWords[word] = true
    }
    
    return Object.keys(uniqueWords)
    }
    
    let string7 = "Андрей Руслан Саша Максим максим Саша"
    let result18 = findUniqueWords(string7)
    console.log(result18)


// Сложное задание (expression function):
//2
function replaceVowels(str) {
    let vowels = ["а", "у", "е", "ы", "а", "о", "э", "я", "и", "ю", "ё"];
    let result19 = "";
    
    for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.includes(char)) {
    result19 += "*";
    } else {
    result19 += str[i];
    }
    }
    return result19;
    }
    
    let string8 = "Съешь ещё этих мягких французских булок, да выпей чаю";
    let replacedString = replaceVowels(string8);
    console.log(replacedString);


// Задания для чисел:

// Сложное задание (declaration function):
//1
function calculateAverage(numbers21) {
    let sum = 0
    
    for (let i = 0; i < numbers21.length; i++) {
    sum += numbers21[i]
    }
    
    let average = sum / numbers21.length;
    return average
    }
    
    let numbers21 = [1, 2, 3, 4, 5]
    let result21 = calculateAverage(numbers21)
    console.log(result21)


//Сложное задание (expression function):
//2
function convertStringToIntegers(str) {
    let numbersArray = str.split(",")
    let resultArray = []
    
    for (let i = 0; i < numbersArray.length; i++) {
    let number = parseInt(numbersArray[i])
    resultArray.push(number)
    }
    
    return resultArray
    }
    
    let string22 = "1,2,3,4,5,5,9,2,5,8,2";
    let result22 = convertStringToIntegers(string22)
    console.log(result22)


// Задания для массивов:

// 1.Сложное задание:
function reverseWordsInSentence(sentence) {
    let words = sentence.split(" ")
    let reversedWords = words.map(word => word.split("").reverse().join(""))
    let reversedSentence = reversedWords.join(" ")
    
    return reversedSentence
    }
    
    let sentence = "всем здарова"
    let result23 = reverseWordsInSentence(sentence)
    console.log(result23)


// 2.Сложное задание:
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