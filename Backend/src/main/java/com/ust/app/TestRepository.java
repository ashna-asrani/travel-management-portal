package com.ust.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ust.app.entity.Flight;
import com.ust.app.entity.Train;
import com.ust.app.entity.User;
import com.ust.app.repository.FlightRepository;
import com.ust.app.repository.TrainRepository;
import com.ust.app.repository.UserRepository;

@Component
public class TestRepository implements CommandLineRunner {

	@Autowired
	UserRepository userRepository;
	@Autowired
	FlightRepository flightRepository;
	@Autowired
	TrainRepository trainRepository;
	
	

	@Override
	public void run(String... args) throws Exception {
//		User u = new User();
//		u.setName("testuser");
//		u.setEmail("testuser@testuser.com");
//		u.setPassword("$2a$10$n4zEAczVtZFlA2zWi3oln.U0pH..6JEOMb.AjLf6OXy7ynwoE2dKi"); //testuser
//		u.setContact("1234567890");
//		Flight f = new Flight();
//		f.setName("testflight");
//		f.setSrc("testsrc");
//		f.setDest("testdest");
//		f.setDuration("1");
//		f.setDate("2022-2-2");
//		f.setRate((double) 1000);
//		Flight f1 = new Flight();
//		f1.setName("t");
//		f1.setSrc("testsrc");
//		f1.setDest("testdest");
//		f1.setDuration("2");
//		f1.setDate("2022-3-3");
//		f1.setRate((double) 2000);
//		Train t = new Train();
//		t.setName("testtrain");
//		t.setSrc("testsrc");
//		t.setDest("testdest");
//		t.setDuration("1");
//		t.setDate("2022-2-2");
//		t.setRate((double) 4521);
//		userRepository.save(u);
//		flightRepository.save(f);
//		flightRepository.save(f1);
//		trainRepository.save(t);
//		

		
	}

}
