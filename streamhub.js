
// Usamos (o creamos) la base de datos del proyecto
use streamhub;

// Limpieza inicial por si el script se ejecuta más de una vez (idempotencia)
db.usuarios.drop();
db.contenidos.drop();
db.valoraciones.drop();
db.listas.drop();




// ---- 2.1 usuarios: insertOne (caso individual) ----
db.usuarios.insertOne({
  _id: "u001",
  nombre: "Camila Torres",
  email: "camila.torres@mail.com",
  edad: 28,
  pais: "Colombia",
  fechaRegistro: new Date("2023-01-15"),
  suscripcion: { plan: "Premium", activa: true, fechaInicio: new Date("2023-01-15") },
  generosFavoritos: ["Drama", "Ciencia Ficción"],
  historial: [
    { contenidoId: "c001", fechaVisto: new Date("2024-02-10"), completado: true },
    { contenidoId: "c003", fechaVisto: new Date("2024-03-01"), completado: false }
  ]
});

// ---- 2.2 usuarios: insertMany (población variada) ----
db.usuarios.insertMany([
  {
    _id: "u002", nombre: "Julián Restrepo", email: "julian.restrepo@mail.com",
    edad: 34, pais: "México", fechaRegistro: new Date("2022-11-05"),
    suscripcion: { plan: "Básico", activa: true, fechaInicio: new Date("2022-11-05") },
    generosFavoritos: ["Acción", "Comedia"],
    historial: [
      { contenidoId: "c002", fechaVisto: new Date("2024-01-20"), completado: true },
      { contenidoId: "c004", fechaVisto: new Date("2024-01-25"), completado: true },
      { contenidoId: "c005", fechaVisto: new Date("2024-02-02"), completado: true },
      { contenidoId: "c006", fechaVisto: new Date("2024-02-14"), completado: false },
      { contenidoId: "c007", fechaVisto: new Date("2024-03-05"), completado: true },
      { contenidoId: "c008", fechaVisto: new Date("2024-03-18"), completado: true }
    ]
  },
  {
    _id: "u003", nombre: "Valentina Gómez", email: "valentina.gomez@mail.com",
    edad: 22, pais: "Argentina", fechaRegistro: new Date("2023-06-10"),
    suscripcion: { plan: "Premium", activa: false, fechaInicio: new Date("2023-06-10") },
    generosFavoritos: ["Terror", "Suspenso"],
    historial: [
      { contenidoId: "c009", fechaVisto: new Date("2024-01-11"), completado: true }
    ]
  },
  {
    _id: "u004", nombre: "Andrés Molina", email: "andres.molina@mail.com",
    edad: 41, pais: "Chile", fechaRegistro: new Date("2021-09-30"),
    suscripcion: { plan: "Familiar", activa: true, fechaInicio: new Date("2021-09-30") },
    generosFavoritos: ["Documental", "Drama"],
    historial: [
      { contenidoId: "c001", fechaVisto: new Date("2024-01-05"), completado: true },
      { contenidoId: "c002", fechaVisto: new Date("2024-01-08"), completado: true },
      { contenidoId: "c003", fechaVisto: new Date("2024-01-15"), completado: true },
      { contenidoId: "c010", fechaVisto: new Date("2024-02-20"), completado: true },
      { contenidoId: "c011", fechaVisto: new Date("2024-03-02"), completado: true },
      { contenidoId: "c012", fechaVisto: new Date("2024-03-25"), completado: false },
      { contenidoId: "c004", fechaVisto: new Date("2024-04-01"), completado: true }
    ]
  },
  {
    _id: "u005", nombre: "Sofía Herrera", email: "sofia.herrera@mail.com",
    edad: 19, pais: "Colombia", fechaRegistro: new Date("2024-02-01"),
    suscripcion: { plan: "Básico", activa: true, fechaInicio: new Date("2024-02-01") },
    generosFavoritos: ["Comedia", "Romance"],
    historial: [
      { contenidoId: "c005", fechaVisto: new Date("2024-02-05"), completado: true },
      { contenidoId: "c006", fechaVisto: new Date("2024-02-08"), completado: true }
    ]
  },
  {
    _id: "u006", nombre: "Mateo Vargas", email: "mateo.vargas@mail.com",
    edad: 30, pais: "Perú", fechaRegistro: new Date("2023-03-22"),
    suscripcion: { plan: "Premium", activa: true, fechaInicio: new Date("2023-03-22") },
    generosFavoritos: ["Ciencia Ficción", "Acción"],
    historial: [
      { contenidoId: "c007", fechaVisto: new Date("2024-01-10"), completado: true },
      { contenidoId: "c008", fechaVisto: new Date("2024-01-14"), completado: true },
      { contenidoId: "c009", fechaVisto: new Date("2024-01-19"), completado: true },
      { contenidoId: "c010", fechaVisto: new Date("2024-02-01"), completado: true },
      { contenidoId: "c011", fechaVisto: new Date("2024-02-15"), completado: true },
      { contenidoId: "c001", fechaVisto: new Date("2024-03-01"), completado: true }
    ]
  },
  {
    _id: "u007", nombre: "Laura Jiménez", email: "laura.jimenez@mail.com",
    edad: 25, pais: "España", fechaRegistro: new Date("2022-07-19"),
    suscripcion: { plan: "Básico", activa: false, fechaInicio: new Date("2022-07-19") },
    generosFavoritos: ["Drama"],
    historial: []
  },
  {
    _id: "u008", nombre: "Diego Castaño", email: "diego.castano@mail.com",
    edad: 37, pais: "Colombia", fechaRegistro: new Date("2023-10-02"),
    suscripcion: { plan: "Familiar", activa: true, fechaInicio: new Date("2023-10-02") },
    generosFavoritos: ["Terror", "Acción"],
    historial: [
      { contenidoId: "c009", fechaVisto: new Date("2024-01-30"), completado: true },
      { contenidoId: "c012", fechaVisto: new Date("2024-02-10"), completado: true }
    ]
  },
  {
    _id: "u009", nombre: "Isabella Ruiz", email: "isabella.ruiz@mail.com",
    edad: 27, pais: "México", fechaRegistro: new Date("2023-05-14"),
    suscripcion: { plan: "Premium", activa: true, fechaInicio: new Date("2023-05-14") },
    generosFavoritos: ["Romance", "Comedia"],
    historial: [
      { contenidoId: "c002", fechaVisto: new Date("2024-02-11"), completado: true },
      { contenidoId: "c004", fechaVisto: new Date("2024-02-19"), completado: true }
    ]
  }
]);


