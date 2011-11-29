package net.andruszko.lepapp.web.resources;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import net.andruszko.lepapp.web.assembler.LepItemAssembler;
import net.andruszko.lepapp.web.em.EMFService;
import net.andruszko.lepapp.web.entity.LepSession;
import net.andruszko.lepapp.web.vo.LepItem;
import net.andruszko.lepapp.web.vo.LepItems;
import net.andruszko.lepapp.web.vo.LepSessions;
import net.andruszko.lepapp.web.vo.ObjectFactory;
import net.andruszko.lepapp.web.vo.User;
import net.andruszko.lepapp.web.vo.UserInfo;

@Path("lep")
public class LepResource {

	@Path("/sessions")
	@GET
	// @Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	@Produces(MediaType.APPLICATION_JSON)
	public Response sessions() {
		ObjectFactory factory = new ObjectFactory();
		
		EntityManager em = EMFService.get().createEntityManager();
		
		Query query = em.createQuery("select lp from LepSession lp order by desc");

		// LepItems items = factory.createLepItems();
		// LepItem item = factory.createLepItem();
		// //item.set
		 
		LepSessions sessions = factory.createLepSessions();
		for (Object s : query.getResultList()){
			LepSession ls = (LepSession)s;
			
			net.andruszko.lepapp.web.vo.LepSession session = factory.createLepSession();
			session.setDesc(ls.getDesc());
			session.setId(ls.getId());
			sessions.getLepSession().add(session);
		}
		

		return Response.ok(factory.createLepSessions(sessions)).build();
	}

	@Path("/{antycache}/loggedUser")
	@GET
	@Produces(MediaType.APPLICATION_XML)
	public Response getLoggedUser(@PathParam("antycache") String antyCache) {
		Authentication auth = SecurityContextHolder.getContext()
				.getAuthentication();
		String currentUser = auth.getName();
		Collection<GrantedAuthority> grantedAuthroity = auth.getAuthorities();

		// for (GrantedAuthority ga : grantedAuthroity){
		// System.out.println(""+ga.getAuthority());
		// }

		ObjectFactory factory = new ObjectFactory();
		UserInfo userInfo = factory.createUserInfo();

		User user = new User();
		user.setFirstName("Mike");
		user.setLastName("Tyson");
		user.setLogin(currentUser);

		userInfo.setUser(user);
		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder
				.currentRequestAttributes();
		HttpSession session = attr.getRequest().getSession(true); // true ==
																	// allow
																	// create
		String sessionId = session.getId();
		userInfo.setSessionId(sessionId);
		// System.out.println("currentUser "+currentUser+ " cache "+antyCache);
		return Response.ok(factory.createUserInfo(userInfo)).build();
	}
	
	@Path("/init")
	@GET
	public Response init(){
		
		EntityManager em = EMFService.get().createEntityManager();
		
		em.getTransaction().begin();
		LepSession session = new LepSession();
		session.setId(10L);
		session.setDesc("2008-09");
		em.persist(session);
		
		em.getTransaction().commit();
		
		
		em.getTransaction().begin();
		session = new LepSession();
		session.setId(20L);
		session.setDesc("2009-02");
		em.persist(session);
		
		em.getTransaction().commit();
		
		
		em.getTransaction().begin();
		session = new LepSession();
		session.setId(30L);
		session.setDesc("2009-09");
		em.persist(session);
		em.getTransaction().commit();

		em.getTransaction().begin();
		session = new LepSession();
		session.setId(40L);
		session.setDesc("2010-02");
		em.persist(session);
		em.getTransaction().commit();
	
		
		em.getTransaction().begin();
		session = new LepSession();
		session.setId(50L);
		session.setDesc("2010-09");
		em.persist(session);
		em.getTransaction().commit();
		
	
		em.getTransaction().begin();
		session = new LepSession();
		session.setId(60L);
		session.setDesc("2010-09");
		em.persist(session);
		em.getTransaction().commit();
	
		
		em.getTransaction().begin();
		session = new LepSession();
		session.setId(70L);
		session.setDesc("2011-02");
		em.persist(session);
		em.getTransaction().commit();


		em.getTransaction().begin();
		session = new LepSession();
		session.setId(80L);
		session.setDesc("2011-09");
		em.persist(session);
		em.getTransaction().commit();
		em.close();
		return Response.ok().build();
	}
	
	@POST
	@Consumes({MediaType.APPLICATION_XML})
	@Path("/updateLep11L2")
	public Response updateLepTest11L2(@PathParam("sessionId")Long sessionId, LepItems lepItems){
		
	
		
		EntityManager em = EMFService.get().createEntityManager();

		
		LepItemAssembler assembler = new LepItemAssembler();
		for (net.andruszko.lepapp.web.vo.LepItem item : lepItems.getLepItems()){
			em.getTransaction().begin();
			net.andruszko.lepapp.web.entity.LepItem entity = assembler.write(item);
			entity.setSession(em.find(LepSession.class, 80L));
			em.persist(entity);
			em.getTransaction().commit();
		}
		em.close();
		return Response.ok().build();
	}

	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Path("/startLep/{sessionId}/{lepId}/{langId}/{subSectionId}")
	public Response startLep(@PathParam("sessionId") Integer sessionId,
			@PathParam("lepId") Integer lepId,
			@PathParam("langId") Integer langId,
			@PathParam("subSectionId") Integer subSectionId) {
		ObjectFactory factory = new ObjectFactory();
		LepItems items = factory.createLepItems();

		for (int i = 0; i < 255; i++) {
			LepItem item = factory.createLepItem();
			item.setPosition(i);
			item.setQuestion("Pytanie czy ale ma kota a kot ma kota ble bele "
					+ i);
			item.setAnswerA("odpowiedz A");
			item.setAnswerB("odpowiedz B");
			item.setAnswerC("odpowiedz C");
			item.setAnswerD("odpowiedz D");
			item.setAnswerE("odpowiedz F");

			if (i % 2 == 0) {
				item.setCorrectAns("A");
				item.setSubSectionId(10);
			} else {
				item.setCorrectAns("B");
				item.setSubSectionId(20);
			}

			if (i % 3 == 0) {
				item.setCorrectAns("C");
				item.setSubSectionId(30);
			}

			if (i % 7 == 0) {
				item.setCorrectAns("D");
				item.setSubSectionId(40);
			}

			if (i % 5 == 0) {
				item.setCorrectAns("E");
				item.setSubSectionId(50);
			}

			items.getLepItems().add(item);
		}

		return Response.ok(factory.createLepItems(items)).build();
	}

}
