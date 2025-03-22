package com.techdepot.app.controller;

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

import com.techdepot.app.model.Role;

import com.techdepot.app.service.RoleService;




@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/role") // localhost:8080/api/v1 
public class RoleController {
	
	RoleService roleService;
	
	
	
    public RoleController(RoleService roleService) {
		super();
		this.roleService = roleService;
	}

    @GetMapping("{id}")
    ResponseEntity<Role> getRoleById(@PathVariable("id") Long id) {
    	Role role = roleService.getRoleById(id);
		return ResponseEntity.ok(role);
	}
    
	@GetMapping // http:localhost:8080/api/v1/roles
	Iterable<Role> getAllRoles(){
		return roleService.getAllRoles();
	}
    
	@PostMapping // http:localhost:8080/api/v1/role
    ResponseEntity< Role > createRole(@RequestBody Role newRole) {
    	Role registeredRole = roleService.createRole(newRole);
 	   return ResponseEntity.status(201).body(registeredRole);
	}
    
	@PutMapping("{id}") // http:localhost:8080/api/v1/role/{id}
	ResponseEntity<Role> updateRole(@PathVariable("id") Long id ,@RequestBody Role role) {
		Role updatedRole = roleService.updateRole(role, id);
		return ResponseEntity.ok(updatedRole);
	}

	
 
}