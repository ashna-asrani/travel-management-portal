package com.ust.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ust.app.entity.User;
import com.ust.app.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	private PasswordEncoder passwordEncoder;
	

	  public UserService(UserRepository userRepository){
	    this.userRepository = userRepository;
	    this.passwordEncoder = new BCryptPasswordEncoder();
	  }

	public List<User> listAll() {
		return userRepository.findAll();
	}

	public void saveUser(User user) {
		String enpassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(enpassword);
		userRepository.save(user);
		
	}
	
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	

}
