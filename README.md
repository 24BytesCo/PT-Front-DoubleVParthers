**Cliente Angular con Características Avanzadas**

---

### Descripción del Cliente Angular

Este proyecto de cliente fue desarrollado con Angular, aprovechando diversas características para garantizar una experiencia eficiente y segura. A continuación, se detallan las decisiones de diseño y las tecnologías utilizadas.

### Características Principales

- **Carga Perezosa:** Se implementó la carga perezosa de módulos para garantizar una eficiente carga de recursos. Esta técnica permite cargar módulos solo cuando son necesarios, optimizando el rendimiento de la aplicación.

- **Modularización del Código:** Se aplicó la modularización del código para mejorar la mantenibilidad y facilitar la escalabilidad del proyecto. Los diferentes componentes y funcionalidades se organizaron en módulos independientes.

### Interceptor para Seguridad

- **Token de Autenticación:** Se implementó un interceptor para agregar automáticamente el token de autenticación a todas las peticiones HTTP. Esta funcionalidad garantiza la seguridad del sistema al validar la autenticidad de las solicitudes.

### Interceptor para Experiencia de Usuario

- **Indicador de Carga (Loader):** Un interceptor se utilizó para gestionar la visualización de un indicador de carga durante las solicitudes HTTP. Esto mejora la experiencia del usuario al proporcionar retroalimentación visual sobre el progreso de las operaciones.

### Interceptor para Manejo de Errores

- **Centralización de Errores:** Se implementó un interceptor centralizado para manejar los errores provenientes de las peticiones HTTP. Esta estrategia optimiza la detección y el tratamiento de posibles problemas en la comunicación entre el cliente y el servidor.

### Tecnologías Utilizadas

- **Node 20.9.0:** La versión específica de Node.js utilizada para garantizar la compatibilidad y estabilidad del entorno de desarrollo.

- **Angular 14:** La versión 14 de Angular fue la elección para aprovechar las últimas características y mejoras en el framework.

### Instrucciones de Ejecución

Para ejecutar el cliente Angular, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js instalado (versión 20.9.0).
3. Navega al directorio del cliente Angular.
4. Ejecuta `npm install` para instalar las dependencias.
5. Ejecuta `ng serve` para iniciar el servidor de desarrollo.
