const DEFAULT_SIZE = 16
const DEFAULT_MODE = 'color'
const DEFAULT_COLOR = '#000'

// variable to track state of mouse click
let mouseDown = false

let currentSize = DEFAULT_SIZE
let currentMode = DEFAULT_MODE
let currentColor = DEFAULT_COLOR

// create variables for page elements
const colorPicker = document.getElementById('colorPicker')
const colorButton = document.getElementById('colorBtn')
const rainbowButton = document.getElementById('rainbowBtn')
const eraseButton = document.getElementById('eraseBtn')
const resetButton = document.getElementById('resetBtn')
const sizeSlider = document.getElementById('grid-slider')

/* function calls for related page element events */
colorPicker.onchange = (e) => setCurrentColor(e.target.value)
colorButton.onclick = () => changeMode('color')
rainbowButton.onclick = () => changeMode('rainbow')
eraseButton.onclick = () => changeMode('erase')
resetButton.onclick = () => reset(currentSize)
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

function setCurrentColor (newColor) {
  currentColor = newColor
}

// update background color of grid elements on click
function changeColor (e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
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

function reset (size) {
  refreshGrid(size)
  // reset color selector input field to defaults
  currentColor = DEFAULT_COLOR
  colorPicker.value = DEFAULT_COLOR
  changeMode(DEFAULT_MODE)
}

function changeMode (mode) {
  activeButton(mode)
  currentMode = mode
}

function activeButton (mode) {
  if (currentMode === 'color') {
    colorBtn.classList.remove('active')
  } else if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active')
  } else if (currentMode === 'erase') {
    eraseBtn.classList.remove('active')
  }

  if (mode === 'color') {
    colorBtn.classList.add('active')
  } else if (mode === 'rainbow') {
    rainbowBtn.classList.add('active')
  } else if (mode === 'erase') {
    eraseBtn.classList.add('active')
  }
}

window.onload = () => {
  createGrid(DEFAULT_SIZE)
  setCurrentSize(DEFAULT_SIZE)
  activeButton(DEFAULT_MODE)
}