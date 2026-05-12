---
title: "Tutorial: Tu primera Red Neuronal"
sidebar_position: 2
description: Guía práctica para construir un Perceptrón Multicapa (MLP) para clasificación.
---

En este tutorial utilizaremos Scikit-learn para construir una red neuronal capaz de clasificar imágenes de dígitos escritos a mano (dataset MNIST-light). Aunque para redes muy profundas usaríamos TensorFlow o PyTorch, Scikit-learn es excelente para entender los fundamentos.

## 1. Importación y Datos

```python title="notebooks/red_neuronal_digitos.py"
import matplotlib.pyplot as plt
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

# Cargar dataset de dígitos (8x8 píxeles)
digits = load_digits()
X = digits.data
y = digits.target
```

## 2. Preprocesamiento: El paso crítico

Las redes neuronales son extremadamente sensibles a la escala de los datos. Siempre debemos escalar las entradas para que tengan media 0 y varianza 1.

```python title="notebooks/red_neuronal_digitos.py"
# Dividir datos
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Escalar datos
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

## 3. Construcción del Modelo (Arquitectura)

Definiremos una red con dos capas ocultas de 64 y 32 neuronas respectivamente.

```python title="notebooks/red_neuronal_digitos.py"
# Crear la red neuronal
mlp = MLPClassifier(hidden_layer_sizes=(64, 32), 
                    max_iter=500, 
                    activation='relu', 
                    solver='adam', 
                    random_state=42,
                    verbose=True) # verbose=True nos permite ver cómo baja el error

# Entrenar
mlp.fit(X_train, y_train)
```

## 4. Evaluación y Predicción

```python title="notebooks/red_neuronal_digitos.py"
# Predicción
y_pred = mlp.predict(X_test)

print(f"Precisión final: {accuracy_score(y_test, y_pred):.4f}")

# Visualizar una predicción
plt.gray()
plt.matshow(digits.images[0])
plt.title(f"Predicción: {mlp.predict([X[0]])[0]}")
plt.show()
```

---

:::tip
Juega con el parámetro `hidden_layer_sizes`. Por ejemplo, `(100,)` crea una sola capa de 100 neuronas, mientras que `(50, 50, 50)` crea tres capas de 50 neuronas cada una.
:::

:::important
Si ves que la pérdida (loss) no baja durante el entrenamiento, puede que necesites ajustar la **Tasa de Aprendizaje (Learning Rate)** o aumentar el número de iteraciones.
:::
