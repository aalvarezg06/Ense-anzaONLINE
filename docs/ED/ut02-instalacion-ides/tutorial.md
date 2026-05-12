---
title: "Tutorial: Instalación de IntelliJ IDEA y JDK 21"
sidebar_position: 2
description: Guía paso a paso para configurar tu entorno de desarrollo profesional Java desde cero.
---

En este tutorial configuraremos las herramientas que usaremos durante todo el curso.

## Paso 1: Instalación del JDK (Amazon Corretto / Oracle)

Utilizaremos **JDK 21** por ser la versión LTS más reciente y estable.

1.  Descarga el instalador de [Amazon Corretto 21](https://aws.amazon.com/corretto/) para tu sistema operativo (Windows/Linux/Mac).
2.  Sigue el asistente de instalación.
3.  **Verificación**: Abre una terminal y escribe:
    ```bash title="Terminal"
    java -version
    ```
    Deberías ver una salida indicando `openjdk version "21.x.x"`.

## Paso 2: Instalación de IntelliJ IDEA Community

1.  Ve a la web de [JetBrains](https://www.jetbrains.com/idea/download/).
2.  Descarga la versión **Community Edition** (es gratuita y suficiente para este módulo).
3.  Instala y abre la aplicación.

## Paso 3: Configuración Inicial del IDE

Al abrir IntelliJ por primera vez:
1.  **Plugins**: Ve a `Settings` > `Plugins` e instala **SonarLint** para mejorar la calidad de tu código.
2.  **SDK**: Asegúrate de que el IDE detecta el JDK 21 instalado en el Paso 1 en `File` > `Project Structure` > `SDKs`.

## Paso 4: Crear tu Primer Proyecto con Maven

1.  Haz clic en **New Project**.
2.  Selecciona **Maven Archetype** o simplemente **Java** con sistema de construcción **Maven**.
3.  Nombre: `HolaMundoED`.
4.  En `Advanced Settings`, pon:
    -   **GroupId**: `com.ed.tutorial`
    -   **ArtifactId**: `holamundo`

## Paso 5: Escribir y Ejecutar Código

IntelliJ habrá creado una estructura de carpetas. Busca `src/main/java`.

1.  Crea un nuevo archivo `Main.java`.
2.  Escribe el siguiente código:

```java title="src/main/java/Main.java"
public class Main {
    public static void main(String[] args) {
        System.out.println("¡Entorno de Desarrollo configurado correctamente!");
    }
}
```

3.  Haz clic en la flecha verde (Run) al lado de la clase.
4.  Observa el resultado en la consola inferior.

> [!TIP]
> Aprende el atajo `Ctrl + Shift + F10` (Windows) para ejecutar el programa actual sin usar el ratón.
