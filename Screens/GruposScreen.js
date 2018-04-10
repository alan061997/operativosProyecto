import React, { Component } from 'react';
import { Alert, AppRegistry, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class GruposScreen extends Component {
  static navigationOptions = {
    title: 'Grupos',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>Lista de grupos por materia</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Grupo')} style={styles.btn}>
            <Text style={styles.txt}>Ver grupo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  textContainer: {
    margin: 20
  },
  btn: {
    padding: 15,
    width: "66%",
    margin: 70,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
  },
  txt: {
    color: '#C0C0C0',
  },
})
