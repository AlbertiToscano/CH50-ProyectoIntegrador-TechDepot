package com.techdepot.app.service;

import com.techdepot.app.model.PaymentMethod;


public interface PaymentMethodService {
	
	
    PaymentMethod createPaymentMethod(PaymentMethod paymentMethod);
    PaymentMethod getPaymentMethodById(Long id);
    PaymentMethod getPaymentMethodByPaymentType(String paymentType );

 
    PaymentMethod updatePaymentMethod(PaymentMethod paymentMethod, Long id);
    void deletePaymentMethod(Long id);
		
}

