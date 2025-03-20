package com.techdepot.app.repository;


import java.util.List;
import java.util.Optional; 
import java.util.Set;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.techdepot.app.model.PaymentMethod;


public interface PaymentMethodRepository extends CrudRepository<PaymentMethod, Long>, PagingAndSortingRepository<PaymentMethod, Long> {
    
 
    Optional<PaymentMethod> findByCardNumber(String cardNumber);
    
    Set<PaymentMethod> findByBank(String bank);

	List<PaymentMethod> findByPaymentType(String paymentType);
    
    


    
}

