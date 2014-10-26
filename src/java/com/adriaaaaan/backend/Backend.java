/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adriaaaaan.backend;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

/**
 *
 * @author adrian
 */
@Path("messages")
public class Backend {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Message> getMessages(){
		return database;
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Message getMessageById(@PathParam("id") long id){
		return database.get(database.indexOf(new Message(id)));
	}
	
	private final static DateTimeFormatter formatter = DateTimeFormat.forPattern("dd/MM/yyyy HH:mm");
	private final List<Message> database = new ArrayList<>(Arrays.asList(
						new MessageBuilder()
								.setId(1)
								.setToAddress("adrian@angulardemo.com")
								.setFromAddress("anna@gmail.com")
								.setSubject("Hey wanna meet up?")
								.setBody(Messages.message1)
								.setAvatar("img/person1.jpg")
								.setReceived(formatter.parseDateTime("12/03/2014 20:12").toCalendar(Locale.UK))
						.createMessage(),
						new MessageBuilder()
								.setId(2)
								.setToAddress("adrian@angulardemo.com")
								.setFromAddress("bob@gmail.com")
								.setSubject("Great insurance offer!")
								.setBody(Messages.message2)
								.setAvatar("img/person2.jpg")
								.setReceived(formatter.parseDateTime("22/03/2014 21:12").toCalendar(Locale.UK))
						.createMessage(),
						new MessageBuilder()
								.setId(3)
								.setToAddress("adrian@angulardemo.com")
								.setFromAddress("anna@gmail.com")
								.setSubject("Thank you for your purchase")
								.setBody(Messages.message3)
								.setAvatar("img/person3.jpg")
								.setReceived(formatter.parseDateTime("12/03/2014 10:15").toCalendar(Locale.UK))
						.createMessage(),
						new MessageBuilder()
								.setId(4)
								.setToAddress("adrian@angulardemo.com")
								.setFromAddress("anna@gmail.com")
								.setSubject("Party next saturday!")
								.setBody(Messages.message4)
								.setAvatar("img/person4.JPG")
								.setReceived(formatter.parseDateTime("10/03/2014 22:12").toCalendar(Locale.UK))
						.createMessage(),
						new MessageBuilder()
								.setId(5)
								.setToAddress("adrian@angulardemo.com")
								.setFromAddress("anna@gmail.com")
								.setSubject("Newsletter")
								.setBody(Messages.message5)
								.setAvatar("img/person5.jpg")
								.setReceived(formatter.parseDateTime("18/03/2014 17:12").toCalendar(Locale.UK))
						.createMessage(),
						new MessageBuilder()
								.setId(6)
								.setToAddress("adrian@angulardemo.com")
								.setFromAddress("anna@gmail.com")
								.setSubject("Great to see you")
								.setBody(Messages.message6)
								.setAvatar("img/person6.jpg")
								.setReceived(formatter.parseDateTime("15/03/2014 13:12").toCalendar(Locale.UK))
						.createMessage(),
						new MessageBuilder()
								.setId(7)
								.setToAddress("adrian@angulardemo.com")
								.setFromAddress("anna@gmail.com")
								.setSubject("Watch the new trailer")
								.setBody(Messages.message7)
								.setAvatar("img/person1.jpg")
								.setReceived(formatter.parseDateTime("12/03/2014 12:12").toCalendar(Locale.UK))
						.createMessage(),
						new MessageBuilder()
								.setId(8)
								.setToAddress("adrian@angulardemo.com")
								.setFromAddress("anna@gmail.com")
								.setSubject("Reset you password")
								.setBody(Messages.message8)
								.setAvatar("img/person2.jpg")
								.setReceived(formatter.parseDateTime("12/05/2014 09:12").toCalendar(Locale.UK))
						.createMessage(),
						new MessageBuilder()
								.setId(9)
								.setToAddress("adrian@angulardemo.com")
								.setFromAddress("anna@gmail.com")
								.setSubject("This is not a circular!")
								.setBody(Messages.message9)
								.setAvatar("img/person3.jpg")
								.setReceived(formatter.parseDateTime("12/04/2014 20:32").toCalendar(Locale.UK))
						.createMessage(),
						new MessageBuilder()
								.setId(10)
								.setToAddress("adrian@angulardemo.com")
								.setFromAddress("anna@gmail.com")
								.setSubject("Do you want to be a millionaire???")
								.setBody(Messages.message10)
								.setAvatar("img/person4.jpg")
								.setReceived(formatter.parseDateTime("12/03/2014 20:52").toCalendar(Locale.UK))
						.createMessage()
				));
}
