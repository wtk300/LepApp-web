package net.andruszko.lepapp.web.resources;

import java.util.List;

import javax.persistence.EntityManager;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Query;

import net.andruszko.lepapp.web.assembler.UserAssembler;
import net.andruszko.lepapp.web.em.EMFService;
import net.andruszko.lepapp.web.vo.User;

@Path("user")
public class UserResource {

	@Path("/register")
	@POST
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Response register(User input) {
		System.out.println("input " + input.getLastName() + " "
				+ input.getFirstName() + " " + input.getLogin() + " "
				+ input.getPassword());

		EntityManager em = EMFService.get().createEntityManager();

		net.andruszko.lepapp.web.entity.User registeremUser = new UserAssembler()
				.write(input);
		em.persist(registeremUser);
		em.close();
		return Response.ok(registeremUser.getId()).build();

	}

	@Path("/userDemo")
	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Response userDemo() {
		User user = new User();
		user.setEmail("wtk300@gmail.com");
		user.setFirstName("Michal");
		user.setLastName("And");
		user.setLogin("login");
		EntityManager em = EMFService.get().createEntityManager();
		javax.persistence.Query q = em.createQuery("select t from User t ");

		List<net.andruszko.lepapp.web.entity.User> query = q.getResultList();

		for (net.andruszko.lepapp.web.entity.User input : query) {
			System.out.println("lastname " + input.getLastName()
					+ " firstname " + input.getFirstName() + " login "
					+ input.getLogin() + " password " + input.getPassword()
					+ " id " + input.getId());
		}

		return Response.ok(user).build();
	}

}