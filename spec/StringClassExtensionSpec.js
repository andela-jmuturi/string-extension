(function() {
  describe('String class extension spec', function() {

    describe('String.prototype.hasVowels', function() {

      it('should return true if a string contains vowels', function() {
        var string = 'something with vowels inside';
        expect(string.hasVowels()).toBeTruthy();
      });

      it('should return false if the string does not contain vowels',
        function() {
          var string = 'grrrr';
          expect(string.hasVowels()).toBeFalsy();
        });
    });

    describe('String.prototype.toUpper', function() {

      it('should return the string in uppercase', function() {
        var testString = 'make me uppercase';
        var upperCaseString = testString.toUpper();

        expect(upperCaseString).toBe(testString.toUpperCase());
      });

      it('should use the custom "toUpper" method', function() {
        spyOn(String.prototype, 'toUpper').and.callThrough();

        var testString = 'Make Me Uppercase';
        var upperCaseString = testString.toUpper();

        expect(String.prototype.toUpper).toHaveBeenCalled();
        expect(String.prototype.toUpper).toHaveBeenCalledTimes(1);
        expect(upperCaseString).toBe(testString.toUpperCase());
      });

      it('should not use the String inbuilt "toUpperCase" method',
        function() {
          /*
          Ensure that it doesn't call the inbuilt 'toUpperCase' method,
          and that it returns the correct result nonetheless.
           */
          spyOn(String.prototype, 'toUpperCase');

          var testString = 'Make Me Uppercase';
          var upperCaseString = testString.toUpper();

          expect(String.prototype.toUpperCase).not.toHaveBeenCalled();
          expect(upperCaseString).toBe(testString.toUpperCase());
        }
      );
    });

    describe('String.prototype.toLower', function() {

      it('should return a string in lowercase', function() {
        var testString = 'MAKE ME LOWERCASE';
        var lowerCaseString = testString.toLower();

        expect(lowerCaseString).toBe(testString.toLowerCase());
      });

      it('should use the custom "toLower" method', function() {
        spyOn(String.prototype, 'toLower').and.callThrough();

        var testString = 'MAKE me Lowercase';
        var lowerCaseString = testString.toLower();

        expect(String.prototype.toLower).toHaveBeenCalled();
        expect(String.prototype.toLower).toHaveBeenCalledTimes(1);
        expect(lowerCaseString).toBe(testString.toLowerCase());
      });

      it('should not use the String inbuilt "toLowerCase" method',
        function() {
          spyOn(String.prototype, 'toLowerCase');

          var testString = 'Make Me LOWERCASE';
          var lowerCaseString = testString.toLower();

          expect(String.prototype.toLowerCase).not.toHaveBeenCalled();
          expect(lowerCaseString).toBe(testString.toLowerCase());
        }
      );
    });

    describe('String.prototype.ucFirst', function() {

      it(
        'should return the string with it\'s first character in uppercase',
        function() {
          expect('this is a test'.ucFirst()).toBe('This is a test');
        });

      it('should use the custom "toUpper" String method', function() {
        spyOn(String.prototype, 'toUpper').and.callThrough();

        var testString = 'this is another test';
        var ucFirstString = testString.ucFirst();

        expect(String.prototype.toUpper).toHaveBeenCalled();
        expect(String.prototype.toUpper).toHaveBeenCalledTimes(1);
        expect(ucFirstString).toBe('This is another test');
      });
    });

    describe('String.prototype.isQuestion', function() {

      it(
        'should return true if a statement ends with a question mark',
        function() {
          expect('Is this a question?'.isQuestion()).toBeTruthy();
        });

      it(
        'should return false if a statement doesn\'t end with a question mark',
        function() {
          expect('This is a statement'.isQuestion()).toBeFalsy();
        });
    });

    describe('String.prototype.words', function() {

      it('should return words in the string as an Array', function() {
        var testString = 'break my heart oh bad program';
        var result = testString.words();

        expect(Array.isArray(result)).toBeTruthy();
        expect(result).toEqual(testString.split(' '));
      });
    });

    describe('String.prototype.wordCount', function() {

      it('should return the number of words in the string', function() {
        var testString = 'Some words that need counting';

        expect(testString.wordCount()).toBe(testString.length);
      });

      it('should use the custom "words" String method', function() {
        spyOn(String.prototype, 'words').and.callThrough();

        var testString = 'Some words that need counting';
        var numberOfWords = testString.wordCount();

        expect(String.prototype.words).toHaveBeenCalled();
        expect(String.prototype.words).toHaveBeenCalledTimes(1);
        expect(numberOfWords).toBe(testString.length);
      });
    });

    describe('String.prototype.toCurrency', function() {

      it('should return a currency representation of a string',
        function() {
          expect('11111.11'.toCurrency()).toBe('11,111.11');
          expect('123456'.toCurrency()).toBe('123,456');
        });
    });

    describe('String.prototype.fromCurrency', function() {

      it(
        'should return a number representation of the currency string',
        function() {
          expect('111,111.11'.fromCurrency()).toBe(111111.11);
          expect('123,456'.fromCurrency()).toBe(123456);
        });
    });
  });
})();
