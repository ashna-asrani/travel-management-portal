package com.ust.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.ust.app.entity.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Long>, PagingAndSortingRepository<Flight, Long>{
	
	public List<Flight> findBySrcAndDest(String src , String dest);
	
}
