/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import isValidCardNumber from 'lib_validationcreditcard'; // Kütüphaneyi içeri aktarıyoruz.

const App = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleValidate = () => {

    // Kredi kartı numarası boş bırakılırsa veya 16 rakamlı değil ise hata mesajı döndürür.
    if (cardNumber.length === 0 || cardNumber.length < 16) {
      setErrorMessage('Geçerli bir kart numarası giriniz.');
      setIsValid(null);
      return;
    }


    // Kart numarası doğrulanır.
    try {
      const result = isValidCardNumber(cardNumber);
      setIsValid(result);
      setErrorMessage('');
    } catch (error) {
      setIsValid(false);
      setErrorMessage('Doğrulama hatası: ' + error.message);
    }
  };

  // Kart numarasına nümerik olmayan değerler girilmesine izin verilmez.
  const handleChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setCardNumber(numericText);
  
    if (numericText.length === 16) {
      setErrorMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kredi Kart Numarası Giriniz</Text>
      <TextInput
        style={styles.input}
        value={cardNumber}
        onChangeText={handleChange}
        keyboardType="numeric"
        placeholder="Kredi kart numarasını giriniz"
        maxLength={16}
      />
      <TouchableOpacity style={styles.button} onPress={handleValidate}>
        <Text style={styles.buttonText}>Doğrula</Text>
      </TouchableOpacity>
      {errorMessage ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : isValid !== null && (
        <Text style={styles.result}>
          Kredi Kart Numarası {isValid ? 'Geçerli' : 'Geçersiz'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e4e2d5',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#1b1d2a',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: '#000000',
    backgroundColor: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1b1d2a',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1b1d2a',
  },
  error: {
    marginTop: 20,
    fontSize: 25,
    color: '#1b1d2a',
    fontWeight: 'bold',
  },
});

export default App;
