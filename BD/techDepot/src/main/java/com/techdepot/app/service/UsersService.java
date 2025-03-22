package com.techdepot.app.service;

import java.time.LocalDate;  




import org.springframework.data.domain.Page;

import com.techdepot.app.model.Role;
import com.techdepot.app.model.Users;


public interface UsersService {
	
	Users createUser(Users user);
	Users getUserById(Long id);
	Users getUserByBirthDate(LocalDate birthDate);
	Users getUserByEmail(String email);
	Users getUserByRole(Role role);
	Iterable<Users> getAllUsers();
	Page<Users> getAllUsers(boolean isActive, int pageNumber, int pageSize);
	Users updateUser(Users user, Long id);
	void deleteUser(Long id);


}
