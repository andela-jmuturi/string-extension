/**
 * This module provides extensions to the inbuilt String class.
 */

String.prototype.hasVowels = function() {
  /**
   * Return true if this string has vowels in it.
   */
  return /[aeiou]/.test(this);
};

String.prototype.toUpper = function() {
  /**
   * Return this String in uppercase.
   */
  return this
    .split('')
    .map(function(letter) {
      if (/[a-z]/.test(letter)) {
        return String.fromCharCode(letter.charCodeAt() - 32);
      }
      return letter;
    })
    .join('');
};

String.prototype.toLower = function() {
  /**
   * Return this String in lowercase.
   */
  return this
    .split('')
    .map(function(letter) {
      if (/[A-Z]/.test(letter)) {
        return String.fromCharCode(letter.charCodeAt() + 32);
      }
      return letter;
    })
    .join('');
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
  if (isNaN(this.valueOf())) {
    return NaN;
  }

  var matches = this.split('.');
  var integralPart = matches[0].split('');
  var fractionalPart = matches[1] || null;

  for (var i = integralPart.length, j = 0; i > 0; i--, j++) {
    if (j && j % 3 === 0) {
      integralPart.splice(i, 0, ',');
    }
  }
  if (fractionalPart) {
    return [integralPart.join(''), fractionalPart].join('.');
  }

  return integralPart.join('');
};

String.prototype.fromCurrency = function() {
  /**
   * Return a Number representation of a currency string,
   * e.g 12,345.67 => 12345.67
   * Return NaN if the string is non-numerical.
   */
  return Number(this.replace(/,/g, ''));
};
