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
# CARDVALIDATION_APP
Bu React Native projesi kullanıcıdan bir kredi kart numarası alır ve  `lib_validationcreditcard` kütüphanesini kullanarak bu kart numarasının doğruluğunu kontrol eder.

## Kullanım 

Paketin import edilmesi;

```js
import isValidCardNumber from 'lib_validationcreditcard';
```
