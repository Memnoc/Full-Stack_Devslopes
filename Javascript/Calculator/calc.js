

var fieldOne = document.querySelector("#x");
var fieldTwo = document.querySelector("#y");
var calcBtn = document.querySelector("#button");
var resultField = document.querySelector("#result");


calcBtn.addEventListener("click", function() {
    var x = parseFloat(fieldOne.value);
    var y = parseFloat(fieldTwo.value);
    var result = (x / y) * 100;
    resultField.textContent = "Result:" + result + "%";
    event.preventDefault();
});
