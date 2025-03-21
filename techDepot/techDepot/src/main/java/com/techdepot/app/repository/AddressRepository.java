package com.techdepot.app.repository;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.techdepot.app.model.Address;



public interface AddressRepository extends CrudRepository<Address, Long>, PagingAndSortingRepository<Address, Long> {

	
		Iterable<Address> findByname(String name);
		Address findByName(String name);
		

		Optional< Address > findByStreet(String street);
		Address findByStreetAndCity(String street, String city);

		Page<Address> findAllByActiveTrue(Pageable pageable);
		Page<Address> findAllByActiveFalse(Pageable pageable);

	}

