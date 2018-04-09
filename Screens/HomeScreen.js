import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View>
        <Text>This is the HomeScreen</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
})
