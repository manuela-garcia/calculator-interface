var divide = function(number1, number2) {
return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);

alert(result);

var bmi = function(weight, height) {
  return Math.round(weight / (height * height));
};

var weight = parseFloat(prompt("Enter your weight in kilograms:"));
var height = parseFloat(prompt("Enter your height in meters:"));

alert(bmi(weight, height));

var temp = function(celcius) {
  return celcius * 1.8 + 32;
};

var celcius = parseFloat(prompt("Enter degrees celcuis:"));

alert(temp(celcius))
