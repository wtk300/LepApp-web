package net.andruszko.lepapp.web.service;

import net.andruszko.lepapp.web.entity.User;

public interface UserService {
	
	/**
	 * 
	 * @param userName
	 * @return
	 */
	User getUser(String userName);
	
	
}
