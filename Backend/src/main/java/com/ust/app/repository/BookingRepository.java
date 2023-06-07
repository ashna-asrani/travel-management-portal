package com.ust.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ust.app.entity.BookingDetails;

public interface BookingRepository extends JpaRepository<BookingDetails,Long>{
}
