---
title: "Patrones de Diseño en .NET"
date: 2024-11-09T22:28:49-06:00
description: 'Los patrones de diseño son soluciones reutilizables para problemas comunes en el desarrollo de software. Se dividen en tres categorías principales: creacionales, estructurales y de comportamiento. A continuación se describen estos tipos con ejemplos en .NET.'
image: images/desainPatternsNet.png
draft: false
viewimg: true
---
---

### 1. Patrones Creacionales

Estos patrones se centran en cómo crear objetos de manera que el sistema sea flexible y escalable. Ayudan a abstraer y simplificar la creación de objetos en lugar de instanciarlos directamente.

- **Factory Method (Método de Fábrica)**:

  - Proporciona una interfaz para crear objetos en una clase base, permitiendo a las subclases decidir qué objeto instanciar.
  - Ejemplo: Un sistema de gestión de productos en el que diferentes tipos de productos (como físicos o digitales) se crean según la necesidad.
- **Abstract Factory (Fábrica Abstracta)**:

  - Define una interfaz para crear familias de objetos relacionados sin especificar su clase concreta.
  - Ejemplo: Una interfaz para crear temas de UI (botones, cuadros de texto) en aplicaciones multiplataforma como Windows y macOS.
- **Builder (Constructor)**:

  - Desglosa la construcción de un objeto complejo en pasos simples, permitiendo crear diferentes representaciones del mismo objeto.
  - Ejemplo: Crear un objeto `Pizza` con componentes opcionales (masa, ingredientes, salsa) según las preferencias del usuario.
- **Prototype (Prototipo)**:

  - Permite crear nuevos objetos clonando una instancia existente.
  - Ejemplo: Crear copias de un formulario de empleado con información similar, como datos básicos predefinidos.
- **Singleton (Único)**:

  - Asegura que solo exista una instancia de una clase en toda la aplicación y proporciona acceso global a ella.
  - Ejemplo: Un registro de configuración de la aplicación que debe ser accesible de manera única.

---

### 2. Patrones Estructurales

Estos patrones se centran en organizar las relaciones entre clases y objetos para formar estructuras de código grandes y flexibles.

- **Adapter (Adaptador)**:

  - Permite que dos clases incompatibles trabajen juntas al proporcionar una interfaz de adaptación.
  - Ejemplo: Integrar una biblioteca de terceros en una aplicación adaptando su interfaz para que funcione con el resto del código.
- **Bridge (Puente)**:

  - Desacopla una abstracción de su implementación, permitiendo que ambas cambien independientemente.
  - Ejemplo: Implementar una clase `Forma` (como Círculo o Rectángulo) con diferentes `Colores` (Rojo, Verde) sin depender mutuamente.
- **Composite (Composición)**:

  - Permite tratar objetos individuales y conjuntos de objetos de manera uniforme, como una estructura de árbol.
  - Ejemplo: Una jerarquía de carpetas donde tanto los archivos como las carpetas pueden contener otros elementos.
- **Decorator (Decorador)**:

  - Agrega funcionalidades adicionales a un objeto de manera dinámica sin cambiar su clase.
  - Ejemplo: Extender funcionalidades de una clase `Café` agregando ingredientes (leche, azúcar) sin cambiar el código base.
- **Facade (Fachada)**:

  - Proporciona una interfaz simple para un conjunto complejo de clases.
  - Ejemplo: Una API de banco que proporciona métodos fáciles para verificar saldo, transferir dinero, etc., sin mostrar la lógica compleja detrás.
- **Flyweight (Peso Ligero)**:

  - Optimiza el uso de memoria compartiendo datos comunes entre objetos.
  - Ejemplo: Una aplicación de texto que reutiliza instancias de letras para reducir el consumo de memoria.
- **Proxy (Representante)**:

  - Controla el acceso a un objeto, actuando como intermediario.
  - Ejemplo: Un proxy de seguridad que controla el acceso a una base de datos en función de permisos de usuario.

---

### 3. Patrones de Comportamiento

Estos patrones definen cómo los objetos interactúan entre sí y cómo distribuyen responsabilidades.

- **Chain of Responsibility (Cadena de Responsabilidad)**:

  - Permite que una solicitud pase por una cadena de objetos hasta que uno la procese.
  - Ejemplo: Un sistema de soporte técnico donde diferentes niveles de soporte manejan solicitudes escalonadas.
- **Command (Comando)**:

  - Encapsula una solicitud en un objeto, permitiendo realizar operaciones reversibles.
  - Ejemplo: Un botón "Deshacer" que revierte acciones en una aplicación.
- **Interpreter (Intérprete)**:

  - Proporciona una forma de evaluar expresiones de lenguaje en tiempo de ejecución.
  - Ejemplo: Un intérprete de reglas para procesar comandos específicos en un lenguaje de scripting interno.
- **Iterator (Iterador)**:

  - Permite acceder a los elementos de una colección secuencialmente sin exponer su estructura interna.
  - Ejemplo: Recorrer una lista de elementos en un `foreach` en .NET.
- **Mediator (Mediador)**:

  - Coordina la comunicación entre objetos sin necesidad de referencias directas entre ellos.
  - Ejemplo: Una clase de sala de chat que gestiona la comunicación entre varios usuarios sin conectarlos directamente.
- **Memento (Recuerdo)**:

  - Permite capturar y restaurar el estado de un objeto sin romper su encapsulamiento.
  - Ejemplo: Un editor de texto que permite guardar y restaurar el estado de un documento.
- **Observer (Observador)**:

  - Permite que varios objetos se suscriban y reciban notificaciones de cambios en otro objeto.
  - Ejemplo: Un sistema de notificaciones donde los usuarios son notificados cuando cambia el estado de un pedido.
- **State (Estado)**:

  - Permite que un objeto cambie su comportamiento cuando cambia su estado interno.
  - Ejemplo: Una conexión de red que tiene comportamientos diferentes cuando está conectada, desconectada o en espera.
- **Strategy (Estrategia)**:

  - Define una familia de algoritmos y permite seleccionarlos en tiempo de ejecución.
  - Ejemplo: Una clase de cálculo de impuestos que aplica diferentes estrategias según el tipo de cliente.
- **Template Method (Método Plantilla)**:

  - Define la estructura de un algoritmo, permitiendo que las subclases implementen partes del mismo.
  - Ejemplo: Una clase `Ordenar` que implementa un algoritmo de ordenamiento, dejando algunos detalles a la subclase.
- **Visitor (Visitante)**:

  - Permite agregar nuevas operaciones a estructuras de objetos sin modificar sus clases.
  - Ejemplo: Calcular el costo de diferentes partes de un carro sin modificar las clases de esas partes.

---

### Resumen

- **Patrones Creacionales**: Simplifican y organizan la creación de objetos.
- **Patrones Estructurales**: Ayudan a organizar las relaciones entre clases y objetos.
- **Patrones de Comportamiento**: Definen cómo los objetos se comunican y cooperan entre sí.
