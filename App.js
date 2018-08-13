import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Asset } from 'expo';
Asset;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/beer.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
