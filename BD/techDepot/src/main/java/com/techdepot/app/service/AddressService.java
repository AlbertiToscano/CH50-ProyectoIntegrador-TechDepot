package com.techdepot.app.service;

import java.util.Set;

import org.springframework.data.domain.Page;

import com.techdepot.app.model.Address;


public interface AddressService {

	Address createAddress(Address address);
	Address getAddressById(Long id);
	Address getAddressByName(String name);
	Page<Address> getAllUsers(boolean isActive, int pageNumber, int pageSize);
	Set<Address> getAllAddress();
	Address updateAddress(Address address, Long id);
	void deleteAddress(Long id);
	
	
}
