---
title: "Tutorial: Modelado Dinámico con Mermaid"
sidebar_position: 2
description: Guía práctica para modelar procesos de negocio y flujos de datos usando diagramas de secuencia y actividad.
---

En este tutorial aprenderás a representar la lógica de una aplicación mediante diagramas de comportamiento basados en texto.

## Paso 1: Diagramas de Secuencia

Los diagramas de secuencia son ideales para documentar cómo interactúa tu frontend con el backend y la base de datos.

**Ejercicio: Proceso de Login**
```mermaid title="Código Mermaid"
sequenceDiagram
    autonumber
    Actor Cliente
    participant App as Frontend
    participant API as Backend
    
    Cliente->>App: Clic en Login
    App->>Cliente: Pide Usuario/Contraseña
    Cliente->>App: Envía datos
    App->>API: POST /auth/login
    Note over API: Valida Token JWT
    API-->>App: 200 OK (Token)
    App-->>Cliente: Acceso concedido
```

**Claves del diagrama**:
-   `autonumber`: Añade numeración automática a los pasos.
-   `Note over`: Permite añadir explicaciones técnicas.

## Paso 2: Diagramas de Actividad

Úsalos para documentar la lógica de un método complejo.

**Ejercicio: Validación de Edad**
```mermaid title="Flujo de Validación"
stateDiagram-v2
    [*] --> EntradaDatos
    EntradaDatos --> CheckEdad: ¿Edad > 18?
    CheckEdad --> RegistroOK: Sí
    CheckEdad --> ErrorMenor: No
    RegistroOK --> [*]
    ErrorMenor --> [*]
```

## Paso 3: Reto Práctico - Sistema de Pedidos

Crea un diagrama de actividad para el siguiente proceso:
1.  El usuario selecciona un producto.
2.  El sistema comprueba el stock.
3.  **Si hay stock**: Se procesa el pago.
    -   Si el pago es correcto, se genera la factura.
    -   Si el pago falla, se muestra error.
4.  **Si no hay stock**: Se informa al usuario.

```mermaid title="Tu solución debería verse así"
flowchart TD
    A[Inicio] --> B{¿Hay Stock?}
    B -- Sí --> C{¿Pago OK?}
    B -- No --> D[Notificar Agotado]
    C -- Sí --> E[Generar Factura]
    C -- No --> F[Error de Pago]
    E --> G[Fin]
    D --> G
    F --> G
```

> [!TIP]
> Mermaid permite usar `flowchart` para diagramas de actividad más flexibles que los `stateDiagram`. En la mayoría de casos técnicos, `flowchart` es más intuitivo.
