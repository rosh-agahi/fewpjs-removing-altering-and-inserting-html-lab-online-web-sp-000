// Write your code here!
let element = document.querySelector("#main")
element.remove()

let newHeader = document.createElement('h1')
newHeader.id = "hello"
newHeader.innerHTML = 'this is the inner html'
document.body.appendChild(newHeader)