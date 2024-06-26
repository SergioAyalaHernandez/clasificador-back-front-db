## Tecnologías y Herramientas Utilizadas

### Java

- **Versión de Java:** JDK 17
  - Se utiliza Java 17 como el lenguaje de programación para el desarrollo de este proyecto.

### Maven

- **Versión de Maven:** 3.9.6
  - Maven se utiliza para la gestión de dependencias y construcción del proyecto.
  - La configuración específica de Maven se encuentra en el archivo [`maven-wrapper.properties`](https://github.com/sergioayalahernandez/clasificadordatoskvecinos/tree/main/.mvn/wrapper/maven-wrapper.properties).

### Spring Boot

- **Versión de Spring Boot:** 3.2.5
  - Spring Boot se utiliza para simplificar la configuración inicial y el despliegue de la aplicación.
  - La configuración de Spring Boot se especifica en el archivo [`pom.xml`](https://github.com/sergioayalahernandez/clasificadordatoskvecinos/tree/main/pom.xml).

### Base de Datos

- **Sistema de Gestión de Base de Datos:** MySQL
- **Driver de Conexión:** `com.mysql.cj.jdbc.Driver`
- **URL de Conexión:** `jdbc:mysql://localhost:3306/euclidiana`
- **Usuario:** `root`
- **Contraseña:** (no especificada)
  - La configuración de la conexión a la base de datos se especifica en el archivo [`application.properties`](https://github.com/sergioayalahernandez/clasificadordatoskvecinos/tree/main/src/main/resources/application.properties).

### Dependencias Principales

- **Spring Boot Starter Data JPA:** Para la integración con JPA y Hibernate, facilitando el acceso a la base de datos.
- **Spring Boot Starter Web:** Para desarrollar aplicaciones web, incluyendo RESTful, utilizando Spring MVC.
- **MySQL Connector Java:** Driver de MySQL para Java, permite la conexión a bases de datos MySQL.
- **Lombok:** Biblioteca para minimizar el código repetitivo en Java, especialmente para modelos y datos.

### Herramientas de Desarrollo

- **Lombok Plugin:** Se recomienda instalar el plugin de Lombok en el IDE para evitar problemas con el código generado automáticamente.

### Ejecución del Proyecto

Para ejecutar el proyecto, se puede utilizar el wrapper de Maven incluido:

- En sistemas basados en Unix/Linux/Mac:
  ```bash
  ./mvnw spring-boot:run
En sistemas Windows:
mvnw.cmd spring-boot:run
Esto iniciará la aplicación en el puerto por defecto de Spring Boot (8080).

## Proceso de Clasificación

Para realizar la clasificación, el código sigue varios pasos importantes a través de diferentes métodos, principalmente dentro de la clase `ClasificarServiceImpl`. A continuación, se detallan los métodos y sus funciones específicas en el proceso de clasificación:

### Método `retornarClasificacion` (ClasificarServiceImpl.retornarClasificacion)

Este método es el punto de entrada para realizar la clasificación. Toma un objeto `ValorreferenciaAClasificarDto` como parámetro, que contiene los valores de referencia a clasificar. Luego, recupera todos los datos existentes de la base de datos (a través de `tablaAService.getAll()`), calcula las distancias entre los valores de referencia y cada uno de los datos existentes usando el método `formularDatos`, y finalmente clasifica los datos basándose en las distancias calculadas mediante el método `clasificarDatos`.

```java
@Override
public String retornarClasificacion(ValorreferenciaAClasificarDto valorReferencia) {
    List<TablaAEntity> tablaA = tablaAService.getAll();
    List<DatosOrdenados> listaDatos = new ArrayList<>();
    formularDatos(valorReferencia, tablaA, listaDatos);
    return clasificarDatos(valorReferencia, listaDatos);
}
```

### Método formularDatos (ClasificarServiceImpl.formularDatos)
Este método calcula la distancia euclidiana entre el punto de referencia y cada uno de los puntos en la base de datos. Crea una lista de DatosOrdenados, donde cada elemento contiene la etiqueta del dato (por ejemplo, "Altos" o "Bajos") y la distancia calculada (raíz cuadrada del resultado de la fórmula).

```java
private static void formularDatos(ValorreferenciaAClasificarDto valorReferencia, List<TablaAEntity> tablaA, List<DatosOrdenados> listaDatos) {
    // Código del método formularDatos
}
```
### Método clasificarDatos (ClasificarServiceImpl.clasificarDatos)
Este método toma la lista de DatosOrdenados y los ordena por su distancia (raíz cuadrada). Luego, selecciona los 5 datos más cercanos y cuenta cuántos de ellos tienen la etiqueta "Bajos" y cuántos tienen la etiqueta "Altos". Basándose en esta cuenta, clasifica el punto de referencia como "Bajos" o "Altos" a través del método clasificarDatoGuardarDatoDB.

```java
private String clasificarDatos(ValorreferenciaAClasificarDto valorReferencia, List<DatosOrdenados> listaDatos) {
    // Código del método clasificarDatos
}
```

### Método clasificarDatoGuardarDatoDB (ClasificarServiceImpl.clasificarDatoGuardarDatoDB)
Este método finaliza el proceso de clasificación determinando si el punto de referencia debe ser clasificado como "Bajos" o "Altos" basándose en los contadores de etiquetas de los 5 datos más cercanos. Si hay un empate, no se guarda el dato en la base de datos. De lo contrario, guarda el nuevo dato con su clasificación correspondiente en la base de datos.

```java
private String clasificarDatoGuardarDatoDB(ValorreferenciaAClasificarDto valorReferencia, int contadorBajos, int contadorAltos) {
    // Código del método clasificarDatoGuardarDatoDB
}
```

## Petición para correrlo:

```bash
curl --location 'http://localhost:8080/clasificador/data' \
--header 'Content-Type: application/json' \
--data '{
    "valorX":30,
    "valorY":61
}'
```

Copyright © 2024 Sergio Ayala