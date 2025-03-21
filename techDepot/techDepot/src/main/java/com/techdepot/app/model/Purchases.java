package com.techdepot.app.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "Compras")
public class Purchases {
	
	
@Id 
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "fecha_compra", nullable = false)
	private LocalDateTime purchaseDate;
	@Column(name = "fecha_entrega", nullable = true)
	private LocalDate deliveryDate;
	@Column(name = "estado_compra", nullable = false)
	private String status;
	
	
	@Column(name = "subtotal")
	Double subtotal;
	@Column(name = "total", nullable = false)
	Double total;
	
	public Purchases() {
		
	}
	
	
	public Purchases( LocalDateTime purchaseDate, LocalDate deliveryDate, String status, Double subtotal, Double total) {
		super();
		
		this.purchaseDate = purchaseDate;
		this.deliveryDate = deliveryDate;
		this.status = status;
		this.subtotal = subtotal;
		this.total = total;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public LocalDateTime getPurchaseDate() {
		return purchaseDate;
	}


	public void setPurchaseDate(LocalDateTime purchaseDate) {
		this.purchaseDate = purchaseDate;
	}


	public LocalDate getDeliveryDate() {
		return deliveryDate;
	}


	public void setDeliveryDate(LocalDate deliveryDate) {
		this.deliveryDate = deliveryDate;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public Double getSubtotal() {
		return subtotal;
	}


	public void setSubtotal(Double subtotal) {
		this.subtotal = subtotal;
	}


	public Double getTotal() {
		return total;
	}


	public void setTotal(Double total) {
		this.total = total;
	}
	
	
	
}
