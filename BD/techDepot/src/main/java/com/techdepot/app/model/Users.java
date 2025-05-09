package com.techdepot.app.model;

import java.time.LocalDate;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")

public class Users {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "Nombre", length = 70, nullable = false)
	private String firstName;
	@Column(name = "Apellido", length = 100, nullable = false)
	private String lastName;
	@Column(name = "Email", length = 45, nullable = false, unique = true)
	private String email;
	@Column(name = "Password", length = 100, nullable = false)
	private String password;
	@Column(name = "Avatar", length = 300)
	private String avatar;
	@Column(name = "fecha_nacimiento")
	private LocalDate birthDate;
    @Column(name = "active", nullable = false)
    private boolean active;
    
    @ManyToOne
	@JoinColumn(name = "fk_role_id", nullable = true)
	private Role role;

	Users() {
	}
		
	
	
	

	public Users(String firstName, String lastName, String email, String password, String avatar, LocalDate birthDate) {
		super();
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.avatar = avatar;
		this.birthDate = birthDate;
	}
	


	

	public Role getRole() {
		return role;
	}


	public void setRole(Role role) { 
		this.role = role; 
		}

	
	
	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getAvatar() {
		return avatar;
	}



	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}



	public LocalDate getBirthDate() {
		return birthDate;
	}



	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}



	public boolean isActive() {
		return active;
	}



	public void setActive(boolean active) {
		this.active = active;
	}



	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Customer [id=");
		builder.append(id);
		builder.append(", firstName=");
		builder.append(firstName);
		builder.append(", lastName=");
		builder.append(lastName);
		builder.append(", email=");
		builder.append(email);
		builder.append(", password=");
		builder.append(password);
		builder.append(", avatar=");
		builder.append(avatar);
		builder.append(", birthDate=");
		builder.append(birthDate);
		builder.append("]");
		return builder.toString();
	}


	







}


	
	
	

