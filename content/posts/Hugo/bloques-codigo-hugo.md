---
title: "Dominando los Bloques de Código en Hugo: Resaltado y Funciones Avanzadas"
date: 2025-06-05
description: "Una guía completa para utilizar y personalizar el resaltado de sintaxis y los bloques de código en Hugo, incluyendo ejemplos y configuración."
image: "images/HugoBloquesCodigo.png"
draft: false
tags: ["Hugo", "Bloques de Código", "Syntax Highlighting", "Chroma", "Desarrollo Web"]
viewimg: true
---

# 🎨 Dominando los Bloques de Código en Hugo: Resaltado y Funciones Avanzadas

Esta guía completa te mostrará cómo utilizar y personalizar el resaltado de sintaxis (syntax highlighting) y los bloques de código mejorados en tu sitio Hugo, aprovechando el poder de Chroma.

## 🚀 Características Implementadas

Este sitio cuenta con un sistema de bloques de código robusto que incluye:

- ✅ **Syntax highlighting nativo de Hugo** con Chroma.
- ✅ **Soporte para más de 250 lenguajes** de programación.
- ✅ **Botón de "Copiar"** en cada bloque de código para facilitar la reutilización.
- ✅ **Header automático** que muestra el lenguaje del bloque de código.
- ✅ **Configuración flexible** mediante atributos en los bloques de código (ej. números de línea, resaltado de líneas específicas).
- ✅ **Tema Dracula** optimizado para una excelente legibilidad.
- ✅ **Diseño responsive** que se adapta a cualquier tamaño de pantalla.
- ✅ **Estilos modernos** con efectos hover y transiciones suaves.

## 📋 Uso de Bloques de Código

Tienes dos maneras principales de insertar bloques de código en tus posts:

### 1. Bloques de Código Markdown (Recomendado)

La forma más sencilla es utilizar la sintaxis estándar de Markdown con triples comillas invertidas (```), especificando el lenguaje:

````markdown
```javascript
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
saludar('Mundo');
```
````

Esto generará automáticamente un bloque de código con el header indicando "javascript" y un botón para copiar el contenido.

**Atributos Adicionales:**
Puedes añadir opciones directamente después del lenguaje, entre llaves `{}`:

- `linenos=true`: Muestra números de línea. También puedes usar `linenos=table` o `linenos=inline`.
- `hl_lines=["3", "5-7"]`: Resalta líneas específicas (línea 3, y el rango de la 5 a la 7).
- `lineNoStart=10`: Comienza la numeración de líneas desde 10.
- `style=nombre_estilo_chroma`: Aplica un estilo de Chroma específico (ej. `vs`, `github`).

Ejemplo con atributos:
````markdown
```python {linenos=true, hl_lines=[2,"4-6"]}
def create_mermaid_diagram():
    diagram_type = "flowchart TD"
    nodes = ["A[Start]", "B[Process]", "C[End]"]
    connections = [
        "A --> B",
        "B --> C"
    ]
    return f"{diagram_type}\\n" + "\\n".join(nodes + connections)
```
````

### 2. Shortcode Personalizado `codeblock`

Para un control más explícito o si prefieres usar shortcodes, puedes utilizar `{{</* codeblock */>}}`:

```markdown
{{</* codeblock lang="go" */>}}
package main

import "fmt"

func main() {
    fmt.Println("¡Hola desde Go!")
}
{{</* /codeblock */>}}
```
Este shortcode también soporta atributos como `linenos`, `hl_lines`, etc., pasados como parámetros del shortcode. (Nota: la implementación actual se enfoca en el render hook de Markdown, verificar si el shortcode `codeblock.html` los procesa de igual manera o si necesita ajustes).

## 📝 Ejemplos por Lenguaje

Aquí tienes una variedad de ejemplos para demostrar las capacidades del resaltado:

### JavaScript
Con números de línea y resaltado:
```javascript {linenos=true, hl_lines=[3,7]}
// Función para validar email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const userEmail = "usuario@ejemplo.com";
console.log(validateEmail(userEmail)); // true
```

Función para copiar al portapapeles:
```javascript {lineNos=true}
function copyToClipboard(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    if (codeBlock) {
        const textToCopy = codeBlock.textContent || codeBlock.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            console.log('Código copiado exitosamente');
        });
    }
}
```

### Python
Con números de línea en formato tabla y resaltado de líneas:
```python {linenos=table, hl_lines=[5,"8-10"]}
import requests
from datetime import datetime

class ApiClient:
    def __init__(self, base_url):
        self.base_url = base_url

    def get_data(self, endpoint):
        response = requests.get(f"{self.base_url}/{endpoint}")
        return response.json()

