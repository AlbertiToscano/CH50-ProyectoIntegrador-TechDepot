package com.techdepot.app.util;

import java.time.LocalDate; 
import java.time.LocalDateTime;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.techdepot.app.model.Purchases;
import com.techdepot.app.repository.PurchasesRepository;



@Component
@Order(7)
public class PurchasesDataLoader implements CommandLineRunner {
	
	@Autowired
	PurchasesRepository  purchaseRepository;

	private final Logger log = LoggerFactory.getLogger(PurchasesDataLoader.class);
	
	
	@Override
	public void run(String... args) throws Exception {
		
		purchaseRepository.save(new Purchases (LocalDateTime.of(2025, 2, 25, 23, 30),LocalDate.of(2025, 3, 5) , "Pendiente", 2212.00, 2245.00));
		purchaseRepository.save(new Purchases (LocalDateTime.of(2024, 11, 25, 23, 30),LocalDate.of(2024, 12, 3) , "Completo", 5756.00, 5756.00));
		purchaseRepository.save(new Purchases (LocalDateTime.of(2024, 2, 25, 23, 30),LocalDate.of(2024, 3, 13) , "Completo", 264.00, 2212.00));
		purchaseRepository.save(new Purchases (LocalDateTime.of(2023, 3, 25, 23, 30),LocalDate.of(2023, 4, 30) , "Cancelado", 3456.00, 2212.00));
		purchaseRepository.save(new Purchases (LocalDateTime.of(2023, 10, 25, 23, 30),LocalDate.of(2023, 11, 15) , "Pendiente", 534.00, 2212.00));
		purchaseRepository.save(new Purchases (LocalDateTime.of(2024, 7, 25, 23, 30),LocalDate.of(2024, 7, 25) , "Completo", 2423.00, 2212.00));
		
		Optional <Purchases> optionalPurchase = purchaseRepository.findById( 2L );
		if(optionalPurchase.isPresent() ){
			Purchases existingPurchase = optionalPurchase.get();
			log.info(existingPurchase.toString());
		}else {
			log.warn("No hay ninguna compra con este Id");
		}
 
}
}
