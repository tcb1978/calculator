function add(a, b){
  return a + b;
}

function multiply(a, b){
  return a * b;
}


function subtract(a, b){
  return a - b;
}


function divide(a, b) {
  return a / b;
}

function area(height, width) {
  return (height * width +' Ft.');
}

function calculator(intergerA, intergerB, command) {
  intergerA = parseInt(intergerA);
  intergerB = parseInt(intergerB);
  if (command === 'add') {
    return add(intergerA, intergerB);
  } else if (command === 'subtract') {
    return subtract(intergerA, intergerB);
  } else  if (command === 'multiply') {
        return multiply(intergerA, intergerB);
  } else if (command === 'divide'){
    return divide(intergerA, intergerB);
  } else if (command === 'area') {
    return area(intergerA, intergerB);
  }
    else {
    return 'Unknown Function';
  }
}

function onAddClick() {
  var value1 = document.getElementById('input1').value;
  var value2 = document.getElementById('input2').value;
  var result = calculator(value1, value2, 'add');
  document.getElementById('input3').value = result;
}

function onSubtractClick() {
  var value1 = document.getElementById('input1').value;
  var value2 = document.getElementById('input2').value;
  var result = calculator(value1, value2, 'subtract');
  document.getElementById('input3').value = result;
}

function onMultiplyClick() {
  var value1 = document.getElementById('input1').value;
  var value2 = document.getElementById('input2').value;
  var result = calculator(value1, value2, 'multiply');
  document.getElementById('input3').value = result;
}

function onDivideClick() {
  var value1 = document.getElementById('input1').value;
  var value2 = document.getElementById('input2').value;
  var result = calculator(value1, value2, 'divide');
  document.getElementById('input3').value = result;
}

function onAreaClick() {
  var value1 = document.getElementById('input1').value;
  var value2 = document.getElementById('input2').value;
  var result = calculator(value1, value2, 'area');
  document.getElementById('input3').value = result;
}






























