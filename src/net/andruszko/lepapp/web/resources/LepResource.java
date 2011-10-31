package net.andruszko.lepapp.web.resources;

import java.util.Collection;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import net.andruszko.lepapp.web.vo.LepSession;
import net.andruszko.lepapp.web.vo.LepSessions;
import net.andruszko.lepapp.web.vo.ObjectFactory;
import net.andruszko.lepapp.web.vo.UserInfo;


@Path("lep")
public class LepResource {
	
    @Path("/sessions")
	@GET
	//@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	@Produces(MediaType.APPLICATION_JSON)
	public Response sessions() {
		ObjectFactory factory = new ObjectFactory();
		
//		LepItems items = factory.createLepItems();
//		LepItem item = factory.createLepItem();
//		//item.set
//		items.getLepItems().add(item);
		LepSessions sessions = factory.createLepSessions();
		LepSession session = factory.createLepSession();
		session.setDesc("2009-10-01");
		session.setId(10);
		sessions.getLepSession().add(session);
		session = factory.createLepSession();
		session.setDesc("2010-10-01");
		session.setId(20);
		sessions.getLepSession().add(session);
		session = factory.createLepSession();
		session.setDesc("2011-10-01");
		session.setId(30);
		sessions.getLepSession().add(session);
		
		return Response.ok(factory.createLepSessions(sessions)).build();
	}
    
    @Path("/{antycache}/loggedUser")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getLoggedUser(@PathParam("antycache") String antyCache){
    	Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    	String currentUser = auth.getName();
        Collection<GrantedAuthority> grantedAuthroity = auth.getAuthorities();
        
        for (GrantedAuthority ga : grantedAuthroity){
        	System.out.println(""+ga.getAuthority());
        }
        
    	ObjectFactory factory = new ObjectFactory();
    	UserInfo userInfo = factory.createUserInfo();
    	userInfo.setLogin(currentUser);
    	
    	System.out.println("currentUser "+currentUser+ " cache "+antyCache);
    	return Response.ok(factory.createUserInfo(userInfo)).build();
    }

}
