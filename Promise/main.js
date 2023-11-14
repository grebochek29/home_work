// Простое обещание (Promise): 

const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Promise выполнено")
    }, 2000)
    })
    
    simplePromise.then(result => {
        console.log(result)
        })

// Обработка ошибок: 

const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    reject(new Error("Произошла ошибка"))
    }, 3000)
    })
    
    errorPromise
    .catch(error => {
    console.log(error.message)
    })


// Promise с условием:

function check(number) {
    const promise = new Promise((resolve, reject) => {
    if (number % 2 === 0) {
    resolve("Четное число")
    } else {
    reject(new Error("Нечетное число"))
    }
    })
    
    promise
    .then(result => {
    console.log(result)
    })
    .catch(error => {
    console.error(error.message)
    });
    
    return promise
    }
    
    check(3)
    check(4)


// 4 задание пытался сделать но не смог 

