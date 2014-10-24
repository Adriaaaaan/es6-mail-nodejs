/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adriaaaaan.backend;

import java.util.Arrays;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author adrian
 */
@Path("messages")
public class backend {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getMessages(){
		return Response.ok(Arrays.asList(new Message())).build();
	}
}
