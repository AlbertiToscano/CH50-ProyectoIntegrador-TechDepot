package com.techdepot.app.service.impl;

import java.util.*;
import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.techdepot.app.model.ProductFeature;
import com.techdepot.app.repository.ProductFeatureRepository;
import com.techdepot.app.service.ProductFeatureService;

@Service
public class ProductFeatureServiceImpl implements ProductFeatureService {

	private final ProductFeatureRepository productFeatureRepository;

	public ProductFeatureServiceImpl(ProductFeatureRepository productFeatureRepository) {
		this.productFeatureRepository = productFeatureRepository;
	}
		
	
	@Override
	public ProductFeature createProductFeature(ProductFeature productFeature) { 		productFeature.setId(null);
		ProductFeature newProductFeature = productFeatureRepository.save( productFeature);
		return newProductFeature;
	}

	@Override
	public ProductFeature getProductFeatureById(Long id) {
		Optional<ProductFeature> optionalProductFeature =
			productFeatureRepository.findById(id);
			if( optionalProductFeature.isEmpty()) {
				throw new IllegalStateException("Product feature does not exist with id " + id);
			}
			ProductFeature existingProductFeature = optionalProductFeature.get();
		return existingProductFeature;
	}

	@Override
	public Set<ProductFeature> getProductFeatureByType(String type) {
		Iterable <ProductFeature> productFeatureIterable =
				productFeatureRepository.findByType(type);
			return new LinkedHashSet<>((Collection<ProductFeature>)productFeatureIterable);
	}

	@Override
	public Page<ProductFeature> getAllProductsFeaturesByType(String type, int pageNumber, int PageSize) {
		Page<ProductFeature> productFeatures;
		PageRequest pageAndSize = PageRequest.of(pageNumber, PageSize);
		productFeatures = productFeatureRepository.findAllByType(type, pageAndSize);
		return productFeatures;
	}
	
	@Override
	public Page<ProductFeature> getAllProductsFeatures(int pageNumber, int PageSize) {
		Page<ProductFeature> productFeatures;
		PageRequest pageAndSize = PageRequest.of(pageNumber, PageSize);
		productFeatures = productFeatureRepository.findAll(pageAndSize);
		return productFeatures;
	}

	@Override
	public ProductFeature updateProductFeature(ProductFeature productFeatures, Long id) {
		ProductFeature existingProductFeature = getProductFeatureById(id);
		existingProductFeature.setProcessor(productFeatures.getProcessor());
		existingProductFeature.setRamMemory(productFeatures.getRamMemory());
		existingProductFeature.setStorage(productFeatures.getStorage());
		existingProductFeature.setType(productFeatures.getType());
		existingProductFeature.setCompatibility(productFeatures.getCompatibility());
		existingProductFeature.setConnectivity(productFeatures.getConnectivity());
		existingProductFeature.setRgb(productFeatures.getRgb());
		existingProductFeature.setVelocity(productFeatures.getVelocity());
		existingProductFeature.setStorageCapacity(productFeatures.getStorageCapacity());
		existingProductFeature.setFrequency(productFeatures.getFrequency());
		existingProductFeature.setPrintingType(productFeatures.getPrintingType());
		existingProductFeature.setDdr(productFeatures.getDdr());
		existingProductFeature.setSize(productFeatures.getSize());
		existingProductFeature.setHeatsink(productFeatures.isHeatsink());
		existingProductFeature.setIntegratedGraphics(productFeatures.isIntegratedGraphics());
		
		// modificar todos los parametros
		return productFeatureRepository.save(existingProductFeature);
	}

	@Override
	public void deleteProductFeature(Long id) {
		ProductFeature existingProductFeature = getProductFeatureById(id);
		productFeatureRepository.delete(existingProductFeature);
	}


	@Override
	public Set<ProductFeature> getAllProductFeature() {
		Iterable <ProductFeature> productFeatureIterable =
				productFeatureRepository.findAll();
				
			return new LinkedHashSet<>((Collection<ProductFeature>)productFeatureIterable);
	}


	@Override
	public ProductFeature createProductFeatureProcessor(ProductFeature productFeature) {
		productFeature.setProcessor(null);
		productFeature.setRamMemory(null);
		productFeature.setStorage(null);
		productFeature.setCompatibility(null);
		productFeature.setConnectivity(null);
		productFeature.setRgb(null);
		productFeature.setVelocity(null);
		productFeature.setStorageCapacity(null);
		productFeature.setPrintingType(null);
		productFeature.setSize(null);
		ProductFeature newProductFeature = this.createProductFeature(productFeature);
		return newProductFeature;
	}
	
	

}
