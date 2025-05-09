package com.techdepot.app.service.impl;

import java.time.LocalDate;

import java.util.List;
import java.util.Optional;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.techdepot.app.model.Role;
import com.techdepot.app.model.Users;


import com.techdepot.app.repository.UsersRepository;
import com.techdepot.app.service.UsersService;

@Service
public class UsersServiceImpl implements UsersService{
	
	private final UsersRepository usersRepository;
	
	

	public UsersServiceImpl(UsersRepository usersRepository) {
		super();
		this.usersRepository = usersRepository;
	}



	@Override
	public Users createUser(Users user) {
		Optional<Users> optionalUsers = usersRepository.findByEmail(user.getEmail());
		if( optionalUsers.isPresent()) {
			throw new IllegalStateException("User already exist with email " + user.getEmail());
		}
		user.setId(null); 
		user.setActive(true); 
		
	
		
		
	
		Users newUser = usersRepository.save( user );
		return newUser;
	}



	@Override
	public Users getUserById(Long id) {
		Optional<Users> optionalUsers = usersRepository.findById(id);
		if( optionalUsers.isEmpty()) {
			throw new IllegalStateException("Users does not exist with id " + id);
		}
		Users existingUser = optionalUsers.get();
		return existingUser;
	}



	@Override
	public Users getUserByEmail(String email) {
		Optional<Users> optionalUsers = usersRepository.findByEmail(email);
		if( optionalUsers.isEmpty()) {
			throw new IllegalStateException("Users does not exist with email " + email);
		}
		Users existingUser = optionalUsers.get();
		return existingUser;
	}



	@Override
	public Iterable<Users> getAllUsers() {
		Iterable<Users> users = (Iterable<Users>) usersRepository.findAll();
		return users;
	}





	@Override
	public Users updateUser(Users user, Long id) {
		
				Users existingUser = getUserById(id);
				existingUser.setFirstName( user.getFirstName() );
				existingUser.setLastName( user.getLastName() );
				existingUser.setBirthDate( user.getBirthDate() );
				existingUser.setPassword( user.getPassword() );
				existingUser.setAvatar( user.getAvatar() );
				existingUser.setRole( user.getRole() );
				
				// ID y email no se permite modificar
				return usersRepository.save(existingUser);
				
	}



	@Override
	public void deleteUser(Long id) {
		Users existingUser = getUserById(id);
		
		existingUser.setActive(false); 
		usersRepository.save(existingUser);
		
	}



	@Override
	public Users getUserByBirthDate(LocalDate birthDate) {
		List<Users> users = usersRepository.findByBirthDate( birthDate);
		
		return (Users) users;
	}



		@Override
		public Page<Users> getAllUsers(boolean isActive, int pageNumber, int pageSize) {
			Page<Users> users;
			PageRequest pageAndSize = PageRequest.of(pageNumber, pageSize);
			if( isActive ) {
				users = usersRepository.findAllByActiveTrue(pageAndSize);
			} else {
				users = usersRepository.findAllByActiveFalse(pageAndSize);
			}
			return users;
		}



		@Override
		public Users getUserByRole(Role role) {
			Iterable<Users> roleUser =  usersRepository.findByRole(role);
			return (Users) roleUser;
			
		}
	}



