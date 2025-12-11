import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');

  // Calculate tip amount
  const calculateTipAmount = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercentage);
    
    if (isNaN(bill) || isNaN(tip)) {
      return 0;
    }
    
    return (bill * tip) / 100;
  };

  // Calculate total amount
  const calculateTotalAmount = () => {
    const bill = parseFloat(billAmount);
    const tipAmount = calculateTipAmount();
    
    if (isNaN(bill)) {
      return 0;
    }
    
    return bill + tipAmount;
  };

  // Format display values
  const formatValue = (value) => {
    if (isNaN(value) || value === 0) {
      return '0';
    }
    return value.toFixed(2);
  };

  const tipAmount = calculateTipAmount();
  const totalAmount = calculateTotalAmount();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Tip Calculator</Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Bill Amount</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter bill amount"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={billAmount}
            onChangeText={setBillAmount}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tip Percentage</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter tip percentage"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={tipPercentage}
            onChangeText={setTipPercentage}
          />
        </View>
      </View>

      {/* Results Section */}
      <View style={styles.resultsContainer}>
        <View style={styles.resultRow}>
          <Text style={styles.resultLabel}>Tip Amount:</Text>
          <Text style={styles.resultValue}>${formatValue(tipAmount)}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.resultRow}>
          <Text style={styles.resultLabel}>Total Amount:</Text>
          <Text style={styles.totalValue}>${formatValue(totalAmount)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#333',
  },
  resultsContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  resultValue: {
    fontSize: 22,
    fontWeight: '600',
    color: '#4CAF50',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 15,
  },
  totalValue: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
});
