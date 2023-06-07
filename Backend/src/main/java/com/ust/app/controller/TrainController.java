package com.ust.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ust.app.entity.Train;
import com.ust.app.service.TrainService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class TrainController {
	@Autowired
	TrainService trainService;
	
	@GetMapping("/getTrainDetails")
	public List<Train> getAllTrain(){
		return trainService.listAll();
	}
	
	
	@GetMapping("/getTrainBySrcAndDest/{src}/{dest}")
		public List<Train> getTrainBySrcAndDest(@PathVariable String src, @PathVariable String dest){
			return trainService.findBySrcAndDest(src, dest);
		}
	
	@PostMapping("/addTrains")
	public void register(@RequestBody Train train) {
		trainService.addTrains(train);
		
	}

}
