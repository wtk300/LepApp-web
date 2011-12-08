package net.andruszko.lepapp.web.auth;

import java.util.ArrayList;

import org.springframework.dao.DataAccessException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
//
public class CustomUserDetailsService  implements UserDetailsService {

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DataAccessException {
		
		
		
		User user = new User("admin", "a", true,true,true,true,new ArrayList<GrantedAuthority>());
				
		return user;
	}

}
