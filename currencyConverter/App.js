import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.093,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState(0);
  const buttonPressed = (currency) => {
    if (!inputValue || inputValue <= 0) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#EA7773',
        textColor: '#FFFFFF',
      });
    } else {
      let result = parseFloat(inputValue) * currencyPerRupee[currency];
      setResultValue(result.toFixed(5));
      setInputValue(0); 
    }

    // let result = parseFloat(inputValue) * currencyPerRupee[currency];
    // setResultValue(result.toFixed(2));

  };
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
        backgroundColor="#1b262c">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultConatiner}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputConatiner}>
            <TextInput
              style={styles.inputvalue}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              value={inputValue.toString()}
              onChangeText={(inputValue) => setInputValue(Number(inputValue))}
            />
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map((currency) => (
              <TouchableOpacity
                key={currency}
                style={styles.convertButton}
                onPress={() => buttonPressed(currency)}>
                <Text style={styles.temp}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultConatiner: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },
  resultValue: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputConatiner: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bbe1fa',
  },
  inputvalue: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  convertButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#bbe1fa',
    marginTop: 10,
    backgroundColor: '#0f4c75',
  },
  temp: {
    color: '#FFF',
    fontSize: 15,
  },
});
