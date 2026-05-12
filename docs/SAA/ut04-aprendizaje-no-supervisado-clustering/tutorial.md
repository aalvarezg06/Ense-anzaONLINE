---
title: "Tutorial: Segmentación con K-Means"
sidebar_position: 2
description: Guía práctica para encontrar agrupaciones en datos y utilizar el método del codo.
---

En este tutorial utilizaremos el algoritmo **K-Means** para agrupar datos y aprenderemos a utilizar la técnica del codo para decidir cuántos grupos son necesarios.

## 1. Importación de Librerías

```python title="notebooks/clustering_kmeans.py"
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import make_blobs
```

## 2. Preparación de Datos

Generaremos datos sintéticos que claramente tienen agrupaciones para ver cómo se comporta el algoritmo.

```python title="notebooks/clustering_kmeans.py"
# Crear datos con 4 centros definidos
X, _ = make_blobs(n_samples=500, centers=4, cluster_std=0.60, random_state=0)

# Es vital estandarizar los datos para Clustering
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
```

## 3. Buscando el número óptimo de Grupos (K)

Ejecutamos el algoritmo para diferentes valores de K y guardamos la **inercia**.

```python title="notebooks/clustering_kmeans.py"
inercias = []
for i in range(1, 11):
    kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
    kmeans.fit(X_scaled)
    inercias.append(kmeans.inertia_)

# Graficar el Método del Codo
plt.plot(range(1, 11), inercias, marker='o')
plt.title('Método del Codo')
plt.xlabel('Número de clusters (K)')
plt.ylabel('Inercia')
plt.show()
```

## 4. Entrenamiento Final y Visualización

Si el "codo" está en 4, entrenamos con ese valor.

```python title="notebooks/clustering_kmeans.py"
# Entrenar con K=4
kmeans_final = KMeans(n_clusters=4, random_state=0)
y_clusters = kmeans_final.fit_predict(X_scaled)

# Visualizar los resultados
plt.scatter(X_scaled[:, 0], X_scaled[:, 1], c=y_clusters, s=50, cmap='viridis')
centers = kmeans_final.cluster_centers_
plt.scatter(centers[:, 0], centers[:, 1], c='red', s=200, alpha=0.5, label='Centroides')
plt.title('Agrupamiento K-Means (K=4)')
plt.legend()
plt.show()
```

---

:::tip
En el gráfico del método del codo, busca el punto donde la caída de la inercia deja de ser drástica. Ese es tu número óptimo de clusters.
:::

:::important
K-Means asume que los grupos son esféricos y de tamaño similar. Si tus datos tienen formas complejas (como lunas o anillos), deberás investigar algoritmos como **DBSCAN**.
:::
