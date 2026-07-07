# StreamHub – Gestión de Contenido y Usuarios en MongoDB

Proyecto de la historia de usuario **"Gestión de contenido y usuarios en MongoDB"**.
Base de datos NoSQL para una plataforma de streaming (StreamHub) que modela
usuarios, contenido audiovisual (películas y series) y valoraciones.

## Contenido del entregable

- `streamhub.js` — Script único con **todos** los comandos de MongoDB
  (mongosh) usados en el proyecto, organizado por tareas:
  1. Diseño de colecciones (comentado).
  2. Inserción de datos (`insertOne`, `insertMany`).
  3. Consultas con operadores (`$gt`, `$lt`, `$eq`, `$in`, `$and`, `$or`, `$regex`, `$expr`).
  4. Actualizaciones y eliminaciones (`updateOne`, `updateMany`, `deleteOne`, `deleteMany`).
  5. Índices (`createIndex`, `getIndexes`) con justificación.
  6. 5 pipelines de agregación (`$match`, `$group`, `$sort`, `$project`, `$unwind`).
- `README.md` — Este archivo, con el diseño del dominio y las decisiones tomadas.

## 1. Diseño del dominio

### Colecciones

| Colección     | Propósito                                              | Patrón de modelado |
|---------------|---------------------------------------------------------|---------------------|
| `usuarios`    | Perfil de cada usuario y su historial de reproducción   | Embedding (historial embebido, arreglo acotado) |
| `contenidos`  | Catálogo de películas y series                          | Esquema flexible/polimórfico (`tipo`: pelicula/serie) |
| `valoraciones`| Reseñas y puntuaciones de usuarios sobre contenidos     | Referencing (colección independiente, crece sin límite) |
| `listas`      | Listas personalizadas (favoritos, "ver luego", etc.)    | Referencing |

### ¿Por qué embedding en `usuarios.historial` y referencing en `valoraciones`?

- El **historial** de un usuario se consulta casi siempre junto con el propio
  usuario y tiene un tamaño razonablemente acotado → se embebe.
- Las **valoraciones** pueden ser muchísimas por contenido y se necesitan
  consultar/agregar de forma independiente del usuario o el contenido
  (ranking de mejores contenidos, promedio de calificación, etc.) → se
  modelan en una colección propia, referenciando `usuarioId` y `contenidoId`.

### Estructura resumida de documentos

```js
// usuarios
{
  _id, nombre, email, edad, pais, fechaRegistro,
  suscripcion: { plan, activa, fechaInicio },
  generosFavoritos: [String],
  historial: [ { contenidoId, fechaVisto, completado } ]
}

// contenidos
{
  _id, titulo, tipo: "pelicula" | "serie",
  genero: [String], anioLanzamiento,
  duracionMinutos,      // solo si tipo = "pelicula"
  temporadas,           // solo si tipo = "serie"
  director, elenco: [String], sinopsis,
  calificacionPromedio, numeroVistas,
  disponibleEn: [String], activo,
  resenasDestacadas: [ { autor, texto } ]
}

// valoraciones
{ _id, usuarioId, contenidoId, puntuacion, comentario, fecha }

// listas
{ _id, usuarioId, nombreLista, contenidos: [contenidoId], fechaCreacion }
```

## 2. Población de datos

- 9 usuarios (`insertOne` + `insertMany`) con historiales de distinto tamaño
  (desde vacío hasta 7 elementos) y distintos planes de suscripción.
- 12 contenidos (`insertMany`) mezclando películas y series, con géneros,
  duración/temporadas, disponibilidad por país y reseñas destacadas embebidas.
- 15 valoraciones (`insertMany`) distribuidas entre distintos usuarios y
  contenidos.
- 5 listas personalizadas (`insertMany`).

## 3. Consultas y operadores utilizados

| Operador | Ejemplo implementado |
|----------|-----------------------|
| `$gt`    | Películas con duración > 120 min |
| `$lt`    | Contenidos con calificación < 4.0 |
| `$eq`    | Usuarios con plan "Premium" |
| `$in`    | Contenidos disponibles en Colombia o Chile |
| `$and`   | Series de Drama lanzadas después de 2021 |
| `$or`    | Contenidos de Terror o Ciencia Ficción |
| `$regex` | Búsqueda de títulos que contienen "silenci" (insensible a mayúsculas) |
| `$expr` + `$size` | Usuarios que vieron más de 5 contenidos |

## 4. Actualizaciones y eliminaciones

- `updateOne`: corrección puntual de calificación; `$push` de un nuevo ítem
  al historial de un usuario.
- `updateMany`: incremento de vistas (`$inc`) para todas las series;
  desactivación de contenidos poco vistos; desactivación de suscripción de
  usuarios sin historial.
- `deleteOne`: eliminación de una valoración puntual.
- `deleteMany`: limpieza de contenidos inactivos sin valoraciones asociadas.

## 5. Índices creados y justificación

| Índice | Campo(s) | Motivo |
|--------|----------|--------|
| `idx_contenidos_titulo` | `titulo` | Búsquedas frecuentes por título (incluye `$regex`) |
| `idx_contenidos_genero` | `genero` (multikey) | Filtrado frecuente por género en catálogo |
| `idx_usuarios_email_unique` | `email` (único) | Login por email + integridad (evita duplicados) |
| `idx_valoraciones_usuario_contenido` | `usuarioId`, `contenidoId` (compuesto) | Acelera consultas de valoraciones por usuario y por contenido, usadas en las agregaciones |
| `idx_contenidos_anio` | `anioLanzamiento` | Soporta reportes ordenados/filtrados por año |

Verificados con `getIndexes()` sobre `contenidos`, `usuarios` y `valoraciones`.

## 6. Pipelines de agregación (métricas y reportes)

1. **Calificación promedio real y número de reseñas por contenido**
   (`$match`, `$group`, `$sort`, `$project`).
2. **Cantidad de contenidos y vistas totales por género**
   (`$unwind`, `$group`, `$sort`, `$project`).
3. **Top 5 usuarios más activos** por contenidos vistos, con conteo de
   completados (`$unwind`, `$group`, `$sort`, `$limit`, `$project`).
4. **Reporte por país y plan de suscripción** (usuarios activos vs
   inactivos) (`$match`, `$group`, `$sort`, `$project`).
5. **(Extra)** Duración promedio de películas por género, solo géneros
   con más de una película (`$match`, `$unwind`, `$group`, `$sort`, `$project`).

## Cómo ejecutar

```bash
mongosh
> load("streamhub.js")
```

También puede copiarse y pegarse por bloques (por tarea) en la consola
`mongosh` integrada de MongoDB Compass.
