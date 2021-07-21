//* DOM declarations
const body = document.querySelector('body');

// containers
const container = document.createElement('div');
container.classList.add('container');

const btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');

// reset grid button
const resetGridBtn = document.createElement('button');
resetGridBtn.classList.add('btn');
resetGridBtn.innerHTML = 'Reset Sketch';
resetGridBtn.addEventListener('click', () => {
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItems => gridItems.style.backgroundColor = '#EEE8DC');
});

// select color button
const selectColorBtn = document.createElement('button');
selectColorBtn.classList.add('btn');
selectColorBtn.innerHTML = 'Select Color';
selectColorBtn.addEventListener('click', () => {
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItems => gridItems.addEventListener('mouseover', () => {
    const color = '#413C94';
    gridItems.style.backgroundColor = color;
  }));
});


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

// random color creator button
const randomColorBtn = document.createElement('button');
randomColorBtn.classList.add('btn');
randomColorBtn.innerHTML = 'Random Color';
randomColorBtn.addEventListener('click', () => {
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItems => gridItems.addEventListener('mouseover', () => {
    const color = '#' + parseInt(Math.random() * 0xffffff).toString(16);
    gridItems.style.backgroundColor = color;
  }));
});


// append items to the body
btnContainer.append(changeGridBtn, selectColorBtn, randomColorBtn, resetGridBtn);
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