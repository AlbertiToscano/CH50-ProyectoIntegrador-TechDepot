package com.techdepot.app.service;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;

import com.techdepot.app.model.Product;
import com.techdepot.app.model.Review;
import com.techdepot.app.model.Users;




public interface ReviewService {
	
	// Crear un nueva  reseña 
	Review createReview(Review review);
	
	// Obtener una reseña por su ID
	Optional<Review> getReviewById(Long id);
	
	List<Review> getReviewsByUser(Users user);
    
    List<Review> getReviewsByProduct(Product product);
	
	// Obtener una reseña por su calificacion
	 List<Review> getReviewsByRating(int rating);
	
	 // Buscar reseñas dentro de un rango de fechas
	 List<Review> getReviewsByDateRange(LocalDate startDate, LocalDate endDate);
	
	// Buscar reseñas por palabra clave
	 List<Review> getReviewsByCommentContaining(String keyword);

	 // Obtener todas las reseñas con paginacion
	 Page<Review> getAllReviews(int pageNumber, int pageSize);
	
	// Obtener todas las reseñas sin paginacion
	 List<Review> getAllReviews();

	// Actualizar una reseña
	 Review updateReview(Review review, Long id);
	
	// Eliminar una reseña por su ID
	void deleteReview(Long id);
}

