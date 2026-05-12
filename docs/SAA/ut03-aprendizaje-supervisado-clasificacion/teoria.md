---
title: "Teoría: Aprendizaje Supervisado - Clasificación"
sidebar_position: 1
description: Guía detallada sobre algoritmos de clasificación y métricas de evaluación de categorías.
---

La **clasificación** es la tarea de predecir una etiqueta o categoría discreta para una entrada dada. A diferencia de la regresión, aquí no buscamos un número exacto, sino una "clase" (ej. Spam o No Spam, Tumor Maligno o Benigno).

## 1. Tipos de Clasificación

- **Binaria**: Solo hay dos clases posibles (Sí/No, 0/1).
- **Multiclase**: Hay más de dos categorías (ej. clasificar tipos de flores o números escritos a mano).

## 2. Algoritmos Fundamentales

### 2.1. Regresión Logística
A pesar de su nombre, es un modelo de clasificación. Utiliza la **función sigmoide** para convertir una salida numérica en una probabilidad entre 0 y 1.

### 2.2. K-Nearest Neighbors (KNN)
Clasifica un punto basándose en la clase mayoritaria de sus "K" vecinos más cercanos. Es un algoritmo simple pero potente para datos con fronteras claras.

### 2.3. Árboles de Decisión
Construyen una estructura jerárquica de reglas (ej. "si el ingreso > 30k, entonces..."). Son muy fáciles de interpretar por humanos.

## 3. Evaluación del Modelo: La Matriz de Confusión

Es una tabla que permite visualizar el desempeño del algoritmo comparando las predicciones con los valores reales.

| | Predicho: NO | Predicho: SI |
| :--- | :---: | :---: |
| **Real: NO** | Verdaderos Negativos (TN) | Falsos Positivos (FP) |
| **Real: SI** | Falsos Negativos (FN) | Verdaderos Positivos (VP) |

### Métricas derivadas:
- **Exactitud (Accuracy)**: Porcentaje total de aciertos.
- **Precisión**: De todos los que predije como SI, ¿cuántos lo eran realmente? (Evita falsas alarmas).
- **Sensibilidad (Recall)**: De todos los que eran SI, ¿cuántos logré detectar? (Evita omisiones).
- **F1-Score**: El promedio armónico entre Precisión y Recall. Es la métrica más fiable cuando las clases están descompensadas.

---

:::important
En medicina, a menudo preferimos un modelo con alto **Recall** (no queremos dejar pasar a ningún enfermo sin detectar), aunque eso signifique tener algunos falsos positivos. En cambio, en un filtro de spam, priorizamos la **Precisión** (no queremos que un correo importante acabe en spam).
:::
