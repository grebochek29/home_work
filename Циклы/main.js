// 1.
for (let i = 2; i <= 50; i++) {
    let isPrime = true;
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    
        if (isPrime) {
            console.log("1.", i); // добавил эти номера чтобы не запутаться в консоли
    }
    }


// 2.
let a = parseInt(prompt("2.Введите число N: "))
for (let i = 1; i <= a; i++) 
    if (i % 3 === 0 || i % 5 === 0) {
        console.log("2. ", i)
    }

// 3.
for (let i = 10; i >= 1; i--) {
        console.log("3. ", i)
    }


// 4.
let N = parseInt(prompt("4.Введите число N: "))
let sum = 0
for (let i = 1; i <= N; i++) {
  sum += i
}
console.log("4.Сумма чисел от 1 до", N, "включительно:", sum)


// 5.
let num = 7;
for (let i = 1; i <= 10; i++) {
  console.log("5. ", num, "x", i, "=", num * i)
}


// 6.
let number = prompt("6.Введите число:")
let sam = 0

for (let i = 0; i < number.length; i++) {
let m = Number(number[i])
sam += m
}
console.log("6.Сумма цифр числа:", sam)


// 7.
let height = prompt("7.Введите высоту пирамиды: ")
let symb = ""

for(let i = 0; i < height; i++) {
    symb = symb + "*"
    console.log("7.", symb)
}

