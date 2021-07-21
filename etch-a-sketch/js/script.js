//* DOM declarations
const body = document.querySelector('body');

// containers
const container = document.createElement('div');
container.classList.add('container');

const btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');

// reset button
const resetBtn = document.createElement('button');
resetBtn.classList.add('btn');
resetBtn.innerHTML = 'Reset Sketch';
resetBtn.addEventListener('click', () => {
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItems => gridItems.style.backgroundColor = '#EEE8DC');
});

// change the grid container size button
const changeBtn = document.createElement('button');
changeBtn.classList.add('btn');
changeBtn.innerHTML = 'Change Grid Size';
changeBtn.addEventListener('click', () => {
  const promptValue = prompt('Enter a number between 8 and 100!');
  if (promptValue >= 8 && promptValue <= 100) {
    container.innerHTML = '';
    makeGrid(promptValue, promptValue);
    stylingItems();
  }
});

// random color creator button
const colorBtn = document.createElement('button');
colorBtn.classList.add('btn');
colorBtn.innerHTML = 'Random Color';
colorBtn.addEventListener('click', () => {
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItems => gridItems.addEventListener('mouseover', () => {
    const color = '#' + parseInt(Math.random() * 0xffffff).toString(16);
    gridItems.style.backgroundColor = color;
  }));
});

// append items to the body
btnContainer.append(resetBtn, colorBtn, changeBtn);
body.appendChild(btnContainer);
body.appendChild(container);

//* functions
// grid create function
const makeGrid = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

// styling grid items fuction
const stylingItems = () => {
  let gridItems = document.querySelectorAll('.grid-item');

  // add event listener to all node items
  gridItems.forEach(gridItems => gridItems.addEventListener('mouseover', () => {
    gridItems.style.backgroundColor = '#413C94';
  }));
};

// invoke the default states
makeGrid(16, 16);
stylingItems()