package com.techdepot.app.model;

import jakarta.persistence.Column;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Product {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "nombre", length = 70, nullable = false)
	private String name; 
	@Column(name = "descripcion", length = 200, nullable = false)
	private String description;
	@Column(name = "marca", length = 45, nullable =  false)
	private String brand;
	@Column(name = "modelo", length = 45, nullable = false)
	private String model; 
	@Column(name = "categoria", length = 45, nullable = false)
	private String category; 
	@Column(name = "precio",  nullable =  false)
	private Double price;
	@Column(name = "stock",  nullable = false)
	private	Integer stock; 
	@Column(name = "imagen", length = 100, nullable =  false)
	private String image;

	//llave foranea con caracteristicas de productos
	@ManyToOne
	@JoinColumn(name = "fk_caracteristicas_de_productos_id", referencedColumnName = "id")
	private ProductFeature productFeature;
	
	public ProductFeature getProductFeature() {
		return productFeature;
	}
	
	public void setProductFeature(ProductFeature productFeature) {
		this.productFeature = productFeature;
	} 
	
	Product() {
	}
		
	public Product(Long id, String name, String description, String brand, String model, 
            String category, Double price, Integer stock, String image) {
		
		 super();
	        this.id = id;
	        this.name = name;
	        this.description = description;
	        this.brand = brand;
	        this.model = model;
	        this.category = category;
	        this.price = price;
	        this.stock = stock;
	        this.image = image;
	}

	
	//set y get
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public String getNombre() {
		return name;
	}

	public void setNombre(String nombre) {
		this.name = nombre;
	}
	
	public String getDescripcion() {
		return description;
	}

	public void setDescripcion(String descripcion) {
		this.description = descripcion;
	}
	
	public String getMarca() {
		return brand;
	}

	public void setMarca(String marca) {
		this.brand = marca;
	}
	
	public String getModelo() {
		return model;
	}

	public void setModelo(String modelo) {
		this.model = modelo;
	}
	
	public String getCategoria() {
		return category;
	}

	public void setCategoria(String categoria) {
		this.category = categoria;
	}

	public Double getPrecio() {
		return price;
	}

	public void setPrecio(Double precio) {
		this.price = precio;
	}

	public Integer getStock() {
		return stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}
	
	public String getImagen() {
		return image;
	}

	public void setImagen(String imagen) {
		this.image = imagen;
	}
	
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Product [id=");
		builder.append(id);
		builder.append(", nombre=");
		builder.append(name);
		builder.append(", descripcion=");
		builder.append(description);
		builder.append(", marca=");
		builder.append(brand);
		builder.append(", modelo=");
		builder.append(model);
		builder.append(", categoria=");
		builder.append(category);
		builder.append(", precio=");
		builder.append(price);
		builder.append(", stock=");
		builder.append(stock);
		builder.append(", imagen=");
		builder.append(image);
		builder.append("]");
		return builder.toString();
	}

	public Product get() {
		return this;
	}

	public boolean isPresent() {
		return this != null;
	}

}
