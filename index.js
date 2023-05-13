const DEFAULT_SIZE = 16

// variable to track state of mouse click
let mouseDown = false

let currentSize = DEFAULT_SIZE

// create variables for page elements
const sizeSlider = document.getElementById('grid-slider')
const clearButton = document.getElementById('clear')


/* function calls for related page element events */
clearButton.onclick = () => refreshGrid(currentSize)
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
// retrieve value from html slider on input and change
  // value shown to user needs to update on input for clarity
  // however, for performance, refresh grid is only called onchange
sizeSlider.oninput = (e) => updateCurrentSize(e.target.value)
sizeSlider.onchange = (e) => refreshGrid(e.target.value)


/* ___________________________________________________________________________________________ */

// creates pixel grid to serve as Etch-A-Sketch drawing space
function createGrid (size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')

    gridElement.classList.add('grid-element')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement)
  }
}

// update background color of grid elements on click
function changeColor (e) {
  if (e.type === 'mouseover' && !mouseDown) return
  // placeholder values for color mode
  const R = 0
  const G = 0
  const B = 0
  e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
}

// update size shown to user
function updateCurrentSize (newSize) {
  currentSize = newSize
  sizeValue.innerHTML = `Grid Size: ${newSize} x ${newSize}`
}

// wipes current grid and rebuilds to a given size
function refreshGrid (newSize) {
  grid.innerHTML = ''
  createGrid(newSize)
}

window.onload = () => {
  createGrid(DEFAULT_SIZE)
  updateCurrentSize(DEFAULT_SIZE)
}