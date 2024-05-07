import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {initUserMock} from './src/userMocker'; // Import user mock initializer
import {initTransactionMock} from './src/transactionMocker'; // Import transaction mock initializer

const App = () => {
  useEffect(() => {
    const enableMock = true; // Enable mocking based on some condition, e.g., environment variable

    if (enableMock) {
      initUserMock(true); // Initialize user mocks
      initTransactionMock(true); // Initialize transaction mocks
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Mocked API App</Text>
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically in the container
    alignItems: 'center', // Centers content horizontally in the container
    backgroundColor: '#fff', // Optional: set the background color of the container
  },
  text: {
    fontSize: 18, // Set font size
    color: '#333', // Set text color
  },
});

export default App;
