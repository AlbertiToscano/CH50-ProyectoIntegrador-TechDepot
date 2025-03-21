package com.techdepot.app.repository;

import java.util.List;

import java.util.Optional;

import com.techdepot.app.model.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
	
	
	Optional<Product> getProductById(Long id);
	Optional<Product> getProductByName(String name);
	
	List<Product> getProductByPrice(Double maxPrice);
	
	
	Page<Product> findAll(org.springframework.data.domain.Pageable pageable);
	
	void delete(Product product);
	
	
}
