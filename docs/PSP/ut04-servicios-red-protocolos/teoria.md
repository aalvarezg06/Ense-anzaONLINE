---
title: "Teoría: Servicios en Red"
sidebar_position: 1
description: Estudio de protocolos de nivel de aplicación y arquitectura de servicios web RESTful.
---

Mientras que los Sockets trabajan a nivel de transporte (TCP/UDP), los **Servicios en Red** operan en el nivel de **Aplicación**. Son protocolos estandarizados que permiten la interoperabilidad entre sistemas heterogéneos.

## 1. Protocolos de Aplicación Comunes

- **HTTP/HTTPS**: El protocolo de la web. Base de los servicios REST.
- **FTP/SFTP**: Protocolos especializados en la transferencia de ficheros.
- **SMTP/POP3/IMAP**: Protocolos para el envío y recepción de correo electrónico.

## 2. Arquitectura REST (Representational State Transfer)

REST no es un protocolo, sino un estilo de arquitectura para sistemas distribuidos. Se basa en el uso nativo de HTTP.

### 2.1. Los Verbos HTTP
- **GET**: Recuperar un recurso.
- **POST**: Crear un nuevo recurso.
- **PUT**: Actualizar un recurso existente.
- **DELETE**: Eliminar un recurso.

### 2.2. Códigos de Estado
- **200 OK**: Petición exitosa.
- **201 Created**: Recurso creado con éxito.
- **400 Bad Request**: Error en la petición del cliente.
- **404 Not Found**: El recurso no existe.
- **500 Internal Server Error**: Error en el servidor.

## 3. Intercambio de Datos: JSON

**JSON (JavaScript Object Notation)** se ha convertido en el estándar de facto para los servicios web debido a su ligereza y facilidad de lectura tanto para humanos como para máquinas, desplazando casi totalmente al XML en este ámbito.

## 4. HttpClient de Java (Moderno)

Desde Java 11, contamos con una API moderna y fluida para realizar peticiones HTTP de forma síncrona o asíncrona.

```java title="src/main/java/com/dam/psp/Peticion.java"
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("https://api.ejemplo.com/datos"))
        .GET()
        .build();

// Envío asíncrono
client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
        .thenApply(HttpResponse::body)
        .thenAccept(System.out::println);
```

---

:::tip
Cuando desarrolles servicios REST, asegúrate de que tus URIs sean descriptivas y utilicen sustantivos en lugar de verbos (ej. `/usuarios` en lugar de `/getUsuarios`).
:::

:::info
Para la gestión de otros protocolos como FTP o SMTP, se suelen utilizar librerías externas de confianza como **Apache Commons Net**.
:::
