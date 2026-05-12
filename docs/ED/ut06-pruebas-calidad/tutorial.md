---
title: "Tutorial: Pruebas Unitarias con JUnit 5"
sidebar_position: 2
description: Guía práctica para escribir y ejecutar tus primeras pruebas unitarias automáticas en Java.
---

JUnit es el framework de pruebas más utilizado en el ecosistema Java. Aprenderemos a validar la lógica de nuestras clases de forma automática.

## Paso 1: Configuración de Dependencias (Maven)

Asegúrate de que tu archivo `pom.xml` incluya la dependencia de JUnit 5. IntelliJ suele añadirla automáticamente, pero verifícalo:

```xml title="pom.xml"
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>
```

## Paso 2: La Clase a Probar

Imagina una calculadora sencilla en `src/main/java/Calculadora.java`:

```java title="src/main/java/Calculadora.java"
public class Calculadora {
    public int sumar(int a, int b) {
        return a + b;
    }
}
```

## Paso 3: Crear el Test

1.  En IntelliJ, haz clic derecho en el nombre de la clase `Calculadora` y selecciona **Generate...** > **Test...**.
2.  El IDE creará una clase en `src/test/java/CalculadoraTest.java`.

```java title="src/test/java/CalculadoraTest.java"
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculadoraTest {

    @Test
    void testSumar() {
        Calculadora calc = new Calculadora();
        int resultado = calc.sumar(2, 3);
        
        // Verificación (Assertion)
        assertEquals(5, resultado, "La suma de 2 + 3 debe ser 5");
    }
}
```

## Paso 4: Ejecutar los Tests

1.  Haz clic en el icono verde al lado de la clase o método de test.
2.  Si la barra aparece en **Verde**, ¡todo correcto!
3.  Si aparece en **Rojo**, el test ha detectado un fallo en el código o en el propio test.

## Paso 5: Otras Assertions comunes

JUnit 5 ofrece muchas formas de verificar resultados:

-   `assertTrue(condicion)`: Verifica que sea verdadero.
-   `assertNotNull(objeto)`: Verifica que no sea nulo.
-   `assertThrows(Exception.class, () -> ...)`: Verifica que un método lance una excepción esperada.

```java title="Ejemplo de aserción múltiple"
@Test
void testCalculoComplejo() {
    assertAll("Operaciones",
        () -> assertEquals(4, calc.sumar(2, 2)),
        () -> assertEquals(0, calc.sumar(2, -2))
    );
}
```

> [!TIP]
> Intenta alcanzar una cobertura de código alta, pero recuerda: **Es mejor tener pocos tests buenos que muchos tests que no prueban nada relevante.**
