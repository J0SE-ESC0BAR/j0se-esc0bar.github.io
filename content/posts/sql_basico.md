---
title: "SQL Basico"
date: 2022-07-14T09:20:48-06:00
description: 'SQL desde cero, comandos basicos de SQL para MySQL y SQL Server con ejemplos.'
draft: false
---
-- Crea una nueva base de datos

create database Blog;

-- seleccionar base de datos

-- crea una nueva tabla

create table usuarios2
(

Cada uno de los identificadores representa una columna y estan ordenados de la siguiente forma

-- (identificador) (tipo) (si puede quedar vacio)

	ID int not null,
	Nombre varchar(20) not null,
	Apellido varchar(20) not null,
	Telefono varchar(12) not null
);

-- Insertar valores a una fila (insertar un registro)

INSERT INTO usuarios2(
	ID,
	Nombre,
	Apellido,
	Telefono
)
VALUES (
	01,
	'Pedro',
	'Arias',
	'809-123-1345'
);

-- Solicitar los datos de toda la tabla

SELECT * FROM usuarios2;

-- Insertar varios valores a las columans (insertar varios registros)

INSERT INTO usuarios2(

	ID,

	Nombre,

	Apellido,

	Telefono

)

VALUES (

	02,

	'Óscar',

	'Pérez',

	'864-323-742'

);

INSERT INTO usuarios2(
	ID,
	Nombre,
	Apellido,
	Telefono
)
VALUES (
	03,
	'Juan',
	'Arias',
	'604-423-942'
);
INSERT INTO usuarios2(
	ID,
	Nombre,
	Apellido,
	Telefono
)
VALUES (
	04,
	'Valentina',
	'Sánchez',
	'464-349-2142'
);
INSERT INTO usuarios2(
	ID,
	Nombre,
	Apellido,
	Telefono
)
VALUES (
	05,
	'Óscar',
	'León',
	'984-632-8452'
);
INSERT INTO usuarios2(
	ID,
	Nombre,
	Apellido,
	Telefono
)
VALUES (
	06,
	'Efraín',
	'Ríos',
	'895-224-3612'
);
INSERT INTO usuarios2(
	ID,
	Nombre,
	Apellido,
	Telefono
)
VALUES (
	07,
	'Pedro',
	'Sánchez',
	'434-343-1742'
);
INSERT INTO usuarios2(
	ID,
	Nombre,
	Apellido,
	Telefono
)
VALUES (
	08,
	'Martín',
	'Pérez',
	'724-353-442'
);

-- Solicitar una columna de una tabla

SELECT Nombre FROM usuarios2;

-- Solicitar dos columna de una tabla
SELECT Nombre,Telefono FROM usuarios2;

-- Traer los registros unicos y eliminar los repetidos
SELECT DISTINCT Nombre,ID
FROM usuarios2;

-- Ordenar los resultados por los criterios que elijamos
SELECT * FROM usuarios2
Order BY Apellido;

SELECT * FROM usuarios2
Order BY Nombre,ID;

-- Extraer datos espesificos con operadores logicos (WHERE) donde
SELECT * FROM usuarios2
WHERE ID > 4;

-- Operador BETWEEN (entre) junto con WHERE
SELECT * FROM usuarios2
WHERE ID BETWEEN 2 and 5;

-- Actualizar datos de la tabla
UPDATE usuarios2
SET Nombre='Marcos',Apellido='Vasquez'
WHERE ID=5;
-- tree solo una columna de la tabla
SELECT * FROM usuarios2
WHERE ID =5;

-- Eliminar registros de la tabla

-- Nota: no olvidar colocar WHERE 
-- para espesificar el registro que queremos eliminar, 
-- de lo contrario eliminara toda la tabla

-- (tabla antes de borrar el registro)
SELECT * FROM usuarios2;
DELETE FROM usuarios2
WHERE ID=8;
-- (tabla despues de borrar el registro)
SELECT * FROM usuarios2;

-- Agregar una columna a nuestra tabla
--    (nombre de la tabla) (identificador) (tipo que almacenara)
ALTER TABLE usuarios2 ADD Dirección varchar(10);

-- Renombrar un a columna de una tabla
SELECT * FROM usuarios2; -- (tabla antes de Renombrar columna)
exec sp_rename 'usuarios2.dirección','Domicilio','COLUMN';
SELECT * FROM usuarios2; -- (tabla despues de Renombrar columna)

-- Borrar una columna de una tabla
SELECT * FROM usuarios2; -- (tabla antes de borrar la columna)
--   	(nombre de la tabla)	(identificador)
ALTER TABLE usuarios2 DROP COLUMN Domicilio;
SELECT * FROM usuarios2; -- (tabla despues de borrar la columna)

-- Cambiar el nombre a una tabla o renombrar una tabla
-- (nombre actual de la tabla) (nuevo nombre de la tabla)
exec sp_rename 'usuarios2', 'usuarios';

-- BORRAR UNA TABLA
-- DROP TABLE usuarios;
