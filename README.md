# Carlos Plates

CarlosPlates es un sistema básico de reconocimiento de matrículas de vehículos que utiliza Tesseract.js para reconocer texto en imágenes y MongoDB para almacenar las matrículas detectadas.

## Tecnologías Utilizadas

- **Express:** Framework de Node.js para construir aplicaciones web y APIs.
- **Multer:** Middleware para manejar la subida de archivos.
- **Tesseract.js:** Librería para reconocimiento óptico de caracteres (OCR).
- **Mongoose:** ODM (Object Data Modeling) para MongoDB en Node.js.

## Tesseract.js

Tesseract.js es una biblioteca JavaScript que proporciona acceso a Tesseract OCR (Reconocimiento Óptico de Caracteres) en la web. 

En el proyecto actual, Tesseract.js se utiliza para procesar imágenes de matrículas de vehículos y extraer el texto de ellas. Esto permite al sistema de reconocimiento de matrículas identificar las matrículas en las imágenes subidas. Una vez que Tesseract.js ha reconocido el texto en la imagen, el resultado se guarda en la base de datos MongoDB para su posterior recuperación y visualización.

## Endpoints

- **POST /upload:** Esta ruta se utiliza para subir una imagen que contiene una matrícula. Debe utilizarse el campo "photo" para enviar la imagen. El sistema la procesa, reconoce el texto y lo guarda en la base de datos.

- **DELETE /plate/:id:** Permite eliminar una matrícula específica de la base de datos utilizando su ID.

- **GET /plates:** Retorna todas las matrículas guardadas en la base de datos.
