package com.techdepot.app.controller.impl;

import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techdepot.app.controller.AddressController;
import com.techdepot.app.model.Address;
import com.techdepot.app.service.AddressService;




@RestController
@RequestMapping("api/v1/address")
public class AddressControllerImpl implements AddressController{

	private final AddressService addressService;
	
	public AddressControllerImpl(AddressService addressService) {
		this.addressService= addressService;
	}

	@Override
	public ResponseEntity<Address> getAddressById( Long id) {
		Address address = addressService.getAddressById(id);
		return ResponseEntity.ok(address);
	}

	
	@GetMapping("/api/v1/address")
	@Override
	public ResponseEntity<Iterable<Address>> getAllAddress() {
	    Set<Address> addressSet = addressService.getAllAddress(); 
	    return ResponseEntity.ok(addressSet);
	}


	@Override
	public ResponseEntity<Address> createAddress(@RequestBody Address newAddress) {
		return ResponseEntity.status(201).body(newAddress);
	}

	@Override
	public ResponseEntity<Address> updateAddress(Address Address, Long id) {
		Address updatedAddress = addressService.updateAddress(Address, id);
		return ResponseEntity.ok(updatedAddress);
	}

	@Override
	public ResponseEntity<String> deleteAddress(Long id) {
		addressService.deleteAddress(id);
		return ResponseEntity.ok("Dirección" + id + "ha sido eliminada.");
	}
	
	
}
