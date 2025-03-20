INSERT INTO compras (fecha_compra,fecha_entrega_estimada,estado_compra,usuarios_id,direcciones_id,metodos_de_pago_id,subtotal,total)
VALUES ('2025-03-07 23:43:22', '2025-03-15', 'Pendiente', 2, 3, 7, 1500.00, 1520.00), 
('2024-12-07 01:43:52', '2025-01-05', 'Completo', 1, 4, 3, 800.00, 820.00), 
('2024-11-24 21:32:23', '2024-12-15', 'Completo', 3, 2, 4, 2700.00, 1520.00), 
('2025-03-07 13:53:23', '2025-03-15', 'Completo', 4, 5, 2, 1500.00, 1520.00), 
('2025-03-07 17:02:12', '2025-03-15', 'Cancelado', 5, 1, 5, 1500.00, 1520.00);

select * from compras;