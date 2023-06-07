package com.ust.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ust.app.entity.User;
import com.ust.app.service.CustomUserDetails;
import com.ust.app.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;	
	
	
	@GetMapping("/getUserDetails")
	public List<User> getAllUsers(){
		return userService.listAll();
	}
	
	@PostMapping("/register")
	public void register(@RequestBody User user) {
		userService.saveUser(user);

	}
	

	@GetMapping("/profile")
	public CustomUserDetails profile(Authentication authentication){
		
		CustomUserDetails obj = (CustomUserDetails) authentication.getPrincipal();
		System.out.println(obj.getUser());
		 
		 return (CustomUserDetails) obj;
	}
	
	@GetMapping("/login")
	public String login()
	{
		return "http://localhost:3000/login";
	}
	
	
}
