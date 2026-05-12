---
title: "Teoría: Herramientas de Mapeo (ORM)"
sidebar_position: 1
description: Introducción al desarrollo con Hibernate y el estándar JPA para la persistencia de objetos.
---

El **Mapeo Objeto-Relacional (ORM)** es una técnica de programación que permite convertir datos entre sistemas de tipos incompatibles: el mundo de los objetos (Java) y el mundo relacional (Bases de Datos).

## 1. JPA vs Hibernate

Es común confundir estos términos, pero son cosas distintas:
- **JPA (Jakarta Persistence API)**: Es la especificación (el "qué"). Define las anotaciones e interfaces estándar que deben seguir todos los ORM en Java.
- **Hibernate**: Es la implementación (el "cómo"). Es el framework real que realiza el trabajo sucio de generar el SQL y gestionar las conexiones.

## 2. Configuración y Sesiones

Hibernate se basa en dos conceptos fundamentales para gestionar la persistencia:

1.  **SessionFactory**: Se crea una sola vez al inicio de la aplicación. Lee la configuración y "conoce" todas las entidades.
2.  **Session**: Se crea cada vez que necesitamos interactuar con la BD. Representa una unidad de trabajo y debe ser corta en el tiempo.

## 3. Mapeo de Entidades con Anotaciones

Para que Hibernate sepa cómo guardar un objeto, debemos "marcarlo" con anotaciones estándar de JPA:

```java title="java/com/dam/ad/model/Usuario.java"
@Entity // Indica que esta clase se guardará en una tabla
@Table(name = "users") // Nombre opcional de la tabla en la BD
public class Usuario {
    @Id // Marca el atributo como Clave Primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incremental
    private Long id;

    @Column(name = "full_name", nullable = false)
    private String nombre;
}
```

## 4. Ciclo de Vida de las Entidades

Una entidad puede estar en uno de estos 4 estados:
1.  **Transient**: Objeto creado con `new`, pero Hibernate aún no lo conoce.
2.  **Persistent (Managed)**: El objeto está vinculado a una sesión activa. Cualquier cambio en sus atributos se guardará automáticamente en la BD al hacer commit (Dirty Checking).
3.  **Detached**: La sesión se cerró. Los cambios en el objeto ya no se sincronizan automáticamente.
4.  **Removed**: El objeto está marcado para ser borrado de la base de datos.

## 5. Consultas: HQL y JPQL

En lugar de escribir SQL puro apuntando a tablas, escribimos **HQL** apuntando a clases Java:

```java
// SQL: SELECT * FROM users WHERE full_name = 'Pepe'
// HQL:
String hql = "FROM Usuario WHERE nombre = :n";
Query query = session.createQuery(hql, Usuario.class);
query.setParameter("n", "Pepe");
List<Usuario> lista = query.getResultList();
```

---

:::tip
El uso de un ORM reduce drásticamente la cantidad de código repetitivo (Boilerplate) y permite que tu aplicación sea más portable entre diferentes motores de base de datos.
:::
