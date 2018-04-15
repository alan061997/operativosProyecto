import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Welcome',
    headerRight:
      <TouchableOpacity onPress={()=>navigation.navigate('LogIn')} style={{backgroundColor:'orange', margin:10, padding:10}}>
          <Text>Log Out</Text>
      </TouchableOpacity>
  });

  constructor(props){
    super(props)
    this.state = {
      user_data: this.props.navigation.state.params.user_data,
      student_data: this.props.navigation.state.params.student_data,
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen</Text>
        <Text>Hello, {student_data.nombre}</Text>
        <Text>matricula = {student_data.matricula}</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Inscripcion', { user_data: user_data })} style={styles.btn}>
            <Text style={styles.txt}>Inscripcion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Horario', { user_data: user_data })} style={styles.btn}>
            <Text style={styles.txt}>Horario</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Materias', { user_data: user_data })} style={styles.btn}>
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
},
txt: {
  color: '#C0C0C0',
},
})
