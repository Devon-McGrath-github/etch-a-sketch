const DEFAULT_SIZE = 16

// creates pixel grid to serve as Etch-A-Sketch drawing space
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

// retrieve value from slider on input
const sizeSlider = document.getElementById("grid-slider")

sizeSlider.oninput = (e) => changeSize(e.target.value)



function changeSize (size) {

  sizeValue.innerHTML = `Grid Size: ${size} x ${size}`
  // refresh grid with new size
}

// let currentSize = sizeSlider.value
// refresh grid function goes here

window.onload = () => {
  createGrid(DEFAULT_SIZE)
  changeSize(DEFAULT_SIZE)
}