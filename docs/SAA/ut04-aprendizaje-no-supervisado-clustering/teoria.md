---
title: "Teoría: Aprendizaje No Supervisado"
sidebar_position: 1
description: Estudio de algoritmos de agrupamiento y reducción de la dimensionalidad.
---

El **aprendizaje no supervisado** se utiliza cuando no tenemos etiquetas o respuestas correctas en nuestros datos. El objetivo es que el algoritmo descubra por sí mismo la estructura oculta, las agrupaciones o las relaciones entre las variables.

## 1. Clustering (Agrupamiento)

El clustering consiste en agrupar los datos de tal manera que los elementos de un mismo grupo (cluster) sean muy similares entre sí y muy diferentes a los de otros grupos.

### 1.1. K-Means
Es el algoritmo de clustering más popular. 
1. Se eligen **K** centros aleatorios (centroides).
2. Cada dato se asigna al centroide más cercano.
3. Se recalculan los centroides basándose en la media de los puntos asignados.
4. Se repite hasta que los centroides no cambien (convergencia).

### 1.2. El Método del Codo (Elbow Method)
¿Cómo sabemos cuántos grupos (K) existen realmente? No hay una respuesta única, pero usamos la **Inercia** (suma de distancias al cuadrado). Si graficamos la inercia frente al número de K, el punto donde la curva "se dobla" (como un codo) suele ser el número de grupos ideal.

## 2. Reducción de Dimensionalidad: PCA

A veces tenemos demasiadas columnas (características) y el modelo se vuelve lento o ineficiente (la "maldición de la dimensionalidad").

- **PCA (Principal Component Analysis)**: Transforma un conjunto de variables correlacionadas en un número menor de variables llamadas "Componentes Principales", que mantienen la mayor cantidad posible de la información original.

## 3. Casos de Uso

- **Marketing**: Segmentar clientes por sus hábitos de compra.
- **Biología**: Agrupar genes con patrones de expresión similares.
- **Ciberseguridad**: Detectar anomalías (puntos que no encajan en ningún grupo) para identificar ataques.

---

:::tip
El clustering es a menudo un paso previo para el aprendizaje supervisado: primero agrupamos los datos para entenderlos y luego entrenamos modelos específicos para cada grupo.
:::

:::warning
K-Means es muy sensible a la escala de los datos. Asegúrate siempre de aplicar **Estandarización** (StandardScaler) antes de ejecutar el algoritmo, o las variables con números más grandes dominarán injustamente la distancia.
:::
