package net.andruszko.lepapp.web.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
/**
 * 
 * @author wtk300
 *
 */
@Entity
public class LepSession {
	
	public static String ID = "id";
	@Id
	private Long  id;

	public static String DESC = "desc";
    private String desc;
    
    

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
    
    
}
