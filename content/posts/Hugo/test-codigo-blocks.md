---
title: "Demostración de Bloques de Código Mejorados"
date: 2025-05-23T15:07:06-06:00
description: "Este post demuestra cómo usar los nuevos bloques de código con header y botón de copiar."
image: images/no-img.png
draft: false
type: post
---

# Bloques de Código Mejorados

Este post demuestra los nuevos bloques de código con header y botón de copiar.

## Usando bloques de código markdown normales

Los bloques de código con triple backtick (```) ahora automáticamente incluyen el header con el lenguaje y botón de copiar:

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

```javascript
// Función para copiar texto al portapapeles
function copyToClipboard(text) {
  return navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Texto copiado exitosamente');
    })
    .catch(err => {
      console.error('Error al copiar:', err);
    });
}

// Ejemplo de uso
copyToClipboard('¡Hola mundo!');
```

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

## Usando el shortcode personalizado

También puedes usar el shortcode `codeblock` para mayor control:

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

{{< codeblock lang="bash" >}}
# Comandos útiles de Git
git status
git add .
git commit -m "Mensaje del commit"
git push origin main

# Crear una nueva rama
git checkout -b nueva-funcionalidad
{{< /codeblock >}}

## Características

✅ **Header automático** - Muestra el lenguaje de programación  
✅ **Botón de copiar** - Copia el código al portapapeles  
✅ **Resaltado de sintaxis** - Usando Chroma/highlight.js  
✅ **Responsive** - Se adapta a diferentes pantallas  
✅ **Estilos modernos** - Con efectos hover y transiciones  

## Lenguajes soportados

- **Web**: HTML, CSS, JavaScript, TypeScript
- **Backend**: Python, Java, C#, Go, PHP, Node.js
- **Bases de datos**: SQL, PostgreSQL, MySQL
- **DevOps**: Bash, PowerShell, Docker, YAML
- **Y muchos más...**

¡Prueba copiar el código usando los botones de copiar! 🚀