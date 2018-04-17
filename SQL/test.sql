USE testApp;

-- Usuarios --

INSERT INTO USUARIOS (username, password) VALUES ("1635501", "1234");

-- Estudiantes --

INSERT INTO ESTUDIANTES (matricula, firstName, lastName, semestre, fechaIngreso) VALUES (1635501, "Alberto Alan", "Zul Rabasa", 6, '2015-08-21');
INSERT INTO ESTUDIANTES (firstName, lastName, semestre, fechaIngreso) VALUES (1, "Adrian", "Gerra Guajardo", 6, '2015-08-21');
INSERT INTO ESTUDIANTES (firstName, lastName, semestre, fechaIngreso) VALUES (2, "Karla Cecilia", "Cantu Facio", 6, '2015-08-21');
INSERT INTO ESTUDIANTES (firstName, lastName, semestre, fechaIngreso) VALUES (3,"Andrea Michel", "Becerra Cortez", 6, '2015-08-21');
INSERT INTO ESTUDIANTES (firstName, lastName, semestre, fechaIngreso) VALUES (4, "Alberto", "Mesa Camacho", 4, '2016-08-21');

-----------------------------------------------------------------------------------------------------------------------------------------

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
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (536, "ANALISIS DE SISTEMAS 2", 118, 5);
INSERT INTO MATERIAS (clave, nombre, requires, semestre) VALUES (005, "CONTEXTO SOCIAL DE LA PROFESION", NULL, 5);

-----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE FRECUENCIAS(
  id SMALLINT(6) UNSIGNED AUTO_INCREMENT NOT NULL,
  frecuencia INT(6) NOT NULL,
  diaSemana VARCHAR(20) NOT NULL,
  CONSTRAINT UC_FRECUENCIAS UNIQUE (diaSemana),
  CONSTRAINT PK_FRECUENCIAS PRIMARY KEY (id)
);

-- Lunes --
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(1, "Lu");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Lu-Ma");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Lu-Mi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Lu-Ju");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Lu-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Lu-Sa");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Lu-Ma-Mi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Lu-Ma-Ju");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Lu-Ma-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Lu-Ma-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Lu-Mi-Ju");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Lu-Mi-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Lu-Mi-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Lu-Ju-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Lu-Ju-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Lu-Vi-Sa");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Mi-Ju");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Mi-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Mi-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Ju-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Ju-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Lu-Ma-Vi-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Lu-Mi-Ju-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Lu-Mi-Ju-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Lu-Mi-Vi-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Lu-Ju-Vi-Sa");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(5, "Lu-Ma-Mi-Ju-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(5, "Lu-Ma-Mi-Ju-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(5, "Lu-Ma-Mi-Vi-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(5, "Lu-Ma-Ju-Vi-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(5, "Lu-Mi-Ju-Vi-Sa");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(6, "Lu-Ma-Mi-Ju-Vi-Sa");

-- Martes --
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(1, "Ma");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Ma-Mi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Ma-Ju");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Ma-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Ma-Sa");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Ma-Mi-Ju");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Ma-Mi-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Ma-Mi-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Ma-Ju-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Ma-Ju-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Ma-Vi-Sa");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Ma-Mi-Ju-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Ma-Mi-Ju-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Ma-Mi-Vi-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Ma-Ju-Vi-Sa");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(5, "Ma-Mi-Ju-Vi-Sa");

-- Miercoles --
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(1, "Mi");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Mi-Ju");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Mi-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Mi-Sa");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Mi-Ju-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Mi-Ju-Sa");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Mi-Vi-Sa");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(4, "Mi-Ju-Vi-Sa");

-- Jueves --
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(1, "Ju");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Ju-Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Ju-Sa");

INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(3, "Ju-Vi-Sa");

-- Viernes --
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(1, "Vi");
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(2, "Vi-Sa");

-- Sabado --
INSERT INTO FRECUENCIAS(frecuencia, diaSemana) VALUES(1, "Sa");


--------------------------------------------------------------------------------------------------------------------------------
-- Maestros --
INSERT INTO MAESTROS (matricula, apellidoPaterno, apellidoMaterno, nombre, fechaIngreso, estatus) VALUES
(1000001, "AGUILAR", "DE LA ROSA", "MARTIN ALEJANDRO", "2016-02-22", 4),
(1000002, "CANDELARIA", "CORONADO", "MIGUEL ALEJANDRO", "2016-02-22", 4),
(1000003, "CANDELARIA", "TOVAR", "JOSE LUIS", "2016-02-22", 4),
(1000004, "CASTAÑEDA", "RODRIGUEZ", "DIANA", "2016-02-22", 4),
(1000005, "CASTRO", "MEDELLIN", "REYNA GUADALUPE", "2016-02-22", 4),
(1000006, "DE LA FUENTE", "GARCIA", "CARMEN DEL ROSARIO", "2016-02-22", 4),
(1000007, "DE LA GARZA", "OCHOA", "JUAN JESUS", "2016-02-22", 4),
(1000008, "ELIZONDO", "ESPINOZA", "CARLOS", "2016-02-22", 4),
(1000009, "GARZA", "GARZA", "LUIS GERARDO", "2016-02-22", 4),
(10000010, "GARZA", "GONZALEZ", "IRMA LETICIA", "2016-02-22", 4),
(10000011, "GIL", "GONZALEZ", "ALEIDA MAGDALENA", "2016-02-22", 4),
(10000012, "GRACIA", "PINILLA", "MIGUEL ANGEL", "2016-02-22", 4),
(10000013, "HERNANDEZ", "BAEZ", "JORGE", "2016-02-22", 4),
(10000014, "HERNANDEZ", "CABRERA", "FRANCISCO", "2016-02-22", 4),
(10000015, "HERNANDEZ", "OYERVIDES", "MARISSA ESMERALDA", "2016-02-22", 4),
(10000016, "ISLAS", "PINEDA", "JORGE ALBERTO", "2016-02-22", 4),
(10000017, "JUAREZ", "AGUILAR", "MARIA LUISA", "2016-02-22", 4),
(10000018, "LEDEZMA", "MARTINEZ", "MARTHA", "2016-02-22", 4),
(10000019, "LUNA", "CRIADO", "CARLOS", "2016-02-22", 4),
(10000020, "MARTINEZ", "CEJUDO", "MARIA DEL CARMEN", "2016-02-22", 4);

-- Cursos --
INSERT INTO CURSOS (materia, maestro, semestre, grupo, frecuencia, horaInicio, horaFin) VALUES
(101, 1000004, 1, 1, 12, "07:00:00", "08:00:00"),
(101, 1000004, 1, 2, 13, "11:00:00", "12:00:00"),
(112, 1000002, 1, 1, 13, "11:00:00", "12:00:00");

-- Inscripciones --
INSERT INTO INSCRIPCIONES(matricula, curso, estatus) VALUES (1635501, 1, 1);
