---
title: "Tutorial: Mi primer programa en Java"
sidebar_position: 2
description: Guía paso a paso para crear un programa interactivo que use variables y entrada de teclado.
---

En este tutorial práctico crearemos una aplicación de consola que interactúe con el usuario.

## Objetivos
1.  Configurar un proyecto en IntelliJ.
2.  Utilizar la clase `Scanner`.
3.  Realizar cálculos simples y mostrar el resultado.

```java title="src/Main.java"
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Introduce tu nombre:");
        String nombre = sc.nextLine();
        System.out.println("Hola, " + nombre + ". ¡Bienvenido a Programación!");
    }
}
```
