import React, { Component } from 'react';
import { Alert, AppRegistry, TouchableOpacity, StyleSheet, ScrollView, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component';
import {StackNavigator} from 'react-navigation';


export default class CursoScreen extends Component {
  static navigationOptions = {
    title: 'Curso',
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
      semestre: this.props.navigation.state.params.semestre,
      materia: this.props.navigation.state.params.materia,
      tableHead: ['Grupo', 'Maestro', 'Frecuencia', 'Hora Inicio', 'Hora Fin'],
      tableData: [
        ['1.1', '1.2', '1.3', '1.4', '1.5'],
        ['2.1', '2.2', '2.3', '2.4', '2.5'],
    ]
    };
  }
  componentDidMount(){
    this.getCursos().done();
  }

  showData(cell_index, row_index){
    Alert.alert(this.state.tableData[row_index][0].toString());
  }
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const state = this.state;
    const cell_button = (data, cell_index, row_index) => (
      <TouchableOpacity style={styles.cell_btn} onPress={() => this.showData(cell_index, row_index)}>
        <View>
          <Text style={styles.txt}>{data}</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Vista de Curso</Text>
          <Text>Semestre: {this.state.semestre}</Text>
          <Text>Materia: {this.state.materia}</Text>
          <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#841584'}}>
              <Row data={state.tableHead} flexArr={[2, 2, 2, 2 ,2]} style={styles.head} textStyle={styles.txt}/>
              {
                state.tableData.map((rowData, row_index) => (
                  <TableWrapper key={row_index} flexArr={[2, 2, 2, 2, 2]} style={styles.row}>
                    {
                      rowData.map((cellData, cell_index) => (
                        <Cell key={cell_index} data={cell_index === 0 ? cell_button(cellData, cell_index, row_index) : cellData} textStyle={styles.txt} />
                      ))
                    }
                  </TableWrapper>
                ))
              }
            </Table>
          </View>
        </View>
      </ScrollView>
    );
  }
  getCursos = async() => {
    fetch('http://sis-operativos-2018.herokuapp.com/Backend/getCursos.php', {
      method: 'POST',
      headers: {'Accept' : "application/json", 'Content-Type' : 'application/json',},
      body: JSON.stringify({
            materia: this.state.materia,
        })
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(`response = ${JSON.stringify(res)}`)
      if (res.length > 0){
        tableData = [];
        for (i = 0; i < res.length; i++){
          row = [res[i].grupo, res[i].nombre, res[i].diaSemana, res[i].horaInicio, res[i].horaFin];
          tableData.push(row);
        }
        this.setState({tableData: tableData});
      }
      else{
        console.log("Cursos not found");
      }
    })
    .catch((error) => {
      console.error(error);
    });
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
  head: { height: 40, backgroundColor: '#841584' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  cell_btn: {
    padding: 5,
    width: "66%",
    margin: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
  },
})
