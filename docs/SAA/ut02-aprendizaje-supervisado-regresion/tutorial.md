---
title: "Tutorial: Tu primera Regresión Lineal"
sidebar_position: 2
description: Guía práctica para entrenar un modelo de regresión lineal y evaluar su precisión.
---

En este tutorial crearemos un modelo que predice el precio de un inmueble basándose en sus metros cuadrados. Aprenderemos el flujo completo: desde la preparación de los datos hasta la evaluación final.

## 1. Importación de Librerías

```python title="notebooks/regresion_casas.py"
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, r2_score
```

## 2. Preparación de Datos

Simularemos un pequeño dataset para este ejemplo.

```python title="notebooks/regresion_casas.py"
# Datos sintéticos: Metros cuadrados vs Precio (en miles de euros)
data = {
    'metros': [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
    'precio': [150, 185, 210, 245, 280, 310, 340, 375, 405, 430, 460]
}

df = pd.DataFrame(data)

# X debe ser una matriz (2D), y un vector (1D)
X = df[['metros']] 
y = df['precio']
```

## 3. División Entrenamiento/Prueba (Train/Test Split)

Reservamos el 20% de los datos para evaluar el modelo al final.

```python title="notebooks/regresion_casas.py"
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

## 4. Entrenamiento y Predicción

```python title="notebooks/regresion_casas.py"
# 1. Crear el modelo
modelo = LinearRegression()

# 2. Entrenar (Ajustar) el modelo con los datos de entrenamiento
modelo.fit(X_train, y_train)

# 3. Realizar predicciones sobre el conjunto de prueba
y_pred = modelo.predict(X_test)
```

## 5. Evaluación de Resultados

```python title="notebooks/regresion_casas.py"
print(f"Puntuación R2: {r2_score(y_test, y_pred):.4f}")
print(f"Error Absoluto Medio (MAE): {mean_absolute_error(y_test, y_pred):.2f} mil €")

# Visualización de la línea de regresión
plt.scatter(X, y, color='blue', label='Datos reales')
plt.plot(X, modelo.predict(X), color='red', label='Línea de regresión')
plt.xlabel('Metros Cuadrados')
plt.ylabel('Precio (k€)')
plt.legend()
plt.show()
```

---

:::tip
Un valor de $R^2$ cercano a 1 indica que el modelo se ajusta muy bien a los datos. Sin embargo, ten cuidado: un ajuste perfecto en los datos de entrenamiento pero malo en los de prueba indica **Overfitting** (sobreajuste).
:::

:::info
La regresión lineal asume que existe una relación recta entre las variables. Si tus datos tienen una forma curva, deberás explorar la **Regresión Polinómica**.
:::
