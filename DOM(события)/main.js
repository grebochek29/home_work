// 1.
document.addEventListener('keydown', function(event) {
    
    //! работает без проблем только капсом
     
    if (event.key === 'R') {
    document.body.style.backgroundColor = 'red'
    } else if (event.key === 'G') {
    document.body.style.backgroundColor = 'green'
    } else if (event.key === 'B') {
    document.body.style.backgroundColor = 'blue'
    } else if (event.key === 'W') {
    document.body.style.backgroundColor = 'white'
    }
    if (event.shiftKey) {
    
    if (event.key === 'b') {
    document.body.style.backgroundColor = 'black'
    } else if (event.key === 'g') {
    document.body.style.backgroundColor = 'gray'
    }
}
})

// document.addEventListener('keydown', (event) => {
//    console.log(event.key)
// })
    
//2.

let i = '0'
function increaseAndLog() {
    i = i + i
    console.log(i)
    }
document.getElementById('increaseButton').addEventListener('click', increaseAndLog)


//3.

document.getElementById("myButton").addEventListener("click", function() {
    var image = document.getElementById("myImage")
    image.classList.add("fade")
    
    setTimeout(function() {
      image.classList.add("hidden")
    }, 500)
  })

//4.
    const input = document.querySelector('.input-text')
    const output = document.querySelector('.output-text')
    
    input.addEventListener('input', (event) => {
      output.textContent = input.value
    })
  

//5.
const box = document.querySelector('.box')
    
    box.addEventListener('click', (event) => {
      const pos = box.getBoundingClientRect()
      const x = event.clientX - pos.left
      const y = event.clientY - pos.top
      
      console.log(`Позиция клика относительно div-a: x ${x}px, y ${y}px`)
    })
 
//6.
    const colorInput = document.querySelector('.color-input')
    const body = document.querySelector('body')
    
    colorInput.addEventListener('change', (event) => {
      body.style.backgroundColor = colorInput.value
    })
  


