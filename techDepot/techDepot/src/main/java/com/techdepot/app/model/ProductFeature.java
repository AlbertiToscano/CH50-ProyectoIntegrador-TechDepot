package com.techdepot.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "caracteristicas_de_productos")
public class ProductFeature {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="procesador", length = 45, nullable = true)
	private String processor;
	@Column(name="memoria RAM", length = 45, nullable = true)
	private String ramMemory;
	@Column(name="almacenamiento", length = 45, nullable = true)
	private String storage;
	@Column(name="tipo", length = 45, nullable = true)
	private String type;
	@Column(name="compatibilidad", length = 45, nullable = true)
	private String compatibility;
	@Column(name="conectividad", length = 45, nullable = true)
	private String connectivity;
	@Column(name="rgb", length = 45, nullable = true)
	private String rgb;
	@Column(name="velocidad", length = 45, nullable = true)
	private String velocity;
	@Column(name="capacidad_de_almacenamiento", length = 45, nullable = true)
	private String storageCapacity;
	@Column(name="frecuencia", length = 45, nullable = true)
	private String frequency;
	@Column(name="tipo_de_impresion", length = 45, nullable = true)
	private String printingType;
	@Column(name="ddr", length = 45, nullable = true)
	private String ddr;
	@Column(name="tdp", nullable = true)
	private Integer tdp;
	@Column(name="tamaño", length = 45, nullable = true)
	private String size;
	@Column(name="socket", length = 45, nullable = true)
	private String socket;
	@Column(name="disipador", nullable = true)
	private boolean heatsink;
	@Column(name="graficos_integrados", nullable = true)
	private boolean integratedGraphics;
	
	ProductFeature() {
		
	}
	
	public ProductFeature(String storage, String type, String connectivity, String velocity, String storageCapacity) {
		this.storage = storage;
		this.type = type;
		this.connectivity = connectivity;
		this.velocity = velocity;
		this.storageCapacity = storageCapacity;
	}
	
	public ProductFeature(Long id, String processor, String ramMemory, String storage, String type, String compatibility, String connectivity, String rgb, String velocity, String storageCapacity, String frequency, String printingType, String ddr, Integer tdp, String size, String socket, boolean heatsink, boolean integratedGraphics){
		this.id = id;
		this.processor = processor;
		this.ramMemory = ramMemory;
		this.storage = storage;
		this.type = type;
		this.compatibility = compatibility;
		this.connectivity = connectivity;
		this.rgb = rgb;
		this.velocity = velocity;
		this.storageCapacity = storageCapacity;
		this.frequency = frequency;
		this.printingType = printingType;
		this.ddr = ddr;
		this.tdp = tdp;
		this.size = size;
		this.socket = socket;
		this.heatsink = heatsink;
		this.integratedGraphics = integratedGraphics;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProcessor() {
		return processor;
	}

	public void setProcessor(String processor) {
		this.processor = processor;
	}

	public String getRamMemory() {
		return ramMemory;
	}

	public void setRamMemory(String ramMemory) {
		this.ramMemory = ramMemory;
	}

	public String getStorage() {
		return storage;
	}

	public void setStorage(String storage) {
		this.storage = storage;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getCompatibility() {
		return compatibility;
	}

	public void setCompatibility(String compatibility) {
		this.compatibility = compatibility;
	}

	public String getConnectivity() {
		return connectivity;
	}

	public void setConnectivity(String connectivity) {
		this.connectivity = connectivity;
	}

	public String getRgb() {
		return rgb;
	}

	public void setRgb(String rgb) {
		this.rgb = rgb;
	}

	public String getVelocity() {
		return velocity;
	}

	public void setVelocity(String velocity) {
		this.velocity = velocity;
	}

	public String getStorageCapacity() {
		return storageCapacity;
	}

	public void setStorageCapacity(String storageCapacity) {
		this.storageCapacity = storageCapacity;
	}

	public String getFrequency() {
		return frequency;
	}

	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}

	public String getPrintingType() {
		return printingType;
	}

	public void setPrintingType(String printingType) {
		this.printingType = printingType;
	}

	public String getDdr() {
		return ddr;
	}

	public void setDdr(String ddr) {
		this.ddr = ddr;
	}

	public Integer getTdp() {
		return tdp;
	}

	public void setTdp(Integer tdp) {
		this.tdp = tdp;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getSocket() {
		return socket;
	}

	public void setSocket(String socket) {
		this.socket = socket;
	}

	public boolean isHeatsink() {
		return heatsink;
	}

	public void setHeatsink(boolean heatsink) {
		this.heatsink = heatsink;
	}

	public boolean isIntegratedGraphics() {
		return integratedGraphics;
	}

	public void setIntegratedGraphics(boolean integratedGraphics) {
		this.integratedGraphics = integratedGraphics;
	}
	

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("ProductFeature [id=");
		builder.append(id);
		builder.append(", processor=");
		builder.append(processor);
		builder.append(", RAM memory=");
		builder.append(ramMemory);
		builder.append(", storage=");
		builder.append(storage);
		builder.append(", type=");
		builder.append(type);
		builder.append(", compatibility=");
		builder.append(compatibility);
		builder.append(", connectivity=");
		builder.append(connectivity);
		builder.append(", rgb=");
		builder.append(rgb);
		builder.append(", velocity=");
		builder.append(velocity);
		builder.append(", storage capacity=");
		builder.append(storageCapacity);
		builder.append(", frequency=");
		builder.append(frequency);
		builder.append(", printingType=");
		builder.append(printingType);
		builder.append(", ddr=");
		builder.append(ddr);
		builder.append(", tdp=");
		builder.append(tdp);
		builder.append(", size=");
		builder.append(size);
		builder.append(", socket=");
		builder.append(socket);
		builder.append(", heatsink=");
		builder.append(heatsink);
		builder.append(", integrated graphics=");
		builder.append(integratedGraphics);
		builder.append("]");
		return builder.toString();
	}
	
	
	
	
	
	
	
}
