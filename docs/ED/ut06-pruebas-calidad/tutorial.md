---
title: "Tutorial: Mi primera prueba con JUnit"
sidebar_position: 2
description: Guía práctica para escribir y ejecutar tests unitarios en Java.
---

# Tutorial: Mi primera prueba con JUnit

Aprende a dormir tranquilo sabiendo que tu código funciona.

## Ejemplo de código a probar
```java title="src/Calculadora.java"
public class Calculadora {
    public int sumar(int a, int b) {
        return a + b;
    }
}
```

## Creación del Test
```java title="test/CalculadoraTest.java"
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculadoraTest {
    @Test
    void testSumar() {
        Calculadora calc = new Calculadora();
        assertEquals(5, calc.sumar(2, 3), "La suma debería ser 5");
    }
}
```

## Ejecución
- En IntelliJ: Clic derecho en la clase de test -> `Run 'CalculadoraTest'`.
- Barra verde: Éxito. Barra roja: Fallo.
