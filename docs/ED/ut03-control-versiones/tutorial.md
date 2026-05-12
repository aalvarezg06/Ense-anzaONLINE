---
title: "Tutorial: Comandos de Git y Flujo de Trabajo"
sidebar_position: 2
description: Guía práctica para dominar Git desde la línea de comandos en un entorno real.
---

En este tutorial aprenderás los comandos esenciales que utilizarás diariamente en tu carrera profesional.

## Paso 1: Configuración Inicial

Antes de empezar, Git necesita saber quién eres:

```bash title="Terminal"
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## Paso 2: Crear un Repositorio

1.  Crea una carpeta para tu proyecto y entra en ella.
2.  Inicializa Git:
    ```bash title="Terminal"
    git init
    ```
3.  Crea un archivo `README.md` y añádelo al área de preparación:
    ```bash title="Terminal"
    git add README.md
    ```
4.  Realiza tu primer commit:
    ```bash title="Terminal"
    git commit -m "initial: primer commit del proyecto"
    ```

## Paso 3: Gestión de Ramas (Branches)

Imagina que quieres añadir una nueva funcionalidad sin romper la rama principal.

1.  Crea una nueva rama:
    ```bash title="Terminal"
    git branch feature-login
    ```
2.  Cambia a esa rama:
    ```bash title="Terminal"
    git checkout feature-login
    ```
3.  Haz cambios, añade (`git add .`) y confirma (`git commit`).
4.  Vuelve a la rama principal y fusiona:
    ```bash title="Terminal"
    git checkout main
    git merge feature-login
    ```

## Paso 4: Resolución de Conflictos

Si hay un conflicto, Git marcará el archivo así:

```text title="Archivo con conflicto"
<<<<<<< HEAD
Sistema de login v1
=======
Sistema de acceso seguro
>>>>>>> feature-login
```

1.  Abre el archivo y elige la versión correcta (o combina ambas).
2.  Borra las marcas `<<<<`, `====`, `>>>>`.
3.  Guarda el archivo, haz `git add` y `git commit` para finalizar la fusión.

## Paso 5: Trabajar con Remotos (GitHub)

1.  Crea un repositorio en GitHub.
2.  Conecta tu repositorio local con el remoto:
    ```bash title="Terminal"
    git remote add origin https://github.com/usuario/repo.git
    ```
3.  Sube tus cambios:
    ```bash title="Terminal"
    git push -u origin main
    ```

> [!TIP]
> Usa el comando `git status` constantemente para saber en qué estado se encuentran tus archivos y en qué rama estás.
