---
title: "Tutorial: Preparación y Exploración de Datos"
sidebar_position: 2
description: Guía práctica para configurar el entorno de Python y explorar tu primer dataset con Pandas.
---

En este tutorial prepararemos nuestro entorno de trabajo y utilizaremos la librería **Pandas** para explorar el dataset **Iris**, el "Hola Mundo" del Machine Learning.

## 1. Prerrequisitos

Instala las librerías necesarias utilizando `pip`:

```bash title="Terminal"
pip install pandas scikit-learn matplotlib seaborn
```

## 2. Carga y Exploración de Datos

Cargaremos los datos de las flores Iris (longitud y anchura de sépalos y pétalos) para entender su estructura.

```python title="notebooks/exploracion_iris.py"
import pandas as pd
from sklearn.datasets import load_iris

# 1. Cargar el dataset
iris = load_iris()

# 2. Convertir a un DataFrame de Pandas para mejor visualización
df = pd.DataFrame(data=iris.data, columns=iris.feature_names)

# 3. Añadir la columna de la especie (objetivo)
df['target'] = iris.target

# 4. Mostrar las primeras 5 filas
print("Primeras filas del dataset:")
print(df.head())

# 5. Obtener estadísticas básicas
print("\nEstadísticas descriptivas:")
print(df.describe())
```

## 3. Visualización Básica

Visualizar los datos nos ayuda a ver si las categorías están bien separadas.

```python title="notebooks/visualizacion_iris.py"
import seaborn as sns
import matplotlib.pyplot as plt

# Usamos Seaborn para ver la relación entre variables
sns.pairplot(df, hue='target', palette='viridis')
plt.show()
```

## 4. Conceptos Clave del Tutorial

- **DataFrame**: Es la estructura principal de Pandas, similar a una tabla de Excel o SQL.
- **`head()`**: Permite previsualizar los datos.
- **`describe()`**: Genera automáticamente la media, desviación estándar, mínimos y máximos.
- **`target`**: Es la variable que queremos predecir en el futuro (la etiqueta).

---

:::tip
Antes de elegir un algoritmo, dedica siempre tiempo a visualizar tus datos. Un simple gráfico de dispersión puede revelarte mucho más que mil filas de números.
:::

:::warning
Asegúrate de que no tienes valores nulos en tu dataset antes de entrenar un modelo, ya que la mayoría de algoritmos de Scikit-learn fallarán si encuentran un `NaN`.
:::
