-- Insertar productos con sus caracteristicas
INSERT INTO productos (nombre, descripcion, marca, modelo, categoria, precio, stock, imagen, caracteriticas_de_productos_id)
VALUES 
('SSD NVMe 1TB', 'Unidad de almacenamiento SSD de alta velocidad',"Forgeon","Forgeon Nimbus PRO","almacenamiento",2099, 15,"/img productos/alm1.webp", 1),
('Fuente 850W ATX', 'Fuente de alimentación de 850W para PC de alto rendimiento',"Forgeon","Forgeon Bolt PSU 850W", "fuente de alimentacion", 3199, 10,"/img productos/fue1.webp", 3),
('Procesador Ryzen 9', 'Procesador AMD Ryzen 9 con alto rendimiento',"AMD", "AMD Ryzen 9800X3D", "procesador", 11999, 8, "/img productos/pro1.webp",4),
('Tarjeta Madre AM4 DDR4', 'Tarjeta madre compatible con procesadores AM4',"Asus","Asus ROG STRIX B550-A GAMING","tarjeta madre", 3499, 12,"/img productos/mot1.webp", 5),
('SSD NVMe 500GB', 'SSD de 500GB con tecnología PCIe 3.0',"Kingston","Kingston NV2","almacenamiento", 1199, 20,"/img productos/alm3.webp", 2);

SELECT * FROM productos;