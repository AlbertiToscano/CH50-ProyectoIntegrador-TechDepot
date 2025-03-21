package com.techdepot.app.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;

import com.techdepot.app.model.Product;

public interface ProductController {

	
	ResponseEntity<List<Product>> getAllProducts();
	
	ResponseEntity< Product > createProduct(Product newProduct);
	
	ResponseEntity< Product > updateProduct(Product Product, Long id);
	
	ResponseEntity<String> deleteProduct(Long id);

	ResponseEntity<Product> getProductById(Long id);
	
	
	
}
