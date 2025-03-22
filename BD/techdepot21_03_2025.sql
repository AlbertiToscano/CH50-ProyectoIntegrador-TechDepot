-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: techdepot
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `caracteristicas_de_productos`
--

DROP TABLE IF EXISTS `caracteristicas_de_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caracteristicas_de_productos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `compatibilidad` varchar(45) DEFAULT NULL,
  `conectividad` varchar(45) DEFAULT NULL,
  `ddr` varchar(45) DEFAULT NULL,
  `frecuencia` varchar(45) DEFAULT NULL,
  `disipador` bit(1) DEFAULT NULL,
  `graficos_integrados` bit(1) DEFAULT NULL,
  `tipo_de_impresion` varchar(45) DEFAULT NULL,
  `procesador` varchar(45) DEFAULT NULL,
  `memoria ram` varchar(45) DEFAULT NULL,
  `rgb` varchar(45) DEFAULT NULL,
  `tamaño` varchar(45) DEFAULT NULL,
  `socket` varchar(45) DEFAULT NULL,
  `almacenamiento` varchar(45) DEFAULT NULL,
  `capacidad_de_almacenamiento` varchar(45) DEFAULT NULL,
  `tdp` int DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `velocidad` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristicas_de_productos`
--

LOCK TABLES `caracteristicas_de_productos` WRITE;
/*!40000 ALTER TABLE `caracteristicas_de_productos` DISABLE KEYS */;
INSERT INTO `caracteristicas_de_productos` VALUES (1,NULL,'M.2',NULL,NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,NULL,NULL,NULL,'SSD','1TB',NULL,'almacenamiento','7400MB/S'),(2,NULL,NULL,'DDR5','5.2 Ghz',_binary '\0',_binary '',NULL,NULL,NULL,NULL,NULL,'AM5',NULL,NULL,120,'Procesador',NULL),(3,NULL,'M.2',NULL,NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,NULL,NULL,NULL,'SSD','1TB',NULL,'almacenamiento','7400MB/S'),(4,NULL,NULL,'DDR5','5.2 Ghz',_binary '\0',_binary '',NULL,NULL,NULL,NULL,NULL,'AM5',NULL,NULL,120,'Procesador',NULL),(5,NULL,'M.2',NULL,NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,NULL,NULL,NULL,'SSD','1TB',NULL,'almacenamiento','7400MB/S'),(6,NULL,NULL,'DDR5','5.2 Ghz',_binary '\0',_binary '',NULL,NULL,NULL,NULL,NULL,'AM5',NULL,NULL,120,'Procesador',NULL);
/*!40000 ALTER TABLE `caracteristicas_de_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `fecha_entrega` date DEFAULT NULL,
  `fecha_compra` datetime(6) NOT NULL,
  `estado_compra` varchar(255) NOT NULL,
  `subtotal` double DEFAULT NULL,
  `total` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,'2025-03-05','2025-02-25 23:30:00.000000','Pendiente',2212,2245),(2,'2024-12-03','2024-11-25 23:30:00.000000','Completo',5756,5756),(3,'2024-03-13','2024-02-25 23:30:00.000000','Completo',264,2212),(4,'2023-04-30','2023-03-25 23:30:00.000000','Cancelado',3456,2212),(5,'2023-11-15','2023-10-25 23:30:00.000000','Pendiente',534,2212),(6,'2024-07-25','2024-07-25 23:30:00.000000','Completo',2423,2212),(7,'2025-03-05','2025-02-25 23:30:00.000000','Pendiente',2212,2245),(8,'2024-12-03','2024-11-25 23:30:00.000000','Completo',5756,5756),(9,'2024-03-13','2024-02-25 23:30:00.000000','Completo',264,2212),(10,'2023-04-30','2023-03-25 23:30:00.000000','Cancelado',3456,2212),(11,'2023-11-15','2023-10-25 23:30:00.000000','Pendiente',534,2212),(12,'2024-07-25','2024-07-25 23:30:00.000000','Completo',2423,2212),(13,'2025-03-05','2025-02-25 23:30:00.000000','Pendiente',2212,2245),(14,'2024-12-03','2024-11-25 23:30:00.000000','Completo',5756,5756),(15,'2024-03-13','2024-02-25 23:30:00.000000','Completo',264,2212),(16,'2023-04-30','2023-03-25 23:30:00.000000','Cancelado',3456,2212),(17,'2023-11-15','2023-10-25 23:30:00.000000','Pendiente',534,2212),(18,'2024-07-25','2024-07-25 23:30:00.000000','Completo',2423,2212);
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `active` bit(1) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `num_exterior` varchar(45) NOT NULL,
  `num_interior` varchar(45) DEFAULT NULL,
  `nombre_completo` varchar(70) NOT NULL,
  `colonia` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `referencias` varchar(200) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `calle` varchar(45) NOT NULL,
  `codigo_postal` varchar(45) NOT NULL,
  `fk_users_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKtpw362vynepieyvaeh0pcqxin` (`nombre_completo`),
  KEY `FKhsq2bstronqxtlvyx8gojeh24` (`fk_users_id`),
  CONSTRAINT `FKhsq2bstronqxtlvyx8gojeh24` FOREIGN KEY (`fk_users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metodos_de_pago`
--

DROP TABLE IF EXISTS `metodos_de_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metodos_de_pago` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `banco` varchar(45) DEFAULT NULL,
  `num_tarjeta` varchar(45) DEFAULT NULL,
  `fecha_de_expiracion` date DEFAULT NULL,
  `tipo_de_pago` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metodos_de_pago`
--

LOCK TABLES `metodos_de_pago` WRITE;
/*!40000 ALTER TABLE `metodos_de_pago` DISABLE KEYS */;
INSERT INTO `metodos_de_pago` VALUES (1,'Banco A','1234567890123456','2025-12-31','Tarjeta de crédito'),(2,'Banco B','9876543210987654','2026-11-30','Tarjeta de débito'),(3,'PayPal Inc.',NULL,NULL,'PayPal'),(4,'Banco C','5678901234567890','2027-03-25','Tarjeta de crédito'),(5,'Banco D',NULL,NULL,'Transferencia bancaria'),(6,'Banco A','1234567890123456','2025-12-31','Tarjeta de crédito'),(7,'Banco B','9876543210987654','2026-11-30','Tarjeta de débito'),(8,'PayPal Inc.',NULL,NULL,'PayPal'),(9,'Banco C','5678901234567890','2027-03-25','Tarjeta de crédito'),(10,'Banco D',NULL,NULL,'Transferencia bancaria'),(11,'Banco A','1234567890123456','2025-12-31','Tarjeta de crédito'),(12,'Banco B','9876543210987654','2026-11-30','Tarjeta de débito'),(13,'PayPal Inc.',NULL,NULL,'PayPal'),(14,'Banco C','5678901234567890','2027-03-25','Tarjeta de crédito'),(15,'Banco D',NULL,NULL,'Transferencia bancaria');
/*!40000 ALTER TABLE `metodos_de_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `marca` varchar(45) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `precio` double NOT NULL,
  `stock` int NOT NULL,
  `fk_caracteristicas_de_productos_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKt99ubp6qfxfbamfthce0399r3` (`fk_caracteristicas_de_productos_id`),
  CONSTRAINT `FKt99ubp6qfxfbamfthce0399r3` FOREIGN KEY (`fk_caracteristicas_de_productos_id`) REFERENCES `caracteristicas_de_productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Forgeon',' almacenamiento',' velocidad de lectura de hasta 7400 MB/s. controlador PCIe Gen4 y tecnología flash NAND de última generación. compatible con PS5.',' /img productos/alm1.webp','Forgeon Nimbus PRO','Forgeon Nimbus PRO Disco SSD 1TB 7400MB/S NVMe PCIe 4.0 M.2 Gen4',2099,12,NULL),(2,'WD','almacenamiento','Entra en acción al instante con el WD_BLACK™ SN770 NVMe™ SSD. cuenta con la interfaz PCIe® Gen4, ofrece una velocidad de hasta 5150 MB/s (en los modelos de 1 TB y 2 TB).',' /img productos/alm2.webp','WD Black SN770','WD Black SN770 2TB Disco SSD 5150MB/S NVMe PCIe 4.0 M.2 Gen4 16GT/s',2589,16,NULL),(3,'AMD','procesador','Procesador AMD Ryzen 7 9800X3D / AM5 / Up to 5.2 GHz / 8-Core / 96MB L3 Cache / AMD Radeon™ Graphics / No Incluye Disipador / 100-100001084WOF',' /img productos/pro1.webp','AMD Ryzen 9800X3D','Procesador AMD Ryzen 7 9800X3D',11999,10,NULL),(4,'AMD','procesador','Procesador AMD Ryzen 7 9800X3D / AM5 / Up to 5.2 GHz / 8-Core / 96MB L3 Cache / AMD Radeon™ Graphics / No Incluye Disipador / 100-100001084WOF',' /img productos/pro2.webp','AMD Ryzen 5 7600X','Procesador AMD Ryzen 5 7600X ',4599,2,NULL),(5,'Tempest','gabinete','La nueva torre de Tempest viene a revolucionar tu set up, con sus medidas compactas que la hacen perfecta para cualquier espacio.',' /img productos/gab1.webp','Tempest Shade RGB','Tempest Shade RGB Torre ATX Negra',1399,8,NULL),(6,'Forgeon',' almacenamiento',' velocidad de lectura de hasta 7400 MB/s. controlador PCIe Gen4 y tecnología flash NAND de última generación. compatible con PS5.',' /img productos/alm1.webp','Forgeon Nimbus PRO','Forgeon Nimbus PRO Disco SSD 1TB 7400MB/S NVMe PCIe 4.0 M.2 Gen4',2099,12,NULL),(7,'WD','almacenamiento','Entra en acción al instante con el WD_BLACK™ SN770 NVMe™ SSD. cuenta con la interfaz PCIe® Gen4, ofrece una velocidad de hasta 5150 MB/s (en los modelos de 1 TB y 2 TB).',' /img productos/alm2.webp','WD Black SN770','WD Black SN770 2TB Disco SSD 5150MB/S NVMe PCIe 4.0 M.2 Gen4 16GT/s',2589,16,NULL),(8,'AMD','procesador','Procesador AMD Ryzen 7 9800X3D / AM5 / Up to 5.2 GHz / 8-Core / 96MB L3 Cache / AMD Radeon™ Graphics / No Incluye Disipador / 100-100001084WOF',' /img productos/pro1.webp','AMD Ryzen 9800X3D','Procesador AMD Ryzen 7 9800X3D',11999,10,NULL),(9,'AMD','procesador','Procesador AMD Ryzen 7 9800X3D / AM5 / Up to 5.2 GHz / 8-Core / 96MB L3 Cache / AMD Radeon™ Graphics / No Incluye Disipador / 100-100001084WOF',' /img productos/pro2.webp','AMD Ryzen 5 7600X','Procesador AMD Ryzen 5 7600X ',4599,2,NULL),(10,'Tempest','gabinete','La nueva torre de Tempest viene a revolucionar tu set up, con sus medidas compactas que la hacen perfecta para cualquier espacio.',' /img productos/gab1.webp','Tempest Shade RGB','Tempest Shade RGB Torre ATX Negra',1399,8,NULL),(11,'Forgeon',' almacenamiento',' velocidad de lectura de hasta 7400 MB/s. controlador PCIe Gen4 y tecnología flash NAND de última generación. compatible con PS5.',' /img productos/alm1.webp','Forgeon Nimbus PRO','Forgeon Nimbus PRO Disco SSD 1TB 7400MB/S NVMe PCIe 4.0 M.2 Gen4',2099,12,NULL),(12,'WD','almacenamiento','Entra en acción al instante con el WD_BLACK™ SN770 NVMe™ SSD. cuenta con la interfaz PCIe® Gen4, ofrece una velocidad de hasta 5150 MB/s (en los modelos de 1 TB y 2 TB).',' /img productos/alm2.webp','WD Black SN770','WD Black SN770 2TB Disco SSD 5150MB/S NVMe PCIe 4.0 M.2 Gen4 16GT/s',2589,16,NULL),(13,'AMD','procesador','Procesador AMD Ryzen 7 9800X3D / AM5 / Up to 5.2 GHz / 8-Core / 96MB L3 Cache / AMD Radeon™ Graphics / No Incluye Disipador / 100-100001084WOF',' /img productos/pro1.webp','AMD Ryzen 9800X3D','Procesador AMD Ryzen 7 9800X3D',11999,10,NULL),(14,'AMD','procesador','Procesador AMD Ryzen 7 9800X3D / AM5 / Up to 5.2 GHz / 8-Core / 96MB L3 Cache / AMD Radeon™ Graphics / No Incluye Disipador / 100-100001084WOF',' /img productos/pro2.webp','AMD Ryzen 5 7600X','Procesador AMD Ryzen 5 7600X ',4599,2,NULL),(15,'Tempest','gabinete','La nueva torre de Tempest viene a revolucionar tu set up, con sus medidas compactas que la hacen perfecta para cualquier espacio.',' /img productos/gab1.webp','Tempest Shade RGB','Tempest Shade RGB Torre ATX Negra',1399,8,NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reseñas`
--

DROP TABLE IF EXISTS `reseñas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reseñas` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `comentario` text,
  `fecha` date NOT NULL,
  `calificacion` int NOT NULL,
  `id_producto` bigint NOT NULL,
  `id_usuario` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKokbfxrgg89h81ha3j1082swym` (`id_producto`),
  KEY `FK604b5dw3p2n0i8lfrk1r19u49` (`id_usuario`),
  CONSTRAINT `FK604b5dw3p2n0i8lfrk1r19u49` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`),
  CONSTRAINT `FKokbfxrgg89h81ha3j1082swym` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reseñas`
--

LOCK TABLES `reseñas` WRITE;
/*!40000 ALTER TABLE `reseñas` DISABLE KEYS */;
INSERT INTO `reseñas` VALUES (1,'Excelente producto, muy recomendable.','2025-03-13',5,1,2),(2,'Buena calidad, pero un poco caro.','2025-03-11',4,5,3),(3,'Esperaba más del producto.','2025-03-08',3,4,4),(4,'No cumplió mis expectativas.','2025-03-03',2,3,5),(5,'Me encantó, lo recomiendo.','2025-03-05',5,2,1),(6,'Excelente producto, muy recomendable.','2025-03-13',5,1,2),(7,'Buena calidad, pero un poco caro.','2025-03-11',4,5,3),(8,'Esperaba más del producto.','2025-03-08',3,4,4),(9,'No cumplió mis expectativas.','2025-03-03',2,3,5),(10,'Me encantó, lo recomiendo.','2025-03-05',5,2,1);
/*!40000 ALTER TABLE `reseñas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(400) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Permisos completos','Administrador'),(2,'Permisos Limitados','Customer'),(3,'Permisos completos','Administrador'),(4,'Permisos Limitados','Customer'),(5,'Permisos completos','Administrador'),(6,'Permisos Limitados','Customer');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `active` bit(1) NOT NULL,
  `avatar` varchar(300) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fk_role_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  KEY `FK217q85dy9gx4q1rn3ncj4l94o` (`fk_role_id`),
  CONSTRAINT `FK217q85dy9gx4q1rn3ncj4l94o` FOREIGN KEY (`fk_role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,_binary '',NULL,'2002-11-05','abuela;prueba@gmail.coml','Abuela Barronco2','Fernandez','hola1234',1),(2,_binary '',NULL,'2002-11-05','alpere@gmail.coml','Alberti Ramirez','Perez','hola1234',1),(3,_binary '',NULL,NULL,'nancyvale@gmail.com','nancy','valeriana','123abc456def',2),(4,_binary '',NULL,NULL,'chayo@gmail.com','jesus','chayo','123456',2),(5,_binary '',NULL,NULL,'nanciano@gmail.com','nandiux','nanciano','123456',2),(6,_binary '',NULL,NULL,'shrek@gmail.com','shrek','sanchez','123456',2),(7,_binary '',NULL,NULL,'techdepot@gmail.com','Alberti Toscano','chayo','123456',2),(8,_binary '',NULL,NULL,'prueba2@gmail.com','pruebados','tres','123456',2),(9,_binary '',NULL,NULL,'fgh@gmail.com','ty','fgh','123',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-21 10:40:38
