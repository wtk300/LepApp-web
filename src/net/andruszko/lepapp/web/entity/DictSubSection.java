package net.andruszko.lepapp.web.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class DictSubSection {
	
	@Id	
	private Long id; 
	
    private String descrition;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescrition() {
		return descrition;
	}

	public void setDescrition(String descrition) {
		this.descrition = descrition;
	}
    
    

}
