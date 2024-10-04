//remove main
const elementRemove = document.getElementById('main')
elementRemove.remove();

//create h1
const newHeader = document.createElement('h1')

//set h1 a value 
newHeader.id = 'victory'

//add text
newHeader.innerHTML = "Patrick is the champion"

document.body.appendChild(newHeader)