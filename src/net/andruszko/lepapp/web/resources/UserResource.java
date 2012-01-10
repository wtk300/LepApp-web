package net.andruszko.lepapp.web.resources;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
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
import org.codehaus.jettison.json.JSONObject;

import sun.swing.StringUIClientPropertyKey;

@Path("user")
public class UserResource {
	
//	JSONObject createJson(Map map){
//	 try {
//         return new JSONObject(map);
//        
//     } catch (JSONException je){
//         return null;
//     }
//	}

	@Path("/checkLoginAvail/{sessionId}/{login}")
	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML} )
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Response checkLoginAvail(@PathParam("sessionId") String sessionId, @PathParam("login") String login){
		
		return Response.ok().build();
	}
	
	@Path("/register")
	@POST
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON})
	public Response register(User input) {
		
		EntityManager em = EMFService.get().createEntityManager();
		try{
			
			if (StringUtils.isBlank(input.getLogin()) || StringUtils.isBlank(input.getPassword())){
				return Response.notModified().build();
			}
			
			System.out.println("input " + input.getLastName() + " "
					+ input.getFirstName() + " " + input.getLogin() + " "
					+ input.getPassword());

			
			
			em.getTransaction().begin();
			net.andruszko.lepapp.web.entity.User registeremUser = new UserAssembler().write(input);
			em.persist(registeremUser);
			em.getTransaction().commit();
						
			return Response.ok(registeremUser.getId()).build();
		}finally{
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
		EntityManager em = EMFService.get().createEntityManager();
		javax.persistence.Query q = em.createQuery("select t from User t ");

		List<net.andruszko.lepapp.web.entity.User> query = q.getResultList();

//		for (net.andruszko.lepapp.web.entity.User input : query) {
//			System.out.println("lastname " + input.getLastName()
//					+ " firstname " + input.getFirstName() + " login "
//					+ input.getLogin() + " password " + input.getPassword()
//					+ " id " + input.getId());
//		}

		return Response.ok(user).build();
	}

}
