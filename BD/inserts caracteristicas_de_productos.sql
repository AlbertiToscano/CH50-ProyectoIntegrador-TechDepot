-- almacenamiento interno
INSERT INTO caracteristicas_de_productos (
tipo,
conectividad,
velocidad,
capacidad_de_almacenamiento
) VALUES ("almacenamiento", "PCIe 4.0", "7400MB/s", "1TB"),("almacenamiento","PCIe 4.0", "3500MB/s", "1TB");

-- Fuentes
INSERT INTO caracteristicas_de_productos (
tipo,
tdp,
tamaño
) VALUES ("Fuente de alimentacion", "850", "ATX");

-- Procesador
INSERT INTO caracteristicas_de_productos (
tipo,
frecuencia,
ddr,
tdp,
socket,
disipador,
graficos_integrados
) VALUES ("procesador", "5.2GHz","DDR5", 120 , "AM5", 0,1);

-- Tarjeta madre
INSERT INTO caracteristicas_de_productos (
tipo,
ddr,
tamaño,
socket
) VALUES ("Tarjeta madre", "DDR4", "ATX", "AM4");

select * from caracteristicas_de_productos;