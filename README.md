# String Class Extension

This module provides extension methods to the inbuild String class.

## Extension Methods
What follows is a brief description of the extension methods provided.

### String.prototype.hasVowels
Returns `true` if this String has any character in the vowels character set, `aeiou`.
Returns `false` otherwise.

Example:

```javascript
> var string = 'Some string with vowels'
> string.hasVowels()
true
> var noVowels = 'sly spy try hymns'
> noVowels.hasVowels()
false
>
```
### String.prototype.toUpper
Returns this string in uppercase. This method does not use the inbuilt `String.prototype.toUpper` method.

Example:

```javascript
> var string = 'This is a TEST string'
> string.toUpper()
'THIS IS A TEST STRING'
>
```

### String.prototype.toLower
Returns this string in lowercase. This method does not use the inbuilt `String.prototype.toLowerCase` method.

Example:

```javascript
> var string = 'This is a TEST string'
> string.toLower()
'this is a test string'
>
```

### String.prototype.ucFirst
Returns this string with it's first letter in uppercase.

Example:

```javascript
> var string = 'sentence case me'
> string.ucFirst()
'Sentence case me'
>
```

### String.prototype.isQuestion
Returns `true` if this string ends with a question mark. Returns `false` otherwise.

Example:

```javascript
> var question = 'Am I a question?'
> question.isQuestion()
true

> var statement = 'I am a statement'
> statement.isQuestion()
false
>
```

### String.prototype.words
Returns the words in this strings as an `Array`. Returns an empty array if the string is empty.

This method disregards any non-word character.

Example:

```javascript
> var sentence = 'Give me back my words, @heart.'
> sentence.words()
[ 'Give', 'me', 'back', 'my', 'words', 'heart' ]

> var empty = ''
> empty.words()
[]
```

### String.prototype.wordCount
Returns the number of words in this string.

Example:

```javascript
> var countMe = 'Count my words, oh program!'
> countMe.wordCount()
5
>

```

**NOTE**: This method will disregard non-word characters.
This means that if the string has entire string tokens composed of
non-word characters, those tokens will be disregarded. Notice how,
in the following example, the method skips over `$$`. This is because
internally, it's using the `String.prototype.words` methods described above.

```javascript
> var withSpecial = 'Count how much $$ I have in my @pocket'
> withSpecial.wordCount()
8

// Using String#split yields a different result
> withSpecial.split(' ')
[ 'Count', 'how', 'much', '$$', 'I', 'have', 'in', 'my', '@pocket' ]
> withSpecial.split(' ').length
9

> withSpecial.words()
[ 'Count', 'how', 'much', 'I', 'have', 'in', 'my', 'pocket' ]
> withSpecial.words().length
8
>
```

### String.prototype.toCurrency
Returns a currency representation of a numerical string.
If the string is not numerical, it return `NaN`.

Example:

```javascript
> var testString = '1111111.11'
> testString.toCurrency()
'1,111,111.11'
>
```

### String.prototype.fromCurrency
Returns a number parsed from a currency string.

Example:


```javascript
> var testString = '12,345.67'
> testString.fromCurrency()
12345.67
>
```
