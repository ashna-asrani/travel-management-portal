package com.ust.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ust.app.entity.BookingDetails;
import com.ust.app.entity.Flight;
import com.ust.app.entity.User;
import com.ust.app.service.BookingService;
import com.ust.app.service.FlightService;
import com.ust.app.service.UserService;

@CrossOrigin(origins = "*")

@RestController
public class BookingController {

	@Autowired
	BookingService bookingService;

	@Autowired
	FlightService flightService;

	@Autowired
	UserService userService;

	@PostMapping("/addBooking")
	public ResponseEntity<BookingDetails> addBooking(@RequestParam("email") String email, @RequestParam("flightId") String flightId) {
		Long id= Long.valueOf(flightId);
		System.out.println("long id:"+id);
		BookingDetails booking = new BookingDetails();

		User currentUser = userService.findByEmail(email);
		Flight currentFlight = flightService.findById(id);

		booking.setFlight(currentFlight);
		booking.setUser(currentUser);
		return bookingService.addBooking(booking);
		 

	}

}