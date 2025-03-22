package com.techdepot.app.util;

import java.time.LocalDate; 
import java.util.Optional; 

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.techdepot.app.model.PaymentMethod;
import com.techdepot.app.repository.PaymentMethodRepository;

@Component
@Order(4)
public class PaymentMethodDataLoader implements CommandLineRunner {

	@Autowired
   PaymentMethodRepository paymentMethodRepository;
	private static final Logger log = LoggerFactory.getLogger( PaymentMethodDataLoader.class );
    
    @Override
    public void run(String... args) throws Exception {
        // Insertando datos iniciales
        paymentMethodRepository.save(new PaymentMethod("Tarjeta de crédito", "Banco A", "1234567890123456",LocalDate.of(2025, 12, 31) ));
        paymentMethodRepository.save(new PaymentMethod("Tarjeta de débito", "Banco B", "9876543210987654", LocalDate.of(2026, 11, 30)));
        paymentMethodRepository.save(new PaymentMethod("PayPal", "PayPal Inc." ));
        paymentMethodRepository.save(new PaymentMethod("Tarjeta de crédito", "Banco C", "5678901234567890", LocalDate.of(2027, 3, 25)));
        paymentMethodRepository.save(new PaymentMethod("Transferencia bancaria", "Banco D"));
   
     // Obtener el cliente con ID 3
     		Optional<PaymentMethod> optionalPaymentMethod = paymentMethodRepository.findById( 2L );
     		
     		if( optionalPaymentMethod.isPresent() ) {
     			PaymentMethod existingPaymentMethod = optionalPaymentMethod.get();
     			log.info( existingPaymentMethod.toString() );
     		} else {
     			log.warn("No existe la dirección con ID indicado");
     		}
     	}
     	

}
        
  

