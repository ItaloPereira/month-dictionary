# Month-Dictionary
[![Build Status](https://travis-ci.org/ItaloPereira/month-dictionary.svg?branch=master)](https://travis-ci.org/ItaloPereira/month-dictionary)

Month-Dictionary is a multi-language month finder that has 100+ languages available!
## Requirements
  * [Node.js v4+](https://nodejs.org/)
## Installation
Install the dependencies.
```sh
$ npm install --save month-dictionary
```
### Example 
```js
var monthDictionary = require('month-dictionary');

console.log(monthDictionary()) // No arguments
// Returns all the months in english

console.log(monthDictionary('pt-br')) // Language abbreviation as argument
// Returns all the months in portuguese

console.log(monthDictionary(6)) // Numbers as arguments
// Returns the month by its number. In this case it would return June

console.log(monthDictionary('pt-br', 2));
console.log(monthDictionary(2, 'pt-br'));
// On both of those cases it would return february in portuguese

```

### Available Languages


* af
* ar-dz
* ar-kw
* ar-ly
* ar-ma
* ar-sa
* ar-tn
* ar
* az
* be
* bg
* bm
* bn
* bo
* br
* bs
* ca
* cs
* cv
* cy
* da
* de-at
* de-ch
* de
* dv
* el
* en-au
* en-ca
* en-gb
* en-ie
* en-nz
* eo
* es-do
* es-us
* es
* et
* eu
* fa
* fi
* fo
* fr-ca
* fr-ch
* fr
* fy
* gd
* gl
* gom-latn
* gu
* he
* hi
* hr
* hu
* hy-am
* id
* is
* it
* ja
* jv
* ka
* kk
* km
* kn
* ko
* ky
* lb
* lo
* lt
* lv
* me
* mi
* mk
* ml
* mr
* ms-my
* ms
* my
* nb
* ne
* nl-be
* nl
* nn
* pa-in
* pl
* pt-br
* pt
* ro
* ru
* sd
* se
* si
* sk
* sl
* sq
* sr-cyrl
* sr
* ss
* sv
* sw
* ta
* te
* tet
* th
* tl-ph
* tlh
* tr
* tzl
* tzm-latn
* tzm
* uk
* ur
* uz-latn
* uz
* vi
* x-pseudo
* yo
* zh-cn
* zh-hk
* zh-tw

License
----
ISC
