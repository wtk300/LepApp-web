package net.andruszko.lepapp.web.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginErrorServlet extends HttpServlet{

	
	private static final long serialVersionUID = -1791864165771634512L;
	
	 protected void processRequest(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
	        response.setContentType("text/html;charset=UTF-8");
	        response.setStatus(401);
	        PrintWriter out = response.getWriter();
	        
	        out.println("error");            
	        
	    }

	    @Override
	    protected void doGet(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	        processRequest(request, response);
	    }
}
