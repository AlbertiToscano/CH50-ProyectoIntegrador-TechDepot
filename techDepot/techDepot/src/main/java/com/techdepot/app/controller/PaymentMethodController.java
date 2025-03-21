package com.techdepot.app.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.techdepot.app.model.PaymentMethod;
import com.techdepot.app.service.PaymentMethodService;




@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/paymentMethod") // localhost:8080/api/v1 
public class PaymentMethodController {
	
	PaymentMethodService paymentMethodService;

	public PaymentMethodController(PaymentMethodService paymentMethodService) {
		this.paymentMethodService = paymentMethodService;
	}
	
	
	@GetMapping("{id}") // http:localhost:8080/api/v1//{id} 
	PaymentMethod getUserById(@PathVariable("id") Long id){
		PaymentMethod existingPaymentMethod = paymentMethodService.getPaymentMethodById(id);
		return existingPaymentMethod;
	}
	

	
	@PostMapping // http:localhost:8080/api/v1/PaymentMethod
	ResponseEntity<PaymentMethod> createPaymentMethod(@RequestBody PaymentMethod newPaymentMethod ){
		PaymentMethod registeredPaymentMethod = paymentMethodService.createPaymentMethod(newPaymentMethod);
	   //return new ResponseEntity<>(registeredPaymentMethod, HttpStatus.CREATED);
	   return ResponseEntity.status(201).body(registeredPaymentMethod);
	}

	@PutMapping("{id}") // http:localhost:8080/api/v1/PaymentMethod/{id}
	ResponseEntity<PaymentMethod> updatePaymentMethod(@PathVariable("id") Long id ,@RequestBody PaymentMethod paymentMethod) {
		PaymentMethod updatedPaymentMethod = paymentMethodService.updatePaymentMethod(paymentMethod, id);
		return ResponseEntity.ok(updatedPaymentMethod);
	}
	 @DeleteMapping("{id}") // http:localhost:8080/api/v1/address/{id}
	ResponseEntity<Void> deletePaymentMethod(@PathVariable("id") Long id){
		paymentMethodService.deletePaymentMethod(id);
		return ResponseEntity.noContent().build(); // Status 204
		// Como no hay cuerpo en la respuesta, 
		// se debe llamar a .build() para finalizar la construcción del ResponseEntity.

}
	 
}