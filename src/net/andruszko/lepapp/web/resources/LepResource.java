package net.andruszko.lepapp.web.resources;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.xml.bind.JAXBElement;

import net.andruszko.lepapp.web.assembler.LepItemAssembler;
import net.andruszko.lepapp.web.auth.CustomAuthUser;
import net.andruszko.lepapp.web.em.EMFService;
import net.andruszko.lepapp.web.entity.CallAudit;
import net.andruszko.lepapp.web.entity.DictSubSection;
import net.andruszko.lepapp.web.entity.LepItem;
import net.andruszko.lepapp.web.entity.LepSession;
import net.andruszko.lepapp.web.vo.LepItems;
import net.andruszko.lepapp.web.vo.LepSessions;
import net.andruszko.lepapp.web.vo.ObjectFactory;
import net.andruszko.lepapp.web.vo.User;
import net.andruszko.lepapp.web.vo.UserInfo;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import net.sf.jsr107cache.Cache;
import net.sf.jsr107cache.CacheException;
import net.sf.jsr107cache.CacheFactory;
import net.sf.jsr107cache.CacheManager;

/**
 * 
 * @author wtk300
 *
 */
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
	public Response getLoggedUser(@PathParam("antycache") String antyCache, @Context HttpServletRequest hsr,@Context HttpHeaders headers) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		
		User user = new User();
		
		if (auth instanceof AnonymousAuthenticationToken){
			
			AnonymousAuthenticationToken anonim = (AnonymousAuthenticationToken)auth;
			WebAuthenticationDetails authDetails = (WebAuthenticationDetails)anonim.getDetails();
			
			user.setLogin(auth.getName());
			user.setFirstName("Gall");
			user.setLastName("Anonim ");
			user.setIsAuth(false);
			for (GrantedAuthority ga : anonim.getAuthorities()){
				user.setLastName(user.getLastName()+  " "+ga.getAuthority());
			}
			 
			
		}else if (auth instanceof UsernamePasswordAuthenticationToken){
			
			 UsernamePasswordAuthenticationToken logged = ( UsernamePasswordAuthenticationToken)auth;
			 CustomAuthUser authUser = (CustomAuthUser)logged.getPrincipal();
			 WebAuthenticationDetails authDetails = (WebAuthenticationDetails)logged.getDetails();
			 
			 user.setLogin(auth.getName());
			 user.setFirstName(authUser.getFirstName());
			 user.setLastName(authUser.getLastName());
			 user.setIsAuth(true);

		
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
		
		
		EntityManager em = EMFService.get().createEntityManager();
		em.getTransaction().begin();
		CallAudit ca = new CallAudit();
		em.persist(ca);		
		ca.setLogin(user.getLogin());
		ca.setUserAgent(headers.getRequestHeader(HttpHeaders.USER_AGENT).get(0));
		ca.setRemoteAddr(hsr.getRemoteAddr());
		ca.setRemoteHost(hsr.getRemoteHost());
		em.getTransaction().commit();
		
		
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
	@Produces({MediaType.APPLICATION_XML})
	@Path("/updateLep/{sessionId}")
	public Response updateLep(@PathParam("sessionId")Long sessionId, LepItems lepItems){
	
		EntityManager em = EMFService.get().createEntityManager();
		
		LepItemAssembler assembler = new LepItemAssembler();
		for (net.andruszko.lepapp.web.vo.LepItem item : lepItems.getLepItems()){
			em.getTransaction().begin();
			net.andruszko.lepapp.web.entity.LepItem entity = assembler.write(item);		
			entity.setSessionId(sessionId);
			em.persist(entity);
			em.getTransaction().commit();
		}
		em.close();
		return Response.ok("<id>1</id>").build();
	}
	
	private List<net.andruszko.lepapp.web.entity.LepItem> getLepItems(Long sessionId){

		EntityManager em = EMFService.get().createEntityManager();
		
		Query query = em.createQuery("select li from LepItem li where li."+LepItem.SESSION_ID+ "=?1 order by position");
		query.setParameter("1", sessionId);
		
		List<net.andruszko.lepapp.web.entity.LepItem> entityList = new ArrayList<net.andruszko.lepapp.web.entity.LepItem>();
		for (Object o: query.getResultList()){
			
			net.andruszko.lepapp.web.entity.LepItem item = (net.andruszko.lepapp.web.entity.LepItem)o;
			entityList.add(item);					
		}
		
		return entityList;
	}
	
	private LepItems prepare( List<net.andruszko.lepapp.web.entity.LepItem> entities){
		LepItemAssembler assembler = new LepItemAssembler();
		ObjectFactory factory = new ObjectFactory();
		LepItems items = factory.createLepItems();
		
		for (net.andruszko.lepapp.web.entity.LepItem li : entities){
			items.getLepItems().add(assembler.read(li));
		}		
		
		return items;
	}

	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Path("/startLep/{sessionId}/{lepId}/{langId}/{subSectionId}")
	public Response startLep(@PathParam("sessionId")Long sessionId,
			@PathParam("lepId") Long lepId,
			@PathParam("langId") Long langId,
			@PathParam("subSectionId") Long subSectionId) {
		
			Cache cache;

	        try {
	            CacheFactory cacheFactory = CacheManager.getInstance().getCacheFactory();
	            cache = cacheFactory.createCache(Collections.emptyMap());
	            ObjectFactory factory = new ObjectFactory();
	            if (cache.containsKey(sessionId)){	            
	            	@SuppressWarnings("unchecked")
					List<net.andruszko.lepapp.web.entity.LepItem> items = (List<LepItem>) cache.get(sessionId);
	            	return Response.ok(factory.createLepItems(prepare(items))).build();
	            	
	            }else{	            	
	            	List<net.andruszko.lepapp.web.entity.LepItem> items = getLepItems(sessionId);
	        		cache.put(sessionId, items);
	        		return Response.ok(factory.createLepItems(prepare(items))).build();
	            }
	            	
	            
	        } catch (CacheException e) {
	        	e.printStackTrace();
	        	return Response.serverError().build();
	        }
		
		
	}

}
