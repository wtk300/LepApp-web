package net.andruszko.lepapp.web.resources;

import javax.persistence.EntityManager;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import net.andruszko.lepapp.web.assembler.ContactAssembler;
import net.andruszko.lepapp.web.em.EMFService;
import net.andruszko.lepapp.web.entity.Contact;
import net.andruszko.lepapp.web.vo.ContactVO;

@Path("contact")
public class ContactResource {

	@Path("/register")
	@POST
	@Produces({ MediaType.TEXT_PLAIN})
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Response register(ContactVO input) {

		EntityManager em = EMFService.get().createEntityManager();

		Contact contact = new ContactAssembler().write(input);
		em.persist(contact);
		em.close();
		
		GenericEntity<Long> entity = 
				  new GenericEntity<Long>(contact.getId()) {};
		return Response.ok().build();

	}

}
