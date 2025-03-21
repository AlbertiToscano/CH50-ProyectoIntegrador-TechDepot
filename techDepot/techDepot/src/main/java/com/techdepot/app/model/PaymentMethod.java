package com.techdepot.app.model;

import java.time.LocalDate; 




import jakarta.persistence.*;
@Entity
@Table(name = "metodos_de_pago")
public class PaymentMethod {
	 
	

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tipo_de_pago", nullable = false, length = 45)
    private String paymentType;

    @Column(name = "banco", nullable = true, length = 45)
    private String bank;

    @Column(name = "num_tarjeta", nullable = true, length = 45)
    private String cardNumber;

    @Column(name = "fecha_de_expiracion", nullable = true)
    private LocalDate expirationDate;

	
	PaymentMethod() {
	}
   

    public PaymentMethod(String paymentType, String bank, String cardNumber, LocalDate expirationDate) {
    
    	this.paymentType = paymentType;
        this.bank = bank;
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
        
    }
    

	/*
	 * @param paymentType
	 * @param bank
	 */
	public PaymentMethod( String paymentType, String bank) {
		this(paymentType,bank,null,null);
	}


	// Getters and Setters
   

    
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getPaymentType() {
		return paymentType;
	}


	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}


	public String getBank() {
		return bank;
	}


	public void setBank(String bank) {
		this.bank = bank;
	}


	public String getCardNumber() {
		return cardNumber;
	}


	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}


	public LocalDate getExpirationDate() {
		return expirationDate;
	}


	public void setExpirationDate(LocalDate expirationDate) {
		this.expirationDate = expirationDate;
	}


	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("PaymentMethod [id=");
		builder.append(id);
		builder.append(", paymentType");
		builder.append(paymentType);
		builder.append(", bank");
		builder.append(bank);
		builder.append(", cardNumber");
		builder.append(cardNumber);
		builder.append(", expirationDate");
		builder.append(expirationDate);
		return builder.toString();
    }


	
	
	
}

