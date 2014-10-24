/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adriaaaaan.backend;

import java.util.Calendar;
import java.util.UUID;

/**
 *
 * @author adrian
 */
public class Message {
	
	long id;
	String toAddress;
	String fromAddress;
	String subject;
	String body;
	String avatar;
	Calendar received;

	public Message() {
	}

	public Message(long id) {
		this.id=id;
	}
	
	public Message(long id, String toAddress, String fromAddress, String subject, String body, String avatar, Calendar received) {
		this.id = id;
		this.toAddress = toAddress;
		this.fromAddress = fromAddress;
		this.subject = subject;
		this.body = body;
		this.avatar = avatar;
		this.received = received;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public String getToAddress() {
		return toAddress;
	}

	public void setToAddress(String toAddress) {
		this.toAddress = toAddress;
	}

	public String getFromAddress() {
		return fromAddress;
	}

	public void setFromAddress(String fromAddress) {
		this.fromAddress = fromAddress;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	
	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public Calendar getReceived() {
		return received;
	}

	public void setReceived(Calendar received) {
		this.received = received;
	}

	@Override
	public int hashCode() {
		int hash = 5;
		hash = 97 * hash + (int) (this.id ^ (this.id >>> 32));
		return hash;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		final Message other = (Message) obj;
		if (this.id != other.id) {
			return false;
		}
		return true;
	}
}
