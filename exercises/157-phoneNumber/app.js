function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string = this.getAreaCode() + ' ' + this.getExchangeCode() + "-" + this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.parenthesize(this.slice(0,3)); 
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3,6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6,10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return("slice", this.numbers.slice(start, end).join(''));
};

console.log(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render());
