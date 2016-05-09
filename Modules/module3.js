var dollars = require('./module2');
var randomNum = require('./module1');

var randomDollarAmount = function () {
  return dollars(randomNum(100, 1000000));
};

var appendText = function () {
  return 'Account balance:\n';
};

module.exports.randomDollarAmount = randomDollarAmount;
module.exports.appendText = appendText;
