package net.andruszko.lepapp.web.em;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
/**
 * 
 * @author wtk300
 *
 */
public final class EMFService {
    
	
	private static final EntityManagerFactory emfInstance = Persistence.createEntityManagerFactory("transactions-optional");

    private EMFService() {}
    

    public static EntityManagerFactory get() {
        return emfInstance;
    }
}