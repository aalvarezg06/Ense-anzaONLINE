---
title: "Teoría: Programación Multiproceso"
sidebar_position: 1
description: Guía detallada sobre la creación y gestión de procesos externos desde Java.
---

La programación multiproceso permite que una aplicación Java interactúe con el sistema operativo para ejecutar otros programas, aprovechar herramientas de línea de comandos o distribuir tareas en diferentes instancias independientes.

## 1. El concepto de Proceso

Un **proceso** es un programa en ejecución que tiene su propio espacio de memoria, su propio contador de programa y sus propios recursos (ficheros abiertos, conexiones, etc.). A diferencia de los hilos, los procesos son aislados entre sí.

## 2. La clase ProcessBuilder

Desde Java 5, la forma recomendada de crear procesos es mediante la clase `ProcessBuilder`. Esta clase permite configurar el proceso antes de lanzarlo.

### 2.1. Configuración del Entorno
Podemos definir el directorio de trabajo, variables de entorno y cómo se comportarán los flujos de entrada/salida.

```java title="src/main/java/com/dam/psp/Lanzador.java"
ProcessBuilder pb = new ProcessBuilder("ls", "-la");
pb.directory(new File("/home/usuario/documentos")); // Directorio de trabajo
pb.redirectErrorStream(true); // Combina la salida de error con la salida estándar
```

## 3. Gestión de los Flujos (Streams)

Cuando un proceso hijo se ejecuta, Java abre tres canales de comunicación (pipes):
1.  **Standard Input (stdin)**: Para enviar datos al proceso hijo (`process.getOutputStream()`).
2.  **Standard Output (stdout)**: Para leer lo que el proceso hijo imprime (`process.getInputStream()`).
3.  **Standard Error (stderr)**: Para leer los mensajes de error (`process.getErrorStream()`).

:::warning
Es fundamental leer la salida del proceso hijo. Si el buffer de salida se llena y nadie lo lee, el proceso hijo se quedará bloqueado (deadlock) esperando para escribir más.
:::

## 4. Control del Ciclo de Vida

- **Lanzamiento**: `pb.start()` devuelve un objeto de tipo `Process`.
- **Espera**: `process.waitFor()` bloquea el hilo actual hasta que el proceso hijo termina.
- **Finalización**: `process.exitValue()` devuelve el código de salida (0 suele significar éxito).
- **Destrucción**: `process.destroy()` solicita al SO que mate el proceso.

---

:::info
En sistemas modernos, la clase `ProcessHandle` (Java 9+) permite obtener información detallada del proceso como su PID, tiempo de CPU acumulado o el usuario que lo lanzó.
:::
