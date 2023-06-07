package com.ust.app.service;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

@Service
public class EmailService {

	public void sendEmail(String subject,String message,String to)
	{
		String from="asraniashna27@gmail.com";
		
		String host = "smtp.gmail.com";
		
		Properties properties = System.getProperties();
		System.out.println("properties:"+properties);
		
		properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port", "465");
		properties.put("mail.smtp.ssl.enable", "true");
		properties.put("mail.smtp.auth", "true");
		
		Session session=Session.getInstance(properties,new Authenticator() {

			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				// TODO Auto-generated method stub
				return new PasswordAuthentication(from, "shin@chansneha");
			}
			
			
		});
		
		session.setDebug(true);
		//compose msg
		MimeMessage msg = new MimeMessage(session);
		try {
			msg.setFrom(from);
			msg.setRecipient(null, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