db.contenidos.insertMany([
  {
    _id: "c001", titulo: "El Último Horizonte", tipo: "pelicula",
    genero: ["Drama", "Ciencia Ficción"], anioLanzamiento: 2022,
    duracionMinutos: 145, director: "Marina Solís",
    elenco: ["Carlos Ferro", "Ana Beltrán"],
    sinopsis: "Un astronauta debe decidir entre volver a casa o salvar la misión.",
    calificacionPromedio: 4.5, numeroVistas: 15200,
    disponibleEn: ["Colombia", "México", "Chile", "Argentina"],
    activo: true,
    resenasDestacadas: [
      { autor: "CineFan22", texto: "Una obra maestra visual." }
    ]
  },
  {
    _id: "c002", titulo: "Risas en Cadena", tipo: "pelicula",
    genero: ["Comedia"], anioLanzamiento: 2021,
    duracionMinutos: 98, director: "Pedro Naranjo",
    elenco: ["Luis Prada", "Marcela Ríos"],
    sinopsis: "Una boda que sale mal desata una serie de eventos hilarantes.",
    calificacionPromedio: 3.8, numeroVistas: 9800,
    disponibleEn: ["México", "Colombia", "España"],
    activo: true,
    resenasDestacadas: []
  },
  {
    _id: "c003", titulo: "Sombras del Pasado", tipo: "serie",
    genero: ["Drama", "Suspenso"], anioLanzamiento: 2023,
    temporadas: 2, director: "Rocío Fernández",
    elenco: ["Jorge Salcedo", "Diana Vélez"],
    sinopsis: "Un detective retirado investiga un caso que marcó su carrera.",
    calificacionPromedio: 4.7, numeroVistas: 21000,
    disponibleEn: ["Colombia", "Chile", "Perú", "Argentina"],
    activo: true,
    resenasDestacadas: [
      { autor: "SerieAddict", texto: "El mejor guion del año." }
    ]
  },
  {
    _id: "c004", titulo: "Código Rojo", tipo: "pelicula",
    genero: ["Acción", "Suspenso"], anioLanzamiento: 2020,
    duracionMinutos: 132, director: "Fabián Ortega",
    elenco: ["Tatiana Cruz", "Iván Mesa"],
    sinopsis: "Un agente encubierto debe detener un ataque cibernético global.",
    calificacionPromedio: 4.1, numeroVistas: 18400,
    disponibleEn: ["México", "Colombia", "Argentina", "España"],
    activo: true,
    resenasDestacadas: []
  },
  {
    _id: "c005", titulo: "Corazón de Papel", tipo: "pelicula",
    genero: ["Romance", "Comedia"], anioLanzamiento: 2019,
    duracionMinutos: 105, director: "Camila Duarte",
    elenco: ["Sebastián Nova", "Paula Rincón"],
    sinopsis: "Dos escritores rivales terminan enamorándose.",
    calificacionPromedio: 3.9, numeroVistas: 7600,
    disponibleEn: ["Colombia", "Perú"],
    activo: true,
    resenasDestacadas: []
  },
  {
    _id: "c006", titulo: "Risoterapia", tipo: "serie",
    genero: ["Comedia"], anioLanzamiento: 2022,
    temporadas: 3, director: "Nicolás Peña",
    elenco: ["Gabriela Soto", "Andrés Lugo"],
    sinopsis: "Las locuras de un grupo de amigos en su día a día laboral.",
    calificacionPromedio: 4.0, numeroVistas: 11200,
    disponibleEn: ["México", "Colombia"],
    activo: true,
    resenasDestacadas: []
  },
  {
    _id: "c007", titulo: "Frontera Estelar", tipo: "serie",
    genero: ["Ciencia Ficción", "Acción"], anioLanzamiento: 2023,
    temporadas: 1, director: "Elena Ríos",
    elenco: ["Tomás Vega", "Renata Blanco"],
    sinopsis: "La tripulación de una nave debe sobrevivir en territorio desconocido.",
    calificacionPromedio: 4.6, numeroVistas: 25400,
    disponibleEn: ["Colombia", "México", "Chile", "Perú", "Argentina"],
    activo: true,
    resenasDestacadas: [
      { autor: "GalaxyWatcher", texto: "Efectos especiales impresionantes." }
    ]
  },
  {
    _id: "c008", titulo: "Golpe Certero", tipo: "pelicula",
    genero: ["Acción"], anioLanzamiento: 2018,
    duracionMinutos: 125, director: "Ricardo Salas",
    elenco: ["Manuel Ospina", "Carolina Duque"],
    sinopsis: "Un exboxeador busca redención en el ring clandestino.",
    calificacionPromedio: 3.6, numeroVistas: 8900,
    disponibleEn: ["Colombia", "Argentina"],
    activo: true,
    resenasDestacadas: []
  },
  {
    _id: "c009", titulo: "La Casa Silenciosa", tipo: "pelicula",
    genero: ["Terror"], anioLanzamiento: 2021,
    duracionMinutos: 110, director: "Verónica Amaya",
    elenco: ["Felipe Duarte", "Natalia Rueda"],
    sinopsis: "Una familia descubre que su nueva casa guarda un oscuro secreto.",
    calificacionPromedio: 4.2, numeroVistas: 16700,
    disponibleEn: ["México", "Colombia", "Chile"],
    activo: true,
    resenasDestacadas: []
  },
  {
    _id: "c010", titulo: "Voces del Silencio", tipo: "serie",
    genero: ["Documental"], anioLanzamiento: 2020,
    temporadas: 1, director: "Hugo Betancur",
    elenco: [],
    sinopsis: "Un recorrido por historias de superación en Latinoamérica.",
    calificacionPromedio: 4.4, numeroVistas: 5200,
    disponibleEn: ["Colombia", "Perú", "Chile"],
    activo: true,
    resenasDestacadas: []
  },
  {
    _id: "c011", titulo: "Reino de Cenizas", tipo: "serie",
    genero: ["Drama", "Acción"], anioLanzamiento: 2024,
    temporadas: 1, director: "Sara Londoño",
    elenco: ["Emilio Cárdenas", "Lucía Prada"],
    sinopsis: "La caída de un imperio contada desde sus últimos días.",
    calificacionPromedio: 4.8, numeroVistas: 30100,
    disponibleEn: ["Colombia", "México", "Argentina", "España", "Chile"],
    activo: true,
    resenasDestacadas: [
      { autor: "EpicViewer", texto: "Producción a nivel cinematográfico." }
    ]
  },
  {
    _id: "c012", titulo: "Pesadilla Nocturna", tipo: "pelicula",
    genero: ["Terror", "Suspenso"], anioLanzamiento: 2017,
    duracionMinutos: 92, director: "Adrián Cifuentes",
    elenco: ["Melissa Torres", "Julián Sepúlveda"],
    sinopsis: "Un grupo de amigos queda atrapado en un bosque maldito.",
    calificacionPromedio: 3.3, numeroVistas: 6100,
    disponibleEn: ["Colombia", "México"],
    activo: false,
    resenasDestacadas: []
  }
]);

