// script3.js

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        currentInput = eval(currentInput).toString(); // evaluate the expression
      } catch {
        currentInput = "Error";
      }
      display.value = currentInput;
    } else if (value === "C") {
      currentInput = "";
      display.value = "";
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
