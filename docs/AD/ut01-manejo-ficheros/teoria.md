---
title: "Teoría: Manejo de Ficheros"
sidebar_position: 1
description: Guía detallada sobre la gestión de persistencia en sistemas de ficheros con Java.
---

En el desarrollo de aplicaciones, la persistencia es la capacidad de los datos para sobrevivir a la ejecución del programa. El sistema más básico de persistencia es el **Sistema de Ficheros**.

## 1. Gestión de Ficheros y Directorios

En Java, tenemos dos formas de interactuar con el sistema de archivos: la API clásica (`java.io.File`) y la API moderna (`java.nio.file`), que es la recomendada actualmente.

### 1.1. La interfaz Path y la clase Files
A diferencia de `File`, `Path` representa una ruta lógica, y `Files` contiene métodos estáticos para realizar operaciones físicas.

```java title="java/com/dam/ad/PersistenciaApp.java"
Path ruta = Paths.get("datos/usuarios.txt");

// Comprobaciones seguras
if (Files.exists(ruta)) {
    System.out.println("El fichero existe");
} else {
    Files.createFile(ruta); // Crea el fichero físicamente
}
```

## 2. Flujos de Datos (Streams)

Java utiliza el concepto de **Stream** (flujo) para leer y escribir datos. Los flujos se dividen según el tipo de dato que transportan:

### 2.1. Flujos de Bytes (Binarios)
Se utilizan para cualquier tipo de archivo (imágenes, ejecutables, etc.). Las clases base son `InputStream` y `OutputStream`.

- **Uso común**: `FileInputStream` / `FileOutputStream`.
- **Buffer**: Para mejorar el rendimiento, envolvemos estos flujos en `BufferedInputStream`.

### 2.2. Flujos de Caracteres (Texto)
Optimizados para texto plano, gestionando automáticamente la codificación (UTF-8). Las clases base son `Reader` y `Writer`.

:::tip
Usa siempre **try-with-resources** para asegurar que los flujos se cierren automáticamente, incluso si ocurre una excepción.
:::

```java title="java/com/dam/ad/ManejadorTexto.java"
try (BufferedReader br = Files.newBufferedReader(ruta)) {
    String linea;
    while ((linea = br.readLine()) != null) {
        System.out.println(linea);
    }
} catch (IOException e) {
    logger.error("Error leyendo el fichero: " + e.getMessage());
}
```

## 3. Serialización de Objetos

La serialización permite convertir un objeto Java en una secuencia de bytes para almacenarlo en un fichero o enviarlo por red.

- **Requisito**: La clase debe implementar la interfaz `Serializable`.
- **transient**: Atributos marcados con esta palabra clave NO se serializarán (ej. contraseñas o conexiones).

## 4. Persistencia en XML y JSON

Aunque son ficheros de texto, requieren un tratamiento especial debido a su estructura jerárquica.

1.  **DOM (Document Object Model)**: Carga todo el XML en memoria en forma de árbol. Ideal para ficheros pequeños que requieren modificaciones.
2.  **SAX (Simple API for XML)**: Lee el fichero secuencialmente (por eventos). Ideal para ficheros enormes (GBs) ya que apenas consume memoria.

---

:::info
En el siguiente apartado (Tutorial) pondremos esto en práctica creando un sistema de gestión de alumnos con persistencia binaria y serialización.
:::
