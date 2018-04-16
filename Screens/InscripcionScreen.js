import React, { Component } from 'react';
import { Alert, AppRegistry, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

import { Table, Row, Rows } from 'react-native-table-component';

export default class InscripcionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

  /*
  static navigationOptions = {
    title: 'Inscripcion',
    headerRight:
      <TouchableOpacity onPress={()=>navigation.navigate('LogIn')} style={{backgroundColor:'orange', margin:10, padding:10}}>
          <Text>Log Out</Text>
      </TouchableOpacity>
  };
  constructor(props) {
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
        <Text>Vista de inscripcion</Text>
        <Text>haz tu horario, {student_data.nombre}</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Curso', { 
            user_data: this.state.user_data, 
            student_data: this.state.student_data })} style={styles.btn}>
            <Text style={styles.txt}>Ver Curso</Text>
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
*/