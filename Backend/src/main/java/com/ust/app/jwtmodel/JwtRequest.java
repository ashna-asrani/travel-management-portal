package com.ust.app.jwtmodel;

public class JwtRequest {

    private String username;
    private String password;
    private String role;
    
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public JwtRequest(String username, String password, String role) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
	}
	public JwtRequest() {
		super();
		// TODO Auto-generated constructor stub
	}


}
