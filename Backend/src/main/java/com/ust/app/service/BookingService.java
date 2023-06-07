package com.ust.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ust.app.entity.BookingDetails;
import com.ust.app.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	BookingRepository bookingRepository;

	public ResponseEntity<BookingDetails> addBooking(BookingDetails booking) {
		BookingDetails bookingDetails = bookingRepository.save(booking);
		return new ResponseEntity<BookingDetails>(bookingDetails, HttpStatus.OK);
	}

}
