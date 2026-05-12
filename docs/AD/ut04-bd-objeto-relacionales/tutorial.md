---
title: "Tutorial: Persistencia con db4o"
sidebar_position: 2
description: Guía práctica para utilizar una base de datos orientada a objetos nativa.
---

En este tutorial utilizaremos **db4o**, una base de datos orientada a objetos que permite guardar objetos Java directamente, sin tablas, sin SQL y sin configuraciones complejas.

## 1. Prerrequisitos

Para usar db4o, necesitas añadir su archivo JAR al proyecto. Como no suele estar en los repositorios centrales de Maven actuales, se suele añadir como una librería local.

## 2. Conceptos de db4o

A diferencia de JDBC o Hibernate:
- No hay `@Entity`. Cualquier objeto es persistible por defecto.
- No hay `INSERT` o `UPDATE`. Usas `store()`.
- No hay `SELECT`. Usas **QBE** (Query By Example) o **Native Queries**.

## 3. Implementación Paso a Paso

### 3.1. El Modelo de Datos
Simplemente una clase Java normal (POJO).

```java title="java/com/dam/ad/model/Vehiculo.java"
package com.dam.ad.model;

public class Vehiculo {
    private String matricula;
    private String modelo;
    private int potencia;

    public Vehiculo(String matricula, String modelo, int potencia) {
        this.matricula = matricula;
        this.modelo = modelo;
        this.potencia = potencia;
    }
    
    // Getters, Setters y toString()
}
```

### 3.2. Operaciones Básicas
Observa la sencillez extrema de la persistencia transparente.

```java title="java/com/dam/ad/dao/VehiculoDAO.java"
package com.dam.ad.dao;

import com.db4o.Db4oEmbedded;
import com.db4o.ObjectContainer;
import com.db4o.ObjectSet;
import com.dam.ad.model.Vehiculo;

public class VehiculoDAO {
    private final String DB_PATH = "vehiculos.db4o";

    public void guardarVehiculo(Vehiculo v) {
        // Abrir la base de datos (se crea si no existe)
        ObjectContainer db = Db4oEmbedded.openFile(Db4oEmbedded.newConfiguration(), DB_PATH);
        try {
            db.store(v); // Guarda el objeto tal cual
        } finally {
            db.close();
        }
    }

    public void buscarPorModelo(String modelo) {
        ObjectContainer db = Db4oEmbedded.openFile(Db4oEmbedded.newConfiguration(), DB_PATH);
        try {
            Vehiculo ejemplo = new Vehiculo(null, modelo, 0);
            ObjectSet<Vehiculo> resultado = db.queryByExample(ejemplo);
            
            while (resultado.hasNext()) {
                System.out.println(resultado.next());
            }
        } finally {
            db.close();
        }
    }
}
```

## 4. Consulta por Ejemplo (QBE)

La técnica **QBE** consiste en crear un objeto "ejemplo" con los campos que quieres buscar rellenos y los demás en `null`. db4o buscará todos los objetos en disco que coincidan con los campos no nulos de tu ejemplo.

---

:::warning
db4o es un proyecto que ya no tiene soporte comercial activo, pero sigue siendo la mejor herramienta pedagógica para entender el paradigma de las bases de datos orientadas a objetos puras.
:::

:::tip
Investiga sobre las **Native Queries** de db4o; permiten hacer búsquedas utilizando código Java puro dentro de un predicado, lo que ofrece un control total y tipado fuerte en las consultas.
:::
