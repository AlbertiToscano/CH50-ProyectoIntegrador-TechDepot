package com.techdepot.app.service.impl;

import java.time.LocalDateTime;

import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.techdepot.app.model.Purchases;
import com.techdepot.app.repository.PurchasesRepository;
import com.techdepot.app.service.PurchasesService;




@Service
public class PurchaseServiceImpl implements PurchasesService {

	private final PurchasesRepository purchaseRepository;
	
	
	public PurchaseServiceImpl(PurchasesRepository purchaseRepository) {
		super();
		this.purchaseRepository = purchaseRepository;
	}
	
	

	@Override
	public Purchases createPurchase(Purchases purchase) {
		
		purchase.setId(null); // forzar la creación del cliente	
		purchase.setStatus("Pendiente"); 
		purchase.setPurchaseDate(LocalDateTime.now());
		Purchases newPurchase = purchaseRepository.save( purchase );
		return newPurchase;
	}

	
	
	@Override
	public Purchases getPurchaseById(Long id) {
		Optional<Purchases> optionalPurchases = purchaseRepository.findById(id);
		if( optionalPurchases.isEmpty()) {
			throw new IllegalStateException("Purchase does not exist with id " + id);
		}
		Purchases existingPurchase= optionalPurchases.get();
		return existingPurchase;
	}

	
	
	@Override
	public Purchases getPurchaseByPurchaseDate(LocalDateTime purchaseDate) {
		Optional <Purchases> optionalPurchases = purchaseRepository.findByPurchaseDate(purchaseDate);
		if( optionalPurchases.isEmpty()) {
			throw new IllegalStateException("There is not purchase on that date " + purchaseDate);
		}
		Purchases existingPurchase= optionalPurchases.get();
		return existingPurchase;
	}

	
	@Override
	public Set<Purchases> getAllPurchases() {
		Set<Purchases> customers = (Set<Purchases>) purchaseRepository.findAll();
		return customers;
	}

	@Override
	public Purchases updatePurchase(Purchases purchase, Long id) {
	
		Purchases existingPurchase = getPurchaseById(id);
		existingPurchase.setDeliveryDate( purchase.getDeliveryDate() );
		existingPurchase.setStatus( purchase.getStatus() );
		existingPurchase.setSubtotal( purchase.getSubtotal() );
		existingPurchase.setTotal( purchase.getTotal() );
		// ID y Fecha de compra no se permite modificar
		return purchaseRepository.save(existingPurchase);
	}

	/*
	@Override
	public void deletePurchase(Long id) {
		Purchases existingPurchase = getPurchaseById(id);
		
		purchaseRepository.delete(existingPurchase);
		
	}
	*/

}
