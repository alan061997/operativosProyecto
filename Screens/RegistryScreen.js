import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class RegistrySceen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Registration',
    headerRight:
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={{ backgroundColor: 'orange', margin: 10, padding: 10 }}>
        <Text>Log Out</Text>
      </TouchableOpacity>
  });
  render() {
    return (
      <View>
        <Text>This is the RegistrySceen</Text>
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
