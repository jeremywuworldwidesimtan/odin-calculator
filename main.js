// You should get the idea on how to solve this by now
// If not, remember to solve it one by one
// Make one small part work properly and as intended before moving on with another small part

let displayValueArr = [0];
let displayValue = 0;
const displayElement = document.querySelector("#display");
const secondDisplayElement = document.querySelector("#secondaryDisplay");

let op1 = 0;
let op2 = 0;
let res = 0;
let equFlag = false;
let equMode = 0; // specify which operation to perform

function display() {
  console.log(displayValueArr);
  // Parse float to prevent leading zeros
  displayValue = parseFloat('0' + displayValueArr.join(""));
  // Make sure that empty array is 0 not nan
  if (isNaN(displayValue)) {
    displayValue = 0;
  }
  console.log(displayValue);
  displayValueArr = displayValue.toString().split("");
  if (displayValueArr.length === 0) {
    displayElement.textContent = "0";
  } else {
    displayElement.textContent = displayValue.toString();
  }
}

function addToDisplay(n) {
  displayValueArr.push(n);
  display();
}

// Implement displaying numbers after pressing the button
document.querySelectorAll(".num").forEach((e) => {
  e.addEventListener("click", (ev) => {
    addToDisplay(ev.target.textContent);
    // console.log(ev.target.textContent);
  });
});

document.querySelector("#ac").addEventListener("click", (ev) => {
  op1 = 0;
  op2 = 0;
  res = 0;
  displayValue = 0;
  displayValueArr = [];
  displayElement.textContent = "0";
  secondDisplayElement.textContent = "Calculator";
  document.querySelector("#backspace").removeAttribute("disabled");
});

document.querySelector("#backspace").addEventListener("click", (ev) => {
  displayValueArr.pop();
  display();
});

// Implement calculator operations

function add(a, b) {
  return a + b;
} // operation 1
function sub(a, b) {
  return a - b;
} // operation 2
function mul(a, b) {
  return a * b;
} // operation 3
function div(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    alert("Math error");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    return "Math error";
  }
} // operation 4

const equButton = document.querySelector("#equ");
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#sub");
const mulButton = document.querySelector("#mul");
const divButton = document.querySelector("#div");

function calculate(mode) {
  let res = 0;
  switch (equMode) {
    case 1:
      res = add(op1, op2);
      secondDisplayElement.textContent =
        op1.toString() + " + " + op2.toString() + " = ";
      break;
    case 2:
      res = sub(op1, op2);
      secondDisplayElement.textContent =
        op1.toString() + " - " + op2.toString() + " = ";
      break;
    case 3:
      res = mul(op1, op2);
      secondDisplayElement.textContent =
        op1.toString() + " * " + op2.toString() + " = ";
      break;
    case 4:
      res = div(op1, op2);
      secondDisplayElement.textContent =
        op1.toString() + " / " + op2.toString() + " = ";
      break;
    default:
      break;
  }
  return res;
}

equButton.addEventListener("click", (ev) => {
  if (equFlag && displayValueArr != []) {
    op2 = displayValue;
    res = calculate(equMode);
    console.log(res);
    displayValueArr = res.toString().split();
    display();
    equButton.setAttribute("disabled", true);
    document.querySelector("#backspace").setAttribute("disabled", true);
    op1 = res;
    equFlag = false;
    equMode = 0;
  }
});

addButton.addEventListener("click", (ev) => {
  if (!equFlag) {
    op1 = displayValue;
    displayValueArr = [];
    console.log(displayValue);
    display();
    equButton.removeAttribute("disabled");
    document.querySelector("#backspace").removeAttribute("disabled");
    secondDisplayElement.textContent = op1.toString() + " + ";
    equFlag = true;
    equMode = 1;
  }

  if (equMode !== 1) {
    equMode = 1;
    secondDisplayElement.textContent = op1.toString() + " + ";
  }
});

subButton.addEventListener("click", (ev) => {
  if (!equFlag) {
    op1 = displayValue;
    displayValueArr = [];
    console.log(displayValue);
    display();
    equButton.removeAttribute("disabled");
    document.querySelector("#backspace").removeAttribute("disabled");
    secondDisplayElement.textContent = op1.toString() + " - ";
    equFlag = true;
    equMode = 2;
  }

  if (equMode !== 2) {
    equMode = 2;
    secondDisplayElement.textContent = op1.toString() + " - ";
  }
});

mulButton.addEventListener("click", (ev) => {
  if (!equFlag) {
    op1 = displayValue;
    displayValueArr = [];
    console.log(displayValue);
    display();
    equButton.removeAttribute("disabled");
    document.querySelector("#backspace").removeAttribute("disabled");
    secondDisplayElement.textContent = op1.toString() + " * ";
    equFlag = true;
    equMode = 3;
  }

  if (equMode !== 3) {
    equMode = 3;
    secondDisplayElement.textContent = op1.toString() + " * ";
  }
});

divButton.addEventListener("click", (ev) => {
  if (!equFlag) {
    op1 = displayValue;
    displayValueArr = [];
    console.log(displayValue);
    display();
    equButton.removeAttribute("disabled");
    document.querySelector("#backspace").removeAttribute("disabled");
    secondDisplayElement.textContent = op1.toString() + " / ";
    equFlag = true;
    equMode = 4;
  }

  if (equMode !== 4) {
    equMode = 4;
    secondDisplayElement.textContent = op1.toString() + " / ";
  }
});

document.querySelector("#dec").addEventListener("click", (ev) => {
  
  addToDisplay('.');
});