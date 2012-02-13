package net.andruszko.lepapp.web.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

public class RedirectServlet extends HttpServlet {

	
private static Logger logger = Logger.getLogger( RedirectServlet.class);
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {	
		final String destination = "/index.html";
		response.sendRedirect(response.encodeRedirectURL(destination));

	}

	@Override
	public void init() throws ServletException {		
		super.init();
		
		logger.error("init");
	}
	
	
}