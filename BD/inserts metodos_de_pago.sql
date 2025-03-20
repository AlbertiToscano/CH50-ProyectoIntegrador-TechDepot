INSERT INTO metodos_de_pago (tipo_de_pago, banco, num_tarjeta, fecha_de_expiracion, usuarios_id) VALUES
('Tarjeta de crédito', 'Banco A', '1234567890123456', '2025-12-31', 1),
('Tarjeta de débito', 'Banco B', '9876543210987654', '2024-11-30', 2),
('PayPal', 'PayPal Inc.', 'ejemplo@paypal.com', NULL, 3),
('Tarjeta de crédito', 'Banco C', '5678901234567890', '2026-06-30', 4),
('Transferencia bancaria', 'Banco D', '0123456789012345', NULL, 5);

select * from metodos_de_pago;