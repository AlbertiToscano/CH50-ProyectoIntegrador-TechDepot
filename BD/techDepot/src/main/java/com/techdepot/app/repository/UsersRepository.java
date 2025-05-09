package com.techdepot.app.repository;

import java.time.LocalDate; 
import java.util.List;
import java.util.Optional; 
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.techdepot.app.model.Role;
import com.techdepot.app.model.Users;

public interface UsersRepository extends CrudRepository<Users, Long>, PagingAndSortingRepository<Users, Long> {

	Set<Users> findByLastName(String lastname);
	Set<Users> findByFirstName(String firstname);

	List<Users> findByBirthDate(LocalDate birthDate);
	
	Optional< Users > findByEmail(String email);

	Page<Users> findAllByActiveTrue(Pageable pageable);
	Page<Users> findAllByActiveFalse(Pageable pageable);
	Iterable<Users> findByRole(Role role);

 

}
