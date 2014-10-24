/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adriaaaaan.backend;

import java.util.Calendar;


public class MessageBuilder {
	
	private long id;
	private String toAddress;
	private String fromAddress;
	private String subject;
	private String body;
	private String avatar;
	private Calendar received;

	public MessageBuilder() {
	}

	public MessageBuilder setId(long id) {
		this.id = id;
		return this;
	}

	public MessageBuilder setToAddress(String toAddress) {
		this.toAddress = toAddress;
		return this;
	}

	public MessageBuilder setFromAddress(String fromAddress) {
		this.fromAddress = fromAddress;
		return this;
	}

	public MessageBuilder setSubject(String subject) {
		this.subject = subject;
		return this;
	}

	public MessageBuilder setBody(String body) {
		this.body = body;
		return this;
	}

	public MessageBuilder setAvatar(String avatar) {
		this.avatar = avatar;
		return this;
	}

	public MessageBuilder setReceived(Calendar received) {
		this.received = received;
		return this;
	}

	public Message createMessage() {
		return new Message(id, toAddress, fromAddress, subject, body, avatar, received);
	}
	
}
