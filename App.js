import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen"

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator(
  {
    LogIn: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'LogIn',
  }
);

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
})

AppRegistry.registerComponent('AwesomeProject', () => App);
