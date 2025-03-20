-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tech_depot
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tech_depot
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tech_depot` DEFAULT CHARACTER SET utf8 ;
USE `tech_depot` ;

-- -----------------------------------------------------
-- Table `tech_depot`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tech_depot`.`usuarios` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(70) NOT NULL,
  `apellido` VARCHAR(100) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `rol` VARCHAR(30) NOT NULL,
  `contrasenia` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(300) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tech_depot`.`caracteristicas_de_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tech_depot`.`caracteristicas_de_productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `procesador` VARCHAR(45) NULL,
  `memoria RAM` VARCHAR(45) NULL,
  `almacenamiento` VARCHAR(45) NULL,
  `tipo` VARCHAR(45) NULL,
  `compatibilidad` VARCHAR(45) NULL,
  `conectividad` VARCHAR(45) NULL,
  `rgb` VARCHAR(45) NULL,
  `velocidad` VARCHAR(45) NULL,
  `capacidad_de_almacenamiento` VARCHAR(45) NULL,
  `frecuencia` VARCHAR(45) NULL,
  `tipo_de_impresion` VARCHAR(45) NULL,
  `ddr` VARCHAR(45) NULL,
  `tdp` INT NULL,
  `tamaño` VARCHAR(45) NULL,
  `socket` VARCHAR(45) NULL,
  `disipador` TINYINT NULL,
  `graficos_integrados` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tech_depot`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tech_depot`.`productos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(70) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `modelo` VARCHAR(45) NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `stock` INT NOT NULL,
  `imagen` VARCHAR(100) NOT NULL,
  `caracteriticas_de_productos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `caracteriticas_de_productos_id`),
  INDEX `fk_productos_caracteriticas_de_productos1_idx` (`caracteriticas_de_productos_id` ASC) VISIBLE,
  CONSTRAINT `fk_productos_caracteriticas_de_productos1`
    FOREIGN KEY (`caracteriticas_de_productos_id`)
    REFERENCES `tech_depot`.`caracteristicas_de_productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tech_depot`.`metodos_de_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tech_depot`.`metodos_de_pago` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo_de_pago` VARCHAR(45) NOT NULL,
  `banco` VARCHAR(45) NOT NULL,
  `num_tarjeta` VARCHAR(45) NOT NULL,
  `fecha_de_expiracion` DATE NULL,
  `usuarios_id` BIGINT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_metodos_de_pago_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_metodos_de_pago_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `tech_depot`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tech_depot`.`direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tech_depot`.`direcciones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre_completo` VARCHAR(70) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `calle` VARCHAR(45) NOT NULL,
  `num_exterior` VARCHAR(45) NOT NULL,
  `num_interior` VARCHAR(45) NULL,
  `colonia` VARCHAR(45) NOT NULL,
  `codigo_postal` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `referencias` VARCHAR(200) NOT NULL,
  `usuarios_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`, `usuarios_id`),
  INDEX `fk_direcciones_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_direcciones_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `tech_depot`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tech_depot`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tech_depot`.`compras` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `fecha_compra` TIMESTAMP NOT NULL,
  `fecha_entrega_estimada` DATE NOT NULL,
  `estado_compra` VARCHAR(45) NOT NULL,
  `usuarios_id` BIGINT NOT NULL,
  `direcciones_id` INT NOT NULL,
  `metodos_de_pago_id` INT NOT NULL,
  `subtotal` DECIMAL(10,2) NULL,
  `total` DECIMAL(10,2) NULL,
  PRIMARY KEY (`id`, `direcciones_id`, `metodos_de_pago_id`),
  INDEX `fk_compras_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  INDEX `fk_compras_metodos_de_pago1_idx` (`metodos_de_pago_id` ASC) VISIBLE,
  INDEX `fk_compras_direcciones1_idx` (`direcciones_id` ASC) VISIBLE,
  CONSTRAINT `fk_compras_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `tech_depot`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_compras_metodos_de_pago1`
    FOREIGN KEY (`metodos_de_pago_id`)
    REFERENCES `tech_depot`.`metodos_de_pago` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_compras_direcciones1`
    FOREIGN KEY (`direcciones_id`)
    REFERENCES `tech_depot`.`direcciones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tech_depot`.`reseñas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tech_depot`.`reseñas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `calificacion` INT NOT NULL,
  `comentario` VARCHAR(200) NOT NULL,
  `fecha_de_reseña` DATE NOT NULL,
  `usuarios_id` BIGINT NOT NULL,
  `productos_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reseñas_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  INDEX `fk_reseñas_productos1_idx` (`productos_id` ASC) VISIBLE,
  CONSTRAINT `fk_reseñas_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `tech_depot`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reseñas_productos1`
    FOREIGN KEY (`productos_id`)
    REFERENCES `tech_depot`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tech_depot`.`compras_has_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tech_depot`.`compras_has_productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `compras_id` BIGINT NOT NULL,
  `productos_id` BIGINT NOT NULL,
  `cantidad` INT NULL,
  `precio unitario` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `compras_id`, `productos_id`),
  INDEX `fk_compras_has_productos_productos1_idx` (`productos_id` ASC) VISIBLE,
  INDEX `fk_compras_has_productos_compras1_idx` (`compras_id` ASC) VISIBLE,
  CONSTRAINT `fk_compras_has_productos_compras1`
    FOREIGN KEY (`compras_id`)
    REFERENCES `tech_depot`.`compras` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_compras_has_productos_productos1`
    FOREIGN KEY (`productos_id`)
    REFERENCES `tech_depot`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
