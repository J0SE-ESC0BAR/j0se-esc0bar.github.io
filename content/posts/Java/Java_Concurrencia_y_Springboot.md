---
title: "Java Concurrencia y Springboot"
date: 2022-12-24T19:46:50-06:00
description: 'En este post estan la cosas mas importantes que e aprendido de Concurrencia y Springboot, desde cosas basicas asta lo avanzado.'
image: images/java.png
draft: false
type: "sub_post"
viewimg: true
---

### Indice
- Requisitos
- funciones
- Stream
- Web Scraper
- Variables atomicas
- Concurrencia

### Requisitos del sistema
IDE
JDK 11 o posterior

### Stream
Librerias a utilizar

    import java.util.ArrayList;
    import java.util.List;
    import java.util.stream.Collectors;
Clase principal

    public class Main {
        public static void main(String[] args) {
            List<String> cities = new ArrayList<>();
            cities.add("London");
            cities.add("New York");
            cities.add("Tokyo");
            cities.add("Barcelona");
            cities.add("Buenos Aires");
            cities.add("Bogota");
            cities.add("Ciudad de Mexico");
            cities.add("Lima");

            //Recorrer una lista de forma tradicional
            for (int i = 0; i < cities.size(); i++) {
                System.out.println(cities.get(i));
            }

            // Recorrer una lista de forma abrebiada
            for (String city : cities) {
                System.out.println(city);
            }

            //Ejemplo de stream
            cities.stream().forEach(city -> System.out.println(city));

            /*Exprecion lambda 
            ######### city -> System.out.println(city) ###########
            Es tratar de crear una funcion en una sola linea
            (si solo tendara una variable no es nesesario declarar el tipo de la variable 
            y si solo tiene una linea de codigo no es nesesario poner las llaves)
            */

            //Lamar una funcion tradicional e stram (referencia de metodo)
            cities.stream().forEach(Main::printCity);
            /*en ves de ser Main.prinCity, es con doble dos puntos Main::printCity */
            cities.stream().forEach(System.out::println);

            //Tambien se puede usar directo el foreach, pero el stream aunque no este, siempre se esta usando
            cities.forEach(System.out::println);

            //Ejecutar un proceso en paralelo
            cities.stream().parallel().forEach(System.out::println);

            //Al cocatenar metodos con "." estamos usando el patron de diseño Pipeline
            //Ejemplo de pipeline con filter
            /*cities.stream().filter(city -> city.startsWith("B")).forEach(System.out::println);*/
            cities.stream()
            .filter(city -> city.startsWith("B"))
            .forEach(System.out::println);

            //Ejemplo de expresion lambda con varias lineas
            cities.stream().filter(city -> {
                boolean result = city.startsWith("B");
                return result;
            });

            //Agregemos otro filto al metodo
            cities.stream()
            .filter(city -> city.startsWith("B"))
            .filter(city -> city.contains("n"))
            .forEach(System.out::println);

            /*Existen dos tipos de metodos
            * 1.- Metodos terminales
            * foreach
            * 2.- Metodos no terminales (NUNCA VAN A SER TERMINALES)
            * filter
            * 
            */

            /*Ejemplo, no lo podmeos guardar en una lista, porque no tiene metodo terminal
            List <String> filttredCities = cities.stream()
            .filter(city -> city.startsWith("B"))
            .filter(city -> city.contains("n"));*/

            //Usando el metodo terminal collect(collectors.toList()) si se podria hacer
            List <String> filttredCities = cities.stream()
            .filter(city -> city.startsWith("B"))
            .filter(city -> city.contains("n"))
            .collect(Collectors.toList());
            //El metodo collect permite convertir un stream en una lista
        }

        //Metodo filtrar ciudad
        public static boolean filterCity(String city) {
            return city.startsWith("B");
        }

        //Metodo tradicional
        public static void printCity(String city) {
            System.out.println(city);
        }
    }





### Web Scraper





### Variables atomicas
>Las clases count y count_atomic se encuantran despues de los ejemplos

**EJEMPLO 1**

    public class App {
        public static void main(String[] args) throws Exception {
            System.out.println("Inicio");
Thread.sleep, detiene el programa por los determinados milisegundos

            Thread.sleep(2000);
            System.out.println("Fin");
            Counter counter = new Counter();
            counter.run();
            System.out.println(counter.count);
    }
**EJEMPLO 2 Uso de Hilos**

    public class App {
        public static void main(String[] args) throws Exception {
            Counter counter = new Counter();
Creacion de un hilo

            Thread first = new Thread(counter, "first");
Inicia el hilo

            first.start();	
Hacemos que el hilo principal espere 2 segundos para que el metodo alcace a terminar

            Thread.sleep(2000);
            System.out.println(counter.count);
**EJEMPLO 3 Llamar un metodo en dos hilos**

    public class App {
        public static void main(String[] args) throws Exception {
            Counter counter = new Counter();
            Thread first = new Thread(counter, "first");
            Thread second = new Thread(counter, "second");
            first.start();
            second.start();

            Thread.sleep(2000);
            System.out.println(counter.count);
    }
> El resultado no es el correcto (2000), La respuesta varia al rededor de 2000, esto ocurre por que los hilos estan haciendo uso del metodo al mismo tiempo, en el ejemplo 4 se muesta una solucion a esto.

Los hilos se ejecutan en paralelo y ejecutan el mismo metodo run(), no son dos metodos **run()** los hilos usan el mismo, no confundir con clases o objetos.

**EJEMPLO 4 Variables atomicas**

Para solucionar esto se pueden usar las clases atomicas

    public class App {
        public static void main(String[] args) throws Exception {
            Counter_atomic counter_atomic = new Counter_atomic();
            Thread primero = new Thread(counter_atomic, "primero");
            Thread segundo = new Thread(counter_atomic, "segundo");
            primero.start();
            segundo.start();

            primero.join();
            segundo.join();
            System.out.println(counter_atomic.count);
    }
### Clase Counter y Clase Counter_atomic

        public static class Counter extends Thread{
            public int count=0;
    //Metodo que suma 1 al contador hasta i < 100000000
            public void run(){
                for(int i=0; i<100000000; i++){
                    count++;
                }
            }
        }
        public static class Counter_atomic extends Thread{
    //Creamos un objeto AtomicInterger
            public AtomicInteger count= new AtomicInteger(0);
            public void run(){
                for(int i=0; i<100000000; i++){
                    count.addAndGet(1); //(agrega 1 a count)
                }
            }
        }
    }

### Explicacion del metodo join
El método **join** es una función de la clase **Thread** en Java que se utiliza para hacer que un hilo espere a que otro hilo termine su ejecución. Por ejemplo, si tenemos dos hilos de ejecución y queremos que el primer hilo espere a que el segundo hilo termine, podemos usar el método **join** para lograrlo.

### Concurrencia
**Tipos de problemas con concurrencia**
- DEADLOCK
- LIVELOCK
- STARTVISION

>DEADLOCK
