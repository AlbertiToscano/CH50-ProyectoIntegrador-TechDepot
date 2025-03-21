package com.techdepot.app.service;

import java.util.Set;

import org.springframework.data.domain.Page;

import com.techdepot.app.model.ProductFeature;

public interface ProductFeatureService {

	ProductFeature createProductFeature(ProductFeature productFeature);
	ProductFeature getProductFeatureById(Long id);
	Set<ProductFeature> getProductFeatureByType(String type);
	Set<ProductFeature> getAllProductFeature();
	Page<ProductFeature> getAllProductsFeaturesByType(String type, int pageNumber, int PageSize);
	Page<ProductFeature> getAllProductsFeatures(int pageNumber, int PageSize);
	ProductFeature updateProductFeature(ProductFeature productFeatures, Long id);
	void deleteProductFeature(Long id);
	ProductFeature createProductFeatureProcessor(ProductFeature productFeature);
}
