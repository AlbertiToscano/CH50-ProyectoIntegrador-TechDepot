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
@Table(name = "reseñas")
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne // Relación con User (muchas reseñas pueden pertenecer a un usuario)
	@JoinColumn(name = "id_usuario", nullable = false) 
	private Users user;
	
	 @ManyToOne // Relación con Product (muchas reseñas pueden pertenecer a un producto)
	 @JoinColumn(name = "id_producto", nullable = false) 
	 private Product product;
	
	@Column(name = "calificacion", nullable = false)
	private int rating;
	
	@Column(name = "comentario", columnDefinition = "TEXT") //TEXT No tiene un límite fijo, permite almacenar cadenas más largas.
	private String comment;
	
	@Column(name ="fecha", nullable = false)
	private LocalDate date;
	
	// Constructor
	public Review() {}

	public Review(Users user, Product product, int rating, String comment, LocalDate date) {
		this.user = user;
        this.product = product;
		this.rating = rating;
		this.comment = comment;
		this.date = date;
	}

	//Getters y Setters
	public Long getId() {
		return id;
	}

	public Users getUser() { 
		return user; }
	
    public void setUser(Users user) { 
    	this.user = user; }
    
    public Product getProduct() { 
    	return product; }
    
    public void setProduct(Product product) { 
    	this.product = product; }
    
	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Review [id=");
		builder.append(id);
		builder.append(", rating=");
		builder.append(rating);
		builder.append(", comment=");
		builder.append(comment);
		builder.append(", date=");
		builder.append(date);
		builder.append("]");
		return builder.toString();
	}


}
