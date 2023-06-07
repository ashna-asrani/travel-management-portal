package com.ust.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.app.entity.Flight;
import com.ust.app.repository.FlightRepository;

@Service
public class FlightService {
	@Autowired
	FlightRepository flightRepository;
	
	public List<Flight> listAll() {
		return flightRepository.findAll();
	}
	
	public List<Flight> findBySrcAndDest(String src, String dest) {
		return flightRepository.findBySrcAndDest(src, dest);
	}
	
	public void addFlights(Flight flight) {
		 flightRepository.save(flight);
	}
	
	   public Flight findById(Long id)
	    {
	        Optional<Flight> optionalFlight=flightRepository.findById(id);
	        if(optionalFlight.isPresent())
	        {
	            Flight flight= optionalFlight.get();
	            return flight;
	        }
	        else
	        {
	            return null;
	        }
	    }
}
