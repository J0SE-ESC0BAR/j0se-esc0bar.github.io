---
title: "SQL Basico"
date: 2022-07-14T09:20:48-06:00
description: 'SQL desde cero, comandos basicos de SQL para MySQL y SQL Server con ejemplos.'
image: images/Server.jpeg
draft: false
viewimg: true
---

En este post se describen los comandos básicos de SQL, desde la creación de una base de datos hasta la eliminación de una tabla. Además, se muestran ejemplos de cómo insertar valores en una tabla, solicitar datos específicos, ordenar resultados y actualizar o eliminar registros. También se incluyen comandos para agregar, renombrar o eliminar columnas en una tabla.

### Comandos básicos

#### -- Crea una nueva base de datos
```sql
create database Blog;
```

#### -- Seleccionar base de datos
```sql
use database Blog;
```

Cada uno de los identificadores representa una columna y están ordenados de la siguiente forma:  
(identificador) (tipo) (si puede quedar vacío)

```sql
-- Crea una nueva tabla
create table usuarios2(
  ID int not null,
  Nombre varchar(20) not null,
  Apellido varchar(20) not null,
  Telefono varchar(12) not null
);
```

#### -- Insertar valores a una fila (insertar un registro)
```sql
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
```

#### -- Solicitar los datos de toda la tabla
```sql
SELECT * FROM usuarios2;
```

#### -- Insertar varios valores a las columnas (insertar varios registros)
```sql
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
```

#### -- Solicitar una columna de una tabla
```sql
SELECT Nombre FROM usuarios2;
```

#### -- Solicitar dos columnas de una tabla
```sql
SELECT Nombre, Telefono FROM usuarios2;
```

#### -- Traer los registros únicos y eliminar los repetidos
```sql
SELECT DISTINCT Nombre, ID
FROM usuarios2;
```

#### -- Ordenar los resultados por los criterios que elijamos
```sql
SELECT * FROM usuarios2
ORDER BY Apellido;

SELECT * FROM usuarios2
ORDER BY Nombre, ID;
```

#### -- Extraer datos específicos con operadores lógicos "WHERE"
```sql
SELECT * FROM usuarios2
WHERE ID > 4;
```

#### -- Operador "BETWEEN" junto con WHERE
```sql
SELECT * FROM usuarios2
WHERE ID BETWEEN 2 and 5;
```

#### -- Actualizar datos de la tabla
```sql
UPDATE usuarios2
SET Nombre = 'Marcos', Apellido = 'Vasquez'
WHERE ID = 5;
```

#### -- Traer solo una fila de la tabla
```sql
SELECT * FROM usuarios2
WHERE ID = 5;
```

#### -- Eliminar registros de la tabla
```sql
-- (Tabla antes de borrar el registro)
SELECT * FROM usuarios2;

DELETE FROM usuarios2
WHERE ID = 8;

-- (Tabla después de borrar el registro)
SELECT * FROM usuarios2;
```

#### -- Agregar una columna a nuestra tabla
```sql
ALTER TABLE usuarios2 ADD Dirección varchar(10);
```

#### -- Renombrar una columna de una tabla
```sql
-- (Tabla antes de renombrar la columna)
SELECT * FROM usuarios2;
exec sp_rename 'usuarios2.dirección', 'Domicilio', 'COLUMN';
-- (Tabla después de renombrar la columna)
SELECT * FROM usuarios2;
```

#### -- Borrar una columna de una tabla
```sql
-- (Tabla antes de borrar la columna)
SELECT * FROM usuarios2;

ALTER TABLE usuarios2 DROP COLUMN Domicilio;

-- (Tabla después de borrar la columna)
SELECT * FROM usuarios2;
```

#### -- Cambiar el nombre a una tabla o renombrar una tabla
```sql
exec sp_rename 'usuarios2', 'usuarios';
```

#### -- Borrar una tabla
```sql
DROP TABLE usuarios;
```

---

## Diferencia entre DELETE y DROP en SQL

- **DELETE**
  - Elimina *filas específicas* de una tabla.
  - Permite usar la cláusula `WHERE` para definir condiciones.
  - No afecta la estructura de la tabla, solo elimina datos.
  - Se puede deshacer (rollback) en una transacción activa.
  - **Ejemplo:**
    ```sql
    DELETE FROM empleados WHERE id = 5;
    ```

- **DROP**
  - Elimina la *tabla completa*, incluyendo su estructura, datos e índices.
  - No permite recuperar la tabla ni los datos, a menos que se tenga una copia de seguridad.
  - No se usa `WHERE`, ya que elimina la tabla en su totalidad.
  - **Ejemplo:**
    ```sql
    DROP TABLE empleados;
    ```

### Resumen

- `DELETE` = Elimina datos específicos, manteniendo la estructura de la tabla.  
- `DROP` = Elimina la tabla entera, incluyendo su estructura y datos.