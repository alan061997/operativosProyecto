import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput,
  TouchableOpacity, View, AsyncStorage } from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      user_data: {},
      student_data: {},
      logged_in: false,
    };
  }

  componenDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async() => {
    var value = await AsyncStorage.getItem('username');
    if (value !== null){
      this.props.navigation.navigate('Home');
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Log In',
    headerLeft: null
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={{flex: 0.3, backgroundColor: 'steelblue'}} />
          <View style={{flex: 0.5, backgroundColor: 'white'}} />
          <View style={{flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>Username:                                       </Text>
            <TextInput
              style={{height: 40, width: "66%", borderColor: 'gray', borderWidth: 2, padding: 10}}
              placeholder="User"
              onChangeText={(username) => this.setState({username})}
            />
            <Text> </Text>
            <Text> </Text>
            <Text>Password:                                       </Text>
            <TextInput
              style={{height: 40, width: "66%", borderColor: 'gray', borderWidth: 2, padding: 10}}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.login} style={styles.btn}>
            <Text>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }

  login = () => {
    usrname = this.state.username;
    fetch(`http://sis-operativos-2018.herokuapp.com/api.php/usuarios?filter=username,eq,${usrname}&transform=1`, {
        method: 'GET',
        headers: {
          'Accept' : "application/json",
          'Content-Type' : 'application/json',
        },
      })
      .then((response) => response.json())
      .then((res) => {
        console.log(`response = ${JSON.stringify(res)}`)
          if (res.usuarios.length > 0 ){
            user_data = res.usuarios[0]
            console.log("test login")
            if(user_data.password == this.state.password){
              this.setState({logged_in: true})
              this.setState({ user_data: user_data })
              console.log("usuario correcto")
            }
            else{
              Alert.alert("Password incorrecto");
            }
          } else{
            Alert.alert("Usuario no existe");
          }
      })
      .catch((error)=>{
        console.error(error);
      })
      .done();
    console.log("fetching student data...")
    usr_id = this.state.user_data.id;
    fetch(`http://sis-operativos-2018.herokuapp.com/api.php/estudiantes?filter=usuario,eq,${usr_id}&transform=1`, {
      method: 'GET',
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(`response = ${JSON.stringify(res)}`)
      if (res.estudiantes.length > 0) {
        student_data = res.estudiantes[0]
        console.log("student confirmed")
        this.setState({ student_data: student_data })
        this.props.navigation.navigate('Home', { user_data: user_data, student_data: student_data });
      } else {
        Alert.alert("Estudiante no existe");
      }
    })
    .catch((error) => {
      console.error(error);
    }).done();
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
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
})
