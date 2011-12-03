package net.andruszko.lepapp.web.auth;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.security.core.userdetails.User;
import org.springframework.util.Assert;

public class CustomAuthManager implements AuthenticationManager {

	public Authentication authenticate(Authentication auth) throws AuthenticationException {
		auth.getPrincipal();
		
		String principal = (String) auth.getPrincipal();
		String credentials = (String)auth.getCredentials();
		
		if(StringUtils.isBlank(principal) || StringUtils.isBlank((credentials) )){
			throw new BadCredentialsException("Ivalid user/password");
		}
		
		
		GrantedAuthority[]  grantedAuth = new GrantedAuthority[]{new GrantedAuthorityImpl("ROLE_ADMIN")};
		User user = new User(principal,credentials,true,true,true,true,grantedAuth);
		
				
	//	   Assert.hasText(username);
	 //       Assert.notNull(authentication.getCredentials());
		return new UsernamePasswordAuthenticationToken(user, credentials,grantedAuth);
				
				
	}
}
