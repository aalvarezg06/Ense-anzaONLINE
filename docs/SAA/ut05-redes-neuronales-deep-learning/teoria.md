---
title: "Teoría: Redes Neuronales y Deep Learning"
sidebar_position: 1
description: Guía detallada sobre el funcionamiento de las neuronas artificiales y las redes profundas.
---

El **Aprendizaje Profundo (Deep Learning)** es una evolución del Machine Learning que utiliza estructuras inspiradas en el cerebro humano para aprender representaciones jerárquicas de los datos.

## 1. La Neurona Artificial (Perceptrón)

Es la unidad básica de procesamiento. Recibe varias entradas, las multiplica por unos **pesos ($w$)**, suma un **sesgo ($b$)** y pasa el resultado por una **función de activación**.

$$z = (x_1w_1 + x_2w_2 + ...) + b$$
$$salida = f(z)$$

### 1.1. Funciones de Activación
Deciden si la neurona debe "dispararse" o no:
- **ReLU**: La más usada en capas ocultas. Deja pasar valores positivos y anula los negativos.
- **Sigmoide**: Útil para probabilidades (entre 0 y 1).
- **Softmax**: Usada en la capa de salida para clasificación multiclase.

## 2. El Perceptrón Multicapa (MLP)

Una red neuronal se organiza en capas:
1.  **Capa de Entrada**: Recibe los datos originales.
2.  **Capas Ocultas**: Donde ocurre el aprendizaje de patrones complejos. Cuantas más capas, más "profunda" es la red.
3.  **Capa de Salida**: Proporciona la predicción final.

## 3. ¿Cómo aprende la red?

El aprendizaje es un proceso iterativo de dos pasos:
1.  **Forward Propagation**: Los datos viajan hacia adelante y se calcula el error (pérdida).
2.  **Backpropagation**: El error se propaga hacia atrás y se utiliza un **Optimizador** (como Adam o SGD) para ajustar los pesos y reducir el error en la siguiente vuelta.

## 4. Deep Learning vs Machine Learning Tradicional

| Característica | ML Tradicional | Deep Learning |
| :--- | :--- | :--- |
| **Datos necesarios** | Pocos/Medios | Masivos (Big Data) |
| **Ingeniería de rasgos** | Manual (Humana) | Automática (la red lo hace) |
| **Hardware** | CPU estándar | GPU / TPU necesarias |
| **Interpretabilidad** | Alta (Caja blanca) | Baja (Caja negra) |

---

:::important
El Deep Learning brilla especialmente con **datos no estructurados**: imágenes, audio, video y texto libre, donde extraer características a mano es casi imposible.
:::

:::warning
Debido a su enorme cantidad de parámetros, las redes neuronales son extremadamente propensas al **Overfitting**. Para evitarlo usamos técnicas como el **Dropout** o la **Parada Temprana (Early Stopping)**.
:::
