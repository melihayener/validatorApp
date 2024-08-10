# Kredi Kartı Doğrulama

`lib_validationcreditcard`, kredi kartı numaralarını doğrulamak için Luhn algoritmasını kullanan bir kütüphanedir. 
## Kurulum

Bu paketi npm ile kurabilirsiniz:

```bash
npm install lib_validationcreditcard
```
## Kullanım

```js
const isValidCardNumber = require('lib_validationcreditcard');


const cardNumber = '4355084355084358';

if (isValidCardNumber(cardNumber)) {
  console.log('Kredi kartı numarası geçerli.');
} else {
  console.log('Kredi kartı numarası geçersiz.');
}
```

