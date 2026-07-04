Sistema Academico en SQL - H2
Motor recomendado
MySQL 8.0 o MariaDB reciente.

Base de datos
gestion_academica_universidad

Archivo principal
sql/gestion_academica_universidad.sql
Tablas creadas
estudiantes
docentes
cursos
inscripciones
Restricciones incluidas
Llaves primarias autoincrementales en todas las tablas.
UNIQUE en identificacion, correos y codigo de curso.
FOREIGN KEY desde cursos hacia docentes.
FOREIGN KEY desde inscripciones hacia estudiantes y cursos.
NOT NULL en los campos obligatorios.
CHECK para genero, fechas, creditos, semestre, experiencia y calificacion final.
ON DELETE CASCADE para borrar inscripciones cuando se elimina un estudiante.
ON DELETE RESTRICT para evitar borrar docentes o cursos referenciados.
Como ejecutar
mysql -u root -p < sql/gestion_academica_universidad.sql
Tambien puedes abrir el script en MySQL Workbench, phpMyAdmin o DBeaver y ejecutarlo completo.
