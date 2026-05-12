---
title: "Teoría: Metodologías de Desarrollo"
sidebar_position: 1
description: Conceptos profundos sobre el ciclo de vida del software, metodologías tradicionales y ágiles.
---

En el desarrollo de software profesional, no se escribe código de manera aislada o caótica. Se sigue un marco de trabajo que garantiza la calidad, el mantenimiento y la satisfacción del cliente.

## 1. El Ciclo de Vida del Software (SDLC)

El **Software Development Life Cycle** es el proceso que sigue un proyecto de software desde su concepción hasta su retirada. Las fases fundamentales son:

1.  **Planificación y Análisis**: Definir el alcance y los requisitos (funcionales y no funcionales).
2.  **Diseño**: Arquitectura del sistema, diseño de base de datos y diagramas UML.
3.  **Implementación (Codificación)**: Traducción del diseño a código fuente.
4.  **Pruebas (Testing)**: Verificación de que el software cumple los requisitos y no tiene errores.
5.  **Despliegue**: Puesta en producción para el usuario final.
6.  **Mantenimiento**: Corrección de errores surgidos y nuevas mejoras.

## 2. Metodologías Tradicionales: El Modelo en Cascada

El modelo **Waterfall** es secuencial. Cada fase debe completarse antes de pasar a la siguiente.

-   **Ventajas**: Estructura clara, fácil de gestionar en proyectos con requisitos muy cerrados.
-   **Inconvenientes**: Muy rígido. Un error en los requisitos iniciales puede ser catastrófico al final del proyecto, ya que el cliente no ve el producto hasta el final.

## 3. Metodologías Ágiles

Surgen como respuesta a la rigidez de la cascada, basándose en el **Manifiesto Ágil (2001)**. Priorizan a las personas y la respuesta al cambio.

### Scrum
Es el marco ágil más popular. Se basa en ciclos iterativos llamados **Sprints** (normalmente de 2 a 4 semanas).

-   **Roles**: Product Owner (voz del cliente), Scrum Master (facilitador), Development Team.
-   **Artefactos**: Product Backlog (lista de deseos), Sprint Backlog (tareas del ciclo).
-   **Eventos**: Daily Stand-up, Sprint Review, Sprint Retrospective.

### Kanban
Se enfoca en la visualización del flujo de trabajo y la limitación del **WIP (Work In Progress)**.

-   Utiliza un tablero con columnas (To Do, Doing, Done).
-   Busca un flujo continuo, eliminando cuellos de botella.

## 4. Comparativa Técnica

| Característica | Cascada (Waterfall) | Ágil (Scrum/Kanban) |
| :--- | :--- | :--- |
| **Requisitos** | Definidos al inicio | Evolutivos |
| **Entrega** | Única al final | Incremental y frecuente |
| **Cambios** | Difíciles de integrar | Bienvenidos |
| **Riesgo** | Alto (se detecta al final) | Bajo (se detecta pronto) |

> [!TIP]
> En la industria actual, la mayoría de las empresas utilizan enfoques híbridos o puramente ágiles para adaptarse a la rapidez del mercado tecnológico.
