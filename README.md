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

## Cuaderno de operaciones

La Isla de las Operaciones ofrece «Operaciones aleatorias» (3, 5 o 10 ejercicios, tres dificultades y opción de mezcla) y «Ejercicios personalizados». Estos últimos se pueden guardar, editar, eliminar y seleccionar: hasta 50 guardados y de 1 a 10 por práctica. Las restas no son negativas; no se divide entre cero. Los números admitidos aparecen en el formulario.

`operations.js` construye el cuaderno con llevadas, préstamos, productos parciales y división larga: divisor fuera de la casita, cociente encima, productos, restas, residuos y cifras que se bajan. Solo el cuadro activo es editable. Al acertar se activa el siguiente; la pista o cualquier error registra la operación como realizada con apoyo. Los cuadros futuros no muestran respuestas. Las monedas corresponden a operaciones completas, no a cada cifra escrita; se guardan al terminar la sesión. Repetir el mismo ejercicio personalizado en el mismo día conserva el registro de práctica sin volver a otorgar sus monedas. Los ejercicios y las misiones terminadas se guardan localmente; una sesión en curso puede reiniciarse al cerrar o actualizar.

Verificado con 12,816 modelos de operaciones, incluidos préstamos entre ceros y ceros dentro del cociente; sesiones completas con y sin apoyo, guardado y edición, prevención de recompensas duplicadas, las tablas existentes y recuperación offline de `operations.js`. Pruebas en vistas de tablet de 768×1024 y 1024×768.
