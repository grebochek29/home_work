//1.map
function addTen(numbers) {
    return numbers.map(number => number + 10);
    }
    
    let numbers = [1, 2, 3, 4, 5];
    let result1 = addTen(numbers);
    console.log(result1)

//2.filter
function filterWordsByLength(words) {
    return words.filter(word => word.length >= 5);
    }
    
    let words = ['чечел', 'гребочек', 'амогус', 'биба', 'боба'];
    let result2 = filterWordsByLength(words);
    console.log(result2)

//3.forEach
function Square(numbers3) {
    numbers3.forEach(number => {
    let square = number * number
    console.log(square)
    })
    }
    
    let numbers3 = [1, 2, 3, 4, 5]
    // Square(numbers3)

//4.reduce
function sumNumbers(numbers4) {
    let sum = numbers4.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sum
    }
    
    let numbers4 = [1, 2, 3, 4, 5]
    let result = sumNumbers(numbers)
    console.log(result)


//5.some
function checkEvenNumber(numbers) {
    return numbers.some(num => num % 2 === 0)
    }
    
    let numbers5 = [1, 3, 5, 7, 8, 9];
    let result3 = checkEvenNumber(numbers5)
    console.log(result3)


//6.every
function checkAllPositive(numbers6) {
    return numbers6.every(num => num > 0)
    }
    
    let numbers6 = [1, 2, 3, 4, 5]
    let result6 = checkAllPositive(numbers6)
    console.log(result6)


//7.find
function findFirstEvenNumber(numbers7) {
    for (let i = 0; i < numbers.length; i++) {
    if (numbers7[i] % 2 === 0) {
    return numbers7[i]
    }
    }
    return null
    }
    
    let numbers7 = [1, 3, 5, 7, 7, 9]
    let result7 = findFirstEvenNumber(numbers7)
    console.log(result7)


//8.map
function convertToUpperCase(strings) {
    return strings.map(string => string.toUpperCase())
    }
    
    let strings = ["cat", "pisuha"]
    let result8 = convertToUpperCase(strings)
    console.log(result8)


//9.filter
function filterPositiveNumbers(numbers9) {
    return numbers9.filter(number => number > 0);
    }
    
    let numbers9 = [-1, 2, -3, 4, -5];
    let result9 = filterPositiveNumbers(numbers9);
    console.log(result9)


//10.forEach
function greetNames(names) {
    names.forEach(name => {
    console.log(`прощай, ${name}`)
    });
    }
    
    let names = ["какёин", "цезарь", "абдул"]
    greetNames(names)


//11.reduce
function multiplyNumbers(numbers11) {
    return numbers11.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
    }
    
    let numbers11 = [1, 2, 3, 4, 5]
    let result11 = multiplyNumbers(numbers11)
    console.log(result11)


//12.some
function checkStringLength(strings12) {
    return strings12.some(string => string.length > 10);
    }
    
    let strings12 = ["234523", "54352", "345", "34523453", "23452342323523"];
    let result12 = checkStringLength(strings12);
    console.log(result12)


//13.find
function findNumberDivisibleBy7(numbers13) {
    return numbers13.find(number => number % 7 === 0) || null
    }
    
    let numbers13 = [15, 22, 35, 48, 56];
    let result13 = findNumberDivisibleBy7(numbers13);
    console.log(result13)