// ---- 2.4 valoraciones: insertMany ----
db.valoraciones.insertMany([
  { _id: "v001", usuarioId: "u001", contenidoId: "c001", puntuacion: 5, comentario: "Impresionante fotografía.", fecha: new Date("2024-02-11") },
  { _id: "v002", usuarioId: "u002", contenidoId: "c002", puntuacion: 4, comentario: "Muy divertida.", fecha: new Date("2024-01-21") },
  { _id: "v003", usuarioId: "u002", contenidoId: "c004", puntuacion: 4, comentario: "Buena acción de principio a fin.", fecha: new Date("2024-01-26") },
  { _id: "v004", usuarioId: "u003", contenidoId: "c009", puntuacion: 5, comentario: "Me dio mucho miedo, excelente.", fecha: new Date("2024-01-12") },
  { _id: "v005", usuarioId: "u004", contenidoId: "c001", puntuacion: 4, comentario: "Buena, aunque algo lenta.", fecha: new Date("2024-01-06") },
  { _id: "v006", usuarioId: "u004", contenidoId: "c003", puntuacion: 5, comentario: "Adictiva desde el primer capítulo.", fecha: new Date("2024-01-16") },
  { _id: "v007", usuarioId: "u004", contenidoId: "c010", puntuacion: 4, comentario: "Muy emotiva.", fecha: new Date("2024-02-21") },
  { _id: "v008", usuarioId: "u005", contenidoId: "c005", puntuacion: 3, comentario: "Entretenida pero predecible.", fecha: new Date("2024-02-06") },
  { _id: "v009", usuarioId: "u006", contenidoId: "c007", puntuacion: 5, comentario: "La mejor serie de ciencia ficción en años.", fecha: new Date("2024-01-11") },
  { _id: "v010", usuarioId: "u006", contenidoId: "c008", puntuacion: 3, comentario: "Correcta, sin más.", fecha: new Date("2024-01-15") },
  { _id: "v011", usuarioId: "u006", contenidoId: "c011", puntuacion: 5, comentario: "Obra maestra.", fecha: new Date("2024-03-02") },
  { _id: "v012", usuarioId: "u008", contenidoId: "c009", puntuacion: 4, comentario: "Buenos sustos.", fecha: new Date("2024-01-31") },
  { _id: "v013", usuarioId: "u008", contenidoId: "c012", puntuacion: 2, comentario: "Guion flojo.", fecha: new Date("2024-02-11") },
  { _id: "v014", usuarioId: "u009", contenidoId: "c002", puntuacion: 4, comentario: "Muy buenas actuaciones.", fecha: new Date("2024-02-12") },
  { _id: "v015", usuarioId: "u009", contenidoId: "c004", puntuacion: 5, comentario: "No paras de ver el reloj de la emoción.", fecha: new Date("2024-02-20") }
]);

