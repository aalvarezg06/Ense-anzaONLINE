---
title: "Teoría: Bases de Datos NoSQL (MongoDB)"
sidebar_position: 1
description: Conceptos sobre el movimiento NoSQL y el modelo documental de MongoDB.
---

El término **NoSQL (Not Only SQL)** engloba a una gran variedad de tecnologías de bases de datos que surgieron para solucionar problemas de escalabilidad y flexibilidad que las bases de datos relacionales tradicionales no podían manejar eficientemente.

## 1. El Teorema CAP

Cualquier sistema distribuido (como una BD NoSQL) solo puede garantizar dos de estas tres propiedades simultáneamente:
1.  **Consistencia (Consistency)**: Todos los nodos ven los mismos datos al mismo tiempo.
2.  **Disponibilidad (Availability)**: Cada petición recibe una respuesta (éxito o fallo).
3.  **Tolerancia a Particiones (Partition Tolerance)**: El sistema sigue funcionando aunque se pierdan mensajes entre nodos.

## 2. Tipos de Bases de Datos NoSQL

| Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| **Clave-Valor** | El modelo más simple. Datos indexados por una clave única. | Redis, Riak |
| **Documentales** | Almacenan datos en documentos (JSON, XML). Flexibles y potentes. | **MongoDB**, CouchDB |
| **Columnares** | Optimizadas para lecturas masivas de columnas específicas. | Cassandra, HBase |
| **Grafos** | Basadas en nodos y relaciones. Ideales para redes sociales. | Neo4j |

## 3. MongoDB: El modelo documental

MongoDB es la base de datos NoSQL más popular. En lugar de tablas y filas, utiliza **Colecciones** y **Documentos**.

### 3.1. BSON (Binary JSON)
Aunque nosotros vemos JSON, MongoDB almacena los datos en **BSON**, un formato binario que soporta más tipos de datos (como fechas o datos binarios) y es más rápido de procesar.

### 3.2. Ventajas del esquema flexible (Schema-less)
- Puedes guardar documentos con diferentes campos en la misma colección.
- No hay que hacer "alter table" para añadir un campo nuevo.
- Facilita el desarrollo ágil y los cambios constantes en el modelo.

```json title="Ejemplo de Documento"
{
  "_id": "507f1f77bcf86cd799439011",
  "nombre": "Smartphone X",
  "precio": 899.99,
  "especificaciones": {
    "ram": "8GB",
    "almacenamiento": "256GB"
  },
  "etiquetas": ["electrónica", "móvil"]
}
```

---

:::info
La gran diferencia con el mundo relacional es que en NoSQL **desnormalizamos** los datos. En lugar de hacer JOINs, preferimos incrustar los datos relacionados dentro del mismo documento para ganar velocidad de lectura.
:::
