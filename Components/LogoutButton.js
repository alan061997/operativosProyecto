import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, 
    View, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LogoutButton extends Component {
    state = {
        ready: false,
        logged_in: 'guest',
    }
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            logged_in: 'guest',
        };
    }

    async componentWillMount() {
        const logged_in = await AsyncStorage.getItem("logged_in");
        console.log(`status = ${logged_in}`);
        this.setState({
            logged_in,
            ready: true
        })
    }
    _logout(){
        AsyncStorage.setItem({logged_in: 'guest'});
        console.log("logged out...");
    }
    render() {
        if (this.state.ready === false) {
            // render "booting" screen while reading data from storate or remote server
            return <Text>...</Text>;
        }

        if (this.state.logged_in === 'user') {
            // render Login screen
            return (
                <TouchableOpacity onPress={this._logout} style={{ backgroundColor: 'orange', margin: 10, padding: 10 }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            );
        }

        // Render main navigation stack for app
        return (
            <TouchableOpacity style={{ backgroundColor: 'gray', margin: 10, padding: 10 }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        );
    }
}
