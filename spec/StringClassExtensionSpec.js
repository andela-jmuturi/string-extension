(function() {
  describe('String Class Extension Spec:', function() {

    describe('String.prototype.hasVowels', function() {

      it('should return true if a string contains vowels', function() {
        var string1 = 'something with vowels inside';
        var string2 = 'SOMETHING WITH VOWELS INSIDE';
        expect(string1.hasVowels()).toBe(true);
        expect(string2.hasVowels()).toBe(true);
      });

      it('should return false if the string does not contain vowels',
        function() {
          var string = 'grrrr';
          expect(string.hasVowels()).toBe(false);
          expect(''.hasVowels()).toBe(false);
        });

      it('should work for both strings and string objects', function() {
        var testString = new String('Test String');

        expect(testString.hasVowels()).toBe(true);
      });
    });

    describe('String.prototype.toUpper', function() {

      it('should return the string in uppercase', function() {
        var testString = 'make me uppercase';
        var upperCaseString = testString.toUpper();

        expect(upperCaseString).toBe(testString.toUpperCase());
      });

      it('should not use the String inbuilt "toUpperCase" method',
        function() {
          /*
          Ensure that it doesn't call the inbuilt 'toUpperCase' method,
          and that it returns the correct result nonetheless.
           */
          spyOn(String.prototype, 'toUpperCase').and.callThrough();

          var testString = 'Make Me Uppercase';
          var upperCaseString = testString.toUpper();

          expect(String.prototype.toUpperCase).not.toHaveBeenCalled();
          expect(upperCaseString).toBe(testString.toUpperCase());
        }
      );

      it('should work if the string has special characters', function() {
        expect('m@k3 me 7u$$per'.toUpper()).toBe('M@K3 ME 7U$$PER');
      });

      it('should work for both strings and string objects', function() {
        var testString = new String('Test String');
        var testString2 = 'Test String';

        expect(testString.toUpper()).toEqual(testString2.toUpper());
      });
    });

    describe('String.prototype.toLower', function() {

      it('should return a string in lowercase', function() {
        var testString = 'MAKE ME LOWERCASE';
        var lowerCaseString = testString.toLower();

        expect(lowerCaseString).toBe(testString.toLowerCase());
      });

      it('should not use the String inbuilt "toLowerCase" method',
        function() {
          spyOn(String.prototype, 'toLowerCase').and.callThrough();

          var testString = 'Make Me LOWERCASE';
          var lowerCaseString = testString.toLower();

          expect(String.prototype.toLowerCase).not.toHaveBeenCalled();
          expect(lowerCaseString).toBe(testString.toLowerCase());
        }
      );

      it('should work if the string has special characters', function() {
        expect('M@K3 ME L0w∑π'.toLower()).toBe('m@k3 me l0w∑π');
      });

      it('should work for both strings and string objects', function() {
        var testString = new String('Test String');
        var testString2 = 'Test String';

        expect(testString.toLower()).toEqual(testString2.toLower());
      });
    });

    describe('String.prototype.ucFirst', function() {

      it('should return the string with it\'s first character in uppercase',
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

      it('should work for both strings and string objects', function() {
        var testString = new String('test string');
        var testString2 = 'test string';

        expect(testString.ucFirst()).toEqual(testString2.ucFirst());
      });
    });

    describe('String.prototype.isQuestion', function() {

      it('should return true if a statement ends with a question mark',
        function() {
          expect('Is this a question?'.isQuestion()).toBeTruthy();
        });

      it(
        'should return false if a statement doesn\'t end with a question mark',
        function() {
          expect('This is a statement'.isQuestion()).toBeFalsy();
        });

      it('should work for both strings and string objects', function() {
        var testString = new String('Is this a test string?');

        expect(testString.isQuestion()).toBeTruthy();
      });
    });

    describe('String.prototype.words', function() {

      it('should return words in the string as an Array', function() {
        var testString = 'break my heart oh bad program';
        var result = testString.words();

        expect(Array.isArray(result)).toBeTruthy();
        expect(result).toEqual(testString.split(' '));
      });

      it('should not consider punctuations as words', function() {
        var testString = 'break my @heart, oh bad program! @ day I code.';
        var result = testString.words();

        expect(result).toEqual(
          ['break', 'my', 'heart', 'oh', 'bad', 'program', 'day', 'I', 'code']);
      });

      it('should work for both strings and string objects', function() {
        var testString1 = new String('This is a test string');
        var testString2 = 'This is a test string';

        expect(testString1.words()).toEqual(testString2.words());
      });
    });

    describe('String.prototype.wordCount', function() {

      it('should return the number of words in the string', function() {
        var testString = 'Some words that need counting';

        expect(
          testString.wordCount()).toBe(5);
      });

      it('should use the custom "words" String method', function() {
        spyOn(String.prototype, 'words').and.callThrough();

        var testString = 'Some words that need counting';
        var numberOfWords = testString.wordCount();

        expect(String.prototype.words).toHaveBeenCalled();
        expect(String.prototype.words).toHaveBeenCalledTimes(1);
        expect(numberOfWords).toBe(5);
      });
    });

    describe('String.prototype.toCurrency', function() {

      it('should return a currency representation of a string',
        function() {
          expect('11111.11'.toCurrency()).toBe('11,111.11');
          expect('123456'.toCurrency()).toBe('123,456');
          expect('987654321'.toCurrency()).toBe('987,654,321');
          expect('9876.894'.toCurrency()).toBe('9,876.89');
          expect('9876.897'.toCurrency()).toBe('9,876.9');
        });

      it('should return NaN for non-numerical strings', function() {
        expect(isNaN('1234.fd'.toCurrency())).toBeTruthy();
      });
    });

    describe('String.prototype.fromCurrency', function() {

      it('should return a number representation of the currency string',
        function() {
          expect('111,111.11'.fromCurrency()).toBe(111111.11);
          expect('123,456,890'.fromCurrency()).toBe(123456890);
        });

      it('should return NaN for non-numerical strings', function() {
        expect(isNaN('29,345Ksh.'.fromCurrency())).toBeTruthy();
      });
    });
  });
})();
