package com.techdepot.app.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import com.techdepot.app.model.Product;
import com.techdepot.app.repository.ProductRepository;
import com.techdepot.app.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{

	private final ProductRepository productRepository;
	
	public ProductServiceImpl(ProductRepository productRepository){
		this.productRepository = productRepository;
	}
	
	@Override
	public Product createProduct(Product product) {
		return productRepository.save(product);
	}

	@Override
	public Optional<Product> getProductById(Long id) {
		return productRepository.getProductById(id);
	}

	@Override
	public Optional<Product> getProductByName(String name) {
		 return productRepository.getProductByName(name);
	}

	@Override
	public List<Product> getAllProducts() {
		return (List<Product>) productRepository.findAll();
	}


	@Override
	public Product updateProduct(Product updatedProduct, Long id) {
		 Optional<Product> existingProduct = productRepository.findById(id);
		    if (existingProduct.isPresent()) {
		        Product product = existingProduct.get();
		        product.setNombre(updatedProduct.getNombre());
		        product.setDescripcion(updatedProduct.getDescripcion());
		        product.setMarca(updatedProduct.getMarca());
		        product.setModelo(updatedProduct.getModelo());
		        product.setCategoria(updatedProduct.getCategoria());
		        product.setPrecio(updatedProduct.getPrecio());
		        product.setStock(updatedProduct.getStock());
		        product.setImagen(updatedProduct.getImagen());
		        return productRepository.save(product);
		    }
		    return null;
		}

	@Override
	public void deleteProduct(Long id) {
		 Optional<Product> product = getProductById(id);
	        if (product.isPresent()) {
	            productRepository.delete(product.get());
	        }
	}

	@Override
	public List<Product> getProductByPrice(Double maxPrice) {
		return productRepository.getProductByPrice(maxPrice);
	}
	
	@Override
	public Page<Product> getAllProducts( int pageNumber, int pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		return productRepository.findAll( pageable);
	}
	
	
	
	
}
