---
title: "Tutorial: Java con MongoDB"
sidebar_position: 2
description: Guía práctica para conectar Java con MongoDB y realizar operaciones CRUD.
---

En este tutorial aprenderemos a utilizar el **Java Driver** oficial para interactuar con una instancia de MongoDB.

## 1. Prerrequisitos

Añade el driver de MongoDB a tu `pom.xml`:

```xml title="pom.xml"
<dependency>
    <groupId>org.mongodb</groupId>
    <artifactId>mongodb-driver-sync</artifactId>
    <version>4.9.1</version>
</dependency>
```

## 2. Conexión y Gestión de Colecciones

A diferencia de JDBC, no necesitamos un Singleton tan complejo, ya que el `MongoClient` de MongoDB ya gestiona internamente un pool de conexiones de forma muy eficiente.

```java title="java/com/dam/ad/db/MongoConnection.java"
package com.dam.ad.db;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

public class MongoConnection {
    private static final String URI = "mongodb://localhost:27017";
    private static MongoClient mongoClient = null;

    public static MongoDatabase getDatabase(String dbName) {
        if (mongoClient == null) {
            mongoClient = MongoClients.create(URI);
        }
        return mongoClient.getDatabase(dbName);
    }
}
```

## 3. Operaciones CRUD

En MongoDB trabajamos con la clase `Document`, que es básicamente un mapa de clave-valor.

### 3.1. Inserción de Documentos
```java title="java/com/dam/ad/repository/PostRepository.java"
package com.dam.ad.repository;

import com.dam.ad.db.MongoConnection;
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import java.util.Arrays;

public class PostRepository {
    private final MongoCollection<Document> collection;

    public PostRepository() {
        this.collection = MongoConnection.getDatabase("blog_db").getCollection("posts");
    }

    public void crearPost() {
        Document post = new Document("titulo", "Mi primer post NoSQL")
                .append("autor", "Antonio")
                .append("tags", Arrays.asList("java", "mongodb", "fp"))
                .append("likes", 0);
        
        collection.insertOne(post);
    }
}
```

### 3.2. Consultas con Filtros
Para filtrar usamos la clase `Filters`.

```java title="java/com/dam/ad/repository/PostRepository.java"
import com.mongodb.client.model.Filters;

public void buscarPorAutor(String autor) {
    for (Document doc : collection.find(Filters.eq("autor", autor))) {
        System.out.println(doc.toJson());
    }
}
```

## 4. El objeto _id
Recuerda que cada documento en MongoDB tiene un campo obligatorio `_id` de tipo **ObjectId**. Si no lo proporcionas tú, MongoDB lo generará automáticamente al insertar.

---

:::tip
Para proyectos más grandes, se recomienda usar **POJOs** directamente con el driver (mediante Codecs) o frameworks como **Spring Data MongoDB**, que permiten evitar el uso manual de la clase `Document`.
:::

:::warning
No olvides cerrar el `MongoClient` cuando tu aplicación se apague para liberar los recursos de red correctamente.
:::
