---
title: "SQL Basico"
date: 2022-07-14T09:20:48-06:00
description: 'SQL desde cero, comandos basicos de SQL para MySQL y SQL Server con ejemplos.'
image: images/Server.jpeg
draft: false
viewimg: true
---
En este post se describen los comandos básicos de SQL, desde la creación de una base de datos hasta la eliminación de una tabla. Además, se muestran ejemplos de cómo insertar valores en una tabla, solicitar datos específicos, ordenar resultados y actualizar o eliminar registros. También se incluyen comandos para agregar, renombrar o eliminar columnas en una tabla.

### Comandos basicos

-- Crea una nueva base de datos
{{< custom-code "SQL" >}}
create database Blog;
{{< /custom-code >}}

-- seleccionar base de datos
{{< custom-code "SQL" >}}
use database Blog;
{{< /custom-code >}}

Cada uno de los identificadores representa una columna y estan ordenados de la siguiente forma

(identificador) (tipo) (si puede quedar vacio)
{{< custom-code "SQL" >}}
-- crea una nueva tabla
create table usuarios2(
ID int not null,
Nombre varchar(20) not null,
Apellido varchar(20) not null,
Telefono varchar(12) not null
);
{{< /custom-code >}}
-- Insertar valores a una fila (insertar un registro)
{{< custom-code "SQL" >}}
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
{{< /custom-code >}}
-- Solicitar los datos de toda la tabla
{{< custom-code "SQL" >}}
SELECT * FROM usuarios2;
{{< /custom-code >}}

-- Insertar varios valores a las columans (insertar varios registros)
{{< custom-code "SQL" >}}
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
{{< /custom-code >}}

-- Solicitar una columna de una tabla
{{< custom-code "SQL" >}}
SELECT Nombre FROM usuarios2;
{{< /custom-code >}}
-- Solicitar dos columna de una tabla
{{< custom-code "SQL" >}}
SELECT Nombre,Telefono FROM usuarios2;
{{< /custom-code >}}
-- Traer los registros unicos y eliminar los repetidos
{{< custom-code "SQL" >}}
SELECT DISTINCT Nombre,ID
FROM usuarios2;
{{< /custom-code >}}

-- Ordenar los resultados por los criterios que elijamos
{{< custom-code "SQL" >}}
SELECT * FROM usuarios2
Order BY Apellido;

SELECT * FROM usuarios2
Order BY Nombre,ID;
{{< /custom-code >}}

-- Extraer datos espesificos con operadores logicos "WHERE" (DONDE)
{{< custom-code "SQL" >}}
SELECT * FROM usuarios2
WHERE ID > 4;
{{< /custom-code >}}

-- Operador "BETWEEN" (ENTRE) junto con WHERE
{{< custom-code "SQL" >}}
SELECT * FROM usuarios2
WHERE ID BETWEEN 2 and 5;
{{< /custom-code >}}
-- Actualizar datos de la tabla
{{< custom-code "SQL" >}}
UPDATE usuarios2
SET Nombre='Marcos',Apellido='Vasquez'
WHERE ID=5;
{{< /custom-code >}}

-- tree solo una columna de la tabla
{{< custom-code "SQL" >}}
SELECT * FROM usuarios2
WHERE ID =5;
{{< /custom-code >}}

-- Eliminar registros de la tabla

-- Nota: no olvidar colocar WHERE
-- para espesificar el registro que queremos eliminar,
-- de lo contrario eliminara toda la tabla
{{< custom-code "SQL" >}}
SELECT * FROM usuarios2; -- (tabla antes de borrar el registro)

DELETE FROM usuarios2
WHERE ID=8;
-- (tabla despues de borrar el registro)
SELECT * FROM usuarios2;
{{< /custom-code >}}

-- Agregar una columna a nuestra tabla
{{< custom-code "SQL" >}}
--(nombre de la tabla) (identificador) (tipo que almacenara)
ALTER TABLE usuarios2 ADD Dirección varchar(10);
{{< /custom-code >}}

-- Renombrar un a columna de una tabla
{{< custom-code "SQL" >}}
SELECT * FROM usuarios2; -- (tabla antes de Renombrar columna)
exec sp_rename 'usuarios2.dirección','Domicilio','COLUMN';
SELECT * FROM usuarios2; -- (tabla despues de Renombrar columna)
{{< /custom-code >}}

-- Borrar una columna de una tabla
{{< custom-code "SQL" >}}
SELECT * FROM usuarios2; -- (tabla antes de borrar la columna)

--ALTER TABLE (nombre de la tabla) DROP COLUMN	(identificador)
ALTER TABLE usuarios2 DROP COLUMN Domicilio;

SELECT * FROM usuarios2; -- (tabla despues de borrar la columna)
{{< /custom-code >}}

-- Cambiar el nombre a una tabla o renombrar una tabla
{{< custom-code "SQL" >}}
-- (nombre actual de la tabla) (nuevo nombre de la tabla)
exec sp_rename 'usuarios2', 'usuarios';
{{< /custom-code >}}

-- BORRAR UNA TABLA
{{< custom-code "SQL" >}}
DROP TABLE usuarios;
{{< /custom-code >}}




## Diferencia entre DELETE y DROP en SQL

- **DELETE**

  - Elimina *filas específicas* de una tabla.
  - Permite usar la cláusula `WHERE` para definir condiciones.
  - No afecta la estructura de la tabla, solo elimina datos.
  - Se puede deshacer (rollback) en una transacción activa.
  - Ejemplo:
    ```sql
    DELETE FROM empleados WHERE id = 5;
    ```
- **DROP**

  - Elimina la *tabla completa*, incluyendo su estructura, datos e índices.
  - No permite recuperar la tabla ni los datos, a menos que se tenga una copia de seguridad.
  - No se usa `WHERE`, ya que elimina la tabla en su totalidad.
  - Ejemplo:
    ```sql
    DROP TABLE empleados;
    ```

### Resumen

- `DELETE` = Elimina datos específicos, mantiene la estructura de la tabla.
- `DROP` = Elimina la tabla entera, incluyendo su estructura y datos.
