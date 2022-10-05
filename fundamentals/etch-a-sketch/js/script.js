//* DOM declarations
const body = document.querySelector('body');

// containers
const container = document.createElement('div');
container.classList.add('container');

const btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');

// change the grid container size button
const changeGridBtn = document.createElement('button');
changeGridBtn.classList.add('btn');
changeGridBtn.innerHTML = 'Change Grid Size';
changeGridBtn.addEventListener('click', () => {
  const promptValue = prompt('Enter a number between 8 and 100!');
  if (promptValue >= 8 && promptValue <= 100) {
    container.innerHTML = '';
    makeGrid(promptValue, promptValue);
    stylingItems();
  }
});

// select color button
const selectColorBtn = document.createElement('input');
selectColorBtn.type = 'color';
selectColorBtn.value = '#413C94';
selectColorBtn.classList.add('btn', 'btn-color');
selectColorBtn.addEventListener('click', () => {
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItems => gridItems.addEventListener('mouseover', () => {
    gridItems.style.backgroundColor = selectColorBtn.value;
  }));
});

// random color creator button
const randomColorBtn = document.createElement('button');
randomColorBtn.classList.add('btn');
randomColorBtn.innerHTML = 'Random Color';
randomColorBtn.addEventListener('click', () => {
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItems => gridItems.addEventListener('mouseover', () => {
    gridItems.style.backgroundColor = '#' + parseInt(Math.random() * 0xffffff).toString(16);
  }));
});

// eraser
const eraserBtn = document.createElement('button');
eraserBtn.classList.add('btn');
eraserBtn.innerHTML = 'Eraser';
eraserBtn.addEventListener('click', () => {
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItems => gridItems.addEventListener('mouseover', () => {
    gridItems.style.backgroundColor = '#EEE8DC';
  }));
});


// reset sketch button
const resetGridBtn = document.createElement('button');
resetGridBtn.classList.add('btn');
resetGridBtn.innerHTML = 'Reset Sketch';
resetGridBtn.addEventListener('click', () => {
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItems => gridItems.style.backgroundColor = '#EEE8DC');
});

// append items to the body
btnContainer.append(changeGridBtn, selectColorBtn, randomColorBtn, eraserBtn, resetGridBtn);
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