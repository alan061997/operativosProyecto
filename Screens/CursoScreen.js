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
      materia_data: this.props.navigation.state.params.materia_data,
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

  isDuplicate(materia, cursos_previos){
    console.info(`materia = ${materia}`);
    for (i=0; i<cursos_previos.length; i++){
      console.info(`cursos previos = ${JSON.stringify(cursos_previos[i])}`);
    }
    //Lista de ids de materias previas
    materias_previas = cursos_previos.map(function (curso) { 
      return (curso.materia == materia && curso.estatus == "cursando") 
        || (curso.materia == materia && curso.estatus == "aprobada") ? true : false
    });
    console.log(`materias previas (status) = ${materias_previas}`);
    duplicate = materias_previas.indexOf(true) >= 0 ? true : false;
    console.log(`materia duplicada? = ${duplicate}`);
    //return duplicate;
    return duplicate;
  }

  isPrerrequisiteCovered(materia, cursos_previos){
    materia_data = this.state.materia_data;
    console.log(`datos de materia: \n${JSON.stringify(materia_data)}`);
    //for (i=0;i<cursos_previos.length;i++){
    //  if()
    //}
    return false;
  }

  isScheduleFree(materia, cursos_previos){
    return true;
  }

  studentCredits(cursos_previos){
    return 0;
  }

  subjectStudentCount(materia, cursos_previos) {
    return 0;
  }

  validaInscripcion(materia, cursos_previos){
    console.log("validando inscripcion...");
    if (this.isDuplicate(materia, cursos_previos)) {
      console.log("Duplicado");
      Alert.alert("No procede inscripcion, materia inscrita previamente");
      return false;
    }
    if (!this.isPrerrequisiteCovered(materia, cursos_previos)) {
      console.log("falta requisito");
      Alert.alert("No procede inscripcion, debe aprobar materia requisito");
      return false;
    }
    if (!this.isScheduleFree(materia, cursos_previos)) {
      console.log("se empalma materia");
      Alert.alert("No procede inscripcion, materia se empalma con horario actual");
      return false;
    }
    if (this.studentCredits(cursos_previos) >= 5) {
      console.log("creditos llenos");
      Alert.alert("No procede inscripcion, Limite de creditos");
      return false;
    }
    if (this.subjectStudentCount(materia, cursos_previos) >= 3) {
      console.log("salon lleno");
      Alert.alert("No procede inscripcion, Limite de creditos");
      return false;
    }
    return true;
  }

  inscribeMateria = async() => {
    //JSON para inscripcion: { "matricula": 1443335, "curso": 10, "estatus": 2 }
    //URL: http://sis-operativos-2018.herokuapp.com/api.php/inscripciones
    //Metodo: POST
    curso = this.state.curso_a_inscribir.id_curso;
    matricula = this.state.student_data.matricula;
    estatus = 2; //Significa "cursando"
    inscripcion_body = JSON.stringify({
      "matricula": matricula,
      "curso": curso,
      "estatus": estatus
    })
    console.log("Attempting inscription for real!!!");
    console.log(`datos para inscripcion: ${inscripcion_body}`);
    fetch("http://sis-operativos-2018.herokuapp.com/api.php/inscripciones", {
      method: 'POST',
      headers: { 'Accept': "application/json", 'Content-Type': 'application/json', },
      body: inscripcion_body
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(`respuesta inscripcion definitiva = \n${JSON.stringify(res)}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  inscribirMateria = async() => {
    //WHERE THE MAGIC HAPPENS!!!
    //adquiere informacion relevante
    grupo = this.state.grupo;
    materia = this.state.materia;
    matricula = this.state.student_data.matricula;
    
    console.log("fetching important inscription stuff...");
    fetch(`http://sis-operativos-2018.herokuapp.com/api.php/vista_validacion_inscripcion?transform=1&filter=matricula,eq,${matricula}`, {
      method: 'GET',
      headers: { 'Accept': "application/json", 'Content-Type': 'application/json', }
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(`respuesta inscripcion = \n${JSON.stringify(res)}`);
        cursos_previos = res.vista_validacion_inscripcion;
        for (i = 0; i < cursos_previos.length; i++) {
          console.log(`Curso: \n${JSON.stringify(cursos_previos[i])}`);
        }
        console.log(`Grupo: ${grupo}`);
        console.log(`Materia: ${materia}`);
        console.log(`Matricula: ${matricula}`);
        //Ahora si, aqui ocurre la magia:
        if(this.validaInscripcion(materia, cursos_previos)){
          this.inscribeMateria();
          Alert.alert("Materia inscrita correctamente");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  showData(cell_index, row_index){
    grupo = this.state.tableData[row_index][0].toString();
    this.setState({grupo: grupo});
    //Agrega a estado informacion del curso para batallar menos al inscribir...
    curso_a_inscribir = this.state.vista_cursos_materia[row_index];
    this.setState({curso_a_inscribir: curso_a_inscribir});
    console.log(`curso a inscribir: ${JSON.stringify(curso_a_inscribir)}`);
    respuesta = Alert.alert("Importante", `Desea inscribir la materia en el grupo #${grupo}?`,
      [
        { text: 'Solo estaba viendo...', onPress: () => console.log('Just browsing pressed') },
        { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Si', onPress: () => {
            console.log('Intentando inscripcion...');
            this.inscribirMateria();
          } 
        },
      ]);
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
    materia = this.state.materia;
    fetch(`http://sis-operativos-2018.herokuapp.com/api.php/vista_cursos_materia?transform=1&filter=materia,eq,${materia}`, {
      method: 'GET',
      headers: {'Accept' : "application/json", 'Content-Type' : 'application/json',}
    })
    .then((response) => response.json())
    .then((res) => {
      console.log("info del curso:");
      console.log(`response = ${JSON.stringify(res.vista_cursos_materia)}`);
      res = res.vista_cursos_materia;
      if (res.length > 0){
        tableData = [];
        for (i = 0; i < res.length; i++){
          row = [res[i].grupo, res[i].nombre, res[i].diaSemana, res[i].horaInicio, res[i].horaFin];
          tableData.push(row);
        }
        this.setState({tableData: tableData});
        this.setState({vista_cursos_materia : res});
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
