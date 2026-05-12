---
title: "Teoría: Evaluación y Despliegue de Modelos"
sidebar_position: 1
description: Metodologías para garantizar la calidad del modelo y su puesta en producción.
---

Una vez que tenemos un modelo entrenado, debemos asegurar que funcionará bien con datos nuevos y reales. Esta fase es crítica para evitar el **Sobreajuste (Overfitting)** y garantizar el retorno de inversión del proyecto de IA.

## 1. Validación Cruzada (K-Fold Cross-Validation)

Dividir los datos en un solo bloque de Train y uno de Test puede ser engañoso si la división es "afortunada" o "desafortunada".

- **K-Fold**: Dividimos los datos en **K** partes iguales. Entrenamos el modelo K veces, usando cada vez una parte diferente como Test y las demás como Train. El resultado final es la media de las K ejecuciones.

## 2. Sesgo y Varianza (Bias vs Variance)

Es el equilibrio fundamental del ML:
- **Sesgo Alto (Underfitting)**: El modelo es demasiado simple y no aprende los patrones (ej. usar una línea recta para datos curvos).
- **Varianza Alta (Overfitting)**: El modelo es demasiado complejo y se aprende los datos de entrenamiento "de memoria", incluyendo el ruido. No sabe generalizar.

## 3. Ajuste de Hiperparámetros

Casi todos los algoritmos tienen "perillas" que podemos girar (ej. la profundidad de un árbol o el número de hilos).
- **GridSearch**: Técnica que prueba automáticamente todas las combinaciones posibles de parámetros para encontrar la mejor.

## 4. Persistencia de Modelos

El entrenamiento puede durar horas o días. Una vez terminado, guardamos el "cerebro" del modelo en un fichero.
- En Python usamos **Joblib** o **Pickle** para serializar el objeto del modelo en un archivo `.pkl` o `.joblib`.

## 5. Estrategias de Despliegue

- **Incrustado (Embedded)**: El modelo se guarda dentro de la aplicación (ej. una app de móvil).
- **Modelo como Servicio (API)**: El modelo corre en un servidor y otras aplicaciones le envían datos mediante peticiones HTTP (REST).

---

:::important
Un modelo que tiene un 99% de precisión en entrenamiento pero un 50% en validación cruzada sufre de un grave problema de **Overfitting**.
:::

:::tip
Antes de desplegar, documenta siempre qué versión de las librerías usaste, ya que una actualización de Scikit-learn podría hacer que tu modelo guardado deje de funcionar correctamente.
:::
