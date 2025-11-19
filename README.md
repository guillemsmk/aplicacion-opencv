# Aplicacion OpenCV
Documentación – Aplicación de Webcam con Filtros en OpenCV.js
Descripción general

Este proyecto es una aplicación web que utiliza OpenCV.js y la API de la webcam del navegador para capturar video en tiempo real y aplicar diferentes filtros visuales.
El usuario puede activar múltiples filtros simultáneamente y ajustar la intensidad de aquellos que lo permiten.

Funciones principales

Captura de webcam: se obtiene mediante navigator.mediaDevices.getUserMedia().

Renderizado en tiempo real: cada frame se dibuja sobre un <canvas>.

Procesamiento con OpenCV.js: usando matrices Mat() y funciones como:

cv.GaussianBlur

cv.Canny

cv.cvtColor

cv.resize

Filtros múltiples simultáneos.

Sliders de intensidad individuales según el filtro activo.

Filtros disponibles
1. Blanco y negro (Gray)

Convierte la imagen a escala de grises.
No tiene control de intensidad.

2. Espejo (Mirror)

Refleja horizontalmente la imagen.
No tiene control de intensidad.

3. Sketch (Dibujo)

Convierte la imagen en un estilo “dibujo” mediante detección de bordes.
La intensidad controla los valores de Canny (umbral bajo y alto).

4. Blur (Desenfoque)

Aplica un desenfoque gaussiano.
La intensidad controla el tamaño del kernel (entre 3 y 21 píxeles).

5. Pixel Art

Reduce y vuelve a ampliar la imagen usando interpolación nearest neighbor.
La intensidad controla el tamaño del pixel (pixelado más grande → imagen más retro).

Qué puede hacer la aplicación

Mostrar la webcam en tiempo real.

Aplicar múltiples filtros a la vez.

Ajustar la intensidad de filtros compatibles.

Combinar filtros para crear efectos personalizados.

Mostrar el resultado procesado de forma instantánea.

Qué NO puede hacer la aplicación

No graba video ni toma fotos de forma nativa.

No aplica filtros 3D sin módulos adicionales.

No guarda la configuración del usuario.

No ajusta brillo/contraste de hardware.

No funciona sin cámara o sin permisos del navegador.

Requisitos del navegador

Debe ejecutarse desde un servidor local (no funciona en file://).

El navegador debe permitir acceso a la webcam.

Se debe cargar correctamente OpenCV.js desde la CDN oficial.

Cómo ejecutar la aplicación

Guardar el archivo HTML en una carpeta local.

Ejecutar un servidor local:

VSCode → Live Server

Python →

python -m http.server 8000


Abrir en el navegador:

http://localhost:8000


Permitir acceso a la webcam.

Uso recomendado

Activar un filtro y ajustar su intensidad para experimentar.

Combinar filtros como Pixel Art + Blur o Sketch + Mirror para efectos más creativos.

Usar iluminación estable para obtener mejores resultados.
