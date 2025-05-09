package com.techdepot.app.util;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
//import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.techdepot.app.model.ProductFeature;
import com.techdepot.app.repository.ProductFeatureRepository;


@Component
@Order(6)
public class ProductFeatureDataLoader implements CommandLineRunner {

	@Autowired
	ProductFeatureRepository productFeatureRepository;
	
	@Override
	public void run(String... args) throws Exception {
		
		//Almacenamiento
		productFeatureRepository.save(new ProductFeature("SSD" ,"almacenamiento" ,"M.2","7400MB/S" ,"1TB"));
		
		//procesadores
		productFeatureRepository.save(new ProductFeature(null, null, null, null, "Procesador", null, null, null, null, null, "5.2 Ghz", null, "DDR5", 120, null, "AM5", false, true));
	}
}