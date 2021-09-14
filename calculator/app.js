//* mathematical functions
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
  if (b !== 0) {
    return a / b;
  }
};

// operate function
const operate = (operator) => {
  return operator;
};

const calculate = () => {
  //* DOM declarations
  const calculator = document.querySelector(".calculator");
  const calculatorScreen = calculator.querySelector(
    ".calculator__screen__result"
  );

  calculator.querySelectorAll(".calculator__buttons__item").forEach((item) => {
    item.addEventListener("click", (event) => {
      let displayValue = event.target.innerHTML;

      if (Number(displayValue) || displayValue === "." || displayValue == 0) {
        calculatorScreen.innerHTML += displayValue;
      } else if (displayValue === "del") {
        displayValue.slice(0, -1);
      } else if (displayValue === "clear") {
        displayValue = null;
        calculatorScreen.innerHTML = "";
      }
    });
  });
};

// delete tusu fonksiyonalitesi
// yeni numara girilince en bastaki 0'i kaldirma
// operate fonksiyonlarini UI ile bagdastirma
