---
title: "Diferencia entre listas y arreglos"
date: 2022-12-25T21:28:43-06:00
description: 'Auque paresca simple, no lo es para todos, ya que sus funciones son parecidas'
image: images/java.png
draft: false
viewimg: true
type: "post"
---
Cual es la diferencia entre 

```
List<String> cities = new ArrayList<>(); 
```

y 


```
String[] cities = {};
```


La principal diferencia entre List<String> cities = new ArrayList<>(); y String[] cities = {}; 
es **el tipo de objeto que están creando.**


### List<String> cities = new ArrayList<>(); 

crea una lista de cadenas utilizando la clase ArrayList de Java. La clase ArrayList es una clase de la biblioteca de Java que proporciona una implementación de la interfaz List. La interfaz List es una de las interfaces más comunes utilizadas en Java para trabajar con colecciones de datos. La clase ArrayList es una implementación de la interfaz List que utiliza un arreglo interno para almacenar los elementos de la lista.

### String[] cities = {}; 

crea un arreglo de cadenas. Los arreglos son estructuras de datos que proporcionan una forma de almacenar y acceder a un conjunto de valores del mismo tipo de forma secuencial. Los arreglos son más rígidos y tienen un tamaño fijo que no puede ser modificado una vez que se ha creado el arreglo. Los arreglos son más eficientes en términos de tiempo de acceso y espacio de almacenamiento que las listas, pero son menos flexibles y menos fáciles de trabajar que las listas.

En resumen, si deseas trabajar con una colección de elementos que puedas modificar fácilmente y que tenga un tamaño dinámico, deberías utilizar una lista. Si deseas trabajar con un conjunto fijo de elementos y necesitas un rendimiento más rápido, deberías utilizar un arreglo.