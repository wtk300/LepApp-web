package net.andruszko.lepapp.web.resources;

import java.util.Collection;
import java.util.List;

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

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import net.andruszko.lepapp.web.assembler.LepItemAssembler;
import net.andruszko.lepapp.web.auth.CustomAuthUser;
import net.andruszko.lepapp.web.em.EMFService;
import net.andruszko.lepapp.web.entity.DictSubSection;
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
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public Response getLoggedUser(@PathParam("antycache") String antyCache) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		
		User user = new User();
		user.setLogin(auth.getName());
		if (auth instanceof AnonymousAuthenticationToken){
			
			AnonymousAuthenticationToken anonim = (AnonymousAuthenticationToken)auth;
			WebAuthenticationDetails authDetails = (WebAuthenticationDetails)anonim.getDetails();
			
			user.setFirstName("Mike "+authDetails.getRemoteAddress());
			user.setLastName("Tyson ");
			
			
		}else if (auth instanceof UsernamePasswordAuthenticationToken){
			
			 UsernamePasswordAuthenticationToken logged = ( UsernamePasswordAuthenticationToken)auth;
			 CustomAuthUser authUser = (CustomAuthUser)logged.getPrincipal();
			 WebAuthenticationDetails authDetails = (WebAuthenticationDetails)logged.getDetails();
			 
			 
			 user.setFirstName(authUser.getFirstName());
			 user.setLastName(authUser.getLastName());

		
		}else{
			throw new IllegalStateException("Not inplements instance "+auth.getClass().getSimpleName());
		}
		
		ObjectFactory factory = new ObjectFactory();
		UserInfo userInfo = factory.createUserInfo();
		userInfo.setUser(user);
		
		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		HttpSession session = attr.getRequest().getSession(true); // true ==
																	// allow
																	// create
		String sessionId = session.getId();
		userInfo.setSessionId(sessionId);
		// System.out.println("currentUser "+currentUser+ " cache "+antyCache);
		return Response.ok(factory.createUserInfo(userInfo)).build();
	}
	
	@Path("/initSubSection")
	@GET
	public Response initSubSection(){
		
		EntityManager em = EMFService.get().createEntityManager();
		
		em.getTransaction().begin();
		DictSubSection section = new DictSubSection(); 
		section.setId(10L);
		section.setDescrition("Choroby wewnętrzne");
		em.persist(section);
		
		em.getTransaction().commit();
		
		em.getTransaction().begin();
		section = new DictSubSection(); 
		section.setId(20L);
		section.setDescrition("Pediatria");
		em.persist(section);
		
		em.getTransaction().commit();
		
		em.getTransaction().begin();
		section = new DictSubSection(); 
		section.setId(30L);
		section.setDescrition("Chirurgia");
		em.persist(section);
		
		em.getTransaction().commit();
		
		em.getTransaction().begin();
		section = new DictSubSection(); 
		section.setId(40L);
		section.setDescrition("Ginekologia i położnictwo");
		em.persist(section);
		
		em.getTransaction().commit();
		
		
		em.getTransaction().begin();
		section = new DictSubSection(); 
		section.setId(50L);
		section.setDescrition("Medycyna rodzinna");
		em.persist(section);
		
		em.getTransaction().commit();
		
		
		em.getTransaction().begin();
		section = new DictSubSection(); 
		section.setId(60L);
		section.setDescrition("Psychiatria");
		em.persist(section);
		
		em.getTransaction().commit();
		
		em.getTransaction().begin();
		section = new DictSubSection(); 
		section.setId(70L);
		section.setDescrition("Intesywna terapia i medycyna ratunkowa");
		em.persist(section);
		
		em.getTransaction().commit();
		
		
		em.getTransaction().begin();
		section = new DictSubSection(); 
		section.setId(80L);
		section.setDescrition("Bioetyka i prawo medyczne");
		em.persist(section);
		
		em.getTransaction().commit();
		
		
		em.getTransaction().begin();
		section = new DictSubSection(); 
		section.setId(90L);
		section.setDescrition("Orzecznictwo lekarskie");
		em.persist(section);
		
		em.getTransaction().commit();
		
		
		em.getTransaction().begin();
		section = new DictSubSection(); 
		section.setId(100L);
		section.setDescrition("Zdrowie publiczne");
		em.persist(section);
		
		em.getTransaction().commit();
		
		
		
		
		em.close();
		return Response.ok().build();
	}
	@Path("/replenishSubSection")
	@GET
	public Response replenishSubSections(){
		EntityManager em = EMFService.get().createEntityManager();
		
		Query query = em.createQuery("select li from LepItem li order by position");
		List<net.andruszko.lepapp.web.entity.LepItem> list = query.getResultList();
		
		for (net.andruszko.lepapp.web.entity.LepItem item : list){
			em.getTransaction().begin();
			int position = item.getPosition();
			if (position >=1 && position <= 39){
				item.setSubSectionId(10L);
			}else if (position >=40 && position <= 68){
				item.setSubSectionId(20L);
			}
			else if (position >=69 && position <= 95){
				item.setSubSectionId(30L);
			}
			else if (position >=96 && position <= 121){
				item.setSubSectionId(40L);
			}
			else if (position >=122 && position <= 141){
				item.setSubSectionId(50L);
			}
			else if (position >=142 && position <= 155){
				item.setSubSectionId(60L);
			}
			else if (position >=156 && position <= 175){
				item.setSubSectionId(70L);
			}
			else if (position >=176 && position <= 185){
				item.setSubSectionId(80L);
			}
			else if (position >=186 && position <= 192){
				item.setSubSectionId(90L);
			}
			else if (position >=193 && position <= 200){
				item.setSubSectionId(100L);
			}
			
	
			em.persist(item);
			em.getTransaction().commit();
		}
		em.close();
		return Response.ok().build();
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
		//	entity.setSession(em.find(LepSession.class, 80L));
			em.persist(entity);
			em.getTransaction().commit();
		}
		em.close();
		return Response.ok().build();
	}

	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Path("/startLep/{sessionId}/{lepId}/{langId}/{subSectionId}")
	public Response startLep(@PathParam("sessionId")Long sessionId,
			@PathParam("lepId") Long lepId,
			@PathParam("langId") Long langId,
			@PathParam("subSectionId") Long subSectionId) {
		ObjectFactory factory = new ObjectFactory();
		LepItems items = factory.createLepItems();

		EntityManager em = EMFService.get().createEntityManager();
		
		Query query = em.createQuery("select li from LepItem li order by position");

		LepSessions sessions = factory.createLepSessions();
		
		
		LepItemAssembler assembler = new LepItemAssembler();
		for (Object o: query.getResultList()){
			
			net.andruszko.lepapp.web.entity.LepItem item = (net.andruszko.lepapp.web.entity.LepItem)o;		
			items.getLepItems().add(assembler.read(item));
		}
		
		
		return Response.ok(factory.createLepItems(items)).build();
	}

}
