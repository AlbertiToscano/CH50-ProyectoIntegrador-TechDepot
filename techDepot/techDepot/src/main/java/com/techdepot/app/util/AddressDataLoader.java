package com.techdepot.app.util;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.techdepot.app.model.Address;
import com.techdepot.app.repository.AddressRepository;



@Component
@Order(2)
@Profile("devH2") // Para que se active cuando se use el perfil indicado
public class AddressDataLoader implements CommandLineRunner {
	
	@Autowired
	AddressRepository addressRepository;
	
	private static final Logger log = LoggerFactory.getLogger( AddressDataLoader.class );

	@Override
	public void run(String... args) throws Exception {
		
		addressRepository.save(new Address("Karla Gaga", "5512345678", "Springfield", "37", null, "Tepito", "72750", "Cholula", "Puebla", "rancho pasando la iglesia"));
		addressRepository.save(new Address("Shrek Sánchez", "5510203040", "Wallaby", "42", null, "Doctores", "56330", "Chimalhuacán", "Nayarit", "junto al pantano con un arbol"));
		addressRepository.save(new Address("José Madero", "5560708090", "Elm street", "13", "25", "Morelos", "57000", "Nezayork", "Estado de México", "edificio amarillo junto al oxxo"));
		addressRepository.save(new Address("Fiona Díaz", "5520030044", "Museo", "150", null, "San Pablo Tepetlapa", "89060", "Tampico", "Tamaulipas", "barda de patio con piedra de cantera"));
		addressRepository.save(new Address("Juana Lavigne", "5567891011", "O'Gorman", "81", null, "San Ángel", "1060", "Álvaro Obregón", "Ciudad de México", "casa azul frente a puesto de tacos"));
		
		// Obtener el cliente con ID 3
		Optional<Address> optionalAddress  = addressRepository.findById( 100L );
		
		if( optionalAddress.isPresent() ) {
			Address existingAddress = optionalAddress.get();
			log.info( existingAddress.toString() );
		} else {
			log.warn("No existe la dirección con ID indicado");
		}
	}

}

