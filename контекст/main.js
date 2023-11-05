//1
let User = {
    name: 'vadim',
    age: 18,
    logInfo: function(){
            console.log("Имя: " + this.name + ", Возраст: " + this.age);
        }
}

User.logInfo()


//2
let auto = {
    brand: "pajero",
    logAutoBrand: function(){
        console.log(`Моя машина - ${this.brand}`)
    }
}

auto.logAutoBrand()


//3
let circle = {
    radius: 10,
    logRadius: function(){
        console.log(`Радиус круга - ${this.radius}`);
    }
}
circle.logRadius()

//4
let calculator = {
    num1: +prompt(),
    num2: +prompt(),
    logSum: function(){
        let sum= this.num1 + this.num2
        console.log('Сумма - ', sum);
    },
    logMult: function(){
        let mult= this.num1 * this.num2
        console.log('Произведение - ', mult);
    }
}
calculator.logSum()
calculator.logMult()


//5
function getDayOfWeek() {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayIndex = this.getDay();
    return daysOfWeek[dayIndex];
  }
  
const today = new Date();
const currentDayOfWeek = getDayOfWeek.call(today);
console.log('Сегодня ' + currentDayOfWeek);


//6
let product = {
    title: 'Chocopie',
    price: 160,
    logInfoAboutProduct: function(){
        console.log(`Продукт ${this.title} стоит ${this.price} сомов`);
    }
}
product.logInfoAboutProduct()


//7
let animal = {
    animalName: 'cat',
    animalsSound: 'mew',
    whatSoundDoesAnimalDo: function(){
        console.log(`${this.animalName} издает звук ${this.animalsSound}`);
    }
}
animal.whatSoundDoesAnimalDo()

