// Create canvas (default to 16x16 grid)
// Put divs inside another container div
// make the divs apppear as a grid
const DEFAULT_SIZE = 16

function createGrid (size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    // will have to add mouseover event listener to handle clicking   
    grid.appendChild(gridElement)
  }
}


window.onload = () => {
  createGrid(DEFAULT_SIZE)
}