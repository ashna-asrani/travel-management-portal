package com.ust.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ust.app.entity.Passanger;

@Repository
public interface PassengerRepository extends JpaRepository<Passanger, Long> {
	
}
