//1.
const h = document.querySelectorAll("h3")
h.forEach(elem => {elem.innerText = "!!!"})


//2.
h.forEach(elem => {elem.style.color = 'green'})


//3.
const ul = document.createElement("ul")

for (i = 0;i < 30; i++) {
    const li = document.createElement("li")
    li.innerText = `${i + 1} - овечка`
    ul.append(li)
}

document.body.append(ul)


//4.
const spans = document.getElementsByTagName('span')
for (var i = 0; i < spans.length; i++) {
  spans[i].classList.add('active')
}


//5.
const strong = document.querySelectorAll("strong")
strong.forEach(elem => {
    elem.style.color = 'green'
})


//6.
const em = document.querySelectorAll("em")

em.forEach(elem => {
    elem.classList.add('selected')
})


//7.
const row = document.querySelector('.row');
const mark = row.querySelectorAll("mark")

mark.forEach(elem => {
    elem.classList.add('selected')
})


//8.
const a = document.querySelectorAll('a')
a.forEach(elem => {
    elem.style.textDecoration = "none"
})


//9.
const strong2 = document.querySelectorAll('strong')
strong2.forEach(elem => {
    elem.classList.toggle("some")
})


//10.
const row2 = document.getElementsByClassName('row')


//11.
const a2 = document.getElementsByTagName("a")
const style = window.getComputedStyle(a2[1])
console.log(style.color)


//12.
const row3 = document.getElementsByClassName("row")
row3[2].classList.add('third')


//13.
const rowinner = document.getElementsByClassName("row-inner")
console.log(rowinner[0]);
rowinner[0].style.color = 'pink'


//14.
const input = document.createElement("input")

input.setAttribute("type", "text")
input.setAttribute("class", "input")
const divWithClass = document.getElementsByClassName("row-input")

divWithClass[0].append(input)
document.body.append(divWithClass)
console.log(divWithClass)


//15.
input.style.backgroundColor = 'yellow'


//16.
input.setAttribute("placeholder", "input")
input.style.color = "black"


//17.
const elemWithClassRow_Outer = document.getElementsByClassName("row-outer")

elemWithClassRow_Outer[0].style.fontSize = "20px"
console.log(elemWithClassRow_Outer[0])


//18.
const elemWithClassLast = document.getElementsByClassName("last")
elemWithClassLast[0].innerText = "Last but not least"
console.log(elemWithClassLast[0])


//19.
elemWithClassLast[0].style.fontWeight = "9000"