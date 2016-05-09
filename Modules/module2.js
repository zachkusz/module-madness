var dollarConversion = function(money) {
  return money.toLocaleString('en-US', {style: 'currency',currency: 'USD'});
};

module.exports = dollarConversion;