// ---- 2.5 listas: insertMany ----
db.listas.insertMany([
  { _id: "l001", usuarioId: "u001", nombreLista: "Mi lista", contenidos: ["c001", "c003", "c011"], fechaCreacion: new Date("2024-01-01") },
  { _id: "l002", usuarioId: "u002", nombreLista: "Para el fin de semana", contenidos: ["c002", "c006", "c008"], fechaCreacion: new Date("2024-01-10") },
  { _id: "l003", usuarioId: "u004", nombreLista: "Documentales pendientes", contenidos: ["c010"], fechaCreacion: new Date("2024-02-01") },
  { _id: "l004", usuarioId: "u006", nombreLista: "Favoritas de Ciencia Ficción", contenidos: ["c001", "c007"], fechaCreacion: new Date("2024-01-05") },
  { _id: "l005", usuarioId: "u008", nombreLista: "Noche de terror", contenidos: ["c009", "c012"], fechaCreacion: new Date("2024-01-20") }
]);


/* ============================================================================
   TASK 3: CONSULTAS 
   ============================================================================ */

// 3.1 $gt -> Películas con duración mayor a 120 minutos
db.contenidos.find(
  { tipo: "pelicula", duracionMinutos: { $gt: 120 } },
  { titulo: 1, duracionMinutos: 1, _id: 0 }
);

