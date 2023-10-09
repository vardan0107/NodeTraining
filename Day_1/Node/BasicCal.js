class BasicCal {}

BasicCal.prototype.add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};
BasicCal.prototype.sub = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};
BasicCal.prototype.divide = function (firstNumber, secondNumber) {
  return firstNumber / secondNumber;
};
BasicCal.prototype.multiply = function (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

module.exports = BasicCal;
