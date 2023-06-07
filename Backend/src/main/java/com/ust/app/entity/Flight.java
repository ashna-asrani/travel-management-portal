package com.ust.app.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "flight_details")
public class Flight {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "src")
	private String src;

	@Column(name = "dest")
	private String dest;

	@Column(name = "rate")
	private Double rate;

	@Column(name = "duration")
	private String duration;

	@Column(name = "date")
	private String date;
	
	@JsonIgnore
	@OneToMany(mappedBy = "flight",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<BookingDetails> bookings;
	
	public Flight() {
	}

	public Flight(long id, String name, String src, String dest, Double rate, String duration, String date) {
		
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

	
	

	public List<BookingDetails> getBookings() {
		return bookings;
	}

	public void setBookings(List<BookingDetails> bookings) {
		this.bookings = bookings;
	}

//	@Override
//	public String toString() {
//		return "Flight [id=" + id + ", name=" + name + ", src=" + src + ", dest=" + dest + ", rate=" + rate
//				+ ", duration=" + duration + ", date=" + date + "]";
//	}

	
}
