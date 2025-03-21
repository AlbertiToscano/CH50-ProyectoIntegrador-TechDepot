package com.techdepot.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import com.techdepot.app.model.Product;

public interface ProductService {
	 
	Product createProduct(Product product);
	
	Optional<Product> getProductById(Long id); 
	    
	Optional<Product> getProductByName(String name);
	
	List<Product> getProductByPrice(Double maxPrice);
	
	
	List<Product> getAllProducts();
	
	Product updateProduct(Product updatedProduct, Long id);
	void deleteProduct(Long id);

	Page<Product> getAllProducts(int pageNumber, int pageSize);
}

