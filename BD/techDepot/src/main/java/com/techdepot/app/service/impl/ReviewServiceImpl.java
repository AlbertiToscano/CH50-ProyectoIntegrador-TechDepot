package com.techdepot.app.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.techdepot.app.model.Product;
import com.techdepot.app.model.Review;
import com.techdepot.app.model.Users;
import com.techdepot.app.repository.ReviewRepository;
import com.techdepot.app.service.ReviewService;




@Service
public class ReviewServiceImpl implements ReviewService  {

	private final  ReviewRepository reviewRepository;
	
	/**
     * Constructor que inyecta la dependencia de ProductRepository.
     * Permite el acceso a la base de datos sin crear instancias manualmente.
     */
	public ReviewServiceImpl(ReviewRepository reviewRepository) {
		this.reviewRepository = reviewRepository;
	}
	
	//Guardar una nueva reseña en la base de datos
	@Override
	public Review createReview(Review review) {
		return reviewRepository.save(review);
	}

	//Buscar una reseña por su ID
	@Override
	public Optional<Review> getReviewById(Long id) {
		return reviewRepository.findById(id);
	}
	
	 @Override
	    public List<Review> getReviewsByUser(Users user) {
	        return reviewRepository.findByUser(user);
	    }
	 
	 @Override
	    public List<Review> getReviewsByProduct(Product product) {
	        return reviewRepository.findByProduct(product);
	    }

	//Buscar reseñas por calificacion
	@Override
	public List<Review> getReviewsByRating(int rating) {
		return reviewRepository.findByRating(rating);
	}

	//Buscar reseñas dentro de un rango de fechas
	@Override
	public List<Review> getReviewsByDateRange(LocalDate startDate, LocalDate endDate) {
		return reviewRepository.findByDateBetween(startDate, endDate);
	}

	//Buscar reseñas por palabra clave 
	@Override
	public List<Review> getReviewsByCommentContaining(String keyword) {
		return reviewRepository.findByCommentContaining(keyword);
	}

	//Obtener todas las reseñas con paginacion
	@Override
	public Page<Review> getAllReviews(int pageNumber, int pageSize) {
		return reviewRepository.findAll(PageRequest.of(pageNumber, pageSize));
	}

	//Obtener todas las reseñas sin paginacion
	@Override
	public List<Review> getAllReviews() {
		 return (List<Review>) reviewRepository.findAll();
	}

	//Actualizar una reseña
	@Override
	public Review updateReview(Review review, Long id) {
		// Verificar si la reseña con el ID 
        Review existingReview = getReviewById(id)
                .orElseThrow(() -> new IllegalStateException("No existe la reseña con id " + id));

        // Actualizar los datos de la reseña
        existingReview.setRating(review.getRating());
        existingReview.setComment(review.getComment());
        existingReview.setDate(review.getDate());

        return reviewRepository.save(existingReview); // Guardar cambios en la base de datos
	}

	//Eliminar una reseña por su ID
	@Override
	public void deleteReview(Long id) {
		 // Verificar si la reseña con el ID 
        Review existingReview = getReviewById(id)
                .orElseThrow(() -> new IllegalStateException("No existe la reseña con id " + id));
        
        reviewRepository.delete(existingReview); // Eliminar la reseña de la base de dato
		
	}

	
	
	

}
