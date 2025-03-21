package com.techdepot.app.controller;

import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.techdepot.app.model.Purchases;
import com.techdepot.app.service.PurchasesService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/puchases") // localhost:8080/api/v1 
public class PurchaseController {
	
	PurchasesService purchaseService;

	public PurchaseController(PurchasesService purchaseService) {
		super();
		this.purchaseService = purchaseService;
	}
	
	
	@GetMapping("{id}") // http:localhost:8080/api/v1/customers/{id} 
	Purchases getUserById(@PathVariable("id") Long id){
		Purchases existingPurchases = purchaseService.getPurchaseById(id);
		return existingPurchases;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping
	ResponseEntity< Set<Purchases> >  getAllPurchases() {
		Set<Purchases> purchases = (Set<Purchases>) getAllPurchases();
		return (ResponseEntity<Set<Purchases>>) purchases;
	}
	
	
	
	@PostMapping // http:localhost:8080/api/v1/purchases
	ResponseEntity<Purchases> createPurchase(@RequestBody Purchases newPurchases) {
		Purchases registeredPurchase = purchaseService.createPurchase(newPurchases);
	   //return new ResponseEntity<>(registeredPurchases, HttpStatus.CREATED);
	   return ResponseEntity.status(201).body(registeredPurchase);
	}
	
	
	@PutMapping("{id}") // http:localhost:8080/api/v1/purchases/{id}
	ResponseEntity<Purchases> updatePurchases(@PathVariable("id") Long id ,@RequestBody Purchases purchase) {
		Purchases updatedPurchase = purchaseService.updatePurchase(purchase, id);
		return ResponseEntity.ok(updatedPurchase);
	}
	
	
	
	

}
