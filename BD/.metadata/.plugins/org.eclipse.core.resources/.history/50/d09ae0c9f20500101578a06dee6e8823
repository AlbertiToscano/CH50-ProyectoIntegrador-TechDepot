package com.techdepot.app.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "direcciones")
public class Address {

	@Id // El atributo será la clave primaria
	// Indica como se generará automáticamente las claves primarias
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "nombre_completo", length = 70, nullable = false, unique = true)
	private String name;
	@Column(name = "telefono", length = 45, nullable = false)
	private String phone;
	@Column(name = "calle", length = 45, nullable = false)
	private String street;
	@Column(name = "num_exterior", length = 45, nullable = false)
	private String exteriorNumber;
	@Column(name = "num_interior", length = 45, nullable = true)
	private String interiorNumber;
	@Column(name = "colonia", length = 45, nullable = false)
	private String neighborhood;
	@Column(name = "codigo_postal", length = 45, nullable = false)
	private String zipCode;
	@Column(name = "ciudad", length = 45, nullable = false)
	private String city;
	@Column(name = "estado", length = 45, nullable = false)
	private String state;
	@Column(name = "referencias", length = 200, nullable = false)
	private String references;
	@Column(name = "created_at")
	private LocalDateTime createdAt;
	private boolean active;
	
	@ManyToOne
	@JoinColumn(name = "fk_users_id")
	@JsonIgnoreProperties({"firstName","lastName", "avatar", "birthdate", "active"})
	private Users users;
		
	
	
	Address() {
	}

	public Address(String name, String phone, String street, String exteriorNumber, String interiorNumber,
			String neighborhood, String zipCode, String city, String state, String references) {
		this.name = name;
		this.phone = phone;
		this.street = street;
		this.exteriorNumber = exteriorNumber;
		this.interiorNumber = interiorNumber;
		this.neighborhood = neighborhood;
		this.zipCode = zipCode;
		this.city = city;
		this.state = state;
		this.references = references;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	public String getPhone() {
		return phone;
	}
	
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getStreet() {
		return street;
	}
	
	public void setStreet(String street) {
		this.street = street;
	}
	
	public String getExteriorNumber() {
		return exteriorNumber;
	}
	
	public void setExteriorNumber(String exteriorNumber) {
		this.exteriorNumber = exteriorNumber;
	}
	
	public String getInteriorNumber() {
		return interiorNumber;
	}
	
	public void setInteriorNumber(String interiorNumber) {
		this.interiorNumber = interiorNumber;
	}

	public String getNeighborhood() {
		return neighborhood;
	}
	
	public void setNeighborhood(String neighborhood) {
		this.neighborhood = neighborhood;
	}
	
	public String getZipCode() {
		return zipCode;
	}
	
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getCity() {
		return city;
	}
	
	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}
	
	public void setState(String state) {
		this.state = state;
	}

	public String getReferences() {
		return references;
	}

	public void setReferences(String references) {
		this.references = references;
	}
	
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Address [id=");
		builder.append(id);
		builder.append(", name");
		builder.append(name);
		builder.append(", phone");
		builder.append(phone);
		builder.append(", street");
		builder.append(street);
		builder.append(", exteriorNumber");
		builder.append(exteriorNumber);
		builder.append(", interiorNumber");
		builder.append(interiorNumber);
		builder.append(", neighborhood");
		builder.append(neighborhood);
		builder.append(", zipCode");
		builder.append(zipCode);
		builder.append(", city");
		builder.append(city);
		builder.append(", state");
		builder.append(state);
		builder.append(", references");
		builder.append(references);
		builder.append(", createdAt=");
		builder.append(createdAt);
		builder.append("]");
		return builder.toString();
	}
		
}


