---
title: "Teoría: Programación Segura"
sidebar_position: 1
description: Fundamentos de criptografía y seguridad aplicados al desarrollo de aplicaciones Java.
---

La seguridad informática no es un producto, sino un proceso. En el desarrollo de servicios y procesos, la seguridad se centra en garantizar la **Confidencialidad**, **Integridad** y **Disponibilidad** (Tríada CIA).

## 1. Criptografía

Es el arte de escribir en clave para que solo quien posea la llave pueda entender el mensaje.

### 1.1. Criptografía Simétrica
Utiliza la **misma clave** para cifrar y descifrar.
- **Ventaja**: Muy rápida.
- **Desventaja**: El intercambio de la clave es peligroso.
- **Ejemplo**: **AES** (Advanced Encryption Standard).

### 1.2. Criptografía Asimétrica (Clave Pública)
Utiliza un **par de claves**: una pública (para cifrar) y una privada (para descifrar).
- **Ventaja**: No hay que compartir la clave privada.
- **Desventaja**: Mucho más lenta que la simétrica.
- **Ejemplo**: **RSA**.

## 2. Resúmenes de Mensaje (Hashing)

Un hash es una "huella digital" de un conjunto de datos. Es una función de un solo sentido (no se puede volver al dato original a partir del hash).

- **Uso principal**: Almacenar contraseñas y verificar la integridad de ficheros.
- **Algoritmo recomendado**: **SHA-256** o superior.

## 3. Firmas y Certificados Digitales

- **Firma Digital**: Garantiza la autenticidad y el no repudio (asegura que el emisor es quien dice ser).
- **Certificado Digital**: Un tercero de confianza (Autoridad de Certificación - CA) vincula una clave pública con una identidad.
- **KeyStore**: Almacén de seguridad de Java donde guardamos nuestras claves y certificados.

## 4. Comunicaciones Seguras: SSL/TLS

Para proteger los Sockets (UT03) o los Servicios Web (UT04) de escuchas no autorizadas (Sniffing), debemos usar una capa de seguridad.

- **SSL/TLS**: Protocolo que cifra la comunicación a nivel de transporte.
- En Java usamos `SSLSocket` y `SSLServerSocket`.

---

:::important
Nunca inventes tus propios algoritmos de cifrado. Utiliza siempre los estándares probados y las librerías oficiales de Java (`java.security` y `javax.crypto`).
:::

:::tip
Para almacenar contraseñas, usa siempre un **Salt** (un valor aleatorio añadido a la contraseña antes de hacer el hash) para evitar ataques de Diccionario o Rainbow Tables.
:::
