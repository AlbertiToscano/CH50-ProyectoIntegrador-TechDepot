package com.techdepot.app.util;

import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;


import com.techdepot.app.model.Product;
import com.techdepot.app.repository.ProductRepository;

//import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;



@Component
@Order(5)
public class ProductDataLoader implements CommandLineRunner {
	
	@Autowired
	ProductRepository productRepository;

	@Override
	public void run(String... args) throws Exception {
		productRepository.save(new Product( null, "Forgeon Nimbus PRO Disco SSD 1TB 7400MB/S NVMe PCIe 4.0 M.2 Gen4",
				" velocidad de lectura de hasta 7400 MB/s. controlador PCIe Gen4 y tecnología flash NAND de última generación. compatible con PS5.",
				"Forgeon","Forgeon Nimbus PRO", " almacenamiento",2099.00, 12," /img productos/alm1.webp"));
		
		productRepository.save(new Product( null, "WD Black SN770 2TB Disco SSD 5150MB/S NVMe PCIe 4.0 M.2 Gen4 16GT/s", 
				"Entra en acción al instante con el WD_BLACK™ SN770 NVMe™ SSD. cuenta con la interfaz PCIe® Gen4, ofrece una velocidad de hasta 5150 MB/s (en los modelos de 1 TB y 2 TB).",
				"WD","WD Black SN770", "almacenamiento",2589.00, 16," /img productos/alm2.webp"));
		
		productRepository.save(new Product( null, "Procesador AMD Ryzen 7 9800X3D",
				"Procesador AMD Ryzen 7 9800X3D / AM5 / Up to 5.2 GHz / 8-Core / 96MB L3 Cache / AMD Radeon™ Graphics / No Incluye Disipador / 100-100001084WOF",
				"AMD","AMD Ryzen 9800X3D", "procesador",11999.00, 10," /img productos/pro1.webp"));
		
		productRepository.save(new Product( null, "Procesador AMD Ryzen 5 7600X ",
				"Procesador AMD Ryzen 7 9800X3D / AM5 / Up to 5.2 GHz / 8-Core / 96MB L3 Cache / AMD Radeon™ Graphics / No Incluye Disipador / 100-100001084WOF",
				"AMD","AMD Ryzen 5 7600X", "procesador",4599.00, 2," /img productos/pro2.webp"));
		
		productRepository.save(new Product( null, "Tempest Shade RGB Torre ATX Negra",
				"La nueva torre de Tempest viene a revolucionar tu set up, con sus medidas compactas que la hacen perfecta para cualquier espacio.",
				"Tempest","Tempest Shade RGB", "gabinete",1399.00, 8," /img productos/gab1.webp"));
		
		

	}

}