# Uso del cliente
client = ApiClient("https://api.ejemplo.com")
data = client.get_data("users")
print(data)
```

Cálculo de Fibonacci:
```python
def fibonacci(n):
    """Calcula el n-ésimo número de Fibonacci"""
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Ejemplo de uso
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

### SQL
Con números de línea en formato inline:
```sql {linenos=inline}
-- Crear tabla de usuarios
CREATE TABLE Usuario (
    ID_Usuario INT IDENTITY(1,1) PRIMARY KEY,
    NombreCompleto VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Contraseña VARCHAR(255) NOT NULL, -- Considerar hashing
    Administrador BIT DEFAULT 0,
    FechaCreacion DATETIME DEFAULT GETDATE()
);

-- Insertar datos de ejemplo
INSERT INTO Usuario (NombreCompleto, Email, Contraseña, Administrador)
VALUES 
    ('José Escobar', 'jose@ejemplo.com', 'hashedpassword123', 1),
    ('María García', 'maria@ejemplo.com', 'hashedpassword456', 0);
```
Otro ejemplo de SQL:
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

### HTML
Con resaltado de líneas y numeración comenzando en 10:
```html {hl_lines=[3,"7-9"], lineNoStart=10}
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página</title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <header>
        <h1>Título Principal</h1>
    </header>
    <main class="container">
        <p>Contenido de la página.</p>
    </main>
</body>
</html>
```

### CSS
```css
/* Estilos para botones modernos */
.btn-modern {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 8px;
    color: white;
    padding: 12px 24px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-modern:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}
```

### Go
```go
package main

import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "¡Hola desde el servidor Go!")
    })

    fmt.Println("Servidor escuchando en el puerto 8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
```
Ejemplo de shortcode (si se usa):
{{< codeblock lang="go" >}}
package main

import "fmt"

func main() {
    fmt.Println("¡Hola desde Go!")
    
    // Ejemplo de slice
    numbers := []int{1, 2, 3, 4, 5}
    for i, num := range numbers {
        fmt.Printf("Índice %d: %d\n", i, num)
    }
}
{{< /codeblock >}}


### Bash
```bash
# Comandos útiles de Git
git status
git add .
git commit -m "Mensaje del commit"
git push origin main

# Crear una nueva rama y moverse a ella
git checkout -b nueva-funcionalidad

# Listar archivos en el directorio actual
ls -la
```

### JSON
Con resaltado de líneas:
```json {hl_lines=[2,6]}
{
  "name": "mi-proyecto-hugo",
  "version": "1.0.0",
  "description": "Un proyecto de ejemplo con Hugo",
  "scripts": {
    "start": "hugo server",
    "build": "hugo --minify"
  },
  "author": "Tu Nombre"
}
```
Otro ejemplo JSON:
```json
{
  "test": "copy functionality",
  "status": "active",
  "features": [
    "syntax highlighting",
    "copy button",
    "mermaid support"
  ]
}
```

### YAML
```yaml
# Configuración de Hugo
baseURL: "https://jaem.dev/"
languageCode: "es"
title: "JAEM - Blog de José Escobar"
theme: "hugo-jaem-theme"

markup:
  goldmark:
    renderer:
      unsafe: true # Necesario para que funcionen algunos render hooks
  highlight:
    noClasses: false # true para usar estilos en línea, false para usar clases CSS
    codeFences: true
    guessSyntax: true
    lineNos: false # Puedes activarlo globalmente aquí
    style: "dracula" # Estilo de Chroma por defecto

params:
  name: "José Escobar"
  description: "Blog sobre desarrollo, tecnología y más."
```

## 🔧 Configuración de Hugo

Para asegurar que el resaltado de sintaxis funcione correctamente, verifica tu archivo de configuración de Hugo (`config.toml` o `hugo.yaml`).

**Para `config.toml`:**
```toml
[markup]
  [markup.highlight]
    noClasses = false # Importante para usar CSS externo para el tema
    codeFences = true
    guessSyntax = true
    lineNos = false # Opciones: false, true, "table", "inline"
    # style = "dracula" # Puedes definir un estilo global aquí
  [markup.goldmark.renderer]
    unsafe = true # Necesario para algunos render hooks HTML
```

**Para `hugo.yaml`:**
```yaml
markup:
  highlight:
    noClasses: false
    codeFences: true
    guessSyntax: true
    lineNos: false
    # style: dracula
  goldmark:
    renderer:
      unsafe: true
```

## 🎨 Personalización

### Variables CSS

