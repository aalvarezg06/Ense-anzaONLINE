---
title: "Teoría: Componentes de Acceso a Datos"
sidebar_position: 1
description: Arquitectura y patrones de diseño para la gestión profesional de la persistencia.
---

En esta unidad final integraremos todos los conocimientos previos para construir una **Capa de Datos** robusta, mantenible y desacoplada de la lógica de negocio.

## 1. El problema del Acoplamiento

Si escribimos código JDBC o Hibernate directamente dentro de un Botón de nuestra interfaz gráfica, estamos creando **Código Espagueti**. Esto hace que:
- Sea imposible cambiar de base de datos sin reescribir toda la App.
- Sea muy difícil realizar pruebas automáticas (Tests).
- El código sea difícil de leer y mantener.

## 2. El Patrón DAO (Data Access Object)

El patrón DAO propone separar la lógica de acceso a datos en clases independientes. Una clase DAO se encarga exclusivamente de las operaciones CRUD para una entidad específica.

### 2.1. Estructura Típica
1.  **Interfaz**: Define *qué* operaciones se pueden hacer (ej. `IUsuarioDAO`).
2.  **Implementación**: Define *cómo* se hacen mediante una tecnología concreta (ej. `UsuarioDAOJDBC` o `UsuarioDAOHibernate`).

## 3. Patrón Repository

A diferencia del DAO, que está muy ligado a la base de datos, el **Repository** se enfoca en tratar la persistencia como si fuera una colección de objetos en memoria. Es un nivel de abstracción superior que suele utilizar internamente uno o varios DAOs.

## 4. El Generic DAO

Para evitar repetir los mismos métodos (save, update, delete) en cada interfaz DAO, utilizamos la potencia de los **Genéricos en Java**:

```java
public interface GenericDAO<T, ID> {
    void save(T entity);
    T findById(ID id);
    List<T> findAll();
    void delete(T entity);
}
```

## 5. La Capa de Servicio (Service Layer)

Es la capa que se sitúa entre el Controlador (UI) y el Repositorio. Aquí es donde reside la **Lógica de Negocio** y donde se gestionan las **Transacciones**. Un servicio puede coordinar varios repositorios para completar una tarea compleja.

## 6. Pruebas Unitarias en Capa de Datos

Para probar nuestros DAOs sin "ensuciar" la base de datos real, utilizamos:
- **Bases de datos en memoria**: Como **H2**, que se crean al iniciar el test y se destruyen al finalizar.
- **Frameworks de Testing**: JUnit y AssertJ.

---

:::important
Una arquitectura profesional siempre busca que la Lógica de Negocio sea agnóstica a la base de datos. El negocio no debe saber si los datos vienen de un SQL, un NoSQL o un simple fichero.
:::
