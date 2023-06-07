package com.ust.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.app.entity.Passanger;
import com.ust.app.repository.PassengerRepository;

@Service
public class PassengerService {

	@Autowired
	PassengerRepository passengerRepository;
	
	public void addPassengerDetails(Passanger passenger) {
		passengerRepository.save(passenger);
	}
	

}