// 3.2 $lt -> Contenidos con calificación promedio menor a 4.0
db.contenidos.find(
  { calificacionPromedio: { $lt: 4.0 } },
  { titulo: 1, calificacionPromedio: 1, _id: 0 }
);

// 3.3 $eq -> Usuarios con plan "Premium" (equivalente a { plan: "Premium" })
db.usuarios.find(
  { "suscripcion.plan": { $eq: "Premium" } },
  { nombre: 1, "suscripcion.plan": 1, _id: 0 }
);

// 3.4 $in -> Contenidos disponibles en Colombia o en Chile
db.contenidos.find(
  { disponibleEn: { $in: ["Colombia", "Chile"] } },
  { titulo: 1, disponibleEn: 1, _id: 0 }
);

// 3.5 $and -> Series de Drama lanzadas después de 2021
db.contenidos.find({
  $and: [
    { tipo: "serie" },
    { genero: "Drama" },
    { anioLanzamiento: { $gt: 2021 } }
  ]
});

// 3.6 $or -> Contenidos de Terror o de Ciencia Ficción
db.contenidos.find({
  $or: [
    { genero: "Terror" },
    { genero: "Ciencia Ficción" }
  ]
}, { titulo: 1, genero: 1, _id: 0 });

// 3.7 $regex -> Títulos que contienen la palabra "Silencio" o "Silenciosa"
//     (insensible a mayúsculas con la opción "i")
db.contenidos.find(
  { titulo: { $regex: "silenci", $options: "i" } },
  { titulo: 1, _id: 0 }
);

// 3.8 $regex -> Usuarios cuyo email pertenece al dominio "mail.com" y
//     empieza por una letra específica (ejemplo con anclaje ^)
db.usuarios.find(
  { email: { $regex: "^ca", $options: "i" } },
  { nombre: 1, email: 1, _id: 0 }
);

