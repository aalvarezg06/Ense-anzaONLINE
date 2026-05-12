---
title: "Teoría: Fundamentos de IA y ML"
sidebar_position: 1
description: Guía detallada sobre los conceptos básicos, tipos de aprendizaje y flujo de trabajo en Machine Learning.
---

La **Inteligencia Artificial (IA)** es la disciplina que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. El **Machine Learning (ML)** es un subconjunto de la IA que se basa en algoritmos que aprenden patrones a partir de los datos.

## 1. IA, Machine Learning y Deep Learning

Es fundamental entender la jerarquía:
- **IA**: Campo general (incluye sistemas expertos, búsqueda, etc.).
- **Machine Learning**: Aprender de los datos (Regresión, Clasificación, etc.).
- **Deep Learning**: Subcampo del ML basado en Redes Neuronales Profundas.

## 2. Tipos de Aprendizaje Automático

### 2.1. Aprendizaje Supervisado
El algoritmo se entrena con datos que ya tienen la "etiqueta" correcta.
- **Regresión**: Predecir un número (ej. precio de una acción).
- **Clasificación**: Predecir una categoría (ej. es perro o gato).

### 2.2. Aprendizaje No Supervisado
El algoritmo busca patrones en datos sin etiquetas.
- **Clustering**: Agrupar elementos similares (ej. segmentación de clientes).
- **Reducción de Dimensionalidad**: Simplificar los datos.

## 3. El Flujo de Trabajo (Pipeline) de ML

Un proyecto de Machine Learning no empieza entrenando el modelo. Sigue estas fases:
1.  **Definición del problema**: ¿Qué queremos predecir?
2.  **Recolección de datos**: Fuentes de datos, APIs, bases de datos.
3.  **Análisis Exploratorio (EDA)**: Visualizar y entender los datos.
4.  **Preprocesamiento**: Limpiar datos nulos, eliminar duplicados y normalizar.
5.  **Entrenamiento**: Alimentar el algoritmo con los datos de entrenamiento.
6.  **Evaluación**: Comprobar la precisión con datos que el modelo nunca ha visto.

---

:::info
La gran ventaja del Machine Learning es su capacidad para encontrar relaciones complejas en los datos que un humano nunca podría ver a simple vista.
:::

:::tip
Recuerda la regla de oro: **"Garbage In, Garbage Out"**. Si tus datos de entrada son de mala calidad, tu modelo de IA será inútil por muy avanzado que sea el algoritmo.
:::
