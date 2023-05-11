// Create canvas (default to 16x16 grid)
// Put divs inside another container div
// make the divs apppear as a grid
const DEFAULT_SIZE = 16

console.log('linked stylesheet')

function createGrid (size) {

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')

    grid.appendChild(gridElement)
  }
}


window.onload = () => {
  createGrid(DEFAULT_SIZE)
}