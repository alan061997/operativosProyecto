import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput,
  TouchableOpacity, View, AsyncStorage } from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
      fetch('http://192.168.0.7/Backend/endpoint.php', {
        method: 'POST',
        headers: {
          'Accept' : "application/json",
          'Content-Type' : 'application/json',
        },
          body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
          })
      })
      .then((response) => response.json())
      .then((res) => {
          if (res[0] !== undefined){
            AsyncStorage.setItem('username', res[0].username);
            this.props.navigation.navigate('Home', {username: this.state.username});
          } else{
            Alert.alert("Username/Password are invalid.");
          }
      })
      .catch((error)=>{
        console.error(error);
      })
      .done();
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
