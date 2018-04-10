import React, { Component } from 'react';
import { Alert, AppRegistry, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class GrupoScreen extends Component {
  static navigationOptions = {
    title: 'Grupo',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>Alumnos por grupo</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.btn}>
            <Text style={styles.txt}>Go Back</Text>
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
