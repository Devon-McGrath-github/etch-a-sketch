const DEFAULT_SIZE = 16

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

function changeColor (e) {
  if (e.type === 'mouseover' && !mouseDown) return
  // placeholder values for color mode
  const R = 0
  const G = 0
  const B = 0
  e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
}
// variable to track state for mousedown, that can be checked with mouseover eventListener
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


const sizeSlider = document.getElementById('grid-slider')

// retrieve value from html slider on input and change
  // value shown to user needs to update on input for clarity
  // however, for performance, refresh grid is only called onchange
sizeSlider.oninput = (e) => updateCurrentSize(e.target.value)
sizeSlider.onchange = (e) => refreshGrid(e.target.value)


// update size shown to user on input
function updateCurrentSize (newSize) {
  sizeValue.innerHTML = `Grid Size: ${newSize} x ${newSize}`
}

// wipes current grid and rebuilds to a given size
function refreshGrid (size) {
  grid.innerHTML = ''
  createGrid(size)
}

window.onload = () => {
  createGrid(DEFAULT_SIZE)
  updateCurrentSize(DEFAULT_SIZE)
}