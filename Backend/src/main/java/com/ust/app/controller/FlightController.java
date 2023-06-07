package com.ust.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ust.app.entity.Flight;
import com.ust.app.service.FlightService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class FlightController {
	
	@Autowired
	FlightService flightService;
	@GetMapping("/getFlightDetails")
	public List<Flight> getAllFlight(){
		return flightService.listAll();
	}
	
	@GetMapping("/getFlightBySrcAndDest/{src}/{dest}")
		public List<Flight> getFlightBySrcAndDest(@PathVariable String src, @PathVariable String dest){
		return flightService.findBySrcAndDest(src, dest);
		}
	
	@PostMapping("/addFlights")
	public void addFlights(@RequestBody Flight flight) {
		System.out.println("hi controller");
		flightService.addFlights(flight);
		
	}
}
	


