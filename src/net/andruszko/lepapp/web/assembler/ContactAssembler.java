package net.andruszko.lepapp.web.assembler;

import net.andruszko.lepapp.web.entity.Contact;
import net.andruszko.lepapp.web.vo.ContactVO;

public class ContactAssembler {

	public Contact write(ContactVO input){
		Contact c = new Contact();
		c.setContent(input.getContent());
		c.setEmail(input.getEmail());
		c.setFirstName(input.getFirstName());
		c.setLastName(input.getLastName());
		c.setLogin(input.getLogin());
		return c;
	}
}
