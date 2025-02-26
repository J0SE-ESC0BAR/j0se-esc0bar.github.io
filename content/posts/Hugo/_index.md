---
title: "Hugo uso básico"
date: 2022-12-25T08:53:03-06:00
description: "Estos son los comandos básicos para que comiences a trabajar con Hugo."
image: "images/Hugo_logo.png"
draft: false
viewimg: true
type: "posts"
---

## Introducción

Hugo es un generador de sitios estáticos muy rápido y flexible. A continuación, verás los comandos y pasos básicos para crear, estructurar y desplegar tu sitio con Hugo.

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
2. O, en la terminal:
   ```bash
   hugo -d docs
   ```

De esta manera, en lugar de la carpeta `public`, tu sitio se generará en `docs`.

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
[CV_José_Escobar.pdf](/CV_José_Escobar.pdf)
```

[YouTube](https://www.youtube.com)  
[YouTube](https://www.youtube.com "Visita YouTube")  
[CV_José_Escobar.pdf](/CV_José_Escobar.pdf)  


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
> `{{</* youtube ID_DEL_VIDEO */>}}`

Ejemplo de video de YouTube:  
{{< youtube XRLP4K_qON8 >}}

---

## 7. Escapar Markdown y Shortcodes en Hugo

### Ignorar `{{*/ */}}` como comando

Para que Hugo ignore `{{</*  */>}}`, coloca caracteres de escape. Por ejemplo:

```markdown
{{</*/* youtube ID_DEL_VIDEO */*/>}}
```

### Ignorar `![]` como comando

Para no interpretar `![Texto]`, agrega `\`:

```markdown
\![Texto de la imagen](/ruta_de_la_imagen)
```

### Ignorar `[]` como comando

Coloca `\` antes del corchete:

```markdown
\[Texto del enlace](/ruta_del_enlace)
```

---

## 8. Saltos de Línea en Markdown

- **Salto de línea doble**: Deja una línea en blanco entre párrafos.
- **Salto de línea simple**: Añade dos espacios al final de la línea.

**Ejemplo:**

```markdown
Esta es la primera línea.{··}  
Esta es la segunda línea.

Esta es la tercera línea.
```
*(Donde `··` representan los dos espacios.)*

---

## Conclusión

Estos son los comandos y trucos básicos para que comiences a trabajar con Hugo: crear nuevos posts, ver tu sitio en local, compilar los archivos y personalizar rutas de salida. Además, aprenderás a insertar enlaces, imágenes, videos y a escapar elementos para que no sean interpretados como shortcodes. ¡Explora y personaliza tu sitio según tus necesidades!