---
title: "Guía de Inicio y Uso Básico de Hugo"
date: 2025-06-05
description: "Aprende los comandos y conceptos básicos para empezar a trabajar con Hugo, desde crear posts hasta compilar tu sitio."
image: "images/GuiaUsoBasicoHugo.png"
draft: false
tags: ["Hugo", "Guía de Inicio", "Básico"]
viewimg: true
---

## 1. Crear un Nuevo Post en Hugo

Para crear un nuevo post, abre la terminal en la ubicación de tu proyecto de Hugo y escribe:

```bash
hugo new posts/nombre_post.md
```

Esto generará un archivo Markdown dentro de `content/posts/`. Por ejemplo, si deseas crear un post dentro de un directorio específico:

```bash
hugo new posts/Dotnet/PatronesDeDisenio.md
```

Así, se creará un nuevo post en la carpeta `Dotnet`, dentro de `posts`.

### ¿Cómo crear un post dentro de subcarpetas?

Si tienes una carpeta `posts` y dentro otra llamada `Java` (que siempre debe tener un `_index.md` para que se reconozca como sección), usa:

```bash
hugo new posts/Java/nombre_post.md
```

---

## 2. Visualizar tu Sitio en Local

Para iniciar el servidor de Hugo y ver tu sitio localmente en `http://localhost:1313/`, ejecuta:

```bash
hugo server
```

---

## 3. Compilar Archivos de Hugo

Cuando quieras generar tu sitio estático en la carpeta de salida (por defecto `public`), ejecuta:

```bash
hugo
```

### Cambiar la Carpeta de Salida a "docs"

1. Edita tu archivo de configuración (`config.toml` o similar) y agrega:
   ```toml
   publishDir = "docs"
   ```
2. O, en la terminal (para una compilación única con directorio de salida diferente):
   ```bash
   hugo --destination docs
   ```

De esta manera, en lugar de la carpeta `public`, tu sitio se generará en `docs` (si lo configuras en `config.toml`) o en la carpeta que especifiques con `--destination`.

---

## 4. Insertar Enlaces en Markdown

La sintaxis de Markdown para enlaces es:

```markdown
[Texto del enlace](/ruta_del_enlace)
```

**Ejemplos:**

```markdown
[YouTube](https://www.youtube.com)
[YouTube](https://www.youtube.com "Visita YouTube")   --> (con mensaje al pasar el ratón)
```

[YouTube](https://www.youtube.com)  
[YouTube](https://www.youtube.com "Visita YouTube")  


---

## 5. Insertar Imágenes en Markdown

La sintaxis para imágenes:

```markdown
![Texto de la imagen](/ruta_de_la_imagen)
```

**Ejemplo:**

```markdown
![Logo Hugo](/images/Hugo_logo.png)
```
![Logo Hugo](/images/Hugo_logo.png)

---

## 6. Insertar Videos (YouTube) en Hugo

Hugo permite incrustar videos de YouTube mediante shortcodes:

```markdown
{{</* youtube ID_DEL_VIDEO */>}}
```

**Ejemplo:**

```markdown
{{</* youtube XRLP4K_qON8 */>}}
```

> Si quieres que Hugo ignore el shortcode, deberás escapar las llaves, por ejemplo:  
> `{{</*/* youtube ID_DEL_VIDEO */*/>}}` (escapando los delimitadores del shortcode) o usando comentarios HTML alrededor si es necesario.

Ejemplo de video de YouTube:  
{{< youtube XRLP4K_qON8 >}}

---

## 7. Escapar Markdown y Shortcodes en Hugo

### Ignorar `{{</* */>}}` como comando (Shortcodes)

Para que Hugo ignore un shortcode y muestre el texto literal `{{</* shortcode */>}}`, puedes encerrar el shortcode problemático dentro de un bloque de código Markdown, o escapar los caracteres especiales. La forma más común de mostrar un shortcode como texto es:

```markdown
`{{</* youtube ID_DEL_VIDEO */>}}`
```
O para mostrarlo como bloque:
````markdown
```
{{</* youtube ID_DEL_VIDEO */>}}
```
````
Si necesitas mostrarlo en línea y el método anterior no funciona, puedes intentar escapar los delimitadores del shortcode con una barra invertida `\` antes de `{{` y `}}`, aunque esto puede no ser interpretado correctamente por todos los analizadores de Markdown o temas de Hugo. La forma más robusta es usar comillas invertidas o bloques de código.

Para mostrar `{{</*/* youtube ID_DEL_VIDEO */*/>}}` literalmente (con los asteriscos internos), también usa un bloque de código:
````markdown
```
{{</*/* youtube ID_DEL_VIDEO */*/>}}
```
````

### Ignorar `![]` como comando (Imágenes)

Para evitar que Markdown interprete `![Texto Alt](/ruta/imagen.jpg)` como una imagen y en su lugar muestre el texto literal, puedes anteponer una barra invertida `\` al signo de exclamación:

```markdown
\![Texto de la imagen](/ruta_de_la_imagen)
```

### Ignorar `[]` como comando (Enlaces)

De manera similar, para mostrar corchetes que normalmente formarían parte de un enlace como texto literal, puedes anteponer una barra invertida `\` al primer corchete:

```markdown
\[Texto del enlace](/ruta_del_enlace)
```
