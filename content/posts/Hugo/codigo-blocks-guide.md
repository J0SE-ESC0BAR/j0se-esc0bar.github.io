---
title: "Guía de Bloques de Código Mejorados"
date: 2025-05-23T15:07:06-06:00
description: "Aprende a usar los nuevos bloques de código con header y botón de copiar en Hugo"
image: images/no-img.png
draft: false
type: post
---

# Guía de Bloques de Código Mejorados

Esta guía explica cómo usar los nuevos bloques de código con header y botón de copiar en tu sitio Hugo.

## 🚀 Características

- **Header automático** con el nombre del lenguaje
- **Botón de copiar** funcional con feedback visual
- **Resaltado de sintaxis** usando Chroma
- **Estilos modernos** con efectos hover
- **Totalmente responsive**

## 📋 Uso

### Método 1: Bloques de código markdown (Recomendado)

Simplemente usa la sintaxis normal de markdown con triple backtick:

````markdown
```javascript
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

saludar('Mundo');
```
````

### Método 2: Shortcode personalizado

Para mayor control, usa el shortcode `codeblock`:

```markdown
{{< codeblock lang="python" >}}
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
{{< /codeblock >}}
```

## 🎨 Personalización

### Variables CSS disponibles

En `static/css/variables.css` puedes personalizar:

```css
:root {
  --code-bg-color: #1e1e1e;              /* Fondo del código */
  --code-border-color: #3c3c3c;          /* Color del borde */
  --code-header-bg-color: #2d2d2d;       /* Fondo del header */
  --code-header-bg-hover-color: #404040; /* Hover del botón */
  --text-color: #e4e4e4;                 /* Color del texto */
  --highlight-color: #007acc;            /* Color de acento */
}
```

### Estilos personalizados

Los estilos están en `static/css/components.css` bajo la sección "Code Block Styles".

## 🔧 Configuración de Hugo

En tu `config.toml`, asegúrate de tener:

```toml
[markup]
  [markup.highlight]
    codeFences = true
    guessSyntax = true
    lineNumbersInTable = false
    style = "dracula"
    noClasses = false
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```

## 📁 Archivos del sistema

### Render Hook
- `layouts/_default/_markup/render-codeblock.html` - Maneja bloques markdown automáticamente

### Shortcode
- `layouts/shortcodes/codeblock.html` - Shortcode personalizado

### JavaScript
- `static/js/scripts.js` - Funcionalidad del botón copiar

### CSS
- `static/css/components.css` - Estilos de los bloques
- `static/css/variables.css` - Variables de color

## 🌐 Lenguajes soportados

El sistema detecta automáticamente el lenguaje y muestra el nombre en el header:

- **Web**: `html`, `css`, `javascript`, `typescript`, `jsx`, `tsx`
- **Backend**: `python`, `java`, `csharp`, `go`, `php`, `ruby`
- **Bases de datos**: `sql`, `postgresql`, `mysql`, `mongodb`
- **DevOps**: `bash`, `powershell`, `dockerfile`, `yaml`, `json`
- **Otros**: `markdown`, `xml`, `txt`, etc.

## 🎯 Ejemplo completo

```markdown
---
title: "Mi Post con Código"
date: 2025-01-24
---

# Ejemplo de uso

Aquí tienes un ejemplo de JavaScript:

```javascript
// Función async/await
async function obtenerDatos() {
    try {
        const response = await fetch('/api/datos');
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

Y aquí SQL:

```sql
SELECT u.nombre, u.email, p.titulo
FROM usuarios u
JOIN posts p ON u.id = p.autor_id
WHERE u.activo = true
ORDER BY p.fecha_creacion DESC;
```
```

## 🛠️ Solución de problemas

### El botón no funciona
- Verifica que `static/js/scripts.js` esté cargado
- Revisa la consola del navegador para errores

### Los estilos no se aplican
- Confirma que `static/css/components.css` esté incluido
- Verifica las variables CSS en `variables.css`

### El render hook no funciona
- Asegúrate de que `render-codeblock.html` esté en la ruta correcta
- Verifica la configuración de Hugo en `config.toml`

## 🔄 Actualización desde versión anterior

Si actualizas desde una versión anterior:

1. Respalda tu `scripts.js` actual
2. Copia los nuevos archivos de layout
3. Actualiza tu `config.toml`
4. Prueba con un post de ejemplo

¡Listo! Ahora tienes bloques de código modernos y funcionales en tu sitio Hugo. 🎉