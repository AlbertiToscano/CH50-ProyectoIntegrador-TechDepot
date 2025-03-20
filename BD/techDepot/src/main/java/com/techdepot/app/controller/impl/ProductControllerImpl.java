package com.techdepot.app.controller.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techdepot.app.controller.ProductController;
import com.techdepot.app.model.Product;
import com.techdepot.app.service.ProductService;


@RestController
@RequestMapping("api/v1/products")
public class ProductControllerImpl implements ProductController{

	private final ProductService productService;
	
	public ProductControllerImpl(ProductService productService) {
		this.productService= productService;
	}

	@Override
	@GetMapping("/api/v1/products")
	public ResponseEntity<List<Product>> getAllProducts() {
		List<Product> products = productService.getAllProducts();
		return ResponseEntity.ok(products);
	}

	@Override
	public ResponseEntity<Product> createProduct(@RequestBody Product newProduct) {
		Product createdProduct = productService.createProduct(newProduct);
		return ResponseEntity.status(201).body(createdProduct);
	}

	@Override
	public ResponseEntity<Product> updateProduct(Product updatedProduct, Long id) {
		Product updated = productService.updateProduct(updatedProduct, id);
		 return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
	}

	@Override
	public ResponseEntity<String> deleteProduct(Long id) {
		productService.deleteProduct(id);
		return ResponseEntity.ok("Producto" + id + "ha sido eliminado.");
	}
	
	@Override
	 @GetMapping("/{id}")
	    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
	        Optional<Product> product = productService.getProductById(id);
	        if (product.isPresent()) {
	            return new ResponseEntity<>(product.get(), HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	
	
}
