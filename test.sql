USE testApp;

-----------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE ESTUDIANTES (
  id SMALLINT(6) UNSIGNED AUTO_INCREMENT NOT NULL,
  matricula INT(7),
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  semestre TINYINT(2) NOT NULL,
  fechaIngreso DATE,
  CONSTRAINT UC_ESTUDIANTE UNIQUE (matricula, firstName, lastName),
  CONSTRAINT PK_ESTUDIANTE PRIMARY KEY (id)
 );


INSERT INTO ESTUDIANTES (matricula, firstName, lastName, semestre, fechaIngreso) VALUES (1635501, "Alberto Alan", "Zul Rabasa", 6, '2015-08-21');
INSERT INTO ESTUDIANTES (firstName, lastName, semestre, fechaIngreso) VALUES ("Adrian", "Guerra Guajardo", 6, '2015-08-21');
INSERT INTO ESTUDIANTES (firstName, lastName, semestre, fechaIngreso) VALUES ("Karla Cecilia", "Cantu Facio", 6, '2015-08-21');
INSERT INTO ESTUDIANTES (firstName, lastName, semestre, fechaIngreso) VALUES ("Andrea Michel", "Becerra Cortez", 6, '2015-08-21');
INSERT INTO ESTUDIANTES (firstName, lastName, semestre, fechaIngreso) VALUES ("Alberto", "Mesa Camacho", 4, '2016-08-21');

-----------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE MATERIAS (
  id SMALLINT(6) UNSIGNED AUTO_INCREMENT NOT NULL,
  clave INT(7) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  requires INT(7),
  semestre TINYINT(2) NOT NULL,
  CONSTRAINT UC_MATERIA UNIQUE (clave, nombre),
  CONSTRAINT PK_MATERIA PRIMARY KEY (id)
);

-- PRIMER SEMESTRE --
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (101, "MATEMATICAS 1", NULL, 1);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (102, "MATEMATICAS 2", NULL, 1);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (103, "PRINCIPIOS DE ARQUITECTURA COMPUTACIONAL", NULL, 1);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (104, "PROGRAMACION ORIENTADA A OBJETOS", NULL, 1);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (106, "ADMINISTRACION", NULL, 1);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (107, "METODOLOGIA DE LA PROGRAMACION", NULL, 1);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (002, "APLICACION DE TECNOLOGIAS DE LA INFORMACION", NULL, 1);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (001, "COMPETENCIA COMUNICATIVO", NULL, 1);

-- SEGUNDO SEMESTRE --
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (108, "MATEMATICAS 3", 101, 2);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (109, "MATEMATICAS 4", 102, 2);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (110, "FISICA", 102, 2);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (112, "PROGRAMACION 1", 104, 2);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (114, "COMPORTAMIENTO ORGANIZACIONAL", 106, 2);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (115, "TELEINFORMATICA", 103, 2);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (003, "APRECIACION A LAS ARTES", NULL, 2);

-- TERCER SEMESTRE --
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (117, "MATEMATICAS DISCRETAS", 109, 3);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (118, "ANALISIS DE SISTEMAS 1", NULL, 3);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (119, "SISTEMAS ELECTRONICOS", 110, 3);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (121, "PROGRAMACION 2", 112, 3);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (123, "PROCESAMIENTO DE IMAGENES AUDIO Y DIALOGOS ", NULL, 3);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (125, "ESTRUCTURA DE DATOS", 112, 3);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (126, "TEORIA DE AUTOMATAS", 109, 3);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (042, "CULTURA DE CALIDAD", NULL, 3);

-- CUARTO SEMESTRE --
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (127, "ECUACIONES DIFERENCIALES", 117, 4);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (128, "CIRCUITOS DIGITALES", 119, 4);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (130, "BIOINFORMATICA", 125, 4);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (131, "BASE DE DATOS", 125, 4);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (530, "METODOLOGIAS MODERNAS DE ING. DE SOFTWARE", NULL, 4);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (133, "INTERCONECTIVIDAD DE REDES", 115, 4);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (004, "AMBIENTE Y SUSTENTABILIDAD", NULL, 4);

-- QUINTO SEMESTRE --
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (134, "ESTADISTICA 1", 127, 5);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (135, "ANALISIS NUMERICO", 127, 5);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (136, "MICROPROCESADORES", 128, 5);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (138, "ARQUITECTURA AVANZADA DE COMPUTADORAS", NULL, 5);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (536, "ANALISIS DE SISTEMAS 2", NULL, 5);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (005, "CONTEXTO SOCIAL DE LA PROFESION", NULL, 5);

