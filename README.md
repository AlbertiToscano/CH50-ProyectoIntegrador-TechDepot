# CH50-ProyectoIntegrador-TechDepot

Este proyecto es una aplicación de comercio electrónico, construida utilizando HTML, JavaScript, Java (Spring Boot), MySQL, Bootstrap y API REST. Permite a los usuarios navegar productos, agregarlos al carrito, realizar compras y gestionar sus pedidos.

Tecnologías Utilizadas
Frontend:

HTML5: Estructura básica de la página web.

JavaScript: Lógica interactiva y gestión de eventos en el frontend.

Bootstrap: Framework CSS para diseño responsivo y componentes estilizados.

Backend:

Java (Spring Boot): Framework para crear el servidor y la API REST.

MySQL: Sistema de gestión de bases de datos relacional para almacenar la información del comercio electrónico, usuarios, productos y pedidos.

Spring Data JPA: ORM para facilitar la interacción con la base de datos MySQL.

APIs REST: Implementación de API RESTful para la interacción entre el frontend y el backend.

Requisitos
Java 17 o superior.

MySQL 5.7 o superior.

Gradle 

Node.js y npm 

Instalación
1. Clonar el repositorio
Primero, clona este repositorio a tu máquina local:

bash
Copiar
git clone git@github.com:AlbertiToscano/CH50-ProyectoIntegrador-TechDepot.git

2. Configurar la base de datos
Asegúrate de tener MySQL instalado en tu máquina. Luego, crea una base de datos para la aplicación de comercio electrónico:

sql
Copiar
CREATE DATABASE ecommerce;
3. Configuración del backend (Spring Boot)
Configura las credenciales de la base de datos en el archivo application.properties:

properties
Copiar
spring.datasource.url=jdbc:mysql://localhost:3306/
spring.datasource.username=root
spring.datasource.password=tu_contraseña
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect
Ejecuta la aplicación Spring Boot:

Gradle, ejecuta:

bash
Copiar
./gradlew bootRun
4. Configuración del frontend
Instalar las dependencias de frontend (si estás usando herramientas modernas como Webpack o npm):

bash
Copiar
cd frontend
npm install
Ejecutar el frontend:

Si estás usando npm, ejecuta:

bash
Copiar
npm start
Esto abrirá el frontend en tu navegador en el puerto configurado (por defecto, http://localhost:8080).

