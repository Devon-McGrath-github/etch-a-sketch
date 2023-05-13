const DEFAULT_SIZE = 16
const DEFAULT_MODE = 'color'

// variable to track state of mouse click
let mouseDown = false

let currentSize = DEFAULT_SIZE
let currentMode = DEFAULT_MODE

// create variables for page elements
const colorButton = document.getElementById('colorBtn')
const rainbowButton = document.getElementById('rainbowBtn')
const eraseButton = document.getElementById('eraseBtn')
const clearButton = document.getElementById('clearBtn')
const sizeSlider = document.getElementById('grid-slider')

/* function calls for related page element events */
colorButton.onclick = () => changeMode('color')
rainbowButton.onclick = () => changeMode('rainbow')
eraseButton.onclick = () => changeMode('erase')
clearButton.onclick = () => refreshGrid(currentSize)
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
// retrieve value from html slider on input and change
  // value shown to user needs to update on input for clarity
  // however, for performance, refresh grid is only called onchange
sizeSlider.oninput = (e) => setCurrentSize(e.target.value)
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
  if (currentMode === 'color') {
    e.target.style.backgroundColor = '#000'
  } 
  else if (currentMode === 'rainbow') {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
  }
  else {
    e.target.style.backgroundColor = '#fefefe'
  }
}

// update size shown to user
function setCurrentSize (newSize) {
  currentSize = newSize
  sizeValue.innerHTML = `Grid Size: ${newSize} x ${newSize}`
}

// wipes current grid and rebuilds to a given size
function refreshGrid (newSize) {
  grid.innerHTML = ''
  createGrid(newSize)
}

function changeMode (mode) {
  currentMode = mode
}

window.onload = () => {
  createGrid(DEFAULT_SIZE)
  setCurrentSize(DEFAULT_SIZE)
}