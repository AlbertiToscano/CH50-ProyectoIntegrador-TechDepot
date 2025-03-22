package com.techdepot.app.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.techdepot.app.model.Product;
import com.techdepot.app.model.Review;
import com.techdepot.app.model.Users;



public interface ReviewRepository extends CrudRepository<Review, Long>, PagingAndSortingRepository<Review, Long> {
	
	  // Buscar reseñas por usuario
    List<Review> findByUser(Users user);

    // Buscar reseñas por producto
    List<Review> findByProduct(Product product);
    
	//Buscar por calificacion
	List<Review> findByRating(int rating);
	
	// Buscar en el comentario usando palabras clave
	List<Review> findByCommentContaining(String keyword);
	
	//Buscar por fecha
	Set<Review> findByDate(LocalDate date);
	
	//Buscar por fecha despues de una en especifico
	Set<Review> findByDateAfter(LocalDate date);
	
	//Buscar por fecha antes de una en especifico
	 Set<Review> findByDateBefore(LocalDate date);
	 
	 //Buscar por un rango de fecha
	 List<Review> findByDateBetween(LocalDate startDate, LocalDate endDate);
	 
	 //Buscar por id
	 Optional<Review> findById(Long id);

	 //Obetener todas las reseñas paginadas
	 Page<Review> findAll(Pageable pageable);

}
