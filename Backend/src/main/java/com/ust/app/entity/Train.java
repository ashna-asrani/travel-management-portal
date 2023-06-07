package com.ust.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="train_details")
public class Train {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="src")
	private String src;
	
	@Column(name="dest")
	private String dest;
	
	@Column(name="rate")
	private Double rate;
	
	@Column(name="duration")
	private String duration;
	
	@Column(name="date")
	private String date;

	public Train() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Train(long id, String name, String src, String dest, Double rate, String duration, String date) {
		super();
		this.id = id;
		this.name = name;
		this.src = src;
		this.dest = dest;
		this.rate = rate;
		this.duration = duration;
		this.date = date;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}

	public String getDest() {
		return dest;
	}

	public void setDest(String dest) {
		this.dest = dest;
	}

	public Double getRate() {
		return rate;
	}

	public void setRate(Double rate) {
		this.rate = rate;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	

	
	
	

}
