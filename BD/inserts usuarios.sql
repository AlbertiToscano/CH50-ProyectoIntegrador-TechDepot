-- agregar 10 usuarios en la tabla de USERS

INSERT INTO usuarios (nombre, apellido, email, fecha_nacimiento, rol, contrasenia, avatar)

VALUES
("Jefferson", "Gutierritos", "gutierritos44@gmail.com", "1985-03-12","cliente", "1234qwerty", "https://drive.google.com/file/d/1SSkN4pqlIG7op9yO7BczASVg-L67BW4F/view?usp=drive_link"),
("Robert", "De Niro", "elpadrino@hotmail.com", "1943-08-17", "cliente","flipflopjk", "https://drive.google.com/file/d/1B_nUHsfIu8X5fyPkovOE34IQ81Vr-z0B/view?usp=sharing"),
("Alvin", "Yakitori", "ardillita2000@yahoo.com", "1990-01-05", "cliente","chocolate.12", "https://drive.google.com/file/d/1qziwM1bVV4uuxPVBmsrYQrQ5i413GdzV/view?usp=sharing"),
("Ramona", "Flowers", "jardinverde@gmail.com", "1987-09-23", "cliente","911SOS", "https://drive.google.com/file/d/1rBh5Ti2CmTajHPeWBcwCiNWADOncxsJu/view?usp=sharing"),
("Thomas", "Anderson", "tomy255@gmail.com", "1980-11-01", "cliente","credcard99", "https://drive.google.com/file/d/1sJTveV9xneAzOzaFHEk_8hglwlm28doM/view?usp=sharing"),
("Dwayne", "Johnson", "theRock@hotmail.com", "1972-05-02", "cliente","SharK039", "https://drive.google.com/file/d/1SSkN4pqlIG7op9yO7BczASVg-L67BW4F/view?usp=sharing"),
("Scarlett", "Johansson", "blackwidowAV@gmail.com", "1984-11-22", "cliente","C4L4b4z4", "https://drive.google.com/file/d/1agk3OYLgM1YM3s-zUrAVx8x2jRqsLLs5/view?usp=sharing"),
("Bryce", "Dallas", "t-rex874@gmail.com", "1981-03-24", "cliente","NaCL99%", "https://drive.google.com/file/d/1gaJP5qALddi9ZhYyfTcvy9DFsArbL-Kc/view?usp=sharing"),
("Jason", "Statham", "jnStan568@gmail.com", "1967-07-26", "cliente","H2SO4_NH3", "https://drive.google.com/file/d/1qziwM1bVV4uuxPVBmsrYQrQ5i413GdzV/view?usp=sharing"),
("Stephen", "Covey", "powermind@hotmail.com", "1932-10-24", "cliente","C6H12O6", "https://drive.google.com/file/d/1Pw3DaoRohHLrUqCGziLA9v77PoaDK2We/view?usp=sharing");

select * From usuarios;