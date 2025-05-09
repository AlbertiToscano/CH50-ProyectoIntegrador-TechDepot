package com.techdepot.app.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.techdepot.app.model.ProductFeature;

public interface ProductFeatureRepository extends CrudRepository<ProductFeature, Long>, PagingAndSortingRepository<ProductFeature, Long> {
	
	Iterable<ProductFeature> findByType(String type);
	Iterable<ProductFeature> findAll();
	Page<ProductFeature> findAllByType(String type, Pageable pageable);
	Page<ProductFeature> findAll(Pageable pageable);
	

	
}
