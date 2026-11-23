# La aventura del tesoro

Aplicación educativa de piratas y animales: tablas del 2 al 10, cálculo mental,
multiplicaciones, divisiones y seis lecturas. Incluye pistas, música instrumental
original y monedas canjeables por experiencias familiares configuradas por el adulto.

## Publicación
GitHub Pages: rama main, carpeta raíz. No requiere compilación.

## Estado de esta versión
- El progreso se guarda en el navegador, no se sincroniza entre equipos.
- No hay cuentas ni autenticación. El panel adulto es de prueba y no restringe acceso.
- La voz usa el motor del navegador: prioriza español latinoamericano y permite una
  voz provisional en español. No está conectado Azure ni otro servicio de voz.
- El audio requiere activación mediante los botones. La calidad depende del dispositivo.
- No se incluyen datos personales reales ni credenciales. No introducir contraseñas.
- Las monedas no tienen valor monetario. Las experiencias dependen de la familia.

## Comprobaciones
Pruebas de operaciones, límites de monedas, canjes y devoluciones sin duplicados,
lecturas, exclusión de tabla 1, narración sin iconos y carga tardía de voces.

## App instalable en Android (PWA)

Abrir la página en Chrome y pulsar «Instalar app en mi tablet» o usar el menú del navegador: «Instalar app» / «Agregar a la pantalla principal». No requiere APK ni tienda.

Esperar «Lista para usar sin internet en este dispositivo» antes de desconectarse. El service worker descarga las páginas, el código, los íconos y el manifiesto; la música se sintetiza en el dispositivo. Las fuentes externas son opcionales y tienen alternativas locales. El progreso sigue en localStorage, ligado a este navegador/dispositivo; no hay cuentas ni sincronización. Borrar los datos del sitio también puede borrar el progreso y la descarga offline.

Publicar todos los archivos juntos. En cada actualización que cambie recursos offline, cambiar `CACHE_NAME` en `sw.js` y las versiones de los scripts en las dos páginas y en `ASSETS`. Las actualizaciones esperan a que se cierren las pestañas o a que el usuario pulse «Actualizar app» y confirme; no se recarga automáticamente una misión en curso.
