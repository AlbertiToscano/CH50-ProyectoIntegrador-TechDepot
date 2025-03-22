package com.techdepot.app.util;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.techdepot.app.model.Product;
import com.techdepot.app.model.Review;
import com.techdepot.app.model.Users;
import com.techdepot.app.repository.ProductRepository;
import com.techdepot.app.repository.ReviewRepository;
import com.techdepot.app.repository.UsersRepository;




@Component
@Order(8)
public class ReviewDataLoader implements CommandLineRunner {
	
	@Autowired
	ReviewRepository reviewRepository;
	
	@Autowired
    UsersRepository usersRepository;

    @Autowired
    ProductRepository productRepository;

	@Override
	public void run(String... args) throws Exception {
	
		// Buscar usuarios
        List<Users> users = (List<Users>) usersRepository.findAll();
        if (users.size() < 5) {
            System.out.println("ERROR: No hay suficientes usuarios en la base de datos");
            return;
        }
        System.out.println("Usuarios encontrados: " + users.size());

        // Buscar productos
        List<Product> products = (List<Product>) productRepository.findAll();
        if (products.size() < 5) {
            System.out.println("ERROR: No hay suficientes productos en la base de datos");
            return;
        }
        System.out.println("Productos encontrados: " + products.size());

        //Guardar reseñas con usuarios y productos diferentes
        reviewRepository.save(new Review(users.get(1), products.get(0), 5, "Excelente producto, muy recomendable.", LocalDate.of(2025, 3, 13)));
        reviewRepository.save(new Review(users.get(2), products.get(4), 4, "Buena calidad, pero un poco caro.", LocalDate.of(2025, 3, 11)));
        reviewRepository.save(new Review(users.get(3), products.get(3), 3, "Esperaba más del producto.", LocalDate.of(2025, 3, 8)));
        reviewRepository.save(new Review(users.get(4), products.get(2), 2, "No cumplió mis expectativas.", LocalDate.of(2025, 3, 3)));
        reviewRepository.save(new Review(users.get(0), products.get(1), 5, "Me encantó, lo recomiendo.", LocalDate.of(2025, 3, 5)));
	
	}

}
