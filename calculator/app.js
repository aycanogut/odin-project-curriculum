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

  if (type === "equal") {
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = displayValue;
    display.textContent = operate(firstNumber, operator, secondNumber);
    operatorKeys.forEach((item) => (item.style.backgroundColor = "#8b87a3"));
  }

  if (type === "clear") {
    display.textContent = "0";
    delete calculator.dataset.firstNumber;
    delete calculator.dataset.operator;
  }

  if (type === "del") {
    display.textContent = display.textContent.slice(0, -1);
  }

  calculator.dataset.previosKeyType = type; // add the targets key type to the data attr
});

const operate = (firstArgument, operator, secondArgument) => {
  firstArgument = Number(firstArgument);
  secondArgument = Number(secondArgument);

  switch (operator) {
    case "plus":
      return firstArgument + secondArgument;
      break;
    case "minus":
      return firstArgument - secondArgument;

      break;
    case "times":
      return firstArgument * secondArgument;

      break;
    case "divide":
      if (secondArgument === 0) {
        alert(
          `Can't do that, you simp! Try to divide another number except 0.`
        );
      } else {
        return firstArgument / secondArgument;
      }
      break;
  }
};
