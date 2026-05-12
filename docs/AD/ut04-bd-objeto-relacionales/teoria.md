---
title: "Teoría: BD Objeto-Relacionales y Orientadas a Objetos"
sidebar_position: 1
description: Estudio de modelos de datos alternativos que integran el paradigma de objetos nativamente.
---

A pesar del dominio de las bases de datos relacionales, existen escenarios donde la complejidad de los datos (jerarquías profundas, multimedia, ingeniería) hace que el modelo de tablas sea ineficiente. Aquí entran en juego los modelos **Objeto-Relacionales** y **Orientados a Objetos**.

## 1. Bases de Datos Objeto-Relacionales (BDOR)

No son una ruptura total, sino una evolución. Permiten que una base de datos relacional (como PostgreSQL o Oracle) soporte conceptos de objetos.

### 1.1. Características principales
- **Tipos de Datos de Usuario (UDT)**: Puedes crear tus propios tipos (ej. `CREATE TYPE Direccion AS (...)`).
- **Atributos Multivaluados**: Soporte para arrays y colecciones dentro de una celda.
- **Identificadores de Objetos (OID)**: Cada fila tiene un ID único global, independiente de la clave primaria.
- **Herencia**: Las tablas pueden heredar de otras tablas (ej. `CREATE TABLE Empleados UNDER Personas`).

## 2. Bases de Datos Orientadas a Objetos (BDOO)

Aquí desaparecen las tablas. Los objetos se guardan tal cual están en la memoria RAM hacia el disco.

### 2.1. Ventajas
- **Sin Desajuste de Impedancia**: No necesitas un ORM (como Hibernate) porque no hay que "traducir" nada.
- **Navegación Rápida**: Seguir una relación es tan rápido como seguir un puntero en memoria.
- **Persistencia Transparente**: El programador casi no nota que está guardando datos en disco.

### 2.2. Desventajas
- **Falta de Estándar**: Cada motor tiene su propia forma de consultar.
- **Consultas Ad-hoc Ineficientes**: Son excelentes para seguir punteros, pero a veces lentas para búsquedas masivas de campos específicos comparadas con SQL.

## 3. Comparativa de Modelos

| Característica | Relacional (RDBMS) | Objeto-Relacional (BDOR) | Orientada a Objetos (BDOO) |
| :--- | :--- | :--- | :--- |
| **Unidad de datos** | Tabla / Fila | Fila con objetos | Objeto |
| **Acceso** | SQL Estándar | SQL Extendido | Lenguaje de Programación (Java/C++) |
| **Complejidad** | Baja/Media | Media | Alta |
| **Uso Principal** | Gestión General | Datos complejos (SIG) | Ingeniería / Tiempo Real |

---

:::info
Hoy en día, muchas características de las BDOR (como el soporte para JSON) han sido adoptadas por las bases de datos relacionales tradicionales, difuminando la línea entre ambos mundos.
:::