-----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE FRECUENCIA(
  id SMALLINT(6) UNSIGNED AUTO_INCREMENT NOT NULL,
  frecuencia INT(6) NOT NULL,
  diaSemana VARCHAR(20) NOT NULL,
  requires VARCHAR(100),
  CONSTRAINT UC_FRECUENCIA UNIQUE (diaSemana),
  CONSTRAINT PK_FRECUENCIA PRIMARY KEY (id)
);

-- Lunes --
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(1, "Lu");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Lu-Ma");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Lu-Mi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Lu-Ju");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Lu-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Lu-Sa");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Lu-Ma-Mi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Lu-Ma-Ju");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Lu-Ma-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Lu-Ma-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Lu-Mi-Ju");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Lu-Mi-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Lu-Mi-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Lu-Ju-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Lu-Ju-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Lu-Vi-Sa");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Mi-Ju");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Mi-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Mi-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Ju-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Ju-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Vi-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Lu-Mi-Ju-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Lu-Mi-Ju-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Lu-Mi-Vi-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Lu-Ju-Vi-Sa");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(5, "Lu-Ma-Mi-Ju-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(5, "Lu-Ma-Mi-Ju-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(5, "Lu-Ma-Mi-Vi-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(5, "Lu-Ma-Ju-Vi-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(5, "Lu-Mi-Ju-Vi-Sa");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(6, "Lu-Ma-Mi-Ju-Vi-Sa");

-- Martes --
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(1, "Ma");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Ma-Mi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Ma-Ju");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Ma-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Ma-Sa");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Ma-Mi-Ju");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Ma-Mi-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Ma-Mi-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Ma-Ju-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Ma-Ju-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Ma-Vi-Sa");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Ma-Mi-Ju-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Ma-Mi-Ju-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Ma-Mi-Vi-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Ma-Ju-Vi-Sa");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(5, "Ma-Mi-Ju-Vi-Sa");

-- Miercoles --
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(1, "Mi");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Mi-Ju");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Mi-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Mi-Sa");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Mi-Ju-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Mi-Ju-Sa");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Mi-Vi-Sa");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(4, "Mi-Ju-Vi-Sa");

-- Jueves --
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(1, "Ju");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Ju-Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Ju-Sa");

INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(3, "Ju-Vi-Sa");

-- Viernes --
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(1, "Vi");
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(2, "Vi-Sa");

-- Sabado --
INSERT INTO FRECUENCIA(frecuencia, diaSemana) VALUES(1, "Sa");


--------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE ESTATUS (
	id SMALLINT(6) UNSIGNED AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(30) NOT NULL, 	
    description VARCHAR(100)
); 
-----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE MAESTROS (
   id SMALLINT(6) UNSIGNED AUTO_INCREMENT NOT NULL,
   nombre VARCHAR(30) NOT NULL, 	
   firstName VARCHAR(30) NOT NULL,
   lastName VARCHAR(30) NOT NULL,
   semestre TINYINT(2) NOT NULL,
   fechaIngreso DATE,
   estatus INT FOREIGN KEY REFERENCES ESTATUS(id), 
   CONSTRAINT PK_MAESTROS PRIMARY KEY (id) 
); 

-----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE HORARIOS (
	id SMALLINT(6) UNSIGNED AUTO_INCREMENT NOT NULL, 
    horaInicio TIME NOT NULL, 
    horaFin TIME NOT NULL, 
    description VARCHAR(100),
    CONSTRAINT PK_HORARIOS PRIMARY KEY (id)
);

-----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE CURSOS (
  id SMALLINT(6) UNSIGNED AUTO_INCREMENT NOT NULL,
  matricula INT FOREIGN KEY REFERENCES ESTUDIANTE(matricula),
  clave INT FOREIGN KEY REFERENCES MATERIAS(clave),
  horaInicio TIME NOT NULL,
  CONSTRAINT PK_CURSO PRIMARY KEY (id) 
);

-----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE INSCRIPCION (
  id SMALLINT(6) UNSIGNED AUTO_INCREMENT NOT NULL,
  CONSTRAINT PK_INCRIPCION PRIMARY KEY (id), 
  matricula INT FOREIGN KEY REFERENCES ESTUDIANTE(matricula), 
  curso INT FOREIGN KEY REFERENCES CURSOS(id), 
  estatus INT FOREIGN KEY REFERENCES ESTATUS(id)
);

-----------------------------------------------------------------------------------------------------------------------------------







