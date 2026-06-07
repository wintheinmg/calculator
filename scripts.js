let currentValue = "";
let operator = "";
let previousValue = "";
let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = button.getAttribute("data-value");

    if (value == "+" || value == "-" || value == "*" || value == "/") {
      previousValue = currentValue;
      operator = value;
      currentValue = "";
    } else if (button.id == "clear") {
      display.innerText = "0";
      previousValue = "";
      currentValue = "";
      operator = "";
    } else if (button.id == "equal") {
      let result = calculate(previousValue, currentValue, operator);
      display.innerText = result;
      currentValue = result;
      operator = "";
      previousValue = "";
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
  console.log(firstNum, secondNum);

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
    default:
      break;
  }

  return answer;
}
