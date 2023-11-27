**Cliente Angular con Funcionalidades Avanzadas y Seguridad**

---

### Descripción del Cliente Angular

Este proyecto de cliente Angular va más allá de las funcionalidades básicas al incorporar características avanzadas y medidas de seguridad. A continuación, se describen las funcionalidades clave y las tecnologías utilizadas.

### Características Principales

- **Carga Perezosa:** Se implementó la carga perezosa de módulos para optimizar la eficiencia en la carga de recursos. Los módulos se cargan dinámicamente según la necesidad.

- **Modularización del Código:** El código se organizó en módulos independientes, mejorando la mantenibilidad y facilitando la escalabilidad del proyecto.

- **Inicio de Sesión con Seguridad:** Se incorporó la funcionalidad de inicio de sesión, asegurada mediante la generación y gestión de tokens de autenticación.

### Seguridad y Protección de Rutas

- **Guardias (Guards):** Se emplearon guardias para proteger las rutas y garantizar que solo usuarios autenticados tengan acceso a ciertas secciones de la aplicación.

### Interceptor para Seguridad

- **Token de Autenticación:** Se implementó un interceptor para agregar automáticamente el token de autenticación a las peticiones HTTP. Esta funcionalidad garantiza la seguridad del sistema al validar la autenticidad de las solicitudes.

### Interceptor para Experiencia de Usuario

- **Indicador de Carga (Loader):** Un interceptor se utilizó para gestionar la visualización de un indicador de carga durante las solicitudes HTTP, mejorando la experiencia del usuario.

### Interceptor para Manejo de Errores

- **Centralización de Errores:** Se incorporó un interceptor centralizado para manejar los errores provenientes de las peticiones HTTP, optimizando la detección y el tratamiento de posibles problemas.

### Funcionalidades de Usuario

- **Registro y Consulta de Usuarios:** La aplicación permite la creación y consulta de usuarios, asegurando la persistencia de estos en el backend.

### Funcionalidades de Personas

- **Creación y Lectura de Personas:** Los usuarios pueden realizar operaciones de creación y lectura sobre entidades de personas, proporcionando una funcionalidad completa.

### Tecnologías Utilizadas

- **Node 20.9.0:** La versión específica de Node.js utilizada para garantizar la compatibilidad y estabilidad del entorno de desarrollo.

- **Angular 14:** Se empleó la versión 14 de Angular para aprovechar las últimas características y mejoras en el framework.

### Instrucciones de Ejecución

Para ejecutar el cliente Angular, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js instalado (versión 20.9.0).
3. Navega al directorio del cliente Angular.
4. Ejecuta `npm install` para instalar las dependencias.
5. Ejecuta `ng serve` para iniciar el servidor de desarrollo.

**NOTA:** Asegúrate de que el backend esté en ejecución para un funcionamiento completo de las funcionalidades de usuario y personas.


**¡Gracias por explorar el Cliente Angular con Funcionalidades Avanzadas y Seguridad!**
