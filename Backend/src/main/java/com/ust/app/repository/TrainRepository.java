package com.ust.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.ust.app.entity.Train;

@Repository
public interface TrainRepository extends JpaRepository<Train, Long>, PagingAndSortingRepository<Train, Long>{
	public List<Train> findBySrcAndDest(String src , String dest);
}
