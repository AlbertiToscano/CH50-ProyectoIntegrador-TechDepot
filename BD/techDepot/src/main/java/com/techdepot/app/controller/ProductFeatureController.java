package com.techdepot.app.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techdepot.app.model.ProductFeature;
import com.techdepot.app.service.ProductFeatureService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/productFeature") // localhost:8080/api/v1/productFeature
public class ProductFeatureController {
	
	ProductFeatureService productFeatureService;
	
	public ProductFeatureController(ProductFeatureService productFeatureService) {
		super();
		this.productFeatureService = productFeatureService;
	}


	@GetMapping("{id}") // localhost:8080/api/v1/productFeature/{id}
	ProductFeature getProductFeature(@PathVariable("id") Long id) {
		ProductFeature existingFeature = productFeatureService.getProductFeatureById(id);
		return existingFeature;
	}
	
	
	@GetMapping // localhost:8080/api/v1/productFeature?type="procesadores"&size10&page=0
	Page<ProductFeature> getAllProductsFeaturesByType(
			@RequestParam(
					name="tipo",
					required = false
					) String type,
			@RequestParam(
					name="size",
					required = false,
					defaultValue = "15"
					) int pageSize,
			@RequestParam(
					name="page",
					required = false,
					defaultValue = "0"
					) int pageNumber
			
			){
		return productFeatureService.getAllProductsFeaturesByType(type, pageNumber, pageSize);
	}
	
	
	@PostMapping // http:localhost:8080/api/v1/productFeature
	ResponseEntity<ProductFeature> createProductFeature(@RequestBody ProductFeature newProductFeature){
		ProductFeature typeProductsFeature =
				productFeatureService.createProductFeature(newProductFeature);
				return ResponseEntity.status(201).body(typeProductsFeature);
	}
	
	@PostMapping("/processors") // http:localhost:8080/api/v1/productFeature/processors
	ResponseEntity<ProductFeature> createProductFeatureProcessor(@RequestBody ProductFeature newProductFeature){
		ProductFeature typeProductsFeature =
				productFeatureService.createProductFeature(newProductFeature);
				return ResponseEntity.status(201).body(typeProductsFeature);
	}
	
	@PutMapping("{id}") // http:localhost:8080/api/v1/productFeature/{id}
	ResponseEntity<ProductFeature> updateProductFeature(@PathVariable("id") Long id, @RequestBody ProductFeature productFeature){
		ProductFeature updatedProductFeature = productFeatureService.updateProductFeature(productFeature, id);
		return ResponseEntity.ok(updatedProductFeature);
	}
	
	@DeleteMapping("{id}") // http:localhost:8080/api/v1/productFeature/{id}
	ResponseEntity<Void> deleteProductFeature(@PathVariable("id") Long id){
		productFeatureService.deleteProductFeature(id);
		return ResponseEntity.noContent().build();
		}
	
	
}
