---
title: "Teoría: Comunicaciones en Red (Sockets)"
sidebar_position: 1
description: Guía detallada sobre la programación de aplicaciones cliente-servidor mediante Sockets en Java.
---

Un **Socket** es un punto final (endpoint) de un canal de comunicación bidireccional entre dos programas que se ejecutan en la red. En Java, los sockets nos permiten abstraernos de la complejidad de los niveles inferiores de la red (ISO/OSI).

## 1. Conceptos Básicos

Para establecer una comunicación necesitamos dos elementos:
1.  **Dirección IP**: Identifica a la máquina en la red.
2.  **Puerto**: Identifica al proceso o aplicación dentro de esa máquina (ej. 80 para HTTP, 3306 para MariaDB).

## 2. Protocolo TCP (Transmisión Controlada)

Es el protocolo más usado porque garantiza que los datos lleguen completos, en orden y sin errores. En Java usamos:

- **`ServerSocket`**: Utilizado por el **Servidor** para escuchar peticiones en un puerto específico.
- **`Socket`**: Utilizado tanto por el cliente como por el servidor para intercambiar datos mediante flujos (`InputStream` y `OutputStream`).

### 2.1. El proceso de conexión
1. El servidor se pone a la escucha: `server.accept()`. Este método bloquea el programa hasta que llega un cliente.
2. El cliente solicita conexión: `new Socket(ip, puerto)`.
3. Se establece el canal y ambos pueden leer/escribir.

## 3. Protocolo UDP (Datagramas)

A diferencia de TCP, UDP no garantiza la llegada de los datos. Es mucho más rápido y ligero. No existe el concepto de "conexión" permanente.

- **`DatagramSocket`**: Se usa para enviar y recibir.
- **`DatagramPacket`**: Representa el "paquete" de datos que incluye el mensaje, la IP de destino y el puerto.

## 4. Servidores Multihilo

Un servidor básico solo puede atender a un cliente a la vez. Para crear servidores reales, debemos usar hilos:
1. El hilo principal acepta la conexión (`accept`).
2. Se crea un nuevo hilo para gestionar la comunicación con ese cliente específico.
3. El hilo principal vuelve inmediatamente a esperar al siguiente cliente.

---

:::tip
Cuando trabajes con Sockets TCP, utiliza `DataInputStream` y `DataOutputStream` para enviar tipos de datos primitivos de Java fácilmente por la red.
:::

:::warning
Recuerda siempre cerrar los sockets y los flujos al terminar la comunicación para liberar los puertos del sistema operativo.
:::
