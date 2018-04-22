import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen"
import HorarioScreen from "./Screens/HorarioScreen"
import InscripcionScreen from "./Screens/InscripcionScreen"
import CursoScreen from "./Screens/CursoScreen"
import GruposScreen from "./Screens/GruposScreen"
import GrupoScreen from "./Screens/GrupoScreen"
import MateriasScreen from "./Screens/MateriasScreen"
import AlumnosScreen from "./Screens/AlumnosScreen"

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
    Horario: {
      screen: HorarioScreen,
    },
    Inscripcion: {
      screen: InscripcionScreen,
    },
    Curso: {
      screen: CursoScreen,
    },
    Grupo: {
      screen: GrupoScreen,
    },
    Grupos: {
      screen: GruposScreen,
    },
    Materias: {
      screen: MateriasScreen,
    },
    Alumnos: {
      screen: AlumnosScreen,
    },
  },
  {
    initialRouteName: 'LogIn',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#802080',
      },
      headerTintColor: '#eee',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
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
