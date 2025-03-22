
package com.techdepot.app.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.techdepot.app.model.Role;
import com.techdepot.app.repository.RoleRepository;

@Component
@Order(1) // Puedes cambiar el número de orden si es necesario
public class RoleDataLoader implements CommandLineRunner {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {

        // Crear y guardar los roles
        roleRepository.save(new Role("Administrador", "Permisos completos"));
        roleRepository.save(new Role("Customer", "Permisos Limitados"));

        
    }
}
