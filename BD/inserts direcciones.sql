-- Insertar registro sin id
-- Se añade en automático el id, ya que colocamos que fuera autoincrementable
-- Cambie que el num_interior pudiera ser null, por si es una casa
INSERT INTO direcciones (nombre_completo, telefono, calle, num_exterior, num_interior, colonia, codigo_postal, ciudad, estado, referencias, usuarios_id)
VALUES
("Karla Gaga", "5512345678", "Springfield", "37", null, "Tepito", "72750", "Cholula", "Puebla", "rancho pasando la iglesia",1), 
("Shrek Sánchez", "5510203040", "Wallaby", "42", null, "Doctores", "56330", "Chimalhuacán", "Nayarit", "junto al pantano con un arbol",2),
("José Madero", "5560708090", "Elm street", "13", "25", "Morelos", "57000", "Nezayork", "Estado de México", "edificio amarillo junto al oxxo",3),
("Fiona Díaz", "5520030044", "Museo", "150", null, "San Pablo Tepetlapa", "89060", "Tampico", "Tamaulipas", "barda de patio con piedra de cantera",4),
("Juana Lavigne", "5567891011", "O'Gorman", "81", null, "San Ángel", "1060", "Álvaro Obregón", "Ciudad de México", "casa azul frente a puesto de tacos",5);

-- Mostrar la estructura de la tabla
SELECT * FROM direcciones;

