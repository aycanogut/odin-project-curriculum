//* DOM declarations
const body = document.querySelector('body');

// container
const container = document.createElement('div');
container.classList.add('container');

// append to the body
body.appendChild(container);

//* grid create function
const makeGrid = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeGrid(16, 16);

// styling grid items
const gridItems = document.querySelectorAll('.grid-item');

// add event listener to all node items
gridItems.forEach(gridItems => gridItems.addEventListener('mouseover', () => {
  gridItems.style.backgroundColor = '#000'
}));