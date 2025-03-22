package com.techdepot.app.service;

import java.time.LocalDateTime;
import java.util.Set;

import com.techdepot.app.model.Purchases;





public interface PurchasesService {
	Purchases createPurchase(Purchases purchase);
	Purchases getPurchaseById(Long id);
	Purchases getPurchaseByPurchaseDate(LocalDateTime purchaseDate);
	Set<Purchases> getAllPurchases();
	Purchases updatePurchase(Purchases purchase, Long id);
	//void deletePurchase(Long id);
}
