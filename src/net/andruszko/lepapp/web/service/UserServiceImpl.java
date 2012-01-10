package net.andruszko.lepapp.web.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import net.andruszko.lepapp.web.em.EMFService;
import net.andruszko.lepapp.web.entity.User;
//net.andruszko.lepapp.web.service.UserServiceImpl
public class UserServiceImpl implements UserService {

	public User getUser(String userName) {
		EntityManager em = EMFService.get().createEntityManager();
		
//		Query queryTest = em.createQuery("select u from User u");
//		for (Object o: queryTest.getResultList()){
//			User u = (User)o; 			
//		}
		
		Query query = em.createQuery("select u from User u where u."+User.LOGIN + " = ?1");
		query.setParameter("1", userName);
		
		
		@SuppressWarnings("unchecked")
		List<User> users = query.getResultList();
		
		if (users.isEmpty()){
			return null;
		}
		if (users.size() > 1){
			//throw new IllegalStateException("Two or more users with the same login: "+userName);
			return users.get(0);
		}				
		return users.get(0);
	}

}
