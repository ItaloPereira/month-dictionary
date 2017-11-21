# Month-Dictionary
[![Build Status](https://travis-ci.org/ItaloPereira/month-dictionary.svg?branch=master)](https://travis-ci.org/ItaloPereira/month-dictionary)
Month-Dictionary is a multi-language month finder that has 100+ languages available!
## Requirements
  * [Node.js v4+](https://nodejs.org/)
## Installation
Install the dependencies.
```sh
$ npm install --save 
```
### Example 
```js
var monthDictionary = require('');

console.log(monthDictionary()) // No arguments
// Returns all the months in english

console.log(monthDictionary('pt-br')) // Language abreviation as argument
// Returns all the months in portuguese

console.log(monthDictionary(6)) // Numbers as arguments
// Returns the month by its number. In this case it would return June

console.log(monthDictionary('pt-br', 2));
console.log(monthDictionary(2, 'pt-br'));
// On both of those cases it would return february in portuguese

```

License
----
ISC
