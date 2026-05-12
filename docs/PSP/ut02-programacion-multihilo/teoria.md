---
title: "Teoría: Programación Multihilo"
sidebar_position: 1
description: Guía detallada sobre la creación, gestión y sincronización de hilos en Java.
---

A diferencia de los procesos, los **hilos (threads)** comparten el mismo espacio de memoria de la aplicación, lo que permite una comunicación mucho más rápida pero introduce el riesgo de conflictos al acceder a recursos compartidos.

## 1. Creación de Hilos en Java

Existen dos formas principales de definir la tarea de un hilo:

1.  **Heredar de `Thread`**: Menos flexible ya que Java no permite herencia múltiple.
2.  **Implementar `Runnable`**: Forma recomendada. Separa la tarea de la ejecución.

```java title="src/main/java/com/dam/psp/MiTarea.java"
public class MiTarea implements Runnable {
    @Override
    public void run() {
        System.out.println("Hilo ejecutándose: " + Thread.currentThread().getName());
    }
}

// Ejecución:
Thread hilo = new Thread(new MiTarea());
hilo.start(); // ¡Importante! start() inicia el hilo, run() solo ejecuta el método secuencialmente.
```

## 2. Ciclo de Vida de un Hilo

Un hilo pasa por varios estados:
- **New**: Creado pero no iniciado.
- **Runnable**: Listo para ejecutarse (esperando al planificador de la CPU).
- **Blocked/Waiting**: Esperando un recurso o un evento.
- **Terminated**: Ha finalizado su ejecución.

## 3. Sincronización y Secciones Críticas

Cuando dos hilos intentan modificar el mismo dato a la vez, ocurre una **Condición de Carrera (Race Condition)**. Para evitarlo, usamos la sincronización.

### 3.1. El Monitor y `synchronized`
Java utiliza el concepto de **Monitor**. Solo un hilo a la vez puede poseer el monitor de un objeto.

```java
public synchronized void ingresar(double cantidad) {
    this.saldo += cantidad; // Sección Crítica protegida
}
```

## 4. Problemas de Concurrencia

- **Interbloqueo (Deadlock)**: El hilo A espera al B y el B espera al A. Ambos quedan bloqueados para siempre.
- **Inanición (Starvation)**: Un hilo nunca recibe tiempo de CPU porque otros con más prioridad se lo quitan.
- **Livelock**: Los hilos cambian su estado constantemente en respuesta a otros, pero no avanzan.

---

:::tip
Para aplicaciones modernas, evita gestionar hilos a mano. Utiliza el **Framework Executor** (`java.util.concurrent`) que permite gestionar "piscinas de hilos" (Thread Pools) de forma eficiente.
:::
