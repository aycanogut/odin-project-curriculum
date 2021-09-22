//* dom elements
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__buttons");
const operatorKeys = calculator.querySelectorAll('[data-type="operator"]');
const display = calculator.querySelector(".calculator__screen");

//
keys.addEventListener("click", (e) => {
  if (!event.target.closest("span")) return; // abstract buttons from the rest of the content

  const key = e.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previosKeyType } = calculator.dataset;

  if (type === "number") {
    if (displayValue === "0" || previosKeyType === "operator") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  if (type === "operator") {
    operatorKeys.forEach((key) => (key.dataset.state = "")); // create an empty state
    key.dataset.state = "selected"; // for styling selected operate buttons

    calculator.dataset.firstNumber = displayValue; // display the first number on screen
    calculator.dataset.operator = key.dataset.key; // add the operator to calculator data attr
  }

  calculator.dataset.previosKeyType = type; // add the targets key type to the data attr
});

const operate = (firstArgument, operator, secondArgument) => {
  switch (operator) {
    case "+":
      return add(firstArgument, secondArgument);
      break;
    case "-":
      return subtract(firstArgument, secondArgument);
      break;
    case "*":
      return multiply(firstArgument, secondArgument);
      break;
    case "/":
      return divide(firstArgument, secondArgument);
      break;
  }
};

/* 
this functions takes two values and returns the calculation ( simple math )
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  if (b === 0) {
    console.log(b);
    return a / b;
  } else {
    alert(`Can't do that, you simp! Try another number except 0.`);
  }
};
*/
