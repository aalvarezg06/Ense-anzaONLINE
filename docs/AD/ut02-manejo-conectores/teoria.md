---
title: "Teoría: Manejo de Conectores (JDBC)"
sidebar_position: 1
description: Conceptos fundamentales sobre la conectividad de Java con bases de datos relacionales.
---

El estándar **JDBC (Java Database Connectivity)** es una API que permite a las aplicaciones Java interactuar con sistemas de gestión de bases de datos relacionales (RDBMS) de forma independiente al motor utilizado.

## 1. Arquitectura de JDBC

JDBC funciona mediante un sistema de **Drivers** (controladores). Cada fabricante de bases de datos (Oracle, MySQL, PostgreSQL) proporciona su propio driver que implementa las interfaces de JDBC.

### 1.1. Componentes Clave
- **DriverManager**: Gestiona la lista de drivers y establece la conexión mediante una URL de conexión.
- **Connection**: Representa la sesión con la base de datos.
- **Statement**: Se usa para ejecutar sentencias SQL estáticas.
- **PreparedStatement**: Versión precompilada de Statement. Es **obligatoria** para evitar ataques de Inyección SQL.
- **ResultSet**: Objeto que contiene los resultados de una consulta `SELECT`.

## 2. El flujo de trabajo típico

Para interactuar con la base de datos, seguimos siempre este orden:
1.  **Cargar el Driver**: (En versiones modernas de Java es automático si la dependencia está en el classpath).
2.  **Establecer la Conexión**: `DriverManager.getConnection(url, user, password)`.
3.  **Crear la Sentencia**: `conn.prepareStatement(sql)`.
4.  **Ejecutar la Sentencia**: `executeUpdate()` para cambios o `executeQuery()` para consultas.
5.  **Procesar Resultados**: Recorrer el `ResultSet`.
6.  **Cerrar Recursos**: Es crítico cerrar Connection, Statement y ResultSet.

## 3. Sentencias Preparadas (PreparedStatement)

Nunca debemos concatenar strings para construir SQL.

```java title="java/com/dam/ad/dao/UserDAO.java"
String sql = "SELECT * FROM usuarios WHERE id = ?";
try (PreparedStatement ps = connection.prepareStatement(sql)) {
    ps.setInt(1, 10); // Sustituye el primer '?' por el valor 10
    ResultSet rs = ps.executeQuery();
    // ...
}
```

## 4. Gestión de Transacciones

Por defecto, JDBC funciona en modo **Auto-commit** (cada sentencia se guarda al instante). Para gestionar transacciones complejas:

1.  Desactivar auto-commit: `conn.setAutoCommit(false)`.
2.  Ejecutar múltiples sentencias.
3.  Si todo va bien: `conn.commit()`.
4.  Si algo falla: `conn.rollback()`.

---

:::important
En entornos profesionales, nunca se gestionan las conexiones manualmente de esta forma; se utilizan **Pools de Conexiones** (como HikariCP) para reutilizar las conexiones y mejorar el rendimiento.
:::
