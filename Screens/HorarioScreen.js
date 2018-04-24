import React, { Component } from 'react';
import { Alert, AppRegistry, TouchableOpacity, StyleSheet, ScrollView, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component';
import { Dropdown } from 'react-native-material-dropdown';



export default class HorarioScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Horario',
    headerRight:
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={{ backgroundColor: 'orange', margin: 10, padding: 10 }}>
        <Text>Log Out</Text>
      </TouchableOpacity>
  });
  componentDidMount(){
  }
  constructor(props) {
    super(props)
    this.state = {
      materias_data: {materias: 'ninguna'},
      user_data: this.props.navigation.state.params.user_data,
      student_data: this.props.navigation.state.params.student_data,
      semestre_elegido: '0',
      cursoList: [],
      tableHead: ['Clave', 'Materia', 'Grupo', 'Horario', 'Borrar'],
      tableData: [
        ['', '', '', '', '']
      ]
    };
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
    const cell_button = (data, cell_index, row_index) => (
      <TouchableOpacity style={styles.cell_btn} onPress={() => this.borrarInscripcion(row_index, cell_index)}>
        <View>
          <Text style={styles.txt}>{data}</Text>
        </View>
      </TouchableOpacity>
    );

    let data_Semestre = [{value: '1',}, {value: '2',}, {value: '3',}, {value: '4',}, {value: '5',}];

    return (
      <ScrollView>
      <View style={styles.container}>
          <Dropdown label = 'Semestre' data = {data_Semestre} onChangeText={(value) => {this.getHorario(value)}} />
          <Table borderStyle={{ borderWidth: 2, borderColor: '#841584'}}>
            <Row data={state.tableHead} flexArr={[2, 2, 2, 2, 2]} style={styles.head} textStyle={styles.txt}/>
            {
              state.tableData.map((rowData, row_index) => (
                <TableWrapper key={row_index} flexArr={[2, 2, 2, 2, 2]} style={styles.row}>
                  {
                    rowData.map((cellData, cell_index) => (
                       <Cell key={cell_index} data={cell_index === 4 ? cell_button(cellData, cell_index, row_index) : cellData} textStyle={styles.txt} />
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
  borrarInscripcion(r, c){
    fetch('http://sis-operativos-2018.herokuapp.com/Backend/deleteInscripcion.php', {
      method: 'POST',
      headers: {'Accept' : "application/json", 'Content-Type' : 'application/json',},
      body: JSON.stringify({
            matricula: student_data.matricula,
            id_curso: this.state.cursoList[r],
        })
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(`response = ${JSON.stringify(res)}`);
      this.getHorario(this.state.semestre_elegido);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getHorario(value){
    this.setState({semestre_elegido: value});
    fetch('http://sis-operativos-2018.herokuapp.com/Backend/getHorario.php', {
      method: 'POST',
      headers: {'Accept' : "application/json", 'Content-Type' : 'application/json',},
      body: JSON.stringify({
            matricula: student_data.matricula,
            semestre: this.state.semestre_elegido,
        })
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(`response = ${JSON.stringify(res)}`)
      if (res.length > 0){
        tableData = [];
        cursoData = [];
        for (i = 0; i < res.length; i++){
          row = [res[i].clave, res[i].nombre, res[i].grupo, res[i].diasemana+" "+res[i].horaInicio+" - "+res[i].horaFin, 'Borrar'];
          tableData.push(row);
          cursoData.push(res[i].id_curso);
        }
        this.setState({tableData: tableData});
        this.setState({cursoList: cursoData});
      }
      else{
        tableData = [];
        cursoData = [];
        this.setState({tableData: tableData});
        this.setState({cursoList: cursoData});
        console.log("Materias not found");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
