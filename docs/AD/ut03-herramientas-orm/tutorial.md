---
title: "Tutorial: Primeros Pasos con Hibernate"
sidebar_position: 2
description: Guía práctica para configurar Hibernate y realizar operaciones CRUD básicas.
---

En este tutorial configuraremos Hibernate desde cero para gestionar una entidad `Tarea` en una base de datos relacional.

## 1. Prerrequisitos

Añade las dependencias de Hibernate y el conector de base de datos a tu `pom.xml`:

```xml title="pom.xml"
<dependency>
    <groupId>org.hibernate.orm</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>6.2.7.Final</version>
</dependency>
<dependency>
    <groupId>org.mariadb.jdbc</groupId>
    <artifactId>mariadb-java-client</artifactId>
    <version>3.1.2</version>
</dependency>
```

## 2. Configuración de Hibernate

Crea el archivo `hibernate.cfg.xml` en la carpeta `src/main/resources`.

```xml title="src/main/resources/hibernate.cfg.xml"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">
<hibernate-configuration>
    <session-factory>
        <!-- Configuración de Conexión -->
        <property name="connection.driver_class">org.mariadb.jdbc.Driver</property>
        <property name="connection.url">jdbc:mariadb://localhost:3306/tareas_db</property>
        <property name="connection.username">root</property>
        <property name="connection.password">password</property>

        <!-- Dialecto para que Hibernate hable MariaDB -->
        <property name="dialect">org.hibernate.dialect.MariaDBDialect</property>
        
        <!-- Auto-creación de tablas (Solo para desarrollo) -->
        <property name="hbm2ddl.auto">update</property>
        <property name="show_sql">true</property>

        <!-- Registrar Entidades -->
        <mapping class="com.dam.ad.model.Tarea"/>
    </session-factory>
</hibernate-configuration>
```

## 3. Implementación

### 3.1. Clase de Utilidad (HibernateUtil)
Gestiona la creación de la `SessionFactory` de forma eficiente.

```java title="java/com/dam/ad/util/HibernateUtil.java"
package com.dam.ad.util;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
    private static final SessionFactory sessionFactory = buildSessionFactory();

    private static SessionFactory buildSessionFactory() {
        try {
            return new Configuration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            throw new ExceptionInInitializerError(ex);
        }
    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}
```

### 3.2. Operación de Inserción
Observa cómo ya no escribimos SQL, solo trabajamos con el objeto.

```java title="java/com/dam/ad/repository/TareaRepository.java"
package com.dam.ad.repository;

import com.dam.ad.model.Tarea;
import com.dam.ad.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class TareaRepository {
    public void save(Tarea tarea) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.persist(tarea); // Guarda el objeto
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }
}
```

---

:::warning
La propiedad `hbm2ddl.auto = update` es muy útil en fase de desarrollo para que Hibernate cree las tablas por ti, pero **nunca** debe usarse en entornos de producción.
:::

:::tip
Para mejorar este ejemplo, intenta implementar el patrón **Generic DAO** para que tu repositorio sirva para cualquier entidad sin repetir código.
:::
