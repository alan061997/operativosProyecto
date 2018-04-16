import React, { Component } from 'react';
import { Alert, AppRegistry, TouchableOpacity, StyleSheet, ScrollView, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Table, Row, Rows } from 'react-native-table-component';


export default class MateriasScreen extends Component {
  static navigationOptions = {
    title: 'Materias',
    headerRight:
      <TouchableOpacity onPress={()=>navigation.navigate('LogIn')} style={{backgroundColor:'orange', margin:10, padding:10}}>
          <Text>Log Out</Text>
      </TouchableOpacity>
  };
  componentDidMount(){
    this.getMaterias().done();
  }
  constructor(props) {
    super(props)
    this.state = {
      materias_data: {materias: 'ninguna'},
      user_data: this.props.navigation.state.params.user_data,
      student_data: this.props.navigation.state.params.student_data,
      tableHead: ['Clave', 'Semestre', 'Nombre', 'Requiere'],
      tableData: [
        ['1', '2', '3', '4', ],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const state = this.state;
    const styles = StyleSheet.create({
      container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
      head: { height: 40, backgroundColor: '#f1f8ff' },
      text: { margin: 6 },
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
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text>Lista de materias</Text>
        <Text>matricula = {student_data.matricula}</Text>
        <Text>json = {JSON.stringify(this.state.materias_data)}</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Grupos', {
            user_data: this.state.user_data,
            student_data: this.state.student_data})} style={styles.btn}>
            <Text style={styles.txt}>Ver grupos</Text>
          </TouchableOpacity>
        </View>       
      </View>
      </ScrollView>
    );
  }
  
  getMaterias = async() => {
    fetch('http://sis-operativos-2018.herokuapp.com/materias.php', {
      method: 'GET',
      headers: {'Accept' : "application/json", 'Content-Type' : 'application/json',},
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(`response = ${JSON.stringify(responseJson)}`)
      this.setState({ materias_data: responseJson });
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
