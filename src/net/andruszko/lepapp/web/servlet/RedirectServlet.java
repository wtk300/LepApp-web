package net.andruszko.lepapp.web.servlet;

import java.io.IOException;
import java.util.Date;

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

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		
		 

		/*
		 * Destination, it can be any relative or context specific path. if the
		 * path starts without '/' it is interpreted as relative to the current
		 * request URI. if the path starts with '/' it is interpreted as
		 * relative to the context.
		 */
		
		
		logger.error("servlet start "+new Date());
		final String destination = "/index.html";
		response.sendRedirect(response.encodeRedirectURL(destination));

	}

	@Override
	public void init() throws ServletException {		
		super.init();
		
		logger.error("init");
	}
	
	
}