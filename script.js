let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let currentValue = ""; // ""
let previousValue = ""; // ""
let operator = ""; // ""

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = button.getAttribute("data-value");

    if (value == "+" || value == "-" || value == "*" || value == "/") {
      previousValue = currentValue;
      currentValue = "";
      operator = value;
    } else if (button.id === "equal") {
      let result = calculate(previousValue, currentValue, operator);
      display.innerText = result;
      currentValue = result;
      previousValue = "";
      operator = "";
    } else if (button.id === "clear") {
      display.innerText = "0";
      currentValue = "";
      previousValue = "";
      operator = "";
    } else {
      currentValue = currentValue + value;
      display.innerText = currentValue;
    }
  });
});

function calculate(firstNum, secondNum, operator) {
  let answer = "";
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);

  switch (operator) {
    case "+":
      answer = firstNum + secondNum;
      break;
    case "-":
      answer = firstNum - secondNum;
      break;
    case "*":
      answer = firstNum * secondNum;
      break;
    case "/":
      answer = firstNum / secondNum;
      break;
  }

  return answer;
}
