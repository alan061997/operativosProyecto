import React, { Component } from 'react';
import { Alert, AppRegistry, TouchableOpacity, StyleSheet, ScrollView, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component';
import { Dropdown } from 'react-native-material-dropdown';



export default class InscripcionScreen extends Component {
  static navigationOptions = {
    title: 'Inscripcion',
    headerRight:
      <TouchableOpacity onPress={()=>navigation.navigate('LogIn')} style={{backgroundColor:'orange', margin:10, padding:10}}>
          <Text>Log Out</Text>
      </TouchableOpacity>
  };
  componentDidMount(){
  }
  constructor(props) {
    super(props)
    this.state = {
      materias_data: {materias: 'ninguna'},
      user_data: this.props.navigation.state.params.user_data,
      student_data: this.props.navigation.state.params.student_data,
      semestre_elegido: '0',
      tableHead: ['Clave', 'Sem', 'Nombre'],
      tableData: [
        ['', '', '', ]
      ]
    };
  }

  goToCursos(materia_id){
    this.props.navigation.navigate('Curso', {materia: materia_id, semestre: this.state.semestre_elegido});
  }
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const state = this.state;
    const styles = StyleSheet.create({
      container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff' },
      rowContainer: { flex: 1, flexDirection:'row', padding: 4, paddingTop: 5, 
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
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
      rightBtn: {
        padding: 5,
        width: "33%",
        margin: 5,
        borderWidth: 1,
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
      <TouchableOpacity style={styles.cell_btn} onPress={() => this.goToCursos(data)}>
        <View>
          <Text style={styles.txt}>{data}</Text>
        </View>
      </TouchableOpacity>
    );

    let data_Semestre = [
      { value: '1', }, 
      { value: '2', }, 
      { value: '3', }, 
      { value: '4', }, 
      {value: '5',}, 
      {value: '6',}
    ];

    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
            <Dropdown label='Semestre' data={data_Semestre} containerStyle={styles.container}
                      onChangeText={(value) => { this.setState({ semestre_elegido: value }); }} />
            <TouchableOpacity style={styles.rightBtn} 
                              onPress={() => this.getMaterias()}>
              <View>
                <Text style={styles.txt}>Ver materias</Text>
              </View>
          </TouchableOpacity>
        </View>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#841584'}}>
            <Row data={state.tableHead} flexArr={[2, 2, 2]} style={styles.head} textStyle={styles.txt}/>
            {
              state.tableData.map((rowData, index) => (
                <TableWrapper key={index} flexArr={[1, 1, 2]} style={styles.row}>
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

  getMaterias = async() => {
    fetch('http://sis-operativos-2018.herokuapp.com/Backend/getMaterias.php', {
      method: 'POST',
      headers: {'Accept' : "application/json", 'Content-Type' : 'application/json',},
      body: JSON.stringify({
            semestre: this.state.semestre_elegido,
        })
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(`response = ${JSON.stringify(res)}`)
      if (res.length > 0){
        tableData = [];
        for (i = 0; i < res.length; i++){
          row = [res[i].clave, res[i].semestre, res[i].nombre];
          tableData.push(row);
        }
        this.setState({tableData: tableData});
        this.setState({ materias_data: res });
      }
      else{
        console.log("Materias not found");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getCursos = async() => {

  }
}
