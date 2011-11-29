package net.andruszko.lepapp.web.assembler;

import net.andruszko.lepapp.web.vo.User;

public class UserAssembler {
	
	public net.andruszko.lepapp.web.entity.User write(User user){
		net.andruszko.lepapp.web.entity.User desc = new net.andruszko.lepapp.web.entity.User();
		desc.setEmail(user.getEmail());
		desc.setFirstName(user.getFirstName());
		desc.setLastName(user.getLastName());
		desc.setLogin(user.getLogin());
		desc.setPassword(user.getPassword());
		return desc;
		
	}
}
