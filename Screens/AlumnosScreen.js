import React, { Component } from 'react';
import { Alert, AppRegistry, TouchableOpacity, StyleSheet, ScrollView, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component';


export default class AlumnosScreen extends Component { 
  static navigationOptions = ({ navigation }) => ({
    title: 'Alumnos',
    headerRight:
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={{ backgroundColor: 'orange', margin: 10, padding: 10 }}>
        <Text>Log Out</Text>
      </TouchableOpacity>
  });
  
  constructor(props) {
    super(props)
    this.state = {
      materia: this.props.navigation.state.params.materia,
      user_data: this.props.navigation.state.params.user_data,
      student_data: this.props.navigation.state.params.student_data,
      curso_grupo: [':)'],
      tableHead: ['Matricula', 'Materia', 'Nombre', 'Grupo'],
      tableData: [],
    };
    this.getAlumnos().done();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const state = this.state;
    const styles = StyleSheet.create({
      container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
      head: { height: 40, backgroundColor: '#841584' },
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
      cell_btn: {
        padding: 5,
        width: "66%",
        margin: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#841584',
      },
      row: { flexDirection: 'row', },
    });
    const cell_button = (data, index) => (
      <TouchableOpacity style={styles.cell_btn}>
        <View>
          <Text style={styles.txt}>{data}</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text>Lista de Alumnos</Text>
        <Text>matricula = {student_data.matricula}</Text>
        <Text>materia clave = {this.state.materia}</Text>

          <Table borderStyle={{ borderWidth: 2, borderColor: '#841584'}}>
            <Row data={state.tableHead} flexArr={[1, 1, 2, 2]} style={styles.head} textStyle={styles.txt} />
            {
              state.tableData.map((rowData, index) => (
                <TableWrapper key={index} flexArr={[1, 1, 2, 2]} style={styles.row}>
                  {
                    rowData.map((cellData, cellIndex) => (
                      <Cell key={cellIndex} data={cellIndex === 0 ? cell_button(cellData, index) : cellData} textStyle={styles.txt} />
                    ))
                  }
                </TableWrapper>
              ))
            }
        </Table>
      </View>
      </ScrollView>
    );
  }
  
  getAlumnos = async() => {
    fetch(`http://sis-operativos-2018.herokuapp.com/alumnos.php?materia=${this.state.materia}`, {
      method: 'GET',
      headers: {'Accept' : "application/json", 'Content-Type' : 'application/json',},
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(`response = ${JSON.stringify(res)}`)
      if (res.length > 0){
        tableData = [];
        for (i = 0; i < res.length; i++){
          row = [res[i].matricula, res[i].nombre, res[i].grupo];
          tableData.push(row);
        }
        this.setState({tableData: tableData});
        this.setState({ materias_data: res });
      }
      else{
        console.log("Alumnos not found");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
