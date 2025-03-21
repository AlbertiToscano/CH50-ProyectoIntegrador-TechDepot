package com.techdepot.app.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techdepot.app.model.Review;
import com.techdepot.app.service.ReviewService;



@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
	
	private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    //Obtiene una reseña por su ID
    @GetMapping("/{id}") // http://localhost:8080/api/v1/reviews/{id}
    public ResponseEntity<Review> getReviewById(@PathVariable("id") Long id) {
        Optional<Review> review = reviewService.getReviewById(id);
        return review.map(ResponseEntity::ok)
                     .orElseGet(() -> ResponseEntity.notFound().build());
    }

    //Obtiene todas las reseñas con paginacion
    @GetMapping // http://localhost:8080/api/v1/reviews?page=0&size=10
    public ResponseEntity<Page<Review>> getAllReviews(
            @RequestParam(name = "page", required = false, defaultValue = "0") int pageNumber,
            @RequestParam(name = "size", required = false, defaultValue = "5") int pageSize) {
        return ResponseEntity.ok(reviewService.getAllReviews(pageNumber, pageSize));
    }

     //Crea una nueva reseña
    @PostMapping // http://localhost:8080/api/v1/reviews
    public ResponseEntity<Review> createReview(@RequestBody Review newReview) {
        Review createdReview = reviewService.createReview(newReview);
        return ResponseEntity.status(201).body(createdReview);
    }


    //Actualiza una reseña 
    @PutMapping("/{id}") // http://localhost:8080/api/v1/reviews/{id}
    public ResponseEntity<Review> updateReview(@PathVariable("id") Long id, @RequestBody Review review) {
        Review updatedReview = reviewService.updateReview(review, id);
        return ResponseEntity.ok(updatedReview);
    }


    //Elimina una reseña por su ID
    @DeleteMapping("/{id}") // http://localhost:8080/api/v1/reviews/{id}
    public ResponseEntity<Void> deleteReview(@PathVariable("id") Long id) {
        reviewService.deleteReview(id);
        return ResponseEntity.noContent().build();
    }

    //Obtiene reseñas por calificacion
    @GetMapping("/rating/{rating}") // http://localhost:8080/api/v1/reviews/rating/5
    public ResponseEntity<List<Review>> getReviewsByRating(@PathVariable("rating") int rating) {
        return ResponseEntity.ok(reviewService.getReviewsByRating(rating));
    }


    //Obtiene reseñas por palabra clave en el comentario
    @GetMapping("/search") // http://localhost:8080/api/v1/reviews/search?keyword=excelente
    public ResponseEntity<List<Review>> getReviewsByComment(@RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(reviewService.getReviewsByCommentContaining(keyword));
    }

    
    //Obtiene reseñas dentro de un rango de fechas
    @GetMapping("/date-range") // http://localhost:8080/api/v1/reviews/date-range?start=2024-01-01&end=2024-12-31
    public ResponseEntity<List<Review>> getReviewsByDateRange(
            @RequestParam("start") LocalDate startDate,
            @RequestParam("end") LocalDate endDate) {
        return ResponseEntity.ok(reviewService.getReviewsByDateRange(startDate, endDate));
    }
	
}