// 3.9 Usuarios que vieron más de 5 contenidos (usa $expr + $size sobre el
//     arreglo embebido "historial")
db.usuarios.find(
  { $expr: { $gt: [{ $size: "$historial" }, 5] } },
  { nombre: 1, totalVistos: { $size: "$historial" }, _id: 0 }
);

// 3.10 Combinación $and + $or -> Películas activas con calificación >= 4
//      que sean de Acción o de Suspenso
db.contenidos.find({
  $and: [
    { activo: true },
    { calificacionPromedio: { $gt: 3.9 } },
    { $or: [{ genero: "Acción" }, { genero: "Suspenso" }] }
  ]
}, { titulo: 1, genero: 1, calificacionPromedio: 1, _id: 0 });


/* ============================================================================
   TASK 4: ACTUALIZACIONES Y ELIMINACIONES
   ============================================================================ */

// 4.1 updateOne -> Corregir la calificación promedio de un contenido puntual
db.contenidos.updateOne(
  { _id: "c012" },
  { $set: { calificacionPromedio: 3.4 } }
);

// 4.2 updateOne -> Agregar un nuevo elemento al historial de un usuario
//     ($push sobre arreglo embebido)
db.usuarios.updateOne(
  { _id: "u005" },
  { $push: { historial: { contenidoId: "c011", fechaVisto: new Date(), completado: true } } }
);

// 4.3 updateMany -> Incrementar en 1 el número de vistas de todos los
//     contenidos de tipo "serie" ($inc)
db.contenidos.updateMany(
  { tipo: "serie" },
  { $inc: { numeroVistas: 1 } }
);

// 4.4 updateMany -> Marcar como inactivos los contenidos con menos de
//     6000 vistas (regla de "catálogo poco visto")
db.contenidos.updateMany(
  { numeroVistas: { $lt: 6000 } },
  { $set: { activo: false } }
);

// 4.5 updateMany -> Desactivar la suscripción de usuarios que no han
//     iniciado sesión / visto contenido (historial vacío)
db.usuarios.updateMany(
  { historial: { $size: 0 } },
  { $set: { "suscripcion.activa": false } }
);

// 4.6 deleteOne -> Eliminar una valoración puntual (p. ej. reportada como
//     spam o duplicada)
db.valoraciones.deleteOne({ _id: "v013" });

// 4.7 deleteMany -> Eliminar contenidos inactivos y sin ninguna valoración
//     asociada (limpieza de catálogo)
db.contenidos.deleteMany({
  activo: false,
  _id: { $nin: db.valoraciones.distinct("contenidoId") }
});


/* ============================================================================
   TASK 5: ÍNDICES PARA PERFORMANCE
   ============================================================================
   Justificación de cada índice:

   1) contenidos.titulo (ascendente)
      -> Se consulta muy frecuentemente por título exacto o con $regex
         (búsqueda tipo "buscador" en la plataforma). Acelera find() y
         evita un COLLSCAN sobre todo el catálogo.

   2) contenidos.genero (multikey, ascendente)
      -> "genero" es un arreglo; MongoDB crea automáticamente un índice
         multikey. Mejora las consultas por género ($in, $or, $and) que
         son de las más comunes en un catálogo de streaming.

   3) usuarios.email (único)
      -> El email identifica de forma única a cada usuario (login). El
         índice único además garantiza integridad de datos evitando
         registros duplicados.

   4) valoraciones.usuarioId + valoraciones.contenidoId (compuesto)
      -> Acelera dos accesos frecuentes: "todas las valoraciones de un
         usuario" y "todas las valoraciones de un contenido" (usado en
         los pipelines de agregación de la Task 6). También permite
         validar que un usuario no valore dos veces el mismo contenido.

   5) contenidos.anioLanzamiento (ascendente)
      -> Soporta los reportes/orden por año (usado en $sort de las
         agregaciones) y los rangos con $gt/$lt sobre el año.
   ============================================================================ */

