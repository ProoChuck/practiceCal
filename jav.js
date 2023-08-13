function add(a, b) {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
      alert("Invalid Input. Please enter a number.");
    }else{
        var c = a + b;
        document.getElementById("result").innerHTML = c;
    }
  }
function subtract(a, b) {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
      alert("Invalid Input. Please enter a number.");
    }else{
        var c = a - b;
        document.getElementById("result").innerHTML = c;
    }
  }
function multiply(a, b) {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
      alert("Invalid Input. Please enter a number.");
    }else{
        var c = a * b;
        document.getElementById("result").innerHTML = c;
    }
  }
function divide(a, b) {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
      alert("Invalid Input. Please enter a number.");
    }else{
        var c = a / b;
        document.getElementById("result").innerHTML = c;
    }
  }