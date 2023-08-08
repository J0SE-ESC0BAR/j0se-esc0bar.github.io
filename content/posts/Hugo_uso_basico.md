---
title: "Hugo uso básico"
date: 2022-12-25T08:53:03-06:00
description: 'Estos son los comandos basicos para que comiences a trabajar con hugo'
image: images/Hugo_logo.png
draft: false
---

## Crear un nuevo post en hugo
Para crear un nuevo post, abrimos la terminal en la ubicacion del proyecto de hugo y digitamos el sigiente comando:

    Hugo new posts/nombre_post.md

Con este comando estariamos creando un nuevo post dentro de la carpeta posts

**¿Como puedo crear un post dentro de subcarpetas?**
Supongamos que tienes todos tus posts dentro de una carpeta llamada "posts" y dentro de ella tienes otra carpeta llamada **"Java",** dentro de esta carpeta **siempre** debe haber un **_index.md**

Para crear un nuevo post dento de la carpeta "Java" debes crear el post con el siguiente comando

    Hugo new posts/Java/nombre_post.md


## ¿Como ver mi sitio de hugo?
Con el comando **hugo server** inicia el servidor de hugo, lo inicia de forma local, por lo general se genera en: **localhost:1313/**(nombre_de_la_pagina_web)

## Compilar archivos de hugo
Simplemente con lanzar el comando 

    hugo
desde la termnial, hugo genera los archivos nesesarios para la pagina web


## Si no quiero que se guarde en public, quiero que se guarde en una carpeta llamada "docs"

Para cambiar la carpeta de destino de la página generada por Hugo, puedes modificar la opción "publishDir" en la configuración de tu proyecto de Hugo. Esta opción determina la ruta de la carpeta en la que se guardarán los archivos generados por Hugo.

Por ejemplo, si quieres que tus páginas se guarden en una carpeta llamada "docs", puedes agregar la siguiente línea a tu archivo de configuración **"config.toml"** o **"config.yaml"**:

    publishDir = "docs"

Luego, cuando ejecutes el comando "hugo" para generar tu página, se guardará en la carpeta "docs" en lugar de en la carpeta "public".

Tambien puedes ejecutal el comando "hugo" mas **-d** para indicarle el directorio

    hugo -d docs

## ¿Como puedo insertar enlaces en markdown para Hugo?
Para insertar enlaces en markdown para hugo, debes usar la siguiente sintaxis:

    [Texto del enlace](/ruta_del_enlace)
Ejemplo: 

\[Youtube]\(https://www.youtube.com)  
[Youtube](https://www.youtube.com)

\[CV_José_Escobar.pdf](../../../static/CV_José_Escobar.pdf)  
[CV_José_Escobar.pdf](../../../static/CV_José_Escobar.pdf)

\[Youtube]\(https://www.youtube.com "Visita YouTube")   
[Youtube](https://www.youtube.com "Visita YouTube")  
(Cuando coloques el cursor sobre el enlace, verás el mensaje "Visita YouTube".)

\[CV_José_Escobar.pdf]\(/CV_José_Escobar.pdf)  
[CV_José_Escobar.pdf](/CV_José_Escobar.pdf)

## ¿Como puedo insertar imagenes en markdown para Hugo?
Para insertar imagenes en markdown para hugo, debes usar la siguiente sintaxis:

    ![Texto de la imagen](/ruta_de_la_imagen)
Ejemplo:

\!\[Texto de la imagen](/ruta_de_la_imagen)

## ¿Como puedo insertar videos en markdown para Hugo?
Para insertar videos en markdown para hugo, debes usar la siguiente sintaxis:

    {{</* youtube id_del_video */>}}
Ejemplo:

{{</* youtube XRLP4K_qON8 */>}}



## ¿Como hacer que Hugo ignore {{</* */>}} como comando?
Para que Hugo ignore {{</*  */>}} como comando, debes usar la siguiente sintaxis:

se utiliza el caracter de escape /* antes de {{ y */ despues de }}

    {{</*/*  (TEXTO)  */*/>}}
Ejemplo:   

    {{</* youtube id_del_video */>}}


## ¿Como hacer que Hugo ignore ![] como comando?
Para que Hugo ignore \!\[Texto](Texto) como comando, debes usar la siguiente sintaxis: 
se utiliza el caracter de escape \ antes de ! y [

\!\[Texto de la imagen](/ruta_de_la_imagen)

Ejemplo:

    \!\[Texto de la imagen](/ruta_de_la_imagen)

## Como hacer que Hugo ignore [] como comando?
Para que Hugo ignore \[Texto](Texto) como comando, debes usar la siguiente sintaxis:<br>se utiliza el caracter de escape \ antes de [

\[Texto del enlace](/ruta_del_enlace)

Ejemplo:

    \[Texto del enlace](/ruta_del_enlace)

## ¿Como puedo hacer un salto de linea en markdown para Hugo?
Doble retorno de carro: Después de tu texto, presiona la tecla de retorno dos veces para comenzar una nueva línea.  
Ejemplo:
    
    Esta es otra primera línea.

    Esta es otra segunda línea.

Esta es otra primera línea.

Esta es otra segunda línea.

Para hacer un salto de linea simple solo debes colocar dos espacios al final de la linea de texto  
Ejemplo:

    Esta es la primera línea.--(dos espacios aquí)
    Esta es la segunda línea.

Esta es la primera línea.  
Esta es la segunda línea.