package com.techdepot.app.service.impl;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.techdepot.app.model.Address;
import com.techdepot.app.repository.AddressRepository;
import com.techdepot.app.service.AddressService;



@Service
public class AddressServiceImpl implements AddressService {
	
	private final AddressRepository addressRepository;
	
	public AddressServiceImpl(AddressRepository addressRepository) {
		this.addressRepository = addressRepository;
	}
	
	@Override
	public Address createAddress(Address address) {
		Optional<Address> optionalAddress = Optional.ofNullable(addressRepository.findByName(address.getName()));
		if( optionalAddress.isPresent()) {
			throw new IllegalStateException("Address already exist with name " + address.getName());
		}
		// TODO Verificar si los atributos son válidos
		address.setId(null); // forzar la creación de la dirección	
		address.setActive(true); // activar dirección
		address.setCreatedAt(LocalDateTime.now());
		// TODO asignar el ROL de cliente
		Address newAddress = addressRepository.save( address );
		return newAddress;
	}

	@Override
	public Address getAddressById(Long id) {
		Optional<Address> optionalAddress = addressRepository.findById(id);
		if( optionalAddress.isEmpty()) {
			throw new IllegalStateException("Address does not exist with id " + id);
		}
		Address existingAddress = optionalAddress.get();
		return existingAddress;
	}

	@Override
	public Address getAddressByName(String name) {
		Optional<Address> optionalAddress = Optional.ofNullable(addressRepository.findByName(name));
		if( optionalAddress.isEmpty()) {
			throw new IllegalStateException("Address does not exist with name " + name);
		}
		return optionalAddress.get();
	}

	@Override
	public Page<Address> getAllUsers(boolean isActive, int pageNumber, int pageSize) {
		Page<Address> address;
		PageRequest pageAndSize = PageRequest.of(pageNumber, pageSize);
		if( isActive ) {
			address = addressRepository.findAllByActiveTrue(pageAndSize);
		} else {
			address = addressRepository.findAllByActiveFalse(pageAndSize);
		}
		return address;
	}

	@Override
	public Address updateAddress(Address address, Long id) {
		// TODO verificar los nuevos atributos a cambiar
		Address existingAddress = getAddressById(id);
		existingAddress.setPhone( address.getPhone() );
		existingAddress.setStreet( address.getStreet() );
		existingAddress.setExteriorNumber( address.getExteriorNumber() );
		existingAddress.setInteriorNumber( address.getInteriorNumber() );
		existingAddress.setNeighborhood( address.getNeighborhood() );
		existingAddress.setZipCode( address.getZipCode() );
		existingAddress.setCity( address.getCity() );
		existingAddress.setState( address.getState() );
		existingAddress.setReferences( address.getReferences() );
		existingAddress.setUsers( address.getUsers() );
		// TODO modificar los roles en caso de ser necesario
		// ID y name no se permite modificar
		return addressRepository.save(existingAddress);
	}

	@Override
	public void deleteAddress(Long id) {
		Address existingAddress = getAddressById(id);
		// addressRepository.delete(existingAddress);
		// En lugar de eliminarlo se desactiva al usuario
		existingAddress.setActive(false); 
		addressRepository.save(existingAddress);
	}

	@Override
	public Set<Address> getAllAddress() {
		// TODO Auto-generated method stub
		return null;
	}

}
	
	

	