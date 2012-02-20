package net.andruszko.lepapp.web.resources;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import net.andruszko.lepapp.web.assembler.UserAssembler;
import net.andruszko.lepapp.web.em.EMFService;
import net.andruszko.lepapp.web.vo.User;

import org.apache.commons.lang3.StringUtils;


@Path("user")
public class UserResource {

	@Path("/checkLoginAvail/{sessionId}/{login}")
	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Response checkLoginAvail(@PathParam("sessionId") String sessionId,@PathParam("login") String login) {
		
		EntityManager em = EMFService.get().createEntityManager();
		try {
			em.getTransaction().begin();
			Query query = em.createQuery("select t from User t where t."
					+ net.andruszko.lepapp.web.entity.User.LOGIN + " = ?1 ");
			query.setParameter("1", login);

			@SuppressWarnings("unchecked")
			List<net.andruszko.lepapp.web.entity.User> users = query.getResultList();
			
			em.getTransaction().commit();
			if (query.getResultList().size() == 0) {
				return Response.ok(-1L).build();
			} else {
				return Response.ok(users.get(0).getId()).build();
			}
		} finally {
			em.close();
		}

	}
	
	private net.andruszko.lepapp.web.entity.User getUserByLogin(String username){
		EntityManager em = EMFService.get().createEntityManager();
		try {
			em.getTransaction().begin();
			Query query = em.createQuery("select t from User t where t."
					+ net.andruszko.lepapp.web.entity.User.LOGIN + " = ?1 ");
			query.setParameter("1", username);

			@SuppressWarnings("unchecked")
			List<net.andruszko.lepapp.web.entity.User> users = query.getResultList();
			
			em.getTransaction().commit();
			if (query.getResultList().isEmpty()) {
				return null;
			} else if (query.getResultList().size() == 1) {
				return users.get(0);
			}else {
				throw new IllegalStateException("More than one user with the same login "+username+".");
			}
		} finally {
			em.close();
		}

	}

	@Path("/register")
	@POST
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON })
	public Response register(User input) {

		EntityManager em = EMFService.get().createEntityManager();
		try {

			if (StringUtils.isBlank(input.getLogin()) || StringUtils.isBlank(input.getPassword())) {
				return Response.notModified().build();
			}
			
			if (getUserByLogin(input.getLogin()) != null){
				return Response.ok(-1L).build();
			}

			em.getTransaction().begin();
			net.andruszko.lepapp.web.entity.User registeremUser = new UserAssembler()
					.write(input);
			em.persist(registeremUser);
			em.getTransaction().commit();

			return Response.ok(registeremUser.getId()).build();
		} finally {
			em.close();
		}

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

		return Response.ok(user).build();
	}

}
