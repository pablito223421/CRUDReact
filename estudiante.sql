create database bd_estudiantes;

create table estudiantes(

id int (3) NOT NULL AUTO_INCREMENT,
nombre varchar2(20) NOT NULL,
apellido varchar2(40)NOT NULL,
edad number(2) NOT NULL,
carrera varchar2(40) NOT NULL,
PRIMARY KEY (id)
);