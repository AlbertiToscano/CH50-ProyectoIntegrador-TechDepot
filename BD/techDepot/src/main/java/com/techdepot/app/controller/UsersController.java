package com.techdepot.app.controller;


import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.techdepot.app.model.Users;
import com.techdepot.app.service.UsersService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/users") // localhost:8080/api/v1 
public class UsersController {
	
	UsersService usersService;

	public UsersController(UsersService usersService) {
		super();
		this.usersService = usersService;
	}
	
	@GetMapping("{id}") // http:localhost:8080/api/v1/users/{id} 
	Users getUserById(@PathVariable("id") Long id){
		Users existingUsers = usersService.getUserById(id);
		return existingUsers;
	}
	
	
	@GetMapping("email")// http://localhost:8080/api/v1/users/email?email=test@example.com
	public Users getUserByEmail(@RequestParam("email") String email) {
	    // Llamamos al servicio para obtener el cliente usando el correo electrónico
	    Users existingCustomer = usersService.getUserByEmail(email);
	    if (existingCustomer != null) {
	        return existingCustomer;
	    } else {
	        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Customer not found with email: " + email);
	    }
	}
	
	
	@GetMapping // http:localhost:8080/api/v1/users
	Iterable<Users> getAllUsers(){
		return usersService.getAllUsers();
	}
	
	
	
	@PostMapping // http:localhost:8080/api/v1/users
	ResponseEntity<Users> createUser(@RequestBody Users newUsers) {
		Users registeredUser = usersService.createUser(newUsers);
	   return ResponseEntity.status(201).body(registeredUser);
	}
	
	
	@PutMapping("{id}") // http:localhost:8080/api/v1/users/{id}
	ResponseEntity<Users> updateUsers(@PathVariable("id") Long id ,@RequestBody Users user) {
		Users updatedUser = usersService.updateUser(user, id);
		return ResponseEntity.ok(updatedUser);
	}

	
}
