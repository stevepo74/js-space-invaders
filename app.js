const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.results')
const width = 15

for (i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

console.log(squares)