const isValidCardNumber = require('./isValidCardNumber');

test('4355084355084358 kart numarası geçerli bir numaradır', () => {
    expect(isValidCardNumber('4355084355084358')).toBe(true);
});

test('1234526357462536 kart numarası geçersiz bir kart numarasıdır.' , () => {
    expect(isValidCardNumber('1234526357462536')).toBe(false);
});

test('T57113557B1355D5 kart numarası geçersiz bir kart numarasıdır.', () => {
    expect(() => isValidCardNumber('T57113557B1355D5')).toThrow('Geçersiz kredi kartı numarası girdiniz.');
});

test('Boş kart numarası geçersiz bir kart numarasıdır.', () => {
    expect(() => isValidCardNumber('')).toThrow('Geçersiz kredi kartı numarası girdiniz.');
});

