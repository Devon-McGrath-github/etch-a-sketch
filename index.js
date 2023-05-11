// Create canvas (default to 16x16 grid)
// Put divs inside another container div
// make the divs apppear as a grid
const DEFAULT_SIZE = 16

// creates pixel grid for Etch-A-Sketch
function createGrid (size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')

    gridElement.classList.add('grid-element')
    gridElement.addEventListener("mouseover", changeColor)
    gridElement.addEventListener("mousedown", changeColor)
    grid.appendChild(gridElement)
  }
}

function changeColor (e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (mouseDown) {
    console.log('mousedown true' + mouseDown)
    // placeholder values for color mode
    const R = 0
    const G = 0
    const B = 0
    e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
  }  
}

// variable to track state for mousedown, that can be checked with mouseover eventListener
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


window.onload = () => {
  createGrid(DEFAULT_SIZE)
}