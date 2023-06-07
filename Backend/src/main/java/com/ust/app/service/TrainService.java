package com.ust.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.app.entity.Flight;
import com.ust.app.entity.Train;
import com.ust.app.repository.TrainRepository;

@Service
public class TrainService {
	
	@Autowired
	private TrainRepository trainRepository;
	

	public List<Train> listAll() {
		return trainRepository.findAll();
	}
	
	
	public void addTrains(Train train) {
		 trainRepository.save(train);
	}



	public List<Train> findBySrcAndDest(String src, String dest) {
		return trainRepository.findBySrcAndDest(src, dest);
	}
	
	
	

}
