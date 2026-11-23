# La aventura del tesoro

Aplicación educativa de piratas y animales con dos islas: tablas del 2 al 10 y
operaciones (sumas, restas, multiplicaciones y divisiones). Incluye pistas, música instrumental
original y monedas canjeables por experiencias familiares configuradas por el adulto.

## Publicación
GitHub Pages: rama main, carpeta raíz. No requiere compilación.

## Estado de esta versión
- El progreso se guarda en el navegador, no se sincroniza entre equipos.
- No hay cuentas ni autenticación. El panel adulto es de prueba y no restringe acceso.
- Sin voces. Las instrucciones y explicaciones son escritas.
- La música pirata comienza al pulsar Comenzar; se puede apagar o ajustar el volumen.
- No se incluyen datos personales reales ni credenciales. No introducir contraseñas.
- Las monedas no tienen valor monetario. Las experiencias dependen de la familia.

## Comprobaciones
Pruebas de generación de operaciones, flujo de tablas 2–10 y salto a preguntas,
prevención de premios duplicados, adaptación a tablet vertical y horizontal,
manifiesto, íconos y recuperación de recursos sin conexión.

## App instalable en Android (PWA)

Abrir la página en Chrome y pulsar «Instalar app en mi tablet» o usar el menú del navegador: «Instalar app» / «Agregar a la pantalla principal». No requiere APK ni tienda.

Esperar «Lista para usar sin internet en este dispositivo» antes de desconectarse. El service worker descarga las páginas, el código, los íconos y el manifiesto; la música se sintetiza en el dispositivo. Las fuentes externas son opcionales y tienen alternativas locales. El progreso sigue en localStorage, ligado a este navegador/dispositivo; no hay cuentas ni sincronización. Borrar los datos del sitio también puede borrar el progreso y la descarga offline.

Publicar todos los archivos juntos. En cada actualización que cambie recursos offline, cambiar `CACHE_NAME` en `sw.js` y las versiones de los scripts en las dos páginas y en `ASSETS`. Las actualizaciones esperan a que se cierren las pestañas o a que el usuario pulse «Actualizar app» y confirme; no se recarga automáticamente una misión en curso.
