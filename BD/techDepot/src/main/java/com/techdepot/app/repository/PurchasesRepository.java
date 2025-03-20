package com.techdepot.app.repository;

import java.time.LocalDate; 
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.techdepot.app.model.Purchases;





public interface  PurchasesRepository extends CrudRepository  <Purchases, Long>, PagingAndSortingRepository<Purchases, Long>{
	


	List<Purchases> findByStatus(String status);
	List<Purchases> findByTotal(Double total);
	
	
	
	Optional<Purchases> findByPurchaseDate(LocalDateTime purchaseDate);
	Optional< Purchases > findByDeliveryDate(LocalDate deliveryDate);
	
	

	
	
}
