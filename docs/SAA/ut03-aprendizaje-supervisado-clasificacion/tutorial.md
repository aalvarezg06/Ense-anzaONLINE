---
title: "Tutorial: Clasificación con Árboles de Decisión"
sidebar_position: 2
description: Guía práctica para entrenar un clasificador y evaluar su desempeño mediante una matriz de confusión.
---

En este tutorial clasificaremos flores del dataset Iris (visto en la UT01) utilizando un **Árbol de Decisión**. Veremos cómo evaluar los resultados más allá de la simple puntería (accuracy).

## 1. Importación y Carga

```python title="notebooks/clasificacion_iris.py"
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import confusion_matrix, classification_report
import seaborn as sns
import matplotlib.pyplot as plt

# Cargar datos
iris = load_iris()
X = iris.data
y = iris.target
```

## 2. Entrenamiento

```python title="notebooks/clasificacion_iris.py"
# 1. Dividir en entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 2. Crear el modelo
# 'max_depth' controla la profundidad del árbol para evitar sobreajuste
clf = DecisionTreeClassifier(max_depth=3)

# 3. Entrenar
clf.fit(X_train, y_train)

# 4. Predicción
y_pred = clf.predict(X_test)
```

## 3. Evaluación Detallada

```python title="notebooks/clasificacion_iris.py"
# Informe de clasificación
print("Informe de Clasificación:")
print(classification_report(y_test, y_pred, target_names=iris.target_names))

# Matriz de Confusión
cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(8,6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
            xticklabels=iris.target_names, yticklabels=iris.target_names)
plt.xlabel('Predicho')
plt.ylabel('Real')
plt.title('Matriz de Confusión')
plt.show()
```

## 4. Análisis de Resultados

- **Precisión**: Si el informe dice 1.00 para la clase 'setosa', significa que siempre que el modelo dijo 'setosa', acertó.
- **Recall**: Si dice 0.94 para 'versicolor', significa que el modelo detectó el 94% de todas las flores versicolor que había en el test.

---

:::tip
Los Árboles de Decisión son "modelos de caja blanca", lo que significa que puedes visualizar exactamente qué reglas está siguiendo el modelo mediante la función `sklearn.tree.plot_tree`.
:::

:::warning
Ten cuidado con los árboles muy profundos; tienden a aprenderse los datos de entrenamiento de memoria (Overfitting), perdiendo capacidad de generalizar ante nuevos datos.
:::