db.contenidos.createIndex({ titulo: 1 }, { name: "idx_contenidos_titulo" });
db.contenidos.createIndex({ genero: 1 }, { name: "idx_contenidos_genero" });
db.usuarios.createIndex({ email: 1 }, { unique: true, name: "idx_usuarios_email_unique" });
db.valoraciones.createIndex(
  { usuarioId: 1, contenidoId: 1 },
  { name: "idx_valoraciones_usuario_contenido" }
);
db.contenidos.createIndex({ anioLanzamiento: 1 }, { name: "idx_contenidos_anio" });

// Verificación de índices creados en cada colección
db.contenidos.getIndexes();
db.usuarios.getIndexes();
db.valoraciones.getIndexes();


/* ============================================================================
   TASK 6
   ============================================================================ */


db.valoraciones.aggregate([
  { $match: { puntuacion: { $gte: 1 } } },
  {
    $group: {
      _id: "$contenidoId",
      promedioReal: { $avg: "$puntuacion" },
      totalResenas: { $sum: 1 }
    }
  },
  { $sort: { promedioReal: -1 } },
  {
    $project: {
      _id: 0,
      contenidoId: "$_id",
      promedioReal: { $round: ["$promedioReal", 2] },
      totalResenas: 1
    }
  }
]);


db.contenidos.aggregate([
  { $unwind: "$genero" },
  { $group: { _id: "$genero", totalContenidos: { $sum: 1 }, vistasTotales: { $sum: "$numeroVistas" } } },
  { $sort: { totalContenidos: -1 } },
  { $project: { _id: 0, genero: "$_id", totalContenidos: 1, vistasTotales: 1 } }
]);

// ---- 6.3 Top 5 usuarios más activos por cantidad de contenidos vistos
//      (usa $unwind sobre el historial embebido, $group, $sort, $project) ----
db.usuarios.aggregate([
  { $unwind: "$historial" },
  {
    $group: {
      _id: "$_id",
      nombre: { $first: "$nombre" },
      totalVistos: { $sum: 1 },
      completados: { $sum: { $cond: ["$historial.completado", 1, 0] } }
    }
  },
  { $sort: { totalVistos: -1 } },
  { $limit: 5 },
  { $project: { _id: 0, usuarioId: "$_id", nombre: 1, totalVistos: 1, completados: 1 } }
]);

// ---- 6.4 Reporte combinado: por país, plan más común y cantidad de
//      usuarios activos vs inactivos (usa $match, $group, $sort, $project) ----
db.usuarios.aggregate([
  { $match: {} },
  {
    $group: {
      _id: { pais: "$pais", plan: "$suscripcion.plan" },
      totalUsuarios: { $sum: 1 },
      activos: { $sum: { $cond: ["$suscripcion.activa", 1, 0] } },
      inactivos: { $sum: { $cond: ["$suscripcion.activa", 0, 1] } }
    }
  },
  { $sort: { "_id.pais": 1, totalUsuarios: -1 } },
  {
    $project: {
      _id: 0,
      pais: "$_id.pais",
      plan: "$_id.plan",
      totalUsuarios: 1,
      activos: 1,
      inactivos: 1
    }
  }
]);

// ---- 6.5 (Extra) Promedio de duración de películas por género y año,
//      solo para géneros con más de una película (usa $unwind, $match,
//      $group, $sort, $project) ----
db.contenidos.aggregate([
  { $match: { tipo: "pelicula" } },
  { $unwind: "$genero" },
  {
    $group: {
      _id: "$genero",
      duracionPromedio: { $avg: "$duracionMinutos" },
      cantidadPeliculas: { $sum: 1 }
    }
  },
  { $match: { cantidadPeliculas: { $gt: 1 } } },
  { $sort: { duracionPromedio: -1 } },
  {
    $project: {
      _id: 0,
      genero: "$_id",
      duracionPromedio: { $round: ["$duracionPromedio", 1] },
      cantidadPeliculas: 1
    }
  }
]);