Puedes personalizar algunos aspectos visuales de los bloques de código a través de variables CSS definidas en tu archivo de estilos (ej. `assets/scss/_variables.scss` o `static/css/variables.css`):

```css
/* Ejemplo de variables (ajusta según tu estructura) */
:root {
  --code-bg-color: #282a36;              /* Fondo del código (Dracula) */
  --code-text-color: #f8f8f2;            /* Color del texto (Dracula) */
  --code-header-bg-color: #1e1f29;       /* Fondo del header del bloque */
  --code-header-text-color: #bd93f9;     /* Color del texto del header (Dracula Purple) */
  --code-border-color: #44475a;          /* Color del borde (Dracula Selection) */
  --button-copy-color: #8be9fd;          /* Color del icono copiar (Dracula Cyan) */
  --button-copy-hover-color: #50fa7b;    /* Color al pasar el ratón (Dracula Green) */
}
```
(Los nombres de las variables y su ubicación pueden variar según el tema).

### Estilos CSS Personalizados

Los estilos específicos para los bloques de código, el header y el botón de copiar se encuentran generalmente en un archivo CSS dedicado (ej. `static/css/code-blocks.css` o `assets/scss/components/_code-blocks.scss`). Puedes modificar estos estilos para adaptarlos a tus preferencias.

## 📁 Archivos Clave del Sistema (Ejemplo de Implementación)

Una implementación típica de estas características involucra:

- **Render Hook**: `layouts/_default/_markup/render-codeblock.html`. Este archivo intercepta los bloques de código Markdown (```) y los envuelve con el HTML necesario para el header, el botón de copiar y aplica las clases para el estilo.
- **Shortcode (Opcional)**: `layouts/shortcodes/codeblock.html`. Si se ofrece un shortcode personalizado.
- **JavaScript**: Un archivo JS (ej. `assets/js/scripts.js` o `static/js/main.js`) que contiene la lógica para:
    - Funcionalidad del botón de copiar (copiar al portapapeles y cambiar el ícono/texto del botón).
- **CSS**:
    - Estilos para los bloques de código, header, botón (`code-blocks.css`).
    - Tema de resaltado de sintaxis de Chroma (ej. `chroma-syntax.css`, generado por Hugo o personalizado).
    - Variables de color (`variables.css`).

## 🌐 Lenguajes Soportados

Chroma, el resaltador de sintaxis de Hugo, soporta una vasta cantidad de lenguajes. Algunos de los más comunes incluyen:

- **Web**: `html`, `css`, `javascript`, `typescript`, `jsx`, `tsx`, `json`, `xml`, `svg`
- **Backend**: `python`, `java`, `csharp` (o `c#`), `go`, `php`, `ruby`, `rust`, `kotlin`, `scala`, `swift`
- **Bases de datos**: `sql`, `plsql`, `mysql`, `postgresql`, `sqlite`
- **DevOps & Shell**: `bash` (o `sh`), `powershell` (o `ps1`), `dockerfile` (o `docker`), `yaml`, `toml`, `ini`
- **Otros**: `markdown` (o `md`), `c`, `cpp` (o `c++`), `objective-c`, `perl`, `lua`, `r`, `matlab`, `latex` (o `tex`)

Si un lenguaje no es reconocido o el resaltado no es el esperado, asegúrate de estar usando el alias correcto para ese lenguaje.

## 🛠️ Solución de Problemas

- **El botón de copiar no funciona**:
    - Verifica que el script de JavaScript que maneja la copia esté cargándose correctamente en la página.
    - Revisa la consola del navegador en busca de errores de JavaScript.
    - Asegúrate de que el HTML del bloque de código y el botón tengan las clases o IDs que el script espera.
- **El resaltado de sintaxis no aparece o es incorrecto**:
    - Confirma que `noClasses` esté en `false` en tu configuración de Hugo si usas una hoja de estilos CSS externa para Chroma.
    - Verifica que el lenguaje especificado en el bloque de código (ej. ```javascript) sea uno soportado por Chroma y que estés usando el alias correcto.
    - Asegúrate de que los estilos CSS para Chroma se estén cargando. Hugo puede generar esto automáticamente o puedes proporcionar tu propio archivo CSS de tema Chroma.
- **Los estilos no se ven como se espera**:
    - Inspecciona los elementos con las herramientas de desarrollo del navegador para ver qué estilos CSS se están aplicando y si hay conflictos.
    - Limpia la caché de tu navegador.

¡Con esta guía, estás listo para crear posts con bloques de código impresionantes, funcionales y fáciles de usar en tu sitio Hugo! 🎉
