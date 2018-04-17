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
      username: this.props.navigation.state.params.username,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Inscripcion', {username: this.state.username})} style={styles.btn}>
            <Text style={styles.txt}>Inscripcion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Horario'), {username: this.state.username}} style={styles.btn}>
            <Text style={styles.txt}>Horario</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Materias'), {username: this.state.username}} style={styles.btn}>
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
