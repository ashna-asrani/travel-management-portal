package com.ust.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ust.app.entity.Passanger;
import com.ust.app.service.PassengerService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class PassengerController {
	@Autowired
	PassengerService passengerService;

	@PostMapping("/addPassenger")
	public void addPassengerDetails(@RequestBody Passanger passenger) {
		passengerService.addPassengerDetails(passenger);
	}
}
