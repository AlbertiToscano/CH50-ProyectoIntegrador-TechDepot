package com.techdepot.app.controller;


import org.springframework.http.ResponseEntity;

import com.techdepot.app.model.Address;



public interface AddressController {

	ResponseEntity<Address> getAddressById(Long id);
	
	
	
	ResponseEntity <Iterable<Address> > getAllAddress();
	
	ResponseEntity< Address > createAddress(Address newAddress);
	
	ResponseEntity< Address > updateAddress(Address Address, Long id);
	
	ResponseEntity<String> deleteAddress(Long id);
	
	
	
}
