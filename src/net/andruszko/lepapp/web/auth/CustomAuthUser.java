package net.andruszko.lepapp.web.auth;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

public class CustomAuthUser extends User {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1133554984634969179L;
	
	private String firstName;
	private String lastName;
	private String email;
	

	public CustomAuthUser(String username, String password, boolean enabled,
			boolean accountNonExpired, boolean credentialsNonExpired,
			boolean accountNonLocked,
			Collection<? extends GrantedAuthority> authorities) {
		super(username, password, enabled, accountNonExpired, credentialsNonExpired,accountNonLocked, authorities);
		
	}
	
	public CustomAuthUser(String username, String password,String firstName,String lastName,String email, boolean enabled,
			boolean accountNonExpired, boolean credentialsNonExpired,
			boolean accountNonLocked,
			Collection<? extends GrantedAuthority> authorities) {

		super(username, password, enabled, accountNonExpired, credentialsNonExpired,accountNonLocked, authorities);
		
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	

}
