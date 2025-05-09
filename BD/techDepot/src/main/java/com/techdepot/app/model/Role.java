package com.techdepot.app.model;



import jakarta.persistence.*;


@Entity
@Table(name="roles")
public class Role{
	


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Long id;
	
	  @Column(name = "name", length = 100, nullable = false)
	  private String name;
	  
	  
		@Column(name = "description", length = 400, nullable = true)
		private String description;
		
		public Role(){}
		
		public Role(String name ,String description){
			this.name=name;
			this.description=description;
			
		}
	  
	//getters
		
		public Long getId() {
			return id;
		}
		
		public String getName() {
			return name;
		}
		
		public String getDescription() {
			return description;
		}
		
    //seters
	
		public void setId(Long id) {
			this.id=id;
		}
		
		public void setName(String name) {
			this.name=name;
		}
		
		public void setDescription(String description) {
			this.description=description;
		}
		
		@Override
		public String toString() {
			StringBuilder builder = new StringBuilder();
			builder.append("Role [id=");
			builder.append(id);
			builder.append(", name=");
			builder.append(name);
			builder.append(", description=");
			builder.append(description);
			builder.append("]");
			return builder.toString();
		}

		public void getId(Long role) {
			
			
		}

	
		
		
		
	
}