package com.techdepot.app.service.impl;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.techdepot.app.model.PaymentMethod;
import com.techdepot.app.repository.PaymentMethodRepository;
import com.techdepot.app.service.PaymentMethodService;


@Service
public class PaymentMethodServiceImpl implements PaymentMethodService {
	
	private final PaymentMethodRepository paymentMethodRepository;
	
	public PaymentMethodServiceImpl(PaymentMethodRepository paymentMethodRepository) {
		this.paymentMethodRepository = paymentMethodRepository;
	}
	
	@Override
	public PaymentMethod createPaymentMethod(PaymentMethod paymentMethod) {
		
		paymentMethod.setId(null); 
		PaymentMethod newPaymentMethod = paymentMethodRepository.save( paymentMethod );
		return newPaymentMethod;
	}

	@Override
	public PaymentMethod getPaymentMethodById(Long id) {
		Optional<PaymentMethod> optionalPaymentMethod = paymentMethodRepository.findById(id);
		if( optionalPaymentMethod.isEmpty()) {
			throw new IllegalStateException("PaymentMethod does not exist with id " + id);
		}
		PaymentMethod existingPaymentMethod = optionalPaymentMethod.get();
		return existingPaymentMethod;
	}

	
	@Override
	public PaymentMethod updatePaymentMethod(PaymentMethod paymentMethod, Long id) {
		// TODO verificar los nuevos atributos a cambiar
		PaymentMethod existingPaymentMethod = getPaymentMethodById(id);
		existingPaymentMethod.setPaymentType( paymentMethod.getPaymentType() );
		existingPaymentMethod.setBank( paymentMethod.getBank() );
		existingPaymentMethod.setCardNumber( paymentMethod.getCardNumber() );
		existingPaymentMethod.setExpirationDate( paymentMethod.getExpirationDate() );
	
		// ID y email no se permite modificar
		return paymentMethodRepository.save(existingPaymentMethod);
	}
	
	

	@Override
	public void deletePaymentMethod(Long id) {
		PaymentMethod existingPurchase = getPaymentMethodById(id);
		
		paymentMethodRepository.delete(existingPurchase);
	}

	@Override
	public PaymentMethod getPaymentMethodByPaymentType(String paymentType) {
		List<PaymentMethod> optionalPaymentMethod = paymentMethodRepository.findByPaymentType(paymentType);
		if( optionalPaymentMethod.isEmpty()) {
			throw new IllegalStateException("PaymentMethod does not exist with PaymentType " + paymentType);
		}
		return  optionalPaymentMethod.get(0);
	}

	

	
}
















	
	