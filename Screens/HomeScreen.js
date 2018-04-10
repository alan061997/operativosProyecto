import React, { Component } from 'react';
import { Alert, AppRegistry, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Inscripcion')} style={styles.btn}>
            <Text style={styles.txt}>Inscripcion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Horario')} style={styles.btn}>
            <Text style={styles.txt}>Horario</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Materias')} style={styles.btn}>
            <Text style={styles.txt}>Materias</Text>
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
    color: '#A0A0A0',
  },
  txt: {
    color: '#C0C0C0',
  },
})
