package net.andruszko.lepapp.web.auth;


import java.util.Arrays;

import net.andruszko.lepapp.web.service.UserService;

import org.springframework.dao.DataAccessException;

import org.springframework.security.core.authority.GrantedAuthorityImpl;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
//
public class CustomUserDetailsService  implements UserDetailsService {
	
	private UserService userService;

	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException, DataAccessException {
				
		net.andruszko.lepapp.web.entity.User dbUser = userService.getUser(userName);
		if (dbUser == null){
		
			throw new UsernameNotFoundException("User not found "+userName);
		}
		
		CustomAuthUser user = new CustomAuthUser(dbUser.getLogin(),dbUser.getPassword(),dbUser.getFirstName(),dbUser.getLastName(),dbUser.getEmail(), true,true,true,true,Arrays.asList(new GrantedAuthorityImpl("ROLE_PROXY")));
			
		return user;
	}


	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	

}
