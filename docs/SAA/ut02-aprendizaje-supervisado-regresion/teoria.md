---
title: "Teoría: Aprendizaje Supervisado - Regresión"
sidebar_position: 1
description: Guía detallada sobre los modelos de regresión lineal para la predicción de valores numéricos.
---

La **regresión** es una técnica de aprendizaje supervisado que tiene como objetivo predecir un valor numérico continuo. Es uno de los pilares del análisis predictivo.

## 1. Regresión Lineal Simple

La forma más básica de regresión. Intenta modelar la relación entre una variable dependiente ($y$) y una única variable independiente ($x$) mediante una línea recta:

$$y = w_0 + w_1x$$

- **$w_1$ (Pendiente)**: Cuánto cambia $y$ por cada unidad que aumenta $x$.
- **$w_0$ (Intersección)**: El valor de $y$ cuando $x$ es cero.

## 2. Regresión Lineal Múltiple

En la realidad, un valor suele depender de muchos factores. Por ejemplo, el precio de una casa depende de los metros cuadrados, el número de habitaciones y la antigüedad.

$$y = w_0 + w_1x_1 + w_2x_2 + ... + w_nx_n$$

## 3. Función de Coste y Optimización

¿Cómo sabe el algoritmo cuál es la "mejor" línea? Utiliza una **Función de Coste**, generalmente el **Error Cuadrático Medio (MSE)**, que mide la distancia entre las predicciones del modelo y los valores reales. El objetivo es minimizar este error.

## 4. Métricas de Evaluación

Para saber si nuestro modelo es útil, utilizamos métricas estandarizadas:

- **MAE (Mean Absolute Error)**: El error promedio en las mismas unidades que la variable $y$.
- **MSE (Mean Squared Error)**: Penaliza más los errores grandes (al elevar al cuadrado).
- **$R^2$ (Coeficiente de Determinación)**: Indica qué porcentaje de la variación de los datos es explicado por el modelo. Un valor de 1.0 es una predicción perfecta.

---

:::important
Antes de entrenar un modelo de regresión, es vital realizar un **Train/Test Split**. Dividimos los datos en dos grupos: uno para que el modelo aprenda (Train) y otro para ponerlo a prueba con datos que nunca ha visto (Test).
:::

:::info
La regresión no implica causalidad. Que dos variables estén correlacionadas linealmente no significa necesariamente que una sea la causa de la otra.
:::
