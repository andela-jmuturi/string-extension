/**
 * This module provides extensions to the inbuilt String class.
 */

String.prototype.hasVowels = function() {
  /**
   * Return true if this string has vowels in it.
   */
  return /[aeiou]/i.test(this);
};

String.prototype.toUpper = function() {
  /**
   * Return this String in uppercase.
   */
  return this.replace(/([a-z])/g, function(match){
    return String.fromCharCode(match.charCodeAt(0) - 32);
  });
};

String.prototype.toLower = function() {
  /**
   * Return this String in lowercase.
   */
  return this.replace(/([A-Z])/g, function(match){
    return String.fromCharCode(match.charCodeAt(0) + 32);
  });
};

String.prototype.ucFirst = function() {
  /**
   * Return this String with it's first letter in uppercase.
   */
  return [this.charAt(0).toUpper(), this.slice(1)].join('');
};

String.prototype.isQuestion = function() {
  /**
   * Return true if this String ends with a question mark.
   */
  return /\?$/.test(this); // or return /.*\?$/.test(this);
};

String.prototype.words = function() {
  /**
   * Return the words in this string as an Array,
   * or an empty array if the string is empty.
   */
  return this.match(/(\w+)/g) || [];
};

String.prototype.wordCount = function() {
  /**
   * Return the number of words in this String.
   */
  return this.words().length;
};

String.prototype.toCurrency = function() {
  /**
   * Return a currency representation of a String.
   * e.g 11111.11 => 11,111.11
   * Return NaN if the string is non-numerical.
   */
  var isNumberRegex = /^[0-9]+(\.[0-9]+)?$/;
  if (!isNumberRegex.test(this)) {
    return NaN;
  }

  return parseFloat(Number(this).toFixed(2))
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

String.prototype.fromCurrency = function() {
  /**
   * Return a Number representation of a currency string,
   * e.g 12,345.67 => 12345.67
   * Return NaN if the string is non-numerical.
   */
  return Number(this.replace(/,/g, ''));
};
