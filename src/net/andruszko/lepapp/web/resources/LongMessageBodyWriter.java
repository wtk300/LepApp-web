package net.andruszko.lepapp.web.resources;

import java.io.IOException;
import java.io.OutputStream;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.MessageBodyWriter;
import javax.ws.rs.ext.Provider;
import javax.ws.rs.ext.Providers;
import javax.xml.bind.JAXBContext;

import org.codehaus.jettison.json.JSONObject;

@Provider
@Produces(MediaType.APPLICATION_JSON)
public class LongMessageBodyWriter implements MessageBodyWriter<Long> {

	public long getSize(Long target, Class<?> type, Type genericType, Annotation[] annotation,MediaType mediaType) {
		
		return -1L;
	}

	public boolean isWriteable(Class<?> type, Type genericType, Annotation[] annotations,MediaType mediaType) {
		return (type.equals(Long.class) && mediaType.equals(MediaType.APPLICATION_JSON_TYPE));
	
	}
	
	public void writeTo(Long target,Class<?> type, Type genericType, Annotation[] annotations, MediaType mediaType, 
			MultivaluedMap<String, Object> httpHeaders,
			OutputStream outputStream) throws IOException, WebApplicationException {
				  	
		  	Map<String,Object> jsonMap = new HashMap<String,Object>();	
			jsonMap.put("id",target);
			JSONObject jsonObj = new JSONObject(jsonMap);
			outputStream.write(jsonObj.toString().getBytes());
			
	}

}
