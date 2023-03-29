---
title: "Hugo uso básico"
date: 2022-12-25T08:53:03-06:00
description: 'Estos son los comandos basicos para que comiences a trabajar con hugo'
image: images/hugo-logo.png
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